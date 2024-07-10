import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Milk', price: 1.99 },
        { id: 2, name: 'Bread', price: 299 },
        { id: 3, name: 'Eggs', price: 3.07 },
    ]
    )
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = productSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })


    return NextResponse.json({ id: 1, name: body.name, price: body.price }, { status: 201 });
}
