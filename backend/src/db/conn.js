const mongoose = require("mongoose");
require("./db/conn");
mongoose.connect("mongodb://localhost:27017/FoodDelivery",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=> {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`)
})