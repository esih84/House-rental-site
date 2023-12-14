import { model, models, Schema } from "mongoose";


const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        default:"کاربر گرامی"
    },
    role:{
        type:String,
        default:"USER"
    },
    createdAt:{
        type:Date,
        default:()=>Date.now(),
        immutable:true,
    },

})

const User = models.User || model("User", userSchema);

export default User;