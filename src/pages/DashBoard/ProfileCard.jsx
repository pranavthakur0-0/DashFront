import { useState } from "react";
import close from "../../images/close.svg";

export default function ProfileCard({setmenu, setprofile}) {
  const [second, setsecond] = useState(false);
  const [info, setinfo] = useState({
    name : "",
    email : "",
    phone : "",
    instalink : "",
    youtubelink : "",
});

  return (
    <div className="font-secondary absolute h-full w-full z-10 bg-[#00000080] top-0 left-0 flex justify-center items-center">
      <div className=" flex-1 max-w-[40rem] rounded-2xl bg-white p-[24px] flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-[#231F20] font-semibold">
            Add New Profile
          </h2>
          <button onClick={e=>setmenu(false)}>
            <img src={close} alt="close" />
          </button>
       
        </div>
        <div className="flex gap-12 text-lg  font-semibold">
            <div className="w-full text-center">
                Basic
                <div className={`h-1 flex flex-1 max-w-[30rem] ${second ? 'bg-line' : 'bg-lineActive'} mt-5`} ></div></div> 
            <div className="w-full text-center">
                {second ? "Social" : "Contact"}
            <div className={`h-1 flex flex-1 max-w-[30rem] ${second ? 'bg-lineActive' : 'bg-line'} mt-5`}></div></div>
        </div>
        <div className="gap-8 flex flex-col">
          {second ?
           <>
          <InputBox info={info} setinfo={setinfo} value={info.instalink} name="instalink" label="Instagram Link" optional={true} placeholder="..instagram.com/username" />
          <InputBox info={info} setinfo={setinfo} value={info.youtubelink} name="youtubelink" label="Youtube Link" optional={true} placeholder="..youtebe/username" />
          </> :  
          <>
          <InputBox info={info} setinfo={setinfo} value={info.name} name="name" label="Enter Name*" placeholder="John Doe" />
          <InputBox info={info} setinfo={setinfo} value={info.email} name="email" label="Enter Email*" placeholder="John@xyz.com" />
          <InputBox info={info} setinfo={setinfo} value={info.phone} name="phone" label="Enter Phone*" placeholder="9123456789" />
          </>}
        </div>
        <div className="flex justify-end gap-5">
          {second ? <>
            <button onClick={(e) => setsecond(false)} className="outline outline-1 outline-black rounded-[0.6rem] px-4 text-lg py-2 font-semibold">
                Back
            </button>
            <button onClick={(e) => {setprofile(info); setmenu(false);}} className="bg-newPorfileBt px-4 text-lg py-2 font-semibold text-white rounded-[0.6rem]">
             Done
            </button>
          </> : 
          <button onClick={(e) => setsecond(true)} className="bg-newPorfileBt px-4 text-lg py-2 font-semibold text-white rounded-[0.6rem]">
             Next
          </button>}
        </div>
      </div>
    </div>
  );
}


function InputBox({ label, name, placeholder, optional, value, setinfo, info }) {

    
    const handleChange = (e)=> {
      setinfo((prevInfo) => ({
        ...prevInfo,
        [e.target.name]: e.target.value,
      }));
    };
      return (
        <div className="flex flex-col gap-2">
          <label htmlFor={name}>
            {label}{" "}
            <span className="text-[#999CA0]">
              {optional ? "(Optional)" : null}
            </span>
          </label>
          <input
            value={value}
            name={name}
            onChange={handleChange}
            placeholder={`Eg. ${placeholder}`}
            className="outline outline-1 px-4 py-3 rounded-lg outline-slate-200 h-14 text-[#999CA0] text-base"
            type="text"
            id={name}
          />
        </div>
      );
    }
    