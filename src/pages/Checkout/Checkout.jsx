//import { useSelector } from "react-redux"
import { Address } from "../../pages/index"
import { Payment } from "../../components"

export const Checkout = () => {
  //const { address } = useSelector(state => state.address)
  /*const { products } = useSelector(state => state.cart)

  const totalPriceProducts = () => {
    let totalPrice = 0
    products.map(product => totalPrice += (product.price * product.quantity))
    return totalPrice.toFixed(2)
  }

  const getItemPriceQuantity = (quantity, price) => {
    return quantity * price
  }*/

  return (
    <div className="flex flex-row w-8/12 mx-auto mt-20 gap-3">
      <section className="w-8/12 h-full p-8">
        <Address />
        <Payment />
      </section>
      <section className="bg-red-100 w-4/12 h-full">
        Cart
      </section>
    </div>
  )
}

/*
<div className="flex justify-content gap-10 w-full h-full">
        <div className="flex flex-col items-start ml-8">
          <h1 className="text-2xl font-medium">Address Data</h1>
          <div className="">
            {
              Object.entries(address).map(([property, value]) => (
                <div key={property} className="flex items-center gap-2 m-1 text-md">
                  <h3 className="font-medium text-md">{property}:</h3>
                  <span className="text-md">{value}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-medium">Products</h1>
          <div className="flex flex-col gap-4 overflow-y-auto mt-3">
            {
              products && products.map(product => (
                <div key={product.id} className="flex gap-3 w-10712 relative">
                  <Link to={`${route.product.productDetail.path}/${product.id}`}>
                    <img src={`http://localhost:5000/images/` + product?.mainImg.split('___').splice(1)}
                      className="w-48"
                    />
                  </Link>
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between items-center mt-1">
                      <span className="text-xl font-medium">{product.title}</span>
                    </div>

                    <div className="flex flex-row justify-between gap-3 w-full mt-1">
                      <span className="flex flex-row text-md mt-1">{product.quantity} x {product.price} €</span>
                      <span className="flex flex-row text-lg">{getItemPriceQuantity(product.quantity, product.price)} €</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="flex flex-wrap text-lg font-medium gap-2 mt-5">
            Total price of products:
            <div className="">{totalPriceProducts()} €</div>
          </div>
          <Link to={route.final.path} className="flex justify-center w-3/12 px-4 py-2 bg-cyan-600 text-white font-medium mt-5 rounded-md">Order</Link>
        </div>
      </div>
*/
