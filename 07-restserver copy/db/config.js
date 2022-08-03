const mongoose = require("mongoose");

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false

        })
        console.log("DB is connected");
    } catch (error) {
        throw new Error('Error');
    }
        
    

};


module.exports = {
    dbConnection
}