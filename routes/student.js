var router = require('express').Router()
const User = require("../models/user")
const axios = require('../config/axios')
const auth = require("../middleware/auth")

/*
method: post
params: username, password
result: authToken
error:  message
description: login user with esse3 credentials
*/
router.post("/login", async (req, res) => {
  const body = req.body
  tokenAuth = Buffer.from(`${body.username}:${body.password}`).toString('base64')
  try {
    const instance = axios.instance
    const resp = await instance.get('/e3rest/api/login', {
      headers: {
        'Authorization': `Basic ${tokenAuth}`,
        "X-Esse3-User-Profile": "STUDENTE"
      }
    })
    res.send({
      data: {
        token: tokenAuth,
        user: resp['data']['user']
      }
    })
  }catch (error){
    res.status(401).send({message: 'invalid credentials'})
  }
})

/*
method: get
description: protected route example, if you are not logged, you cannot access to this
*/
router.get("/example", auth, async (req, res) => {
  const body = req.body
  res.send({message: 'check'})
})

module.exports = router