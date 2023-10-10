/* eslint-disable react/prop-types */
import { BiPlus } from 'react-icons/bi'

const Panel = ({ title, children, isActive, onShow }) => {
  return (
    <div
      className={`bg-orange ${
        isActive ? 'h-fit' : 'h-30'
      }  rounded-xl py-4 px-3 duration-200 transition-h ease-in-out flex flex-col justify-center`}
    >
      <div
        className="flex justify-between items-center px-5 gap-x-3"
        onClick={onShow}
        

      >
        <h3 className="md:text-xl text-md font-bold">{title}</h3>
        <BiPlus className="text-3xl"></BiPlus>
      </div>
      {isActive && <p className="px-5 text-md text-slate-400 ">{children}</p>}
    </div>
  )
}

export default Panel
