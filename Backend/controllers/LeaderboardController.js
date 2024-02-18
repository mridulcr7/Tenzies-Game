const GameRecord = require('../models/Gamerecord');

// Get top 25 users with the earliest completion time
const addgamerecord = async (req, res) => {
    const user = req.user;
    const createdAt = new Date();
    const { completionTime } = req.body;
    
    try {
        const gamerecord = {
            userId: user._id, createdAt, completionTime
        };
        const record = await GameRecord.create(gamerecord);
        record.save();
        GameRecord.save();
        res.json(record);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await GameRecord
            .find()
            .sort({ completionTime: 1 })
            .limit(25)
            .populate({
                path: 'userId',
                select: 'name',  
            });

        res.json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getLeaderboard, addgamerecord };
