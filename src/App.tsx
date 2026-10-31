import ProductItem from "./components/ProductItem"
import { store } from "./data/store"
import "./App.css"

export default function App() {
  return (
    <>
      <h1>{store.name}</h1>
      <section className="grid">
        {store.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>

      <p>Contato: {store.whatsapp}</p>
    </>
  )
}