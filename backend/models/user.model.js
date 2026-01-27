import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
      required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    additionalName:{
        type:String
    },
    headline:{
        type:String
    },
    about:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    location:{
        type:String,
       
    },
    connections:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    noOfConnections:{
        type:Number,
        default:0
    },
    noOfFollowers:{
        type:Number,
        default:0
    },
    noOfFollowing:{
        type:Number,
        default:0
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:true
    },
    role:{
        type:String,
        enum:["student","recruiter"],
        required:true
    },
      
    studentProfile:{
      
    },
    education:[{
        college:String,
        degree:String,
        specialization:String,
        startYear:Number,
        endYear:Number,
        grade:String,
        startDate:{
            month:String,
            year:String
        },
        endDate:{
            month:String,
            year:String
        },
        studentDescription:String,
        jobPreferences:String,
        accomplishments:String,
        recommendations:String
    }] ,
    skills:[
        {type:String}
    ],
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }],
    noOfPosts:{
        type:Number
    },
    coverImage:{
        type:String
    },
    profileImage:{
        type:String
    },
    workProfile:[{
        companyName:String,
        title:String,
        experience:Number,
        employementType :{type:String,enum:['full-time','part-time']}
       
    }],
    isEmailVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema)

export default User