export async function GET(){
    const newProducts = [
        {
            id: 1,
            name: "Apple",
            price: 100
        },
        {
            id: 2,
            name: "Pear",
            price: 70
        },
        {
            id: 3,
            name: "Pine Apple",
            price: 230
        },
        {
            id: 4,
            name: "Banana",
            price: 200
        },
        {
            id: 5,
            name: "Kiwi",
            price: 210
        },
        {
            id: 6,
            name: "Water melon",
            price: 120
        },
        {
            id: 7,
            name: "Melon",
            price: 80
        },
        {
            id: 8,
            name: "Peach",
            price: 40
        },
        {
            id: 9,
            name: "Grape",
            price: 60
        },
        {
            id: 10,
            name: "Mango",
            price: 120
        },
        {
            id: 11,
            name: "Orange",
            price: 50
        },
        {
            id: 12,
            name: "Sour Cherry",
            price: 90
        },
    ]
    return Response.json(newProducts);
}