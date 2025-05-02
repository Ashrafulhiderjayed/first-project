import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;   
    motherContactNo: string;
};

export type Student = {
    id: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    },
    gender: "male" | "female"; //union type 
    dateOfBirth: string; // YYYY-MM-DD format
    email: string;
    contactNumber: string;
    emergencyContact: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-"; // union type
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
}