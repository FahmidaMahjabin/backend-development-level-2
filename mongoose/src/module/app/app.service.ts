import { query } from "express";
import User from "./app.model";
import { Iuser } from "./app.interface";

export const createUserToDB = async(user:Iuser):Promise<Iuser> =>{
      const user1 = new User(user);
      console.log("user1 from service:", user1)
      console.log("full name:", user1.getEmail())
      await user1.save();
      return user1

};
export const getUsersFromDB = async() =>{
  const users = await User.find();
  return users

}
export async function getOneUserContactFromDB(id:string):Promise<Iuser| null>{
  const user = await User.findOne({id:id}, {name:1, email:1});
  console.log("user:", user);
  return user

}
// get married users using static method 
export const marriedUsersFromDB =  async() =>{
  const users = await User.getMarriedUsers();
  return users
}
