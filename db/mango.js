const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://avr45454545:clF8xBpI8Vl2lEhm@cluster1.zdarrzr.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mangodb connect");
})
.catch(()=>{
    console.log('failed');

})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection = mongoose.model("collection",newSchema)

module.exports = collection

