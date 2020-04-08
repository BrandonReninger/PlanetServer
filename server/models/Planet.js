import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Planet = new Schema({
    name: {
        type: String,
        required: true
    },
    distanceFromSun: {
        type: Number,
        required: true
    },
    habitable: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

export default Planet;