import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link';
import { Metadata } from 'next';


interface Props {
  searchParams: {
    sortOrder: string;
  }
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {


  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className='btn'>New User</Link>
      <p>{new Date().toLocaleTimeString()}</p>

      <Suspense fallback={<p>Loading...</p> }>
        <UserTable sortOrder={sortOrder} />
      </Suspense>

    </>
  )
}

export default UsersPage

export const metadata: Metadata = {
  title: "Users Page"
}