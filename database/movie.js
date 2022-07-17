// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    releaseDate:{
        type: Number,
        required: true
    },
    posterImage:{
        type: String,
        required: true
    },
    directedBy:{
        type:String
    }
})

const Movie = mongoose.model('Movie',movieSchema);

module.exports=Movie;