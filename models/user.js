import {model} from 'mongoose'

const User = model('user', {
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,

    }, 
    password: {
        type: String,
        required: true,
        minLength: 8
    }
})

export default User