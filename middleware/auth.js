const axios = require("../config/axios")

/*
description: middleware module provide to check access token
*/
const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"]
  if (!token) {
    return res.status(403).send("A token is required for authentication")
  }
  try {
    const instance = axios.instance
    const resp = await instance.get('/e3rest/api/checkLogon', {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
    return (resp['data']['ok']===true) ?  next() : res.status(401).send("invalid token")
  }catch(error) {
    return res.status(401).send("invalid token")
  }

}

module.exports = verifyToken