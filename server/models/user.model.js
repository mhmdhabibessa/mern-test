const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ]
    }
    ,
    age: {
        type: Number,
        required: [
            true,
            "Age is required"
        ]
    },
    location: {},
}, { timestamps: true })

const User = mongoose.model('User', UserSchema);

module.exports = User;
