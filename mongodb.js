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
    db.collection('users').insertMany ([ 
        {
            name:'Howard',
            age:'28'
        },{
            name:'Derek',
            age:'34'
        }
            
    ], (error, result) =>{
        if(error){
            console.log('Error while inserting users.')
        }
        console.log(result.ops)
    })
    
    db.collection('tasks').insertMany([
        {
            descrption:'buy groceries',
            status:'done'
        },
        {
            descrption:'go to the dentist',
            status:'pending'

        }
    ], (error, result) =>{
        if(error){
            console.log('Error while inserting tasks.')
        }
        console.log(result.ops)
    })
}) 