import { useSelector } from "react-redux"
import { profile } from "../../assets/images/index"
import { CommentsProfile, ProfileUserForm } from "../../components"
import { useState } from "react"
import { profileTabs } from "../../utils/constants"
import { Orders } from "../Orders/Orders"

export const Profile = () => {
  const [isAccountTab, setIsAccountTab] = useState(0)
  const { user } = useSelector(state => state.auth)

  const tabBody = () => {
    if(isAccountTab === 0) return <ProfileUserForm />
    else if(isAccountTab === 1) return <Orders />
    else return <CommentsProfile />
  }

  return (
    <div className="flex flex-row justify-center w-full">
      <section className="flex flex-col items-center lg:min-w-[650px]">
        <img src={profile} width={100} alt="" />
        <p className="mt-4 font-roboto font-medium text-xl">{user?.username}</p>
        <section className="flex flex-row justify-between items-center mt-3">
          {
            profileTabs.map((tab, index) => (
              <article
                key={tab.id}
                className={`${ isAccountTab === index ? 'text-blue-500' : 'text-gray-800' } flex flex-row gap-2 justify-center items-center w-full px-5 rounded-sm py-2.5 font-roboto text-md font-medium cursor-pointer`}
                onClick={() => setIsAccountTab(index)}
              >
                {tab.title} <img src={tab.img} width={20} alt="icon account" /> 
              </article>
            ))
          }
        </section>
        <section>
          { tabBody() }
        </section>
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