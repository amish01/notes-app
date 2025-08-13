const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]


// //
const url = `mongodb+srv://amish2g:${password}@cluster0.xtbuvch.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean, 
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'CSS is tricky',
//   important: true,
// })


// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })




// const mongoose = require('mongoose');


// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

// const uri = `mongodb+srv://amish2g:${password}@cluster0.xtbuvch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);
