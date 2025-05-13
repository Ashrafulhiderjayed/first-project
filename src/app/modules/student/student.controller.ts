import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {

    //creating a schema validation using Joi
    
    






    // const student = req.body.student; // get the data from request body
    const { student: studentData } = req.body; // name Alias

    //will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      status: 'true',
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: 'false',
      message: 'Failed to create student',
      error: error,
    });
    // console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      status: 'true',
      message: 'All students fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try{
    const {studentId} = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      status: 'true',
      message: 'Single student fetched successfully',
      data: result,
    });
  }
  catch (error) {
    res.status(500).json({
      status: 'false',
      message: 'Failed to fetch student', 
      error: error,
    });
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
