# Luxe Botanica - E-Commerce Platform

A modern, full-stack e-commerce application for premium beauty products, featuring JWT authentication and a complete admin panel.

## 🛠️ Tech Stack

### Backend
- **Java 17** with **Spring Boot 3.2**
- **Spring Security** with JWT authentication
- **Spring Data JPA** for database operations
- **H2 Database** (in-memory, for development)
- **BCrypt** for password hashing

### Frontend
- **React 19** with Vite
- **React Router DOM** for navigation
- **Context API** for state management

## 📁 Project Structure

```
BellaVitaClone/
├── src/main/java/com/plugin/erogonomics/
│   ├── Main.java                    # Spring Boot Application
│   ├── config/
│   │   ├── SecurityConfig.java      # Security & CORS configuration
│   │   └── DataInitializer.java     # Seed data on startup
│   ├── controller/
│   │   ├── AuthController.java      # Login/Signup endpoints
│   │   ├── ProductController.java   # Public product endpoints
│   │   ├── OrderController.java     # User order endpoints
│   │   ├── UserController.java      # User profile endpoints
│   │   └── AdminController.java     # Admin-only endpoints
│   ├── dto/                         # Data Transfer Objects
│   ├── entity/                      # JPA Entities
│   ├── repository/                  # Spring Data repositories
│   ├── security/                    # JWT utilities & filters
│   └── service/                     # Business logic
├── src/main/resources/
│   └── application.properties       # App configuration
└── webapp/
    └── src/
        ├── admin/                   # Admin panel (isolated)
        │   ├── components/
        │   └── pages/
        ├── components/              # Shared components
        ├── context/                 # React Context providers
        ├── pages/                   # Customer-facing pages
        └── services/                # API service layer
```

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- Gradle (or use the wrapper)

### Backend Setup

1. Navigate to the project root:
```bash
cd BellaVitaClone
```

2. Build the project:
```bash
./gradlew build
```

3. Run the Spring Boot application:
```bash
./gradlew bootRun
```

The backend will start at `http://localhost:8080`

### Frontend Setup

1. Navigate to the webapp directory:
```bash
cd webapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start at `http://localhost:5173`

## 🔑 Default Users

The application creates two default users on startup:

| Role  | Email                  | Password  |
|-------|------------------------|-----------|
| Admin | admin@bellavita.com    | admin123  |
| User  | user@bellavita.com     | user123   |

## 📡 API Endpoints

### Public Endpoints
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `GET /api/products/category/{category}` - Get products by category

### Protected Endpoints (Requires JWT)
- `GET /api/user/profile` - Get current user profile
- `GET /api/orders` - Get user's orders
- `POST /api/orders` - Create a new order

### Admin Endpoints (Requires ADMIN role)
- `GET /api/admin/stats` - Dashboard statistics
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/{id}` - Update product
- `DELETE /api/admin/products/{id}` - Delete product
- `GET /api/admin/orders` - Get all orders
- `PUT /api/admin/orders/{id}/status` - Update order status
- `GET /api/admin/users` - Get all users
- `DELETE /api/admin/users/{id}` - Delete user

## 🔐 Authentication Flow

1. User signs up or logs in via `/api/auth/*`
2. Server validates credentials and returns JWT token
3. Frontend stores token in localStorage
4. All subsequent requests include `Authorization: Bearer <token>` header
5. JwtFilter validates token and sets authentication context
6. Role-based access is enforced via Spring Security

## 🎨 Features

### Customer Features
- Browse products by category
- Product details with images
- Shopping cart
- Checkout process
- User authentication
- Order history

### Admin Features
- Dashboard with statistics
- Product management (CRUD)
- Order management with status updates
- User management

## 🔧 Configuration

### application.properties
```properties
# Database (switch to MySQL/PostgreSQL for production)
spring.datasource.url=jdbc:h2:mem:bellavitadb

# JWT
jwt.secret=your-secret-key
jwt.expiration=86400000  # 24 hours

# CORS
spring.mvc.cors.allowed-origins=http://localhost:5173
```

## 📦 Key Dependencies

```gradle
// Spring Boot
implementation 'org.springframework.boot:spring-boot-starter-web'
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
implementation 'org.springframework.boot:spring-boot-starter-security'

// JWT
implementation 'io.jsonwebtoken:jjwt-api:0.12.3'
runtimeOnly 'io.jsonwebtoken:jjwt-impl:0.12.3'
runtimeOnly 'io.jsonwebtoken:jjwt-jackson:0.12.3'

// Database
runtimeOnly 'com.h2database:h2'
```

## 🛡️ Security Notes

- Passwords are hashed using BCrypt
- JWT tokens expire after 24 hours
- CORS is configured for frontend origins
- Admin routes are protected by role-based access
- Token expiration is handled on frontend

## 📝 License

This project is for educational purposes.

