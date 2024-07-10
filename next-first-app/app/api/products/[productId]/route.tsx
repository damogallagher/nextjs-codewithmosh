import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";
import prismaClient from "@/prisma/client";

interface Props {
    params: { productId: string }
}

export async function GET(request: NextRequest, { params }: Props) {
    const product = await prismaClient.product.findUnique({
        where: { id: parseInt(params.productId) }
    })

    if (!product)
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })


    return NextResponse.json(product)
}

export async function PUT(request: NextRequest, { params }: Props) {
    const body = await request.json();
    const validation = productSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })

    const product = await prismaClient.product.findUnique({
        where: {
            id: parseInt(params.productId)
        }
    })

    if (!product)
        return NextResponse.json({ error: 'Product does not exist' }, { status: 404 });

    const updatedProduct = await prismaClient.product.update({
        where: {
            id: product.id
        },
        data: {
            name: body.name,
            price: body.price
        }
    })


    return NextResponse.json(updatedProduct)
}

export async function DELETE(request: NextRequest, { params }: Props) {
    const product = await prismaClient.product.findUnique({
        where: {
            id: parseInt(params.productId)
        }
    })

    if (!product)
        return NextResponse.json({ error: 'Product does not exist' }, { status: 404 });

    await prismaClient.product.delete({
        where: {
            id: parseInt(params.productId)
        }
    })

    return NextResponse.json({})
}