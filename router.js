const express = require('express')
const userData = require('./database')
const route = express.Router()
const users = require('./database')

// Get request over user data
route.get('/users', (req, res)=> {
  res.json(users)
})

// post request over user data
route.post('/users', (req, res)=> {
  const incommingUser = req.body
  userData.push(incommingUser)
  res.json(userData)

})

// get http request over userData to find a specific user
route.get('/users/:id', (req, res)=> {
  const userId = Number(req.params.id)
  const body = req.body
  const getUser = userData.find((user)=> user.id === userId)

  if(!getUser){
    res.status(404).send('User not found!')
  } else {
    res.send({user: [getUser]})

  }
})

// PUT HTTP request over userData to update user
route.put('/users/:id', (req, res)=> {
  const userId = Number(req.params.id)
  const getUser = userData.find((user)=> user.id === userId)
  const body = req.body

  if(!getUser){
    res.status(404).send('User not found No operation would be occurs')
  } else {
    const updatedUser = { ...getUser, ...body}
    res.json(updatedUser)
  }
})

// Delete HTTP request over userData to delete a specific user
route.delete('/users/:id', (req, res)=> {
  const userId = Number(req.params.id)
  const getUser = userData.filter((user)=> user.id != userId)

  if(!getUser){
    res.status(404).send('User not found no operation would be occurs')
  } else {
    res.json(getUser)
  }
})
module.exports = route