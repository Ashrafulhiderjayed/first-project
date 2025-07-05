import config from "../../config";
import { TStudent } from "../student/student.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
 // create a user object
  let user = {}

  user.password = password || config.default_password; // if password is not provided, use default password

 


  const result = await User.create(studentData); //built in static method of mongoose

  // const student = new Student(studentData); //creating instance of model

  // if(await student.isUserExist(studentData.id)){
  //   throw new Error('User already exists!')
  // }

  // const result = await student.save(); //built in instance method of mongoose
  return result;
};

export const UserServices = {
  createStudentIntoDB,
};