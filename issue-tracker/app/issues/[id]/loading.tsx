import Skeleton from '@/app/components/Skeleton';
import { Box, Card, Flex } from '@radix-ui/themes';

const LoadingIssueDetailPage = () => {

  return (
    <Box className='max-w-xl'>
      <Skeleton />
      <Flex gap='3' my='2'>
        <Skeleton width="5rem" />
        <Skeleton width="8rem"/>
      </Flex>
      <Card className='prose' mt="4">
        <Skeleton count={2} />
      </Card>
    </Box>
  )
}

export default LoadingIssueDetailPage
