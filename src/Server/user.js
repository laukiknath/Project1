const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{  type:String,
               
            },
    email:{  type:String,
        unique:true
    },
    pass:{  type:String,
        
    }

})

const userModel = mongoose.model("profile",userSchema)
module.exports = userModel 