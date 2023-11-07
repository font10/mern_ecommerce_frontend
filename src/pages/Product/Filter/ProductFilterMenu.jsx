import { useDispatch, useSelector } from "react-redux";
import { optionsFilter } from "../../../utils/constants"
import { addUrlFilter, toggleShowSidebar } from "../../../redux/slices/productFilterSlice";
import { useState } from "react";
import { SidebarFilter } from "../../../components/SidebarFilter/SidebarFilter";
import { FaFilter } from '../../../utils/icons'

export const ProductFilterMenu = () => {
  const { showSidebar } = useSelector(state => state.productfilter)
  const [checked, setChecked] = useState('')
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    const { name, value } = e.target
    setChecked(value)
    dispatch(addUrlFilter(`/product/filter?${name}=${value}`)) 
  }

  const handleReset = () => {
    dispatch(addUrlFilter(`/product/filter`)) 
  }

  const handleToggleSidebar = () => {
    dispatch(toggleShowSidebar())
  }

  const capitalize = (name) =>  name.charAt(0).toUpperCase() + name.slice(1) 

  return (
    <section className="p-4">
      <article>
        <button className="flex lg:hidden px-6 py-2 border border-gray-300 rounded-md flex flex-wrap gap-2 items-center" onClick={handleToggleSidebar}><FaFilter />Filters</button>
        <button className="hidden lg:flex text-cyan-500 font-medium font-roboto cursor-pointer mt-0 lg:mt-8" onClick={handleReset}>Reset filters </button>
        { showSidebar && <SidebarFilter />}
        <section className="hidden lg:flex lg:flex-col">
          {
            optionsFilter.map(item => (
              <div key={crypto.randomUUID()} className="flex flex-col items-between">
                
                <h4 className="flex flex-wrap justify-between items-center font-roboto font-medium text-xl mt-6">{capitalize(item?.name)}</h4>
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
      </article>
      
    </section>
  )
}
