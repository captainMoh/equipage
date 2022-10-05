const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://' + process.env.DB_USER_PASS + '@equipage.zln6ckv.mongodb.net/Equipage',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if(!err) console.log('MongoDB connected');
        else console.log(`connection error: ${err}`);
    }
)