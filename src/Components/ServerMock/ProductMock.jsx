
export const products = [
    {
        id: 1,
        name: "BATERIA 12 V 75 A",
        stock: 20,
        category: "BATERIAS",
        price: 86200,
        marca: "TRIFASE",
        description: "BATERIA AUTO 12 X 75 A 500 CCA LIBRE GARANTIA 1 AÑO",
        img: "http://localhost:3000/Images/modelosdeBaterias/img12x75.jpeg"

    },
    {
        id: 2,
        name: "BATERIA 12 V 85 A",
        stock: 50,
        category: "BATERIAS",
        price: 94800,
        marca: "TRIFASE",
        description:"BATERIA AUTO 12 X 85 A 550 CCA LIBRE GARANTIA 1 AÑO",
        img:"http://localhost:3000/Images/modelosdeBaterias/img12x85.jpeg"
    },
    {
        id: 3,
        name: "BATERIA 12 V 90 A",
        stock: 5,
        category: "BATERIAS",
        price: 135700,
        marca: "TRIFASE",
        description: "BATERIA CAMIONETA 12 X 90 A 750 CCA LIBRE GARANTIA 1 AÑO",
        img: "http://localhost:3000/Images/modelosdeBaterias/img12x90.jpeg"
    },
    {
        id: 4,
        name: "BATERIA 12 V 110 A",
        stock: 20,
        category: "BATERIAS",
        price: 131600,
        marca: "TRIFASE",
        description:"BATERIA MAQUINARIA 12 X 110 A 800 CCA LIBRE GARANTIA 1 AÑO",
        img: "http://localhost:3000/Images/modelosdeBaterias/img12x110.jpeg"
    },
    {
        id: 5,
        name: "BATERIA 12 V 120 A",
        stock: 5,
        category: "BATERIAS",
        price: 151000,
        marca: "TRIFASE",
        description:"BATERIA TRACTOR 12 X 120 A 850 CCA LIBRE GARANTIA 1 AÑO",
        img:"http://localhost:3000/Images/modelosdeBaterias/img12x120.jpeg"
    },
    {
        id: 6,
        name: "BATERIA 12 V 180 A",
        stock: 20,
        category: "BATERIAS",
        price: 213500,
        marca: "AUX24",
        description:"BATERIA CAMION 12 X 180 A 1000 CCA LIBRE GARANTIA 1 AÑO",
        img:"http://localhost:3000/Images/modelosdeBaterias/img12x180.jpeg"
    },
    {   id: 7,
        name: "Auxilios Inmediatos",
        stock: 1,
        category: "emergencias&auxilios",
        price: 50000,
        marca: "AUX24",
        description:"En menos de 50 minutos estamos a donde nos indiques",
        img:"http://localhost:3000/Images/fotosServicios/personaAlLadodeAutoQuedado.jpg"

    },
    {id: 8,
        name: "Auxilios Programados",
        stock: 4,
        category: "emergencias&auxilios",
        price: 20000,
        marca: "TRIFASE",
        description:"Programá tu auxilio con la fecha y hora que más te convenga",
        img:"http://localhost:3000/Images/fotosServicios/personalExaminandoCuestionesdeBateria.jpg"

    },
    {id: 9,
        name: "Membresía Gold",
        stock: 20,
        category: "quiero-ser-socio",
        price: 3000,
        marca: "AUX24",
        description:"PROGRAMÁ TU AUXILIO",
        img:"http://localhost:3000/Images/fotosServicios/membresíaGoldAux24.jpg"

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

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === productId);
            console.log('getProductById response:', product);
            resolve(product);
        }, 500);
    });
}


export const getProductsByCategory = (category) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            const productsByCategory = products.filter(prod => prod.category.toLowerCase() === category.toLowerCase())
            if (productsByCategory.length > 0){
                resolve(
                    productsByCategory
                )
            } else {
                reject (new Error (`No hay productos en la categoría ${category}`))
            }
        }, 500)
    })
}




