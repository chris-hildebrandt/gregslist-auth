import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CarSchema = new Schema(
  {
    make: { type: String, required: true, minlength: 2, maxlength: 20 },
    model: { type: String, required: true, maxlength: 30 },
    year: { type: Number, required: true, min: 1910, max: (new Date().getFullYear() + 2) },
    price: { type: Number, required: true, min: 100, max: 1000000, },
    img: { type: String, maxlength: 500, default: 'https://www.thiscatdoesnotexist.com' },
    description: { type: String, maxlength: 800 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// don't be lazy! use min and max length to prevent trolling, make sure the form can't be abused
// the DB Context is the appstate for the server, you have to register your schemas here