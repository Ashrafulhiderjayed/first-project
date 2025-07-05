import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {

    //creating a schema validation using Zod
    
    
    
    
    
    
    // const student = req.body.student; // get the data from request body
    const { password, student: studentData } = req.body; // name Alias
    
    
    // const zodparsedData = studentValidationSchema.parse(studentData);
    
    
    //will call service function to send this data
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData
    );

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