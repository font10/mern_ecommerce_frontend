import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from '../../utils/icons'

export const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-gray-100 mt-10">
      <section className="w-9/12 mx-auto flex items-center justify-center my-2 ">
        <nav className="flex flex-1 flex-col gap-3 p-5">
          <h2 className='text-xl font-medium'>FAQ</h2>
          <span className='font-md text-gray-600'>What we sell</span>
          <span className='font-md text-gray-600'>How can you order</span>
          <span className='font-md text-gray-600'>What currency we accept</span>
          <span className='font-md text-gray-600'>Privacy Policy</span>
        </nav>
        <section className="flex flex-1 flex-col items-end h-full justify-start gap-3 p-5">
          <h2 className='text-xl font-medium'>Contact</h2>
          <aside className="flex flex-wrap gap-2">
            <AiOutlineInstagram size={28} />
            <AiOutlineFacebook size={28} />
            <AiOutlineTwitter size={28} />
          </aside>
        </section>
      </section>
    </footer>
  )
}
