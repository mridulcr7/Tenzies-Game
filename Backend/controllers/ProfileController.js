const GameRecord = require('../models/Gamerecord');

// Get recent and top performances for a user
const getUserProfile = async (req, res) => {
    const userId = req.params.id;
    try {
        const recentPerformances = await GameRecord
            .find({ userId })
            .sort({ createdAt: -1 })
            .limit(5)
            

        const topPerformances = await GameRecord
            .find({ userId })
            .sort({ completionTime: 1 })
            .limit(5)
           

        res.json({ recentPerformances, topPerformances });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getUserProfile };
