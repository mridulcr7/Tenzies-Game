import React, { useEffect } from 'react';
import background from "../Utilis/cinema-movie-concept_1302-12571.jpg";
import { useSignup } from "../hooks/useSignup"
import { useState } from "react"
import Header from "./header"
import { useLeaderboard } from '../hooks/useLeaderboard';

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

const Leaderboard = () => {
    const { leaderboard, leaderboardData, error } = useLeaderboard();
    useEffect(() => {
        leaderboard();
    }, []);

    return (
        <div className="container mx-auto bg-cover bg-center h-screen" style={{ backgroundImage: `url("j7.jpg")` }}>
            <Header />

            <div className="bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-3xl font-semibold mb-4 text-white">Leaderboard</h1>
                {error ? (
                    <p className="text-white">Error fetching leaderboard data</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table-fixed w-full bg-transparent">
                            <thead>
                                <tr className="bg-[#6c9cd0]">
                                    <th className="px-4 py-2 text-white">Rank</th>
                                    <th className="px-4 py-2 text-white">Username</th>
                                    <th className="px-4 py-2 text-white">Completion Time</th>
                                    <th className="px-4 py-2 text-white">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboardData && leaderboardData.slice(0, 25).map((data, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
                                        <td className="border px-4 py-2 text-white">{index + 1}</td>
                                        <td className="border px-4 py-2 text-white">{data.userId.name}</td>
                                        <td className="border px-4 py-2 text-white">{data.completionTime}</td>
                                        <td className="border px-4 py-2 text-white">{formatDate(data.createdAt)}</td>
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
