import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
  { 
  bedrooms: { type: Number, required: true, min: 1, max: 100, },
  bathromms: { type: Number, required: true, min: 0, max: 100, },
  year: { type: Number, required: true, min: 1150, max: (new Date().getFullYear() + 5)},
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
