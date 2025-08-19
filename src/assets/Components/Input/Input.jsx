
export default function Input({tagType="input" ,ref, children,type, ...props}){
    const TagName = tagType==="textarea"? "textarea" : "input";
    return(
        <>
        <label htmlFor={children} className="block  w-8/10 text-xl font-semibold">{children}</label>
    <TagName id={children} type={type} ref={ref} {...props }></TagName>
        </>
    )
}