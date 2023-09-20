# Product-Community-Website

This project is a product community website consisting of two applications: a RESTful API (backend) and a responsive Angular-based web application (frontend). The website allows users to register, log in, browse products, post reviews, request reviews, and view product statistics. It also includes an optional admin feature for reviewing and approving user-submitted reviews.

## Backend (RESTful API)

### Technologies Used
- Spring Boot for REST API development
- Spring Data JPA for database interactions
- Spring Security for user authentication
- JSON Web Tokens (JWT) for secure user sessions
- MySQL database for storing user data, products, reviews, and statistics

### Endpoints

1. **User Authentication API**: Supports user authentication validation.
   
   - `POST /api/authenticate`: User login with email and password. Returns a JWT token upon successful login.

2. **User Registration API**: Registers new users.
   
   - `POST /api/register`: Allows users to register with a valid email, password, and other mandatory fields.

3. **Search Product API**: Searches for products based on various parameters (name, brand, product code).
   
   - `GET /api/products/search`: Searches for products by name, brand, or product code.

4. **Post Reviews API**: Allows users to post new reviews for products.
   
   - `POST /api/reviews`: Posts a new product review with ratings, heading, and content.

5. **Approve Review API (Bonus)**: For administrators to approve or reject reviews.
   
   - `POST /api/reviews/approve`: Allows administrators to approve or reject reviews.

6. **Request Review API**: Allows users to request reviews for products.
   
   - `POST /api/reviews/request`: Users can request reviews by providing product information.

7. **Stats API**: Retrieves various statistics for displaying on the homepage.
   
   - `GET /api/stats`: Provides counts of registered users, products, reviews, etc.

### Security

- JWT (JSON Web Tokens) are used for securing user sessions.
- Spring Security is implemented for user authentication and authorization.
- Interceptors are used for security-related tasks such as token validation.

### Database Access

- Spring Data JPA is used for seamless database interactions.

## Frontend (Angular)

### Technologies Used
- Angular 11 for frontend development
- Bootstrap/CSS for styling 
- Angular CLI for project scaffolding
- npm for package management

### Pages and Features

- **Homepage**: Displays links for user registration and login. Shows statistics such as the number of registered users, products, and reviews.
- **Login Page**: Allows users to log in with proper error handling for invalid credentials.
- **Registration Page**: Allows users to register with email, password, and other mandatory fields. Validates email and password policies.
- **Product Search Page**: Users can search for products by various parameters (name, code, brand).
- **Results Page**: Displays search results obtained from the backend API. Users can filter and view products, including average ratings and reviews. Proper error handling is implemented for no results found.
- **Ask for Reviews**: Allows users to request reviews for a product. Handles cases where the product code already exists.
- **Product Details**: Users can view all reviews for a selected product.
- **Post a Review**: Users can post a review with ratings, a heading, and content.
- **Admin**: Logged-in administrators can review and approve or reject user-submitted reviews.
- **Logout**: Provides users with an option to log out.

### Guards and Interceptors

- Guards and interceptors are implemented for frontend security, ensuring users have proper access rights and handling token validation.

## Usage

To run the applications:

1. Clone the repository for both the backend and frontend.

2. Set up a MySQL database for the backend. Configure the database connection details in the backend's configuration files.

3. Install the required packages for both applications using `npm install` and `mvn install` for the frontend and backend, respectively.

4. Start the backend API by running `mvn spring-boot:run`.

5. Start the Angular frontend by running `ng serve` in the frontend directory.

6. Access the website in your web browser at `http://localhost:4200`.

