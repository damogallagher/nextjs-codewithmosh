import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";
import prismaClient from "@/prisma/client";

interface Props {
    params: { userId: string }
}

export async function GET(request: NextRequest, { params }: Props) {

    const user = await prismaClient.user.findUnique({
        where: { id: parseInt(params.userId) }
    })

    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    

    return NextResponse.json(user)
}

export async function PUT(request: NextRequest, { params }: Props) {
    const body = await request.json();
    const validation = userSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })


    const user = await prismaClient.user.findUnique({
        where: {
            id: parseInt(params.userId)
        }
    })

    if (!user)
        return NextResponse.json({ error: 'User does not exist' }, { status: 404 });

    const updatedUser = await prismaClient.user.update({
        where: {
            id: user.id
        },
        data: {
            name: body.name,
            email: body.email
        }
    })


    return NextResponse.json(updatedUser)
}

export async function DELETE(request: NextRequest, { params }: Props) {

    const user = await prismaClient.user.findUnique({
        where: {
            id: parseInt(params.userId)
        }
    })

    if (!user)
        return NextResponse.json({ error: 'User does not exist' }, { status: 404 });

    await prismaClient.user.delete({
        where: {
            id: parseInt(params.userId)
        }
    })

    return NextResponse.json({})
}