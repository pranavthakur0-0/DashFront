
import { NavLink } from "react-router-dom";
import DashLogo from "../../images/dashboard_icon.svg";
import TransactionsLogo from "../../images/transaction_icon.svg"
import SchedulesLogo from "../../images/schedule_icon.svg"
import UsersLogo from "../../images/user_icon.svg"
import SettingsLogo from "../../images/setting_icon.svg"
import SearchIcon from "../../images/Search icon.svg"
import bell from "../../images/bell.svg"
import profileImg from "../../images/image 1.png"
import rev from "../../images/rev.svg";
import Like from "../../images/like.svg"
import user from "../../images/user.svg"
import BarChart from "./BarChart.jsx"
import Control from "../../images/Controls.svg"
import "./DashBoard.css"
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import Profile from "./profile.jsx"
import DonutChart from "./Donut.jsx"


function MenuOption({name, linkto, imgSrc, size}){

    const NavlinkCSS = ({isActive})=>{
        return { fontWeight: isActive ? 700 : '' };
    }
    return (<>
                <NavLink className={`flex ${imgSrc ? "gap-2 md:gap-7" : ""} w-fit  ${size ? 'text-xl' : 'text-2xl'}`} style={NavlinkCSS} to={`${linkto}`}>
                    <img src={imgSrc??imgSrc} alt={imgSrc??imgSrc} /> 
                    <span className=" cursor-pointer w-fit text-white">{name}</span>
                </NavLink>
            </>)
}

function Card({color, text, numbers, profit, imgSrc}){
    return (
            <div className="flex-1 h-40 sm:h-44 outline outline-1 outline-gray-300 rounded-xl justify-center px-4 sm:px-6 flex flex-col gap-2 shadow-[4px_4px_20px_rgba(0,0,0,0.10)] bg-white">
              <div  className=" w-12 h-12 rounded-full flex justify-center items-center" style={{backgroundColor : `${color}`}}>
                <img src={imgSrc??imgSrc} alt={imgSrc} />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-sm break-normal whitespace-nowrap">{text}</span>
                <div className="flex justify-between">
                    <span className="text-2xl font-semibold md:text-3xl">{numbers}</span>
                    <div className="px-3 font-semibold py-1 text-base  justify-center items-center flex text-profit bg-profitBg rounded-full">+{profit}%</div>
                </div>
            </div>
            </div>
    )
}

export default function DashBoard(){
    const [menu, setmenu] = useState(false);
    const [profile, setprofile] = useState(null);
    const [ham, setham] = useState(false);


    

    return (<>
   <div className="py-4 px-4 pb-10 sm:py-10 sm:px-10 h-full md:h-screen w-screen flex bg-mainBg relative flex-col lg:flex-row">
            {menu ? <ProfileCard setprofile={setprofile} setmenu={setmenu} /> : null}
            <div className={`${ham ? 'h-[37rem]' : 'h-[8rem]'} navbar w-full lg:w-[25rem]  md:h-full md:min-w-fit bg-primary rounded-2xl py-10 flex-row lg:py-24 px-6  md:pl-10 md:pr-6 lg:pl-12 xl:pl-14`}>
                <div className={`sm:w-full flex justify-between font-primary font-semibold text-white text-5xl md:w-fit px-10 ${ham ? "mb-20" : "mb-12"} mb-10 lg:mb-16 md:px-0`}>
                    <h2>Board.</h2>
                    <div onClick={e=>setham(cur=>!cur)} className="menu-btn md:hidden flex">
                             <div  className={!ham ? "check-button-close" : "check-button-open"}> 
                         </div >
                    </div>
                </div>
               <div className="flex flex-col justify-between h-fit lg:h-full">
               {/* sm:flex gap-9 pl-10 ${ham ? 'flex' : "hidden"}  flex-col sm:flex-col  md:flex-row lg:flex-col md:justify-start sm:justify-between  md:gap-10 md:pt-16  md:px-0 pl-4  sm:pl-8 sm:pr-8 pr-8 */}
                    <div className={`${ham ? 'flex' : "hidden"} md:flex lg:flex-col md:flex-row flex-col md:justify-start sm:justify-between  gap-9 pl-8 md:pl-0 md:pr-8 `}>
                              <MenuOption imgSrc={DashLogo} linkto="/" name="Dashboard" />
                              <MenuOption imgSrc={TransactionsLogo} linkto="/transactions" name="Transactions" />
                              <MenuOption imgSrc={SchedulesLogo} linkto="/schedules" name="Schedules" />
                              <MenuOption imgSrc={UsersLogo} linkto="/users" name="Users" />
                              <MenuOption imgSrc={SettingsLogo} linkto="/settings" name="Settings" />
                    </div>
                    <div className={`flex lg:flex-col gap-5 lg:-translate-y-20 pt-12  lg:gap-9 justify-end pr-8 lg:pr-0 lg:justify-start ${ham ? 'flex' : "hidden"} md:flex`}>
                       <MenuOption size={true} linkto="/help" name="Help" />
                       <MenuOption size={true} linkto="/contactus" name="Contact Us" />
                    </div>
               </div>

            </div>
            <div className="lg:pl-16 pt-10 flex-1 flex flex-col gap-10">
                <div className="w-full flex justify-between flex-col gap-2 xs:gap-0 xs:flex-row">
                    <span className="text-3xl font-bold ">Dashboard</span>
                <div className="flex items-center gap-8">
                    <label htmlFor="search" className="bg-white w-[17rem] h-12 flex outline outline-1 rounded-xl outline-slate-200 group">
                        <input type="text" id="search" className="w-full outline-none pl-3 text-base" placeholder="Search..." />
                        <img src={SearchIcon??SearchIcon} alt={SearchIcon} className="pl-2 pr-6" />
                    </label>
                    <img className="h-8" src={bell??bell} alt="bellIcon" />
                    <img className="rounded-full" src={profileImg??profileImg} alt="profileImg" />
                </div>
                </div>

                <div className="md:flex gap-4 sm:gap-8 grid grid-cols-2">
                    <Card color="#7FCD93"numbers="$2,129,430" profit={2.5} text="Total Revenues" imgSrc={rev} ></Card>
                    <Card color="#DEBF85"numbers="1,520"      profit={1.7} text="Total Transactions" imgSrc={TransactionsLogo}></Card>
                    <Card color="#ECA4A4"numbers="9,721"      profit={1.4} text="Total Likes" imgSrc={Like}></Card>
                    <Card color="#A9B0E5"numbers="9,721"      profit={4.2} text="Total Users" imgSrc={user}></Card>
                </div>
                <div className=" h-96 md:h-40 md:flex-1 py-2 pt-6 px-10 outline outline-1 outline-gray-300 rounded-xl justify-center flex flex-col gap-2 shadow-[4px_4px_20px_rgba(0,0,0,0.10)] bg-white">
                    <BarChart></BarChart>
                </div>
                <div className="flex sm:flex-row flex-col h-fit sm:h-[25rem] gap-10 md:gap-12 ">
                    <div className="sm:w-1/2 w-full h-[23rem] sm:h-full py-5 px-8 donut_chart bg-white outline outline-1 outline-gray-300 rounded-xl justify-center flex flex-col gap-2 shadow-[4px_4px_20px_rgba(0,0,0,0.10)]">
                        <DonutChart></DonutChart>
                    </div>
                    
                    <div className="sm:w-1/2 bg-white w-full h-[23rem] sm:h-full outline outline-1 outline-gray-300 rounded-xl justify-center flex flex-col gap-2 shadow-[4px_4px_20px_rgba(0,0,0,0.10)] items-center">
                        {profile ? <Profile profile={profile} ></Profile> :  
                        
                        <div onClick={e=>setmenu(cur => !cur)} className="flex flex-col gap-4 hover:scale-110 duration-300 cursor-pointer transition-all ease-in-out">
                            <div className="bg-input h-20 w-20 rounded-full flex justify-center items-center outline outline-1 outline-gray-200/70">
                             <img src={Control??Control} className="m-0" alt={Control} />
                         </div>
                         <p className="text-base font-semibold text-lightText">Add Profile</p>
                       </div>
                       }
                      
                    </div>
                </div>
            </div>
        </div>

        
    </>)
}