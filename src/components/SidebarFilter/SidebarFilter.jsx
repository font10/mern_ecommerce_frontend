import { useDispatch } from "react-redux"
import { useRef, useState } from "react"
import { useSidebarCartClose } from "../../hooks/useSidebarCartClose"
import { CiCircleRemove } from "react-icons/ci"
import { optionsFilter } from "../../utils/constants"
import { addUrlFilter, toggleShowSidebar } from "../../redux/slices/productFilterSlice"

export const SidebarFilter = () => {
  const dispatch = useDispatch()
  const ref = useRef()
  useSidebarCartClose(ref)
  const handleCloseSidebar = () => dispatch(toggleShowSidebar())

  const [checked, setChecked] = useState('')

  const handleReset = () => {
    dispatch(addUrlFilter(`/product/filter`)) 
  }

  const handleFilter = (e) => {
    const { name, value } = e.target
    setChecked(value)
    dispatch(addUrlFilter(`/product/filter?${name}=${value}`)) 
  }
  
  const capitalize = (name) =>  name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <aside ref={ref} className="block fixed bg-gray-50 shadow-2xl top-0 h-screen right-0 w-8/12 md:w-5/12 xl:w-3/12 z-20" >
    <section className="w-full px-6 py-5 h-full">
      
      <CiCircleRemove onClick={handleCloseSidebar} className="absolute top-5 right-5 cursor-pointer" size={24} />
      
      <header>
        <h2 className="flex justify-center text-2xl font-medium">Filters</h2>
      </header>
      
      <button className="text-cyan-500 font-medium font-roboto cursor-pointer mt-8" onClick={handleReset}>Reset filters </button>
      <section className="flex flex-col gap-3 mt-5 w-full">
      {
          optionsFilter.map(item => (
            <div key={crypto.randomUUID()} className="flex flex-col items-between">
              
              <h4 className="flex flex-wrap justify-between items-center font-roboto font-medium text-xl">{capitalize(item?.name)}</h4>
              <hr className="my-2 bg-gray-100 h-0.5"/>
              { item.options.map(option => (
                <div key={option} className="flex flex-row">
                  <input 
                      className="mr-1.5 h-4 w-4"
                      checked={checked === option ? true : false}
                      id={option}
                      name={item.name} 
                      onChange={(e) => handleFilter(e)} 
                      type="radio" 
                      value={option} 
                    />
                    <span className="font-roboto text-[15px] font-medium text-gray-700">{option}</span>
                </div>
              ))}
            </div>
          ))
        }
      </section>
          
      
    </section>
  </aside>
  )
}
