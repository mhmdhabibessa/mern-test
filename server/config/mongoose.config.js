const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
// const uri = `mongodb+srv://mohammadessa:F38bwfqJeFvSAuJA@cluster1.l3yjzfs.mongodb.net/`;
// mongodb+srv://mohammadessa:<password>@cluster1.l3yjzfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1


const uri = `mongodb+srv://${username}:${pw}@cluster1.l3yjzfs.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));