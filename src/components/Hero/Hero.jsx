import { best_seller, new_arrival } from "../../assets/images"

export const Hero = () => {
  return (
    <section className='flex flex-col xl:flex-row gap-3 w-full'>
      <section className='flex flex-col xl:flex-row items-center bg-gray-100 p-8 rounded-xl w-full xl:w-8/12 pt-10'>
        <article className='w-full xl:w-7/12 font-roboto'>
          <h1 className='text-3xl font-semibold inline-block bg-gradient-to-b from-orange-600 to-orange-300 text-transparent bg-clip-text font-roboto tracking-widest'>NEW ARRIVAL!</h1>
          <h1 className='text-6xl font-semibold mt-6 font-roboto font-semibold leading-[4rem] py-3'>NIKECOURT AIR ZOOM VAPOR 11</h1>
          <p className='text-md py-5 font-medium text-slate-400 font-roboto tracking-widest'>In publishing and graphic design, lorem ipsum is a placeholder text commonly used</p>
          <button className='px-10 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-full text-md text-white tracking-widest'>View Product</button>
        </article>
        <figure className='w-5/12 p-5'>
          <img src={new_arrival} />
        </figure>
      </section>
      <section className='bg-orange-400 bg-opacity-20 p-8 rounded-xl w-full xl:w-4/12'>
        <article className='h-7/12 mt-6'>
          <h1 className='text-3xl font-semibold inline-block bg-gradient-to-b from-red-500 to-red-300 text-transparent bg-clip-text font-roboto tracking-wider'>BEST SELLER!</h1>
          <h1 className='text-6xl font-semibold font-roboto font-semibold leading-[4rem] py-3'>NIKE PEGASUS TURBO</h1>
        </article>
        <figure className='flex flex-row h-5/12 items-start mt-8'>
          <button className='px-6 py-3 rounded-full text-white bg-cyan-600 font-medium tracking-wider'>Details</button>
          <img src={best_seller} width={400} className='-mt-14 -ml-8 xl:-mt-20 ' />
        </figure>
      </section>
    </section>
  )
}
