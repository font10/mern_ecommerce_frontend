import { payments } from "../../utils/constants"
import { PaymentList } from "./PaymentList"

export const Payment = () => {
  return (
    <section className="mt-8">
      <header>
        <h2 className="text-xl font-medium font-roboto">Payments</h2>
        <PaymentList payments={payments} />
      </header>
    </section>
  )
}
