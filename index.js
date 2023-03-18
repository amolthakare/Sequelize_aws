const express = require('express');
const { sequelize } = require('./config/config');
// const { orderRouter } = require('./routes/OrderRoutes');
// const { UserRouter } = require('./routes/UserRouter');
const app = express();
app.use(express.json())

app.use("/",(req,res)=>{
    res.send("hello")
})
// app.use("/users", UserRouter);
// app.use("/orders",orderRouter)

app.listen(8080,async()=>{
    try{
        await sequelize.sync();
        console.log("connected to db");
    }
    catch(err){
        console.log(err);
    }
    console.log(`listening to port 8080`)
})