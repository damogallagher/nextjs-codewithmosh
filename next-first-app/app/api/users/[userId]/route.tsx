import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";

interface Props {
    params: { userId: number }
}

export function GET(request: NextRequest, { params }: Props) {
    if (params.userId > 10)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json({ id: 1, name: 'Mosh' })
}

export async function PUT(request: NextRequest, { params }: Props) {
    const body = await request.json();
    const validation = userSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })

    if (params.userId > 10)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })


    return NextResponse.json({ id: 1, name: body.name })
}

export function DELETE(request: NextRequest, { params }: Props) {
    if (params.userId > 10)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json({})
}