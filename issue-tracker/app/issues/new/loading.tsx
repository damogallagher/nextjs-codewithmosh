import { Box } from '@radix-ui/themes'
import React from 'react'
import Skeleton from '@/app/components/Skeleton';

const LoadingNewIssuePage = () => {
  return (
    <div>
      <Box className='max-w-xl'>
        <Skeleton />
        <Skeleton height="20rem"/>
      </Box>
    </div>
  )
}

export default LoadingNewIssuePage
