
const Btn = ({ handleClick, children, classname=""}) => {
  return (
    <button
      className={` ${classname} font-semibold  cursor-pointer rounded-xl  transition-all  duration-150 `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Btn;
