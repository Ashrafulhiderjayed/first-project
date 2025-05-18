import { Schema, model, connect, Model } from 'mongoose';

//these are the sub-types of studentSchema
export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female' | 'other'; //union type
  dateOfBirth?: string; // YYYY-MM-DD format
  email: string;
  contactNumber: string;
  emergencyContact: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-'; // union type
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian?: LocalGuardian;
  profileImg?: string; // URL to the image
  isActive: 'active' | 'blocked'; // union type
};


export type StudentMethods = {
    isUserExist(id: string): Promise<Student>
}

type StudentModel = Model<Student, Record<string, never>, StudentMethods>;