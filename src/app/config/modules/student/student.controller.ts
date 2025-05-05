import { Request, Response } from "express";
import { StudentServices } from "./student.service";


const createStudent = async (req: Request, res: Response) =>{

    try{
        const student = req.body; // get the data from request body

    //will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(student);


    // send response
    res.status(200).json({
        status: 'true',
        message: 'Student created successfully',
        data: result,
    });
    } catch (error) {
        // res.status(500).json({
        //     status: 'false',
        //     message: 'Failed to create student',
        //     error: error.message,
        // });
        console.log(error);
    }
}


export const StudentControllers = {
    createStudent,
    // add other controller functions here
}