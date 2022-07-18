const Movie = require("../database/movie");
const express=require('express');
const movieRouter = require("../router/product");

async function filterByTitle(req,res){
        // let filter = req.body;
        let filter=req.params;
        let movie = await Movie.findOne(filter);
        console.log(filter)
        res.send({
            movie
        })
}
async function filterByDate(req,res){
    let filter = req.params;
    // let 
    let movie=await Movie.find(filter);
    console.log(filter)
    res.send({
        movie
    })
}
async function searchMovie(req,res){
    let s = req.query.title;
    console.log('s',s)
    let movie = await Movie.find({ title: { $regex:s} })
    res.send({movie})
}

module.exports = {
    filterByTitle,
    filterByDate,
    searchMovie,
}