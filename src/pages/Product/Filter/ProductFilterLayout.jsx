import { useDispatch } from "react-redux"
import { ProductsFilter, ProductFilterMenu } from "../../index"
import { addUrlFilter } from "../../../redux/slices/productFilterSlice"

export const ProductsFilterLayout = () => {
  const dispatch = useDispatch()
  dispatch(addUrlFilter(`/product/filter`))
  
  return (
    <div className="flex flex-col items-center w-10/12 mx-auto mt-14">
      <header>
        <h1 className="text-6xl text-gray-900 font-roboto font-semibold">Shop Now, Goodlook Later</h1>
      </header>

      <section className="flex flex-wrap gap-3 mt-10 w-full">
        <section className="w-full lg:w-2/12 bg-gray-50 rounded-md"><ProductFilterMenu /></section>
        <section className="w-full lg:flex-1"><ProductsFilter /></section>
      </section>
    </div>
  )
}

