import mongoose,{Schema} from "mongoose";
import mongooseAgregatePaginate from "mongoose-aggregate-paginate-v2"


const contactSchema = new mongoose.Schema(
    {
        email : {
            type: String,
            required: true,
            lowercase: true,
        },
        fullName:{
            type :String,
            required: true,
        },
        message:{
            type:String,
            required:true,
        }
    },
    {
        timestamps:true,
    }
);


contactSchema.plugin(mongooseAgregatePaginate)
const Contact = mongoose.model("Contact", contactSchema);

export {Contact}