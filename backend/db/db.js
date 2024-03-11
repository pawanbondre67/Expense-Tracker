const mongoose = require('mongoose');   

const db = async ()=>{ 
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI) 
            console.log('Connected to the database');
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {db}