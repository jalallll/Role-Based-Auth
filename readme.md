# Role-Based Authentication API

A Node.js Express API with MongoDB that implements role-based authentication and authorization.

## Features

- 🔐 User authentication with JWT
- 👥 Role-based access control
- 📧 Dual login options (email/username)
- 🔒 Password encryption with bcrypt
- 📀 MongoDB integration
- 🎯 TypeScript for type safety

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd role-based-auth
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/role-based-auth
JWT_SECRET=your_jwt_secret_key
```

## Project Structure

```
src/
├── config/
│   └── mongooseConfig.ts
├── controllers/
│   └── authController.ts
├── middleware/
│   └── authMiddleware.ts
├── models/
│   └── User.ts
├── routes/
│   ├── authRoutes.ts
│   └── userRoutes.ts
├── services/
│   └── authService.ts
├── types/
│   └── authType.ts
├── utils/
│   ├── authUtils.ts
│   ├── bcryptUtils.ts
│   └── jwtUtils.ts
└── index.ts
```

## Available Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login/email` - Login with email
- `POST /api/auth/login/username` - Login with username

### Users
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Running the Application

Development mode:
```bash
npm run dev
```

Production build:
```bash
npm run build
npm start
```

## API Usage

### Register a New User
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "example",
    "email": "user@example.com",
    "password": "password123",
    "role": "user"
  }'
```

### Login with Email
```bash
curl -X POST http://localhost:3000/api/auth/login/email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

## Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Role-based middleware for protected routes
- Request validation and sanitization

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request