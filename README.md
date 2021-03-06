# Quizzy
### A Quiz App REST API created using Node.js, Express.js and MongoDB.

## Manual Installation

Clone the repo:

```bash
git clone 
cd 
```

Install the dependencies:
```bash
npm install
```

Set the environment variables:
```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)

## Features
- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Error handling**: centralized error handling mechanism
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)

## Commands

Running locally:

```bash
node src/server.js or nodemon src/server.js
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/quizzy-local

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30

# SMTP configuration options for the email service
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
SMTP_HOST=email-server
SMTP_PORT=587
SMTP_USERNAME=email-server-username
SMTP_PASSWORD=email-server-password
EMAIL_FROM=support@yourapp.com
```

## Project Structure

```
src\
 |--api
  |--controllers\    # Route controllers (controller layer)
  |--middlewares\    # Custom express middlewares
  |--models\         # Mongoose models (data layer)
  |--routes\         # Routes
  |--services\       # Business logic (service layer)
  |--utils\          # Utility classes and functions
  |--validations\    # Request data validation schemas
 |--config\         # Environment variables and configuration related things
 |--app.js          # Express app
 |--server.js        # App entry point
```

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user

**Subject routes**:\
`POST /v1/subjects` - create a subject\
`GET /v1/subjects` - get all subjects\
`GET /v1/subjects/:subjectId` - get subject\
`PATCH /v1/subjects/:subjectId` - update subject\
`DELETE /v1/subjects/:subjectId` - delete subject

**Classroom routes**:\
`POST /v1/classrooms` - create a classroom\
`GET /v1/classrooms` - get all classrooms\
`GET /v1/classrooms/:classroomId` - get classroom\
`PATCH /v1/classrooms/:classroomId` - update classroom\
`DELETE /v1/classrooms/:classroomId` - delete classroom

**Quiz routes**:\
`POST /v1/quizzes` - create a quiz\
`GET /v1/quizzes` - get all quizzes\
`GET /v1/quizzes/:quizId` - get quiz\
`PATCH /v1/quizzes/:quizId` - update quiz\
`DELETE /v1/quizzes/:quizId` - delete quiz

**Assignment routes**:\
`POST /v1/assignments` - create a assignment\
`GET /v1/assignments` - get all assignments\
`GET /v1/assignments/:assignmentId` - get assignment\
`PATCH /v1/assignments/:assignmentId` - update assignment\
`DELETE /v1/assignments/:assignmentId` - delete assignment

**Motivational Quote routes**:\
`POST /v1/quotes` - create a quote\
`GET /v1/quotes` - get all quotes\
`GET /v1/quotes/:quoteId` - get quote\
`PATCH /v1/quotes/:quoteId` - update quote\
`DELETE /v1/quotes/:quoteId` - delete quote

**State routes**:\
`POST /v1/states` - create a state\
`GET /v1/states` - get all states\
`GET /v1/states/:stateId` - get state\
`PATCH /v1/states/:stateId` - update state\
`DELETE /v1/states/:stateId` - delete state