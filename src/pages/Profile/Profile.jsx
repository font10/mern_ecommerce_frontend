import { useSelector } from "react-redux"
import { profile } from "../../assets/images/index"
import { ProfileUserForm } from "../../components"

export const Profile = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <div className="flex flex-row justify-center w-full">
      <section className="flex flex-col items-center">
        <img src={profile} width={100} alt="" />
        <p className="mt-4 font-roboto font-medium text-md">{user?.email}</p>
        <ProfileUserForm />
      </section>
    </div>
  )
}
