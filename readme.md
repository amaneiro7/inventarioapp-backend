# Inventario App Backend

![Version](https://img.shields.io/badge/version-2.0.0-blue)  
![License](https://img.shields.io/badge/license-MIT-green)

A comprehensive inventory management system designed to track and manage IT assets, employee information, and organizational structure.

## Overview

Inventario App Backend is a robust platform for maintaining detailed records of computing devices, monitoring their assignments, tracking locations, and generating reports for business intelligence purposes. The system follows a hexagonal/clean architecture approach based on Domain-Driven Design principles.

## Key Features

-   Track IT equipment with detailed specifications (computers, laptops, printers, monitors, etc.)
-   Manage employee information and organizational hierarchy
-   Record and manage geographical locations and organizational sites
-   Generate detailed reports and dashboards for decision-making
-   Maintain historical records of all inventory changes

## System Architecture

The application follows a clean architecture pattern with clearly separated layers:

-   **API Layer**: Handles HTTP requests/responses through Express routes and controllers
-   **Application Layer**: Implements use cases and application services
-   **Domain Layer**: Contains business logic, entities, and repository interfaces
-   **Infrastructure Layer**: Provides implementations for persistence, caching, and external services

## Technologies Used

-   **Server**: Express.js
-   **ORM**: Sequelize
-   **Authentication**: Passport.js with JWT
-   **Caching**: Redis
-   **Database**: PostgreSQL
-   **Dependency Injection**: Awilix
-   **Logging**: Winston
-   **Validation**: Express Validator
-   **Security**: Helmet

## Getting Started

### Prerequisites

-   Node.js (v16+)
-   PostgreSQL
-   Redis
-   Docker (optional)

### Installation

1. Clone the repository
    ```bash
    git clone https://github.com/amaneiro7/inventarioapp-backend.git
    cd inventarioapp-backend
    Install dependencies
    ```

npm install

# or

pnpm install

# or

bun install
Configure environment variables

cp .env.example .env.development

# Edit .env.development with your configuration

Run database migrations

npm run migration:all
Seed the database (optional)

npm run seed:all
Start the development server

npm run dev:node

# or

npm run dev:bun
Docker Setup
You can also use Docker to run the application:

docker-compose up -d
Available Scripts
npm run build - Build the TypeScript project
npm run clean - Clean the build output
npm run start - Start the production server
npm run start:bun - Start the production server with Bun
npm run dev:node - Start the development server with Node.js
npm run dev:bun - Start the development server with Bun
npm run format - Format code with Prettier
npm run swagger - Generate Swagger documentation
npm run migration:generate - Generate a new migration
npm run migration:all - Run all migrations
npm run seed:all - Run all seed files
API Documentation
API documentation is available at /api/docs when the server is running.

Core Domain Model
The system manages various entities including:

Devices (computers, monitors, printers, etc.)
Employees and organizational structure
Locations and geographical hierarchy
User management and access control
History and audit tracking
Caching Strategy
The system implements a sophisticated caching mechanism using Redis:

Dashboard queries are cached with short TTL (Time To Live)
Cache invalidation occurs when data is updated
Different TTLs are used based on data volatility
License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Andres Maneiro amaneiro7@gmail.com
