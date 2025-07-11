import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  // StudentMethods,
  TUserName,
} from './student.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { boolean } from 'joi';

// Schema for user's name
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'First name must be less than 20 characters'],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message:
        '{VALUE} is not a valid first name. First letter must be capitalized.',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message:
        '{VALUE} is not a valid last name. Only alphanumeric characters are allowed.',
    },
  },
});

// Schema for guardian information
const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
  },
  fatherOccupation: String,
  fatherContactNo: String,
  motherName: String,
  motherOccupation: String,
  motherContactNo: String,
});

// Schema for local guardian information
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
});

// Schema for the student
const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User ID is required'], // reference to User model
      unique: true,
      ref: 'User', // reference to User model
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    name: {
      type: userNameSchema,
      required: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'], //mongoose enum
        message:
          '{VALUE} is not a valid gender. Choose either male, female, or other.',
      },
    },
    dateOfBirth: String,
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not a valid email address.',
      },
    },
    contactNumber: {
      type: String,
      required: [true, 'Contact number is required'],
    },
    emergencyContact: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group.',
      },
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian information is required'],
    },
    profileImg: String,
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { toJSON: { virtuals: true } },
);

// virtual field for full name
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName || ''} ${this.name.lastName}`.trim();
  // return (
  //   this.name.firstName + ' ' + this.name.middleName + ' ' + this.name.lastName
  // );
});

// pre save middleware/hook : will work on create() and save()
studentSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook: Student will be saved');
  const user = this; //doc

  // hashing password before saving
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// post save middleware/hook
studentSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// Query middleware
studentSchema.pre('find', function (next) {
  // console.log(this, 'Before finding the documents using Query middleware');
  this.find({ isDeleted: { $ne: true } }); // Exclude deleted documents
  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } }); // Exclude deleted documents
  next();
});

studentSchema.pre('aggregate', function (next) {
  // console.log(this.pipeline(), 'Before aggregation using Query middleware');
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } }); // Exclude deleted documents
  next();
});

studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } }); // Exclude deleted documents
  next();
});

//creating a custom static method
studentSchema.statics.isUserExist = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// creating a custom instance method
// studentSchema.methods.isUserExist = async function (id: string) {
//   const existingUser = await Student.findOne({id: id});

//   return existingUser;
// };

// Create the Student model
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
