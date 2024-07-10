import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: {
        userId: number
    }
}
const UserDetailPage = ({ params: { userId } }: Props) => {
    if (userId > 10) notFound();

    return (
        <div>
            UserDetailPage: {userId}
        </div>
    )
}

export default UserDetailPage
