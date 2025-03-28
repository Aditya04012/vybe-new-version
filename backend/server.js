const mongoose=require("mongoose");
const app=require("./app");

const DB=process.env.DB;
mongoose.connect(DB).then(()=>{
    console.log("Connected to DB")
});

app.listen(process.env.PORT,()=>{
    console.log("server is live at port 5000");
})
