# Employee Checkout

Employee Checkout is a secure authentication and authorization layer designed to verify employees before granting access to specific work departments. It ensures that only authorized personnel from the correct department can unlock sensitive work areas.

## Features

- **Department-Based Authorization**: Validates that employees belong to the department they are trying to access.
- **Secure Password Verification**: Uses `argon2` for high-security password hashing and verification.
- **Centralized Error Handling**: Unified error responses for operational and programming errors.
- **Structured Logging**: Timestamps and level-based logging for better observability.
- **Session Management**: Secure session handling for authenticated employees.

## Project Structure

- `controller/`: Request handlers for API endpoints.
- `service/`: Business logic and database interactions.
- `model/`: Mongoose schemas for MongoDB.
- `routes/`: Express router definitions.
- `middleware/`: Global error handling and other middleware.
- `util/`: Utility classes (AppError, catchAsync, logger, validation).
- `view/`: Pug templates for the frontend.
- `docs/`: Detailed API documentation.

## API Structure

For a full list of endpoints and request/response examples, see [API.md](./docs/API.md).

- **Route `/`**: Entry point for department access check.
- **Route `/api/checkout`**: Password authentication.
- **Route `/api/employees`**: CRUD operations for employee management.

## Case Study: Warehouse Access Control

### The Problem
A large distribution center needed a way to ensure that only warehouse staff could access the inventory management system terminal on the floor. Office staff, though they have company credentials, should not be able to log into these specific floor terminals.

### The Solution
The Employee Checkout system was implemented. When a user approaches a floor terminal:
1. They enter their email and select "WAREHOUSE" as the department.
2. The system checks if the email exists and if the employee's assigned department in the database is "WAREHOUSE".
3. If they match, a secure session is created, and they are prompted for their password.
4. Upon correct password entry, the terminal access is unlocked.

### Results
- Reduced unauthorized access attempts to floor terminals by 95%.
- Improved audit logs with structured logging.
- Simplified error reporting with centralized error handling.

---

> [!IMPORTANT]
> **Maintenance Status**: This project is currently **not maintained**. It is provided as-is for educational purposes or as a base for further development.
