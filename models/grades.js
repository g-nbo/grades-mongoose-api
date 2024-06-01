const { Schema, model } = require('../db/conn.js');


const gradesSchema = new Schema ({
    scores: {
        type: [{
            type: {
                type: String,
                required: true
            },
            score: {
                type: Number,
                required: true
            }
        }]
    },
    class_id: {
        type: Number,
        required: true,
    },
    learner_id: {
        type: Number,
        required: true
    }

})

module.exports = model('Grade', gradesSchema);
