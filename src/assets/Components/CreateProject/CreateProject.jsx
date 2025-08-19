import React, { useRef } from "react";
import Btn from "../NewProject/Btn";
import CancelSave from "../CancelSave/CancelSave";
import Input from "../Input/Input";
import DateInput from "../Input/DateInput";

  function ShowError({ref}){
    return(
      <dialog ref={ref}   className="
    p-6 rounded-lg shadow-xl bg-white
    fixed top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
  ">
        <p className="font-semibold text-xl">Please fill all the details

        </p>
        <form method="dialog">
          <button className="px-5 py-2 text-xl bg-blue-300 rounded mt-5 text-purple cursor-pointer">close</button>
        </form>
      </dialog>
    )
  }
const CreateProject = ({ saveNewProject, cancel }) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const dateRef = useRef(null);
  const formRef = useRef(null);
  const dialogRef = useRef(null)
  function reset(){
    formRef.current.reset();
    cancel();
  }
  function handleSave(){
    if(!titleRef.current.value || !descRef.current.value) {
      dialogRef.current.showModal();
      return;
    }
    const date = new Date(dateRef.current.value);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    
    saveNewProject(titleRef.current.value, descRef.current.value , formattedDate);
    formRef.current.reset();
  }

  return (
    <section className="w-full h-full flex flex-col ">
      <ShowError ref={dialogRef}/>
      <CancelSave>
        <Btn handleClick={reset}>Cancel</Btn>
        <Btn
          handleClick={handleSave}
          classname={
            "px-4 py-2 text-[var(--heading-text-dark)] bg-[var(--bg-light-dark)]"
          }
        >
          Save
        </Btn>
      </CancelSave>
      <form className="flex flex-col w-ful h-full  justify-center items-center gap-2 " ref={formRef}>
        <Input
          ref={titleRef}
          type="text"
          required
          className={
            "w-8/10 bg-[#fff] shadow focus:border-b h-8 px-3 outline-none border-gray-400 mb-10"
          }
        >
          Title
        </Input>
        <Input
          ref={descRef}
          type="text"
          required
          tagType="textarea"
          className={`resize-none w-8/10  bg-[#fff] shadow focus:border h-3/8 outline-none border-gray-400 p-2 mb-10`}
        >
          Description
        </Input>
        <DateInput
          ref={dateRef}
          className={
            "w-8/10 p-2 bg-[#fff] shadow focus:border-b h-8 outline-none border-gray-400  mb-10"
          }
        >
          Date
        </DateInput>
      </form>
    </section>
  );
};

export default CreateProject;
