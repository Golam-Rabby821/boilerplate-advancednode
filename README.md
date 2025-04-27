# Advanced Node and Express

This is the boilerplate for the Advanced Node and Express lessons. Instructions for the lessons start at https://www.freecodecamp.org/learn/quality-assurance/advanced-node-and-express/

# Real-Time Chat Application 💬

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/expressjs-express-blue)](https://www.npmjs.com/package/express)
[![Socket.IO](https://img.shields.io/badge/socket.io-4.x-blue)](https://socket.io/)

A full-stack real-time chat application built with Node.js, Express, and Socket.IO. Features user authentication, real-time messaging, and persistent message history.

![Chat Application Preview](https://via.placeholder.com/800x400.png?text=Chat+App+Preview) 
*Add screenshot here*

## Features 🚀

- 🔐 User Authentication (Local & GitHub OAuth)
- 💬 Real-time messaging with Socket.IO
- 📚 Message history persistence
- 👥 Online user status tracking
- 📱 Responsive design
- 🔒 Secure password hashing with bcrypt
- 🎨 Modern UI with Pug templates

## Technologies Used 🛠️

- **Backend**: Node.js, Express
- **Authentication**: Passport.js, express-session
- **Database**: MongoDB, Mongoose
- **Real-Time**: Socket.IO
- **Frontend**: Pug, CSS
- **Security**: Helmet, bcrypt

## Installation ⚙️

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```
2. Install dependencies:
```bash
npm install
```
3. Create .env file:
```bash
env
MONGODB_URI=mongodb://localhost:27017/chat-app
SESSION_SECRET=your_session_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

4. Start the application:
```bash
npm run dev
```

## Configuration 🔧

| Environment Variable     | Description                          |
|--------------------------|--------------------------------------|
| `MONGODB_URI`            | MongoDB connection string            |
| `SESSION_SECRET`         | Secret for session encryption        |
| `GITHUB_CLIENT_ID`       | GitHub OAuth Client ID               |
| `GITHUB_CLIENT_SECRET`   | GitHub OAuth Client Secret           |

## Usage 📖

1. Access the application at `http://localhost:3000`
2. Register or login using local credentials or GitHub
3. Start chatting in real-time!
4. Messages persist in database for future sessions

## API Endpoints 🌐

| Method | Endpoint       | Description                |
|--------|----------------|----------------------------|
| POST   | `/register`    | User registration          |
| POST   | `/login`       | User login                 |
| GET    | `/auth/github` | GitHub authentication      |
| GET    | `/logout`      | User logout                |
| GET    | `/chat`        | Chat interface             |

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch:  
   `git checkout -b feature/AmazingFeature`
3. Commit your changes:  
   `git commit -m 'Add some AmazingFeature'`
4. Push to the branch:  
   `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License 📄

This project is open-source. See [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- freeCodeCamp for project inspiration
- MongoDB Atlas for cloud database
- Socket.IO for real-time communication

## FAQ ❓

**Q: How do I set up GitHub OAuth?**  
A: Create a GitHub OAuth application and add credentials to `.env`

**Q: How can I reset the database?**  
A: Delete MongoDB collection or restart with fresh database

**Q: How to change the port?**  
A: Set `PORT` environment variable or modify `server.js`