import React, { useEffect } from 'react';
import background from "../Utilis/cinema-movie-concept_1302-12571.jpg";
import { useSignup } from "../hooks/useSignup"
import { useState } from "react"
import Header from "./header"
import { useUserProfile } from '../hooks/useUserProfile';

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function Profile() {
    const { userProfile, recentPerformances, topPerformances, error } = useUserProfile();

    useEffect(() => {
        userProfile();
    }, []);

    return (
        <div className="container mx-auto bg-cover bg-center h-screen" style={{ backgroundImage: `url("j7.jpg")` }}>

            <div className="p-8 rounded-lg flex">
                <div className="flex-grow pr-4 align-top">
                    <h1 className="text-3xl font-semibold mb-4 text-white">Your Profile</h1>
                    {error ? (
                        <p className="text-white">Error fetching profile data</p>
                    ) : (
                        <>
                            {recentPerformances && recentPerformances.length > 0 && (
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-white mb-2">Recent Performances</h2>
                                    <table className="table-fixed w-full bg-transparent">
                                        <thead>
                                            <tr className="bg-[#6c9cd0]">
                                                <th className="px-4 py-2">Completion Time</th>
                                                <th className="px-4 py-2">Created At</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentPerformances.map((performance, index) => (
                                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
                                                    <td className="border px-4 py-2 text-white">{performance.completionTime}</td>
                                                    <td className="border px-4 py-2 text-white">{formatDate(performance.createdAt)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div className="flex-grow pl-4 align-top" style={{ marginTop: '51px' }}>
                    {topPerformances && topPerformances.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Top Performances</h2>
                            <table className="table-fixed w-full bg-transparent">
                                <thead>
                                    <tr className="bg-[#6c9cd0]">
                                        <th className="px-4 py-2">Completion Time</th>
                                        <th className="px-4 py-2">Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topPerformances.map((performance, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
                                            <td className="border px-4 py-2 text-white">{performance.completionTime}</td>
                                            <td className="border px-4 py-2 text-white">{formatDate(performance.createdAt)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
