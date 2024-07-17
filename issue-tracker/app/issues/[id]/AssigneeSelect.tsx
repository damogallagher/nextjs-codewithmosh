'use client'
import { Issue, User } from '@prisma/client';
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Skeleton } from '@/app/components';

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

    const { data: users, error, isLoading } = useQuery<User[]>({
        queryKey: ['users'],
        queryFn: () => axios.get<User[]>('/api/users').then(res => res.data),
        staleTime: 60 * 1000, //60s,
        retry: 3
    });

    if (isLoading) return <Skeleton />
    if (error) return null;

    return (
        <Select.Root defaultValue={issue.assignedToUserId || ""} onValueChange={(userId) => {
            axios.patch(`/api/issues/${issue.id}`, { assignedToUserId: userId || null })
        }}>
            <Select.Trigger placeholder="Assign..." />
            <Select.Content>
                <Select.Group>
                    <Select.Label>Suggestions</Select.Label>
                    <Select.Item value="">Unassigned</Select.Item>
                    {users?.map(user => (
                        <Select.Item key={user.id} value={user.id}>
                            {user.name}
                        </Select.Item>)
                    )}

                </Select.Group>
            </Select.Content>
        </Select.Root>
    )
}

export default AssigneeSelect
