import mongoose from 'mongoose'

// connect to mongodb

export async function connect(){
    // mongoose.connect('mongodb://localhost:27017/nodeintro_db')
    // .then(() => console.log('Mongoose connected'))
    // .catch(err => console.log('Mongoose failed to connect!', err))
    await mongoose.connect('mongodb://localhost:27017/nodeintro_db')
console.log(mongoose.connection.readyState == 1 ? 'Mongoose connected' : 'Mongoose failed to connect!')

}



// Named export

// JS Will automatically export it wrapped in a object
// {close: close}

// delete all existising posts


// .. where the value is the function itself

export async function close(){
    await mongoose.disconnect()
    console.log('Mongoose connection closed')
}