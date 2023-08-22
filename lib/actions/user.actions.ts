"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";


interface Params {
    userId:String;
    username:String;
    name:String;
    bio: String;
    image: String;
    path: string
}

export async function updateUser({
  userId,
  username,
  name,
  bio,
  image,
  path
}:Params): Promise<void> {
  try {
    connectToDB();
    await User.findOneAndUpdate(
      { id: userId },
      { username: username.toLowerCase(), name, bio, image, onboarded: true },
      { upsert: true }
    );
    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error:any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}


export async function fetchUser(userId:String){

  try {
    connectToDB();

    return await User.findOne({id:userId})/* .populate({path:'communities', model:Community}); */
  } catch (error:any) {
    throw new Error(`Failed to fetch user: ${error}`);
  }
}