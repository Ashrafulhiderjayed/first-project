import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  userData.password = password || config.default_password as string; // if password is not provided, use default password

  userData.role = 'student'; // set role to student

  // set manually generated id
  userData.id = '2030100001';

  // create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; // reference _id of User model

    const newStudent = await Student.create(studentData); // create student in DB
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
