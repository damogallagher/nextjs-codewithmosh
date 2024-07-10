import React from 'react'

interface Props {
    params: {
        userId: number
    }
}
const UserDetailPage = ({ params: { userId } }: Props) => {
    return (
        <div>
            UserDetailPage: {userId}
        </div>
    )
}

export default UserDetailPage
