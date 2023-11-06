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
      <p className="mt-8 font-medium text-lg text-gray-400 font-roboto tracking-wider">Lorem ipsum may be used as a placeholder before final copy as a placeholder is available</p>

      <section className="flex flex-wrap gap-3 mt-10 w-full">
        <section className="w-2/12 bg-gray-100"><ProductFilterMenu /></section>
        <section className="flex-1"><ProductsFilter /></section>
      </section>
    </div>
  )
}

