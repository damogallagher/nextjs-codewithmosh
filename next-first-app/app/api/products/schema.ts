import { z } from 'zod';

const productSchema = z.object({
    name: z.string().min(3),
    price: z.number().min(1).max(100)
    // email: z.string().email(),
    // age: z.number()
})

export default productSchema;
