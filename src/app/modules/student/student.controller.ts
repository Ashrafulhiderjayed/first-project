import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';
import { z } from 'zod';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {

    //creating a schema validation using Zod
    
    
    
    
    
    
    // const student = req.body.student; // get the data from request body
    const { student: studentData } = req.body; // name Alias
    
    
    const zodparsedData = studentValidationSchema.parse(studentData);
    
    
    //will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(zodparsedData);

    // send response
    res.status(200).json({
      status: 'true',
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'false',
      message: error.message || 'Failed to create student',
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
  } catch (error: any) {
    res.status(500).json({
      status: 'false',
      message: error.message || 'Failed to fetch students',
      error: error,
    });
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

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      status: 'true',
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'false',
      message: error.message || 'Failed to delete student',
      error: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
