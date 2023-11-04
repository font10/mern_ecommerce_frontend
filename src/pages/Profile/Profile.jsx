import { useSelector } from "react-redux"
import { account_manager, comments, orders, profile } from "../../assets/images/index"
import { CommentsProfile, ProfileUserForm } from "../../components"
import { useState } from "react"
import { Orders } from "../index"

export const Profile = () => {
  const [isAccountTab, setIsAccountTab] = useState()
  const { user } = useSelector(state => state.auth)

  return (
    <div className="flex flex-row justify-center w-full">
      <section className="flex flex-col items-center  lg:min-w-[650px]">
        <img src={profile} width={100} alt="" />
        <p className="mt-4 font-roboto font-medium text-xl">{user?.username}</p>
        <section className="flex flex-row justify-between w-full items-center mt-3">
          <article 
            className="flex flex-row gap-2 justify-center items-center bg-gray-200 w-full rounded-tl-full rounded-bl-full py-2.5 font-roboto text-md font-medium cursor-pointer"
            onClick={() => setIsAccountTab(true)}
          >
            Account <img src={account_manager} width={20} alt="icon account" /> 
          </article>
          <article 
            className="flex flex-row gap-2 justify-center items-center bg-gray-200 w-full rounded-tr-full rounded-br-full py-2.5 font-roboto text-md font-medium cursor-pointer"
            onClick={() => setIsAccountTab(false)}
          >
            Comments <img src={comments} width={20} alt="icon account" /> 
          </article>
        </section>

        { isAccountTab ? <ProfileUserForm /> : <CommentsProfile /> }
      </section>
    </div>
  )
}


/*
<section className="flex flex-row justify-between w-full items-center mt-3">
          <article 
            className="flex flex-row gap-2 justify-center items-center bg-gray-200 w-full rounded-tl-full rounded-bl-full py-2.5 font-roboto text-md font-medium cursor-pointer"
            onClick={() => setIsAccountTab(true)}
          >
            Account <img src={account_manager} width={20} alt="icon account" /> 
          </article>
          <article 
            className="flex flex-row gap-2 justify-center items-center bg-gray-200 w-full py-2.5 font-roboto text-md font-medium cursor-pointer"
            onClick={() => setIsAccountTab(false)}
          >
            Orders <img src={orders} width={20} alt="icon account" /> 
          </article>
          <article 
            className="flex flex-row gap-2 justify-center items-center bg-gray-200 w-full rounded-tr-full rounded-br-full py-2.5 font-roboto text-md font-medium cursor-pointer"
            onClick={() => setIsAccountTab(false)}
          >
            Comments <img src={orders} width={20} alt="icon account" /> 
          </article>
        </section>
*/