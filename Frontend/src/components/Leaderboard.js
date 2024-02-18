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
        // console.log(leaderboard)

    }, []);


    return (
        <div className="container mx-auto bg-cover bg-center  h-[1000px]" style={{ backgroundImage: `url("j7.jpg")` }}>
            <div className="p-8 rounded-lg">
                <h1 className="text-3xl font-semibold mb-4 text-white">Leaderboard</h1>
                {error ? (
                    <p className="text-white">Error fetching leaderboard data</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-fixed w-full bg-transparent">
                            <thead>
                                <tr className="bg-[#6c9cd0] ">
                                    <th className="px-4 py-2">Rank</th>
                                    <th className="px-4 py-2">Username</th>
                                    <th className="px-4 py-2 ">Completion Time</th>
                                    <th className="px-4 py-2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboardData && leaderboardData.slice(0, 25).map((data, index) => (
                                    <tr key={index} >
                                        <td className="border px-4 py-2 bg-transparent text-gray-200">{index + 1}</td>
                                        <td className="border px-4 py-2 bg-transparent text-gray-200">{data.userId.name}</td>
                                        <td className="border px-4 py-2 bg-transparent text-gray-200">{data.completionTime}</td>
                                        <td className="border px-4 py-2 bg-transparent text-gray-200">{new Date(data.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Leaderboard;
