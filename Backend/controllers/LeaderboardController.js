const GameRecord = require('../models/Gamerecord');

// Get top 25 users with the earliest completion time
const addgamerecord = async (req, res) => {
    const user = req.user;
    const createdAt = new Date();
    const { completionTime } = req.body;
    console.log(user, createdAt, completionTime);
    try {
        const gamerecord = {
            userId:user._id, createdAt, completionTime
        };
        const record = await GameRecord.create(gamerecord);

            res.json(record);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await GameRecord
            .find()
            .sort({ completionTime: 1 })
            .limit(25)

        res.json(leaderboard);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getLeaderboard ,addgamerecord};
