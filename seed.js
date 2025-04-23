import Post from "./models/post.js"

import {close} from './db.js'

import {connect} from './db.js'

connect()

await Post.deleteMany()

const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet',
        isPublished: false
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is the body of post 2',
        isPublished: true
    }
]

// Creates and saves to MongoDB a new document in post collection

await Post.create(posts)
console.log('Posts created')


// we still have a db connection open, so the script won't end

close()
// Close the connection to the database

