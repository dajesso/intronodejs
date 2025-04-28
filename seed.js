// import { connect, close } from './db.js'
import db from './db.js'
import Category from './models/category.js'
import Post from "./models/post.js"

const categories = [
    {name: 'Felicis'},
    {name: 'Jesso'},
    {name: 'Obama'},
    {name: 'Other'}

]

const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet',
        isPublished: true
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is the body of post 2',
        isPublished: true
    }
]

db.connect()

// Delete all existing posts
await Category.deleteMany()
// Creates and saves to MongoDB a new Post for each document in posts array
await Category.create(categories)
console.log('Categories created')

// We still have a db connection open, so the script won't end
// So we need to close the connection once we're done with it
db.close()
