import { model, models, Schema } from "mongoose";


const ProfileSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    realestate:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["villa","apartment","store","office"],
        required:true
    },
    constructionDate:{
        type:Date,
        required:true,
    },
    amenities:{
        type:[String],
        default:[],
    },
    rules:{
        type:[String],
        default:[],
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    published:{
        type:Boolean,
        default:false
    }

},{timestamps:true})

const Profile = models.Profile || model("Profile", ProfileSchema);

export default Profile;