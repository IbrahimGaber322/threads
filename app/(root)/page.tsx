import ThreadCard from "@/components/cards/ThreadCard";
import { fetchThreads } from "@/lib/actions/thread.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  if(!user) redirect('/sign-in');

  const result = await fetchThreads(1, 30);

  const threads = result?.threads;

  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {threads.length === 0 ? (
          <p className="no-result">No threads found.</p>
        ) : (
          threads?.map((thread: any) => (
            <ThreadCard
              key={thread._id}  
              id={thread._id}
              currentUserId={user?.id || ""}
              parentId={thread.parentId}
              content={thread.text}
              author={thread.author}
              community={thread.community}
              createdAt={thread.createdAt}
              comments={thread.children}
              isComment={thread.isComment}
            />
          ))
        )}
      </section>
    </>
  );
}
