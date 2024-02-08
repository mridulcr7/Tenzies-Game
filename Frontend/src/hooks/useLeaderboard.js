import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import Cookies from "js-cookie";


export const useLeaderboard = () => {
    const [error, setError] = useState(null)
    const [leaderboardData, setleaderboardData] = useState(null);

    const leaderboard = async () => {

        const token = (Cookies.get('jwt'));
        try {
            const response = await fetch('http://localhost:4000/leaderboard', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            })
            const json = await response.json()
            if (!response.ok) {
                setError(json.error)
            }
            else {
                console.log(json);
                setleaderboardData(json);
            }

        }
        catch (err) {
            setError(err)
            console.log(err);
        }
    }

    return { leaderboard, leaderboardData, error }

}


