import prisma from '@/prisma/client';
import { Box, Flex, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import EditIssueButton from './ EditIssueButton';
import IssueDetails from './IssueDetails';
import DeleteIssueButton from './DeleteIssueButton';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/auth/authOptions';
import AssigneeSelect from './AssigneeSelect';
import { cache } from 'react';

interface Props {
    params: { id: string }
}

// const fetchIssue = cache(async (issueId: number) => {
//     return await prisma.issue.findUnique({
//         where: {
//             id: issueId
//         }
//     })
// }) 
const fetchIssue = cache((issueId: number) => prisma.issue.findUnique({where: { id: issueId}})) 

const IssueDetailPage = async ({ params }: Props) => {
    //console.log(typeof params.id)
    //if (typeof params.id !== 'number') notFound();

    const session = await getServerSession(authOptions);

    const issue = await fetchIssue(parseInt(params.id))

    if (!issue) notFound();

    return (
        <Grid columns={{ initial: "1", sm: "5" }} gap="5">
            <Box className='md:col-span-4'>
                <IssueDetails issue={issue} />
            </Box>
            {session &&
                <Box className='md:col-span-1'>
                    <Flex direction="column" gap="4">
                        <AssigneeSelect issue={issue} />
                        <EditIssueButton issueId={issue.id} />
                        <DeleteIssueButton issueId={issue.id} />
                    </Flex>
                </Box>}
        </Grid>
    )
}

export async function generateMetadata({ params }: Props) {
    const issue = await fetchIssue(parseInt(params.id))

    if (!issue)
        return {
            title: 'Issue Detail Page',
            description: 'Details for the selected issue'
        }

    return {
        title: issue.title,
        description: 'Details of issue ' + issue.id
    }
}

export default IssueDetailPage
