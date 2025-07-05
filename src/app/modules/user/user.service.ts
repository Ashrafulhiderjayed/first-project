import config from "../../config";
import { TStudent } from "../student/student.interface";
import { NewUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
 // create a user object
  const user: NewUser = {}

  user.password = password || config.default_password; // if password is not provided, use default password

  user.role = 'student'; // set role to student

  // set manually generated id
  user.id = '2030100001';

  // create a user 
  const result = await User.create(user);

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