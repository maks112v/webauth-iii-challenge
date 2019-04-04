const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const jwt = require('jsonwebtoken');


const secret = process.env.JWT_SECRET || "this is a secret";

const authRouter = require("./helpers/authRouter");
const usersRouter = require('./helpers/userRouter');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", authMiddleware, usersRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
