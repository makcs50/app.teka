const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(require('./routes/basket.route'));
app.use(require('./routes/category.route'));
app.use(require('./routes/medicine.route'));
app.use(require('./routes/client.route'));


(async function(){
    try{
        await mongoose.connect(
            "mongodb+srv://lechiev2015:token95@cluster0.qpdtotg.mongodb.net/apteka"  
        )
        app.listen(3000);
        console.log('сервер запущен');
    }
    catch (error){
        console.log(error.message)
    }

})()