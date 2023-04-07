import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Create & Inspire. It's Toyesh</h1>
            <p className="pl-desc">
                Toyesh is a creative portfolio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget consequat purus. Nullam eget est felis. Quisque interdum lacus sed risus feugiat, vel iaculis velit commodo. Proin ac mi arcu

            </p>
        </div>
        <div className="pl-list">
        {products.map(item=>(
          <Product key={item.id} img={item.img} link = {item.link}/>
        ))}
        </div>
    </div>
  )
}

export default ProductList