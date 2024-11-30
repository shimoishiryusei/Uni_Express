var express = require('express');
var router = express.Router();

const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://2301315024pm:<db_password>@cluster0.bslco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    const database = client.db('notes');
    const notes = database.collection('notes');

    const query = {id: 2};
    const note = await notes.findOne(query);

    res.json(note.title);
})

module.exports = router;
