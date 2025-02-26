import mongoose from "mongoose";

//connect with Mongo

const connectDB= async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log('Database Connected')
        
    })
    await mongoose.connect(`${process.env.mongodb_uri}/job-portal`)
}

export default connectDB