// Login Component
import React, { useEffect } from 'react';
import background from "../Utilis/cinema-movie-concept_1302-12571.jpg";
import { useSignup } from "../hooks/useSignup"
import { useState } from "react"
import Header from "./header"
import { useLeaderboard } from '../hooks/useLeaderboard';


const Leaderboard = () => {

    const { leaderboard, leaderboardData, error } = useLeaderboard();
    useEffect(() => {
        leaderboard();
    }, []);
    

    return (
        <div className="relative">
            <div>
                {error ? "Hello" : "data"}

            </div>
        </div>
    );
};

export default Leaderboard;
