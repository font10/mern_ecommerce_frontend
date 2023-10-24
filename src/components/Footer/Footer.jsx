import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from '../../utils/icons'

export const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 pb-8 w-full bg-gray-100">
      <div className="w-9/12 mx-auto flex items-center justify-center my-2 ">
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h2 className='text-xl font-medium'>FAQ</h2>
          <span className='font-md text-gray-600'>What we sell</span>
          <span className='font-md text-gray-600'>How can you order</span>
          <span className='font-md text-gray-600'>What currency we accept</span>
          <span className='font-md text-gray-600'>Privacy Policy</span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h2 className='text-xl font-medium'>About</h2>
          <p className="max-w-[500px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis imperdiet velit. 
            Proin in vehicula risus. Integer ut arcu egestas, viverra turpis a, suscipit lorem. 
            Sed lobortis non erat in rhoncus. Etiam ac congue leo. Quisque fringilla eros sit 
            amet leo fermentum, vel aliquet nulla accumsan.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-end h-full justify-start gap-3 p-5">
          <h2 className='text-xl font-medium'>Contact</h2>
          <div className="flex flex-wrap gap-2">
            <AiOutlineInstagram size={28} />
            <AiOutlineFacebook size={28} />
            <AiOutlineTwitter size={28} />
          </div>
        </div>
      </div>
    </div>
  )
}
