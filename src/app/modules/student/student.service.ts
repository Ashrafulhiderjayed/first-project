import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (studentData: TStudent) => {

  if(await Student.isUserExist(studentData.id)){
    throw new Error('User already exists!')
  }
  
  const result = await Student.create(studentData); //built in static method of mongoose


  // const student = new Student(studentData); //creating instance of model

  // if(await student.isUserExist(studentData.id)){
  //   throw new Error('User already exists!')
  // }

  // const result = await student.save(); //built in instance method of mongoose
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id}, { isDeleted: true });
  return result;
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
