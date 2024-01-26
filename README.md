# School Feedback Portal

Welcome to the School Feedback Portal! This web application is designed to gather feedback from users about various aspects of schools. Users can answer multiple-choice questions to provide their feedback. This README provides an overview of the project structure, technologies used, and instructions for setting up and running the application locally.

### Technologies Used

- HTML
- CSS
- Node.js
- MySQL

### To set up the School Feedback Portal locally, follow these steps:

1. Clone the Repository:

    ```bash
    git clone <repository-url>

2. Install Dependencies:

    ```bash
    cd Feedback_portal
    npm install

3. Database Setup:

- Make sure you have MySQL installed and running.
- Create a MySQL database named school_feedback.
- Execute the SQL script provided in database.sql to set up the necessary tables and sample data.

4. Set your database

- DB_HOST=localhost
- DB_USER="<your-database-username>"
- DB_PASSWORD="<your-database-password>"
- DB_NAME=feedback_portal

5. Start the Server:

    ```bash
    npm start

6. Access the Application:

- Open your web browser and navigate to http://localhost:5000.
- The application runs on port 5000 by default. You can access it at http://localhost:5000 in your web browser.

## Reference Images: 

### Home page
![App Screenshot](https://github.com/arnavgaur04/Feedback_portal/blob/main/images/home.png)


### Question page
![App Screenshot](https://github.com/arnavgaur04/Feedback_portal/blob/main/images/question.png)


### Review page
![App Screenshot](https://github.com/arnavgaur04/Feedback_portal/blob/main/images/review.png)

