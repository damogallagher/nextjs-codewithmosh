
import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Mosh' },
        { id: 2, name: 'David' }]
    )
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = userSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })


    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}