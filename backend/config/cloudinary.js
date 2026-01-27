import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
const uploadOnCloudinary = async(fileName)=>{
        cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY , 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    try {
        const fileResult = await cloudinary.uploader.upload(fileName).catch(err=>console.log("cloudinary upload err",err ))
        fs.unlinkSync(fileName)
        return fileResult.secure_url
    } catch (error) {
        console.log(error)
    }

}

export default uploadOnCloudinary