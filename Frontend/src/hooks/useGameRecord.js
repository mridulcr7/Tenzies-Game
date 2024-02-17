import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import Cookies from "js-cookie";


export const useGameRecord = () => {
    const { user } = useAuthContext();


    const gameRecord = async (completionTime) => {

        console.log(completionTime);
        const response = await fetch('http://localhost:4000/gamerecord', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({ completionTime: completionTime }),
        })
    }
    return { gameRecord }
}