const express = require("express");
const app = express();
const port= process.env.PORT || 3000;
app.get ("/",(req,res) =>{
    res.send("hello hi")
});

app.listen(port , () => {
    console.log(`server is running at port no ${port}`)
})
//node moodule to not write again and agin to run