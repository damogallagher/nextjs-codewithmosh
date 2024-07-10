import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";

interface Props {
    params: { productId: number }
}

export function GET(request: NextRequest, { params }: Props) {
    if (params.productId > 10)
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })

    return NextResponse.json({ id: 1, name: 'Milk', price: 1.39 })
}

export async function PUT(request: NextRequest, { params }: Props) {
    const body = await request.json();
    const validation = productSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })

    if (params.productId > 10)
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })


    return NextResponse.json({ id: 1, name: body.name })
}

export function DELETE(request: NextRequest, { params }: Props) {
    if (params.productId > 10)
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })

    return NextResponse.json({})
}