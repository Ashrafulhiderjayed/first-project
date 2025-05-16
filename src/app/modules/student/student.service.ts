import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (studentData: Student) => {
  // const result = await StudentModel.create(studentData); //built in static method of mongoose

  const student = new StudentModel(studentData); //creating instance of model
  const result = await student.save(); //built in instance method of mongoose
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
}

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
}


export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB,
}