const mongoose = require('mongoose');
const User = require("./User");


const gameRecordSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    completionTime: { type: Number, required: true },
    createdAt: { type: Date, required: true }
});

const GameRecord = mongoose.model('GameRecord', gameRecordSchema);

module.exports = GameRecord;
