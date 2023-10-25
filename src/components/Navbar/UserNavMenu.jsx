import { useState } from "react";
import { route } from "../../models/route.model";
import profile from "../../assets/images/profile.png";
import { IoIosArrowDown, IoIosArrowUp, CgProfile, MdLogout } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/slices/authSlice'
import { Link, useNavigate } from "react-router-dom";

export const UserNavMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  const [modalUser, setModalUser] = useState(false);

  const menuModalUser = [
    { name: "Profile", icon: <CgProfile size={22} /> },
    { name: "Logout", icon: <MdLogout size={22} className="text-red-600" /> },
  ];
  
  const handleLogout = () => {
    dispatch(logout())
    navigate(route.root.path)
  }

  return (
    <div>
      <div className="flex flex-row gap-3 items-center ml-2">
        {user ? (
          <div className="flex flex-row gap-3 items-center ml-2">
            <img src={profile} width={30} alt="profile pic" />
            <span className="classes.username font-medium">
              {user && user.username}
            </span>
          </div>
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
      </div>
      { modalUser && (
        <div className="absolute top-[87px] right-36 bg-slate-100 w-[150px] h-24 rounded-md shadow-lg ">
          {menuModalUser.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="flex flex-row gap-3 items-center py-2 hover:bg-slate-200 cursor-pointer w-full p-5 mt-1"
              onClick={handleLogout}
            >
              {item.icon}
              <span className="text-md font-regular">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
