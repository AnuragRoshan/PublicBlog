import mongoose from 'mongoose'

const Connection  = async ()=>{
    try{
        const URL = 'mongodb+srv://anurag:abcd@web.ww23m.mongodb.net/website?retryWrites=true&w=majority';
        await mongoose.connect(URL,{useNewUrlParser : true ,useUnifiedTopology:true});
        console.log("database connected");

    }catch(error){
        console.log("error while connecting",error);
    }
}
export default Connection;