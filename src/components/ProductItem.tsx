import type { Product } from "../types"

interface Props {
    product: Product
}

export default function ProductItem({ product }: Props) {
    return (
        <article className={product.available ? "card" : "card card--indisponivel"}>
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <strong>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
            {!product.available && <strong className="badge">Indisponível</strong>}
        </article>
    )
}