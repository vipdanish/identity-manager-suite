
# User Management System

A complete user management system with authentication, authorization, and user profile management.

## Project Overview

This project creates a complete user management system with the following components:

- **Backend**: Node.js and Express.js REST API with JWT authentication
- **Database**: MongoDB for user data storage
- **Proxy**: Nginx as a reverse proxy
- **Deployment**: Docker containers orchestrated with Docker Compose

## Features

- User registration and authentication
- JWT-based secure authentication
- Protected routes for authenticated users
- User profile management
- Admin-only routes for user management

## Project Structure

```
user-management-system/
├── backend/               # Node.js + Express backend
│   ├── config/            # Configuration files (database, etc.)
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── Dockerfile         # Backend container configuration
│   ├── package.json       # Node.js dependencies
│   └── server.js          # Entry point
├── nginx/                 # Nginx configuration
│   └── default.conf       # Nginx routing configuration
├── .gitlab-ci.yml         # GitLab CI/CD configuration
└── docker-compose.yml     # Docker container orchestration
```

## Setup Instructions

### Prerequisites

- Docker and Docker Compose installed
- Git (optional, for version control)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd user-management-system
   ```

2. Start the containers:
   ```
   docker-compose up -d
   ```

3. The API will be available at:
   ```
   https://okdanish.duckdns.org
   ```

## API Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | /api/users/register | Register a new user | Public |
| POST | /api/users/login | Authenticate user & get token | Public |
| GET | /api/users/profile | Get user profile | Private |
| PUT | /api/users/update | Update user profile | Private |
| DELETE | /api/users/delete | Delete user | Admin |

## Deployment

This project is designed to be deployed on AWS EC2 with DuckDNS for domain management.

### Setting up DuckDNS

1. Create a DuckDNS account and register `okdanish.duckdns.org`
2. Update your DuckDNS domain to point to your EC2 instance's IP address

### Deploying on EC2

1. Launch an EC2 instance and install Docker + Docker Compose
2. Clone this repository to your EC2 instance
3. Run `docker-compose up -d` to start all services
4. Your system is now available at `https://okdanish.duckdns.org`

## Security Considerations

- All passwords are hashed using bcrypt
- JWT tokens are used for authentication
- Protected routes use middleware for authorization
- Environment variables are used for sensitive information
