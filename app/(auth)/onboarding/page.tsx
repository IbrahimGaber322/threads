import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";

import { currentUser } from "@clerk/nextjs";
import { StringExpressionOperatorReturningArray } from "mongoose";
import { redirect } from "next/navigation";

async function page() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const userInfo = await fetchUser(user?.id);
  if (userInfo?.onboarded) redirect("/");
  interface userDataTypes {
    id: string;
    username: string;
    name: string;
    bio: string;
    image: string;
    objectId: string;
  }
  const userData: userDataTypes = {
    id: user?.id || "",
    username: userInfo?.username || user?.username || "",
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl || "",
    objectId: userInfo?._id || "",
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">OnBoarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use Threads.
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default page;
