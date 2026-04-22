# Employee Checkout API Documentation

This document describes the API endpoints available in the Employee Checkout project.

## Authentication & Authorization

The project uses a session-based authentication system. Some endpoints require the user to be verified in their session.

---

## Endpoints

### 1. Department Access Check

Checks if an employee email is valid and belongs to the specified department.

- **URL**: `POST /`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "employee@example.com",
    "dept": "WAREHOUSE"
  }
  ```
- **Response**:
  - `302 Found`: Redirects to `/api/checkout` on success.
  - `401 Unauthorized`: Invalid email.
  - `403 Forbidden`: Department mismatch.

---

### 2. Password Authentication

Authenticates the employee with their password to unlock access.

- **URL**: `POST /api/checkout`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "password": "yourpassword"
  }
  ```
- **Response**:
  - `200 OK`: Returns a welcome message.
  - `401 Unauthorized`: Invalid password or missing session.

---

### 3. Employee Management

#### Register a New Employee
- **URL**: `POST /api/employees/register`
- **Method**: `POST`
- **Request Body**: `IEmployee` (JSON)
- **Response**: `201 Created`

#### Get All Employees
- **URL**: `GET /api/getAllEmployees`
- **Method**: `GET`
- **Response**: `200 OK` (JSON array)

#### Update Employee
- **URL**: `PUT /api/employee/update`
- **Method**: `PUT`
- **Request Body**: `{id: string, ...updates}`
- **Response**: `200 OK`

#### Delete Employee
- **URL**: `DELETE /api/employee/delete`
- **Method**: `DELETE`
- **Request Body**: `{id: string}`
- **Response**: `204 No Content`
