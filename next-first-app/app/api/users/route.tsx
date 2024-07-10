
import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";
import prismaClient from "@/prisma/client";

export async function GET(request: NextRequest) {
    const users = await prismaClient.user.findMany()
    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = userSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })


    const user = await prismaClient.user.findUnique({
        where: {
            email: body.email
        }
    })

    if (user)
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });

    const newUser = await prismaClient.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(newUser, { status: 201 });
}