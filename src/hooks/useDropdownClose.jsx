import { useEffect, useState } from "react";

export const useDropdownClose = ( ref ) => {
  
  const [modalUser, setModalUser] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (modalUser && !ref.current.contains(e.target)) {
        setModalUser(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [modalUser])

  return { modalUser, setModalUser }
}
