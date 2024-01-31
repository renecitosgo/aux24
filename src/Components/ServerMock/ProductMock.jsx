
export const products = [
    {
        id: 1,
        name: "BATERIA 12 V 75 A",
        stock: 20,
        category: "AUTO",
        price: 86200,
        marca: "TRIFASE",
        description: "BATERIA 12 X 75 A 500 CCA LIBRE GARANTIA 1 AÑO",
        img: "http://localhost:3000/Images/modelosdeBaterias/img12x75.jpeg"

    },
    {
        id: 2,
        name: "BATERIA 12 V 85 A",
        stock: 50,
        category: "AUTO",
        price: 94800,
        marca: "TRIFASE",
        description:"BATERIA 12 X 85 A 550 CCA LIBRE GARANTIA 1 AÑO",
        img:"http://localhost:3000/Images/modelosdeBaterias/img12x85.jpeg"
    },
    {
        id: 3,
        name: "BATERIA 12 V 90 A",
        stock: 5,
        category: "CAMIONETA",
        price: 135700,
        marca: "TRIFASE",
        description: "BATERIA 12 X 90 A 750 CCA LIBRE GARANTIA 1 AÑO",
        img: "http://localhost:3000/Images/modelosdeBaterias/img12x90.jpeg"
    },
    {
        id: 4,
        name: "BATERIA 12 V 110 A",
        stock: 20,
        category: "MAQUINARIA",
        price: 131600,
        marca: "TRIFASE",
        description:"BATERIA 12 X 110 A 800 CCA LIBRE GARANTIA 1 AÑO",
        img: "http://localhost:3000/Images/modelosdeBaterias/img12x110.jpeg"
    },
    {
        id: 5,
        name: "BATERIA 12 V 120 A",
        stock: 5,
        category: "TRACTOR",
        price: 151000,
        marca: "TRIFASE",
        description:"BATERIA 12 X 120 A 850 CCA LIBRE GARANTIA 1 AÑO",
        img:"http://localhost:3000/Images/modelosdeBaterias/img12x120.jpeg"
    },
    {
        id: 6,
        name: "BATERIA 12 V 180 A",
        stock: 20,
        category: "CAMION",
        price: 213500,
        marca: "TRIFASE",
        description:"BATERIA 12 X 180 A 1000 CCA LIBRE GARANTIA 1 AÑO",
        img:"http://localhost:3000/Images/modelosdeBaterias/img12x180.jpeg"
    }
]

export const getProducts = ()=>{
    return new Promise ((resolve, reject)=>{
        if (products.length === 0){
            reject (new Error("No hay productos"))
        }
        setTimeout (()=>{
            resolve(products)
        }, 500)
    })

}




