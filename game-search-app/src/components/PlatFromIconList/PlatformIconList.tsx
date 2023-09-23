import { Platform } from "../../hooks/useGames";
import androidIcon from '../../assets/Icons/androidIcon.svg';
import appleIcon from '../../assets/Icons/appleIcon.svg';
import bsGlobelIcon from '../../assets/Icons/bsGlobeIcon.svg';
import linuxIcon from '../../assets/Icons/linuxIcon.svg';
import mdPhoneIphoneIcon from '../../assets/Icons/mdphoneIphoneIcon.svg';
import playStationIcon from '../../assets/Icons/playStationIcon.svg';
import sinintendoIcon from '../../assets/Icons/sinintendoIcon.svg';
import windowsIcon from '../../assets/Icons/windowsIcon.svg';
import xboxIcon from '../../assets/Icons/xboxIcon.svg';
import './platFormIconList.css';

interface  Props{
    platforms:Platform[];

}

const PlatformIconList = ({platforms}:Props) => {
  const iconMap: {[key:string]: any}={
    pc: windowsIcon,
    playstation:playStationIcon,
    xbox:xboxIcon,
    nintendo:sinintendoIcon,
    mac:appleIcon,
    linux:linuxIcon,
    ios:mdPhoneIphoneIcon,
    web:bsGlobelIcon,
    android: androidIcon

 
  }
  return (
<>
{platforms.map((platform)=>(
  <img id= "platform-icon" src={iconMap[platform.slug]} alt="" />
) )}

</>
  )
}

export default PlatformIconList