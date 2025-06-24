import { User } from "./user.model";

const createStudentIntoDB = async (studentData: TStudent) => {
//   if (await Student.isUserExist(studentData.id)) {
//     throw new Error('User already exists!');
//   }

  const result = await User.create(studentData); //built in static method of mongoose

  // const student = new Student(studentData); //creating instance of model

  // if(await student.isUserExist(studentData.id)){
  //   throw new Error('User already exists!')
  // }

  // const result = await student.save(); //built in instance method of mongoose
  return result;
};

export const UserService = {
  createStudentIntoDB,
};