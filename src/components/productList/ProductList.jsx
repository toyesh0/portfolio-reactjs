import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Explore a collection of inspiring projects that showcase my passion for web development and innovative technologies. Each project represents a unique opportunity to learn, grow, and push the boundaries of what is possible. Join me on this journey of creativity and discovery as we bring ideas to life through code.
        </p>

      </div>
      <div className="pl-list">
        {products.map(item => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProductList