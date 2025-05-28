import { z } from 'zod';

// UserName schema
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, 'First name must be less than 20 characters')
    .refine(
      (val) => val.charAt(0).toUpperCase() + val.slice(1) === val,
      'First letter of first name must be capitalized'
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .refine((val) => /^[A-Za-z]+$/.test(val), {
      message: 'Last name must contain only alphabetic characters',
    }),
});

// Guardian schema
const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

// Local guardian schema
const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Final student schema
export const studentValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20, 'Password must be less than 20 characters'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(), // Consider adding format validation if needed
  email: z.string().email('Invalid email address'),
  contactNumber: z.string(),
  emergencyContact: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']).optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema.optional(),
  profileImg: z.string().url().optional(),
  isActive: z.enum(['active', 'blocked']),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;