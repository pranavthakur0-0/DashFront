import Insta from "../../images/logo-instagram 1.svg"
import Whats from "../../images/whats.svg"
import Mail from "../../images/Mail.svg"
import Youtube from "../../images/logo-twitter 1.svg"
export default function Profile({ profile }) {

    function Detail({text, color, imgSrc}){
        return (<div className=" h-fit w-fit flex items-center gap-3">
            <div style={{backgroundColor : `${color}`}} className="w-10 h-10 rounded-full p-1 flex justify-center items-center">
                <img className="m-auto" src={imgSrc} alt="" />
            </div>
                <span className="break-all underline text-[14px]">{text}</span>
                </div>)
    }

    return profile ? (
    <div className="h-full w-full p-12 px-14 font-secondary flex flex-col gap-12">
        <h2 className="text-3xl font-semibold">{profile.name}</h2>
        <div className="grid grid-cols-2 gap-5">
            <Detail color="#EBE6F9" imgSrc={Mail} text={profile.email}></Detail>
            <Detail color="#E9F9EB" imgSrc={Whats} text={profile.phone}></Detail>
            <Detail color="#FFE9EC" imgSrc={Insta} text={profile.instalink}></Detail>
            <Detail color="#FFE9E9" imgSrc={Youtube} text={profile.youtubelink}></Detail>
        </div>
    </div>
    ) : null;
  }

