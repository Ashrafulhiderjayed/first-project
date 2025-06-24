import { Request, Response } from 'express';
import { StudentServices } from './student.service';



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
  getSingleStudent,
  deleteStudent,
};
