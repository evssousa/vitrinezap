import type { Store } from "../types"

export const store: Store = {
    slug: "/",
    name: "Level Cards",
    whatsapp: "85991000000",
    products: [
        { 
            id: "1", 
            name: "Yu-Gi-Oh!", 
            price: 25, 
            available: true, 
            description: "Cartas colecionáveis de Yu-Gi-Oh!", 
            imageUrl: "https://picsum.photos/seed/yugioh/300/200" 
        },
        { 
            id: "2", 
            name: "Pokémon", 
            price: 15, 
            available: true,
            description: "Cartas colecionáveis de Pokémon",
            imageUrl: "https://picsum.photos/seed/pokemon/300/200"
        },
        { 
            id: "3", 
            name: "Magic", 
            price: 40, 
            available: false,
            description: "Cartas colecionáveis de Magic",
            imageUrl: "https://picsum.photos/seed/magic/300/200" 
        },
    ],
}