import { useDispatch } from "react-redux";
import { optionsFilter } from "../../../utils/constants"
import { addUrlFilter } from "../../../redux/slices/productFilterSlice";
import { IoIosArrowDown } from '../../../utils/icons'
import { useState } from "react";

export const ProductFilterMenu = () => {
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

  const capitalize = (name) =>  name.charAt(0).toUpperCase() + name.slice(1) 

  return (
    <section className="p-4">
      <article>
        <button className="text-cyan-500 font-medium font-roboto cursor-pointer" onClick={handleReset}>Reset </button>
        
        {
          optionsFilter.map(item => (
            <div key={crypto.randomUUID()} className="flex flex-col items-between">
              
              <h4 className="flex flex-wrap justify-between items-center font-roboto font-medium text-lg mt-6">{capitalize(item?.name)}<IoIosArrowDown /></h4>
              <hr className="my-2 bg-gray-400 h-0.5"/>
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
      </article>
      
    </section>
  )
}
