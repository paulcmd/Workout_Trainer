const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// =======================================================

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                },
                type: {
                    type: String,
                    trim: true,
                },
                weight: {
                    type: Number,
                    trim: true,
                },
                sets: {
                    type: Number,
                    trim: true,
                },
                reps: {
                    type: Number,
                    trim: true,
                },
                duration: {
                    type: Number,
                    trim: true,
                },
                distance: {
                    type: Number,
                    trim: true,
                },
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// get the total duration of time exercised
WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce(function (total, exercises) {
        return total + exercises.duration;
    }, 0);
});

// =======================================================

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
