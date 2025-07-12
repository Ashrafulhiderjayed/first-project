import config from "../../config";
import { TStudent } from "../student/student.interface";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
 // create a user object
  const userData: Partial<TUser> = {}

  userData.password = password || config.default_password; // if password is not provided, use default password

  userData.role = 'student'; // set role to student

  // set manually generated id
  userData.id = '2030100001';

  // create a user 
  const newUser = await User.create(userData);

  // create a student 
  if( Object.keys(newUser).length === 0 ){
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; // set user id as _id of user
  }

  // const student = new Student(studentData); //creating instance of model

  // if(await student.isUserExist(studentData.id)){
  //   throw new Error('User already exists!')
  // }

  // const result = await student.save(); //built in instance method of mongoose
  return newUser;
};

export const UserServices = {
  createStudentIntoDB,
};