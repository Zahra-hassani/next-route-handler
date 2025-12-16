import { redirect } from "next/navigation";


export async function GET(){
    redirect("newproducts");
    const products = [
        {
            id: 1,
            name: "FaceWash milk",
            price: 120
        },
        {
            id: 2,
            name: "FaceWash cocumber",
            price: 150
        },
        {
            id: 3,
            name: "FaceWash Aloe vera",
            price: 100
        },
        {
            id: 4,
            name: "FaceWash Donkey milk",
            price: 120
        },
    ]
    return Response.json(products);
}