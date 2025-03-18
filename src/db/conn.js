const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://0.0.0.0:27017/Watiidynamic",{
    // useCreateIndex:true,
    // useNewUrlParser: true,
    // useUnifiedTopology:true,
   useNewUrlParser: true,
  useUnifiedTopology: true,
 
   
}).then(()=> {
    console.log("connection successful");
    }).catch((error)=>{
        console.log(error);
    })