const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'Desconocido',
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
    },
    // location: {
    //     type: {
    //         type: String
    //     },
    //     coordinates: [Number]
    // },
    favRestaurants: {
        type: [String],

    },
    // role: {
    //     type: String,
    //     enum: ['User', 'Restaurant'],
    //     default: 'User'
    // }
}, {
    timestamps: true
});
// userSchema.index({ location: '2dsphere' })
const User = mongoose.model("User", userSchema);
module.exports = User