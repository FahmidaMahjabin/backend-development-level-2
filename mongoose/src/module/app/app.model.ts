import { Model, Schema, model } from "mongoose";
import { IUserMethods, Iuser, UserModel } from "./app.interface";
// type userModel = Model<Iuser,{}, IUserMethods>
//  create schema
const userSchema = new Schema<Iuser, UserModel, IUserMethods>(
    {
      name:{
        firstName:{
          type: String,
          required: true,
        },
        middleName:{
          type: String
        },
        lastName:{
          type: String,
          required:true 
        }
      },
      id:{
        type:Number,
        required: true
      },
      age:{
        type: Number,
        required:true
      },
      isMarried:{
        type: Boolean,
        required: true
      },
      email:{
        type: String
      },
      gender:{
        type: String,
        enum: ['male', 'female']
      }
    });
// instance methods
  userSchema.method(
    "getFullName", function getFullName(){
      return this.name.firstName + this.name.lastName
    }
  )
  userSchema.method("getEmail", function getEmail(){
    return `email is: ${this.email}`
  })
// static methods
userSchema.static("getMarriedUsers",async function getMarriedUsers(){
  const marriedUsers = await this.find({isMarried: true});
  return marriedUsers;

})
  const User = model<Iuser, UserModel>("User", userSchema);
  export default User;