const mangoose=require('mongoose');

async function connectDatabase(){
    const uri='mongodb://localhost:27017/movie';
    try
    {
      const res = await mangoose.connect(uri);
      console.log('connection to database is established'); 
    }
     catch(error)
    {
        console.log(error)
        throw error;
    }
}
module.exports = connectDatabase;