// import {useState} from 'react'
import "./card.css"
export default function Card({data, id, handleClick}) {
	
	const stateClass = data.state ? " active " + data.state : " " 
	return (
		<div className={` card cursor-pointer  rounded-xl  hover:shadow-md transition-all duration-300 [perspective:1000px] relative aspect-square border-pumpkin-200  " ${stateClass}`} 
		onClick={() => handleClick(id)} >
			<div className="front  rounded-xl  absolute bg-slate-200 flex justify-center items-center inset-0 [transform-style:preserve-3d] md:text-7xl text-4xl ">
				<span className="rounded-full leading-none  p-0.5 md:p-2 bg-slate-100">
					{data.emoji}
				</span>
			</div>
			<div className="back  rounded-xl  flex justify-center absolute inset-0 bg-pumpkin-400 items-center ">
				<span className="w-5 h-5 md:w-8 md:h-8 transform skew-x-6 rotate-45 bg-white"></span>
			</div>
		</div>
	)
}
