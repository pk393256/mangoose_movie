const Movie = require("../database/movie");
const express=require('express');
const movieRouter = require("../router/product");



async function fetchAllMovie(req,res){
    try{
        const movie = await Movie.find();
        return res.send({
            data:movie
        })
    }catch(error){
        console.log(error)
        throw error;
    }

}
async function addMovie(req,res){
    const movieData = req.body;
    // console.log(movieData)
    let movie = new Movie(movieData)
    await movie.save();
    return res.send({
        message: "movie has been added",
        data: movie,
    });
}
async function updateMovie(req,res){

     let updateData = req.body;
     let {id} = req.params;
     let movie = await Movie.findByIdAndUpdate(id,updateData )
     return res.send(movie)

}
async function deleteMovie(req,res){

    let {id} = req.params;
     await Movie.findByIdAndDelete(id)
     return res.send('deleted successfully')
}
    


module.exports={
    fetchAllMovie,
    addMovie,
    updateMovie,
    deleteMovie,
}