import { useState } from "react";
import { route } from "../../models/route.model";
import profile from "../../assets/images/profile.png";
import { IoIosArrowDown, IoIosArrowUp } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/slices/authSlice'
import { Link } from "react-router-dom";
import { menuModalUser } from "../../utils/constants";

export const UserNavMenu = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  const [modalUser, setModalUser] = useState(false);
  
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <section className="flex flex-row gap-3 items-center ml-2">
        {user ? (
          <figure className="flex flex-row gap-3 items-center ml-2">
            <img src={profile} width={30} alt="profile pic" />
            <figcaption className="classes.username font-medium">
              {user && user.username}
            </figcaption>
          </figure>
        ) : (
          <Link
            to={route.login.path}
            className="px-4 py-2 bg-cyan-500 font-medium rounded-md  text-white cursor-pointer"
          >
            Login
          </Link>
        )}
        {modalUser ? (
          <IoIosArrowUp
            className="cursor-pointer"
            onClick={() => setModalUser(!modalUser)}
          />
        ) : (
          <IoIosArrowDown
            className="cursor-pointer"
            onClick={() => setModalUser(!modalUser)}
          />
        )}
      </section>
      { modalUser && (
        <section className="absolute top-[87px] right-36 bg-slate-100 w-[150px] h-24 rounded-md shadow-lg ">
          {menuModalUser.map((item) => (
            <Link
              to={item.path}
              key={crypto.randomUUID()}
              className="flex flex-row gap-3 items-center py-2 hover:bg-slate-200 cursor-pointer w-full p-5 mt-1"
              onClick={ item.name === 'Logout' && handleLogout }
            >
              {item.icon}
              <span className="text-md font-regular">{item.name}</span>
            </Link>
          ))}
        </section>
      )}
    </>
  );
};
