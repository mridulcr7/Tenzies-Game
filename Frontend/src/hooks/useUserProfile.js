import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import Cookies from "js-cookie";


export const useUserProfile = () => {
    const [error, setError] = useState(null)
    const [recentPerformances, setrecentPerformances] = useState(null);
    const [topPerformances, settopPerformances] = useState(null);

    const { user } = useAuthContext();


    const userProfile = async () => {
        console.log(user);
        console.log(user.id);

        try {
            const response = await fetch(`http://localhost:4000/userprofile/${user.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                },
            })
            const json = await response.json()
            if (!response.ok) {
                setError(json.error)
            }
            else {
                //console.log(json);
                setrecentPerformances(json.recentPerformances);
                settopPerformances(json.topPerformances);
                console.log(json.recentPerformances)
                console.log(json.topPerformances);
            }

        }
        catch (err) {
            setError(err)
            //console.log(err);
        }
    }

    return { userProfile, recentPerformances, topPerformances, error }

}


