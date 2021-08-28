//CRUD operqations explore
const mongodb= require('mongodb')
const MongoClient= mongodb.MongoClient
const connectionURL= 'mongodb://127.0.0.1:27017'
const dbName= 'tasks'

MongoClient.connect(connectionURL, {useUnifiedTopology: true }, (error, client) =>{
    if(error) {
        return console.log('Unable to connect')
    }
    
    const db= client.db(dbName)
    db.collection('users').insertOne({
        name:'Aditi',
        age:'21'
    })

})