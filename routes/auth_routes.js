// import express from 'express' // Import the default export
import { Router } from 'express' // Destructures Router from within the default export
import User from '../models/user.js'

import bcrypt from 'bcrypt'
// Default visibility of all module contents is private

// Flask: Blueprint
const router = Router()

// register a user
router.post('/register', async (req, res) => {
    res.send({message: 'POST /register'})

        const bodyData = req.body
        // create and save instance

        const user  = await User.create({

            email: req.body.email,
            password: bycrypt.hash(req.body.password, 10)
        })

        

        res.status(201).send(user.select('-password'))
    
})
// login

router.post('/login', (req, res) => {
    res.send({message: 'POST /login'})
})

export default router
