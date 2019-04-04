const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require('../dbconfig')

router.get('/', async (req, res) => {
  try{
    const users = await db('users').select('username','password')
    res.status(200).json(users);
  }catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;