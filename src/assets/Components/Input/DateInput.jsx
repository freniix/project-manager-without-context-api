import { useState } from "react";
const todayDate = new Date().toISOString().split("T")[0]
export default function DateInput({ref, children, ...props}){
   const [date, setDate] = useState(todayDate);

    return(
        <>
        <label htmlFor={children} className="block  w-8/10 text-xl font-semibold ">{children}</label>
    <input id={children} type="date" ref={ref} {...props } defaultValue={date} onChange={(e)=> setDate(e.target.value)}></input>
        </>
    )
}