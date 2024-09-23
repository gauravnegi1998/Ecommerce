import multer from "multer";
import cloudinary from "../Utils/cloudnary.js";

const storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //     cb(null, '/uploads')
    // },
    filename: function (req, file, cb) {
        console.log(file, '>>>>>>>>>>>>>>>>>>>>>')
        const uniqueSuffix = Date.now();
        cb(null, file.orignalname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })




export const _cloudinaryUploader = (req, res, next) => {
    cloudinary.uploader.upload(req.file.path, function (err, res) {
        if (err) {
            next(err);
        } else {
            req.uploadImage = res;
        }
    })
}





export default upload;