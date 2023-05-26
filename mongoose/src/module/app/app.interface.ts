import { HydratedDocument, Model } from "mongoose";

export interface Iuser{
    name:{
      firstName: string,
      middleName?:string,
      lastName: string
    };
    id:number;
    age:number;
    isMarried:boolean;
    email?:string;
    gender: "male"|"female"
   }
// interface defined for instance method
export interface IUserMethods{
  getEmail():string,
  getFullName():string
}
// interface model defined for static method
// export interface IUserModel extends Model<Iuser>{
//   getMarriedUsers():Iuser[]

// }
// when use both methods and static
export interface UserModel extends Model<Iuser, {}, IUserMethods> {
  getMarriedUsers(): Promise<HydratedDocument<Iuser, IUserMethods>>;
}