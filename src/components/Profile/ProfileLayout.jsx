import { Profile } from '../../pages/index'

export const ProfileLayout = () => {
  return (
    <div className='w-8/12 mx-auto mt-10'>
      <section className='flex flex-row justify-center w-full mx-auto'>
        <Profile />
      </section>
      <section className="flex flex-row">
        Form Edit User<br/>
        Get Orders
      </section>
    </div>
  )
}
