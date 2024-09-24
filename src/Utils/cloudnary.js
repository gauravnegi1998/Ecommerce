import { v2 as cloudinary } from 'cloudinary';


export const _cloudinaryUploader = (req, res, next) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })

    cloudinary.uploader.upload(req.file.path, function (err, res) {
        if (err) {
            next(err);
        } else {
            req.uploadImage = res;
            next();
        }
    })
}


export default cloudinary;