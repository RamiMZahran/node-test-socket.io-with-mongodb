const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c61be21c0a3398fb4f1becc")
    // }
    //     , {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result => {
    //         console.log(result);
    //     }));
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c618fba934f2b1f80caa465")
    }
        , {
            $set: {
                name: "Rami"
            },
            $inc: {
                age: 6
            }
        }, {
            returnOriginal: false
        }).then((result => {
            console.log(result);
        }));


    //  db.close();
});