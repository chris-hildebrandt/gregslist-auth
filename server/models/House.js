import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
  {},
  { timestamps: true, toJSON: { virtuals: true } }
)
