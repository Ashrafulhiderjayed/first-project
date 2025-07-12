import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents); // Assuming you have a method to get all students   

export const StudentRoutes = router; // router itself is an object 

 