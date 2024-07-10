import React from 'react'

interface Props {
  params: {
    userId: number;
    photoId: number
  }
}
const PhotoDetailPage = ({ params: { userId, photoId } }: Props) => {
  return (
    <div>
      PhotoDetailPage: {userId} {photoId}
    </div>
  )
}

export default PhotoDetailPage
