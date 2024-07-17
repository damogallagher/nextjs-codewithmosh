'use client'
import { Skeleton } from '@/app/components';
import { Issue, User } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
    issue: Issue
}
const AssigneeSelect = ({ issue }: Props) => {


    // START: Pre React Query
    //const [users, setUsers] = useState<User[]>([]);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const { data } = await axios.get<User[]>('/api/users');
    //         setUsers(data);
    //     }
    //     fetchUsers();
    // }, [])
    // END: Pre React Query

    const { data: users, error, isLoading } = useUsers();

    if (isLoading) return <Skeleton />
    if (error) return null;

    const assignIssue = (userId: string) => {
        let assignedToUserId = null;

        if (userId && userId !== "unassigned") 
            assignedToUserId = userId;

        axios.patch(`/api/issues/${issue.id}`, { assignedToUserId: assignedToUserId })
            .catch(() => {
                toast.error('Changes could not be saved')
            })
    }
    return (
        <>
            <Select.Root defaultValue={issue.assignedToUserId || ""} onValueChange={assignIssue}>
                <Select.Trigger placeholder="Assign..." />
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Suggestions</Select.Label>
                        <Select.Item value="unassigned">Unassigned</Select.Item>
                        {users?.map(user => (
                            <Select.Item key={user.id} value={user.id}>
                                {user.name}
                            </Select.Item>)
                        )}

                    </Select.Group>
                </Select.Content>
            </Select.Root>

            <Toaster></Toaster>
        </>
    )
}

const useUsers = () => useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get<User[]>('/api/users').then(res => res.data),
    staleTime: 60 * 60 * 1000, //60min ns,
    retry: 3
})

export default AssigneeSelect
