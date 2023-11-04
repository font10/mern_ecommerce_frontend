import { no_orders } from "../../assets/images/index"

export const NoOrders = () => {
  return (
    <section className="flex flex-col mx-auto justify-center items-center w-full">
      <img src={no_orders} alt="icon no orders" width={320} />
      <h1 className="w-full flex font-roboto text-2xl font-medium justify-center w-full">No orders yet</h1>
      <p className="text-[14px] text-gray-600 font-roboto mt-1">You have not placed an order yet. Please add items to your cart and checkout when you are ready</p>
    </section>
  )
}
