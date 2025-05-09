import { Schema, model, connect } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String, //type from mongoose
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
  },
  fatherContactNo: {
    type: String,
  },
  motherName: {
    type: String,
  },
  motherOccupation: {
    type: String,
  },
  motherContactNo: {
    type: String,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    // required: true,
  },
  occupation: {
    type: String,
    // required: true,
  },
  contactNo: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'], // mongoose enum
  }, // mongoose enum
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    // unique: true, // unique email
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emergencyContact: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // mongoose enum
  },
  presentAddress: {
    type: String,
    required: true,
  },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'], // mongoose enum
    default: 'active',
  }
});

// creating a model from the schema (Student=model name, studentSchema=schema)
export const StudentModel = model<Student>('Student', studentSchema);
