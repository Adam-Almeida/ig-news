import {  NextApiRequest, NextApiResponse } from 'next'

export default function Users(req: NextApiRequest, res: NextApiResponse) {
    const users = [
        {id: 1, name: 'Adam'},
        {id: 2, name: 'Isadora'}
    ]

    return res.json(users)
} 