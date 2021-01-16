const mongoose = require('mongoose');

//await bat buoc phai nam trong ham async

async function connect() {
    //try-catch de bat loi
    try {
        await mongoose.connect('mongodb://localhost:27017/trungduc_courses_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect successfully');
    } catch(error){
        console.log('Connect failure!!!');
    }
}


module.exports = { connect };