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
    createdAt:{
        type:Date,
        default:()=>Date.now(),
        immutable:true,
    }
})

const User = models.User || model("USER", userSchema);

export default User;