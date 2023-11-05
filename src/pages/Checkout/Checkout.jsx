//import { useSelector } from "react-redux"
import { Address } from "../../pages/index"
import { Payment } from "../../components"
import { ResumeCart } from "../../components/ResumeCart/ResumeCart"

export const Checkout = () => {

  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-8/12 mx-auto mt-20 gap-3">
      <section className="w-full lg:w-8/12 h-full p-8">
        <Address />
        <Payment />
      </section>
      <section className="p-8 w-full lg:w-4/12 h-full">
        <ResumeCart />
      </section>
    </div>
  )
}
