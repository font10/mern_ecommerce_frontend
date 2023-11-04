//import { useSelector } from "react-redux"
import { Address } from "../../pages/index"
import { Payment } from "../../components"
import { ResumeCart } from "../../components/ResumeCart/ResumeCart"

export const Checkout = () => {

  return (
    <div className="flex flex-row w-8/12 mx-auto mt-20 gap-3">
      <section className="w-8/12 h-full p-8">
        <Address />
        <Payment />
      </section>
      <section className="border border-gray-200 mt-8 w-4/12 h-full">
        <ResumeCart />
      </section>
    </div>
  )
}
