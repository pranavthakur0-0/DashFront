import "./Login.css";
import logo from "../../images/logo.svg"
import linkedin from "../../images/linkedin.svg"
import twitter from "../../images/twitter.svg"
import discord from "../../images/discord.svg"
import github from "../../images/github.svg"
//  import google from "../../images/google-icon 1.svg"
import apple from "../../images/apple 1.svg"
import { GoogleLogin } from '@react-oauth/google';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";


function MediaLogo({ logo, scale }) {
    return <img className={`hover:scale-110 transition-transform ease-in-out hover:cursor-pointer ${scale ? "md:w-[4.5rem]": "md:w-[4rem]"} ${scale ? "w-[3.5rem]": "w-[3rem]"}`} src={logo} alt={logo} />;
}

function AutomaticLoginGoogle(){
    const [, setCookie] = useCookies(['usercredential']);
    const navigate = useNavigate();


    return (<div id="GoogleLogin">
                 <GoogleLogin
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse.credential);
                    setCookie("usercredential", credentialResponse.credential, { path: '/', expires: 0 });
                    navigate("/");
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />;
                </div>)
}





function InputBox({type, forInput, label}){
    return (
            <div className="flex flex-col gap-2">
                <label htmlFor={`${forInput}`} className="text-xl">{label}</label>
                <input type={`${type}`} id={`${forInput}`} className="flex  text-xl rounded-lg h-16 min-w-[23rem] w-full outline-none pl-4 bg-input focus:bg-activeInput" />
            </div>
            )
}

function LinkText({text}){
    return (<span className="text-xl text-primaryText cursor-pointer hover:underline w-fit">{text}</span>)
}


function AutomaticLogin({text,img}){
    return (
        <div className="flex gap-5 rounded-md outline outline-1 outline-[#D9DCE0] h-16 px-[12px] w-[185px] bg-white cursor-pointer">
            <img className="h-full w-10" src={img} alt="" />
           <div className=" font-primary text-xl font-medium items-center text-black flex">Sign in with {text}</div>
        </div>
    )
}


export default function Login() {
  return (
    <>
      <div className="flex flex-col md:flex-row w-screen h-fit md:h-screen bg-mainBg gap-20 md:gap-0">
            <div className="w-full md:w-1/2 h-full linear_gradient text-white card relative flex flex-col justify-between">
               <div className="w-[80%] h-full p-1 md:p-[3rem] flex flex-col justify-between">
                    <div><img className=" h-32" src={logo} alt="logo_img" /></div>
                    <span className="font-primary font-bold text-5xl py-10 md:py-0 md:text-9xl text-center">Board.</span>
                     <div>
                         <div className="flex md:justify-between justify-evenly max-w-[299px] m-auto items-center p-10 md:p-0">
                            <MediaLogo logo={github} ></MediaLogo>
                            <MediaLogo logo={twitter} ></MediaLogo>
                            <MediaLogo scale={true} logo={linkedin} ></MediaLogo>
                            <MediaLogo scale={true} logo={discord} ></MediaLogo>
                         </div>
                    </div>
               </div>
            </div>

        <div className="w-full md:w-1/2 h-full p-7 md:p-24 flex justify-center pb-20 md:pb-0">
                <div className="flex flex-col justify-center gap-8 w-full max-w-[375px] h-full ">

                    <div className="gap-3 flex flex-col">
                        <div className="text-5xl w-full font-semibold font-primary">Sign In</div>
                        <div className="text-2xl font-light">Sign in to your account</div>
                    </div>
                    <div className="flex min-[380px]:justify-between flex-col lg:flex-row md:flex-col md:gap-2  min-[380px]:flex-row gap-2 min-[380px]:gap-0">
                        <AutomaticLoginGoogle />
                        <AutomaticLogin img={apple} text="Apple" />
                    </div>

                    <div className="md:p-12 p-7 bg-white rounded-lg flex flex-col gap-8">
                        <InputBox type="text" forInput="email" label="Email Address" />
                        <InputBox type="password" forInput="password" label="Password" />
                        <LinkText text="Forgot password?" />
                        <button className="bg-primaryBttn text-2xl p-4 text-white font-semibold rounded-lg font-primary">Sign In</button>
                    </div>

                    <div className="flex gap-2 text-xl justify-center text-lightText">
                        Don’t have an account? 
                        <LinkText text="Register here" />
                    </div> 

                </div>
        </div>

      </div>
    </>
  );
}
