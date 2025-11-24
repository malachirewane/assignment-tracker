# Assignment Tracker — INFR3120 Assignment 3

A simple full-stack web application built using Node.js, Express.js, MongoDB/Mongoose, and EJS.  
This app allows students to track their school assignments by creating, viewing, editing, and deleting assignment entries through a clean, Bootstrap-styled interface.

This project was created for INFR3120 – Web & Scripting Programming (Assignment 3).

## Features

### CRUD Functionality
- Create new assignments  
- Read a list of all assignments  
- Update existing assignments  
- Delete assignments with confirmation  

### UI
- Bootstrap 5 styling  
- Shared header and footer using EJS partials  
- Custom CSS  

### Database Integration
- MongoDB Atlas  
- Mongoose schema  
- Connection string stored in `.env`  

### Structure
- `models/` for schemas  
- `routes/` for route logic  
- `views/` for EJS templates  
- `public/` for CSS  

## Tech Stack

- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- EJS  
- Bootstrap 5  
- CSS  

## External Code Used

This project includes small portions of external code within allowed limits (under 10%) as per assignment guidelines:

1. **Express.js Routing Structure**  
   Basic routing patterns inspired by Express documentation:  
   https://expressjs.com/en/guide/routing.html

2. **Mongoose Model Syntax**  
   Reference for schema creation from Mongoose documentation:  
   https://mongoosejs.com/docs/models.html

3. **Bootstrap 5 Components**  
   Used Bootstrap classes for layout and styling (buttons, tables, forms):  
   https://getbootstrap.com/docs/5.3/getting-started/introduction/

All external code has been adapted and documented with comments explaining its purpose.

## Project Structure

```
assignment-tracker/
│ app.js
│ package.json
│ .gitignore
│ .env (not committed)
│
├── config/
│   └── db.js
│
├── models/
│   └── Assignment.js
│
├── routes/
│   └── assignments.js
│
├── views/
│   ├── index.ejs
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── assignments/
│       ├── list.ejs
│       ├── new.ejs
│       ├── edit.ejs
│       └── delete.ejs
│
└── public/
    ├── css/
    │   └── style.css
    └── js/
```

## Installation and Setup

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/assignment-tracker.git
cd assignment-tracker
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file
```
MONGO_URI=your-mongodb-connection
PORT=3000
```

### 4. Run the server
Using nodemon:
```bash
npx nodemon app.js
```

Or:
```bash
node app.js
```

### 5. Open in browser
```
http://localhost:3000
```

## Deployment (Render)

The application is deployed using Render Web Services and connects to MongoDB Atlas.

Add the environment variable in Render:

```
MONGO_URI=your-connection-string
```

## Security Notes

- `.env` is secured via `.gitignore`  
- No credentials are committed to GitHub  

## Assignment Requirements

- Project Plan included  
- New Express app  
- Bootstrap design  
- MongoDB Atlas connection  
- CRUD operations  
- Delete confirmation view  
- Code commented  
- Version control requirements met (public repo, commits)  
- Cloud deployed  
