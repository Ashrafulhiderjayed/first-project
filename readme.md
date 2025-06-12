# 📚 Online Learning Management System

This project is a full-featured **Online Learning Management System (LMS)** designed for students, faculty, and admins to manage their academic lifecycle and institutional processes effectively.

---

## ✅ Functional Requirements

### 🔐 Authentication

- **Students**
  - Secure login/logout
  - Password update

- **Faculty**
  - Secure login/logout
  - Password update

- **Admin**
  - Secure login/logout
  - Password update

---

### 👤 Profile Management

- **Students**
  - Manage/update personal profile
  - Update specific fields

- **Faculty**
  - Manage/update personal profile
  - Update specific fields

- **Admin**
  - Manage/update personal profile
  - Update specific fields

---

### 🎓 Academic Process

- **Students**
  - Enroll in courses for a semester
  - View class schedules
  - View grades
  - Access notice boards and events

- **Faculty**
  - Manage student grades
  - Access student academic/personal data

- **Admin**
  - Manage semester, courses, offered courses
  - Manage sections, rooms, and buildings

---

### 🧑‍💼 User Management

- **Admin**
  - Manage multiple user accounts
  - Block/unblock users
  - Change user passwords

---

## 🧩 Data Model

### 🔑 User

```json
{
  "_id": "",
  "id": "",
  "password": "",
  "needsPasswordChange": true,
  "role": "",
  "status": "",
  "isDeleted": false,
  "createdAt": "",
  "updatedAt": ""
}

```
### 🎓 Student
```json
{
  "_id": "",
  "id": "",
  "name": "",
  "gender": "",
  "dateOfBirth": "",
  "email": "",
  "contactNo": "",
  "emergencyContactNo": "",
  "presentAddress": "",
  "permanentAddress": "",
  "guardian": "",
  "localGuardian": "",
  "profileImage": "",
  "admissionSemester": "",
  "isDeleted": false,
  "createdAt": "",
  "updatedAt": ""
}

```
### 👨‍🏫 Faculty
```json
{
  "_id": "",
  "id": "",
  "designation": "",
  "name": "",
  "gender": "",
  "dateOfBirth": "",
  "email": "",
  "contactNo": "",
  "emergencyContactNo": "",
  "presentAddress": "",
  "permanentAddress": "",
  "profileImage": "",
  "academicFaculty": "",
  "academicDepartment": "",
  "isDeleted": false,
  "createdAt": "",
  "updatedAt": ""
}


```
### 🧑‍💼 Admin
```json
{
  "_id": "",
  "id": "",
  "designation": "",
  "name": "",
  "gender": "",
  "dateOfBirth": "",
  "email": "",
  "contactNo": "",
  "emergencyContactNo": "",
  "presentAddress": "",
  "permanentAddress": "",
  "profileImage": "",
  "managementDepartment": "",
  "isDeleted": false,
  "createdAt": "",
  "updatedAt": ""
}

```
### 📅 Academic Semester
```json
{
  "_id": "",
  "name": "",
  "year": "",
  "code": "",
  "startMonth": "",
  "endMonth": "",
  "createdAt": "",
  "updatedAt": ""
}


```
### 🏫 Academic Faculty
```json
{
  "_id": "",
  "name": "",
  "createdAt": "",
  "updatedAt": ""
}


```
### 🏢 Academic Department
```json
{
  "_id": "",
  "name": "",
  "academicFaculty": "",
  "createdAt": "",
  "updatedAt": ""
}

```


<!-- **🚀 Technologies Used** -->
## 🚀 Technologies Used
  - Node.js / Express.js
  - MongoDB / Mongoose
  - JWT Authentication
  - RESTful API Design
  