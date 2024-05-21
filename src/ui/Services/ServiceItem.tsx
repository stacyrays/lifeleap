import {useState} from 'react';
import {Link} from "react-router-dom";
import SpatialAudioIcon from '@mui/icons-material/SpatialAudio';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import EmailIcon from '@mui/icons-material/Email';
import './Services.css';

type Props = {
  serviceType: string;
  buttonText: string;
  serviceBodyText?: string;
  title: string;
}

const ServiceItem = (props: Props) => {
  const {serviceType, buttonText, serviceBodyText, title} = props;
  const [isServiceHovered, setServiceHovered] = useState(false);

  const handleClickService = () => {
    if (serviceType === 'hypnotherapy') {
      return console.log('navigate to hypnotherapy route');
    } else if (serviceType === 'meditation') {
      return console.log('navigate to meditation route');
    } 
    return console.log('navigate to email route');
  }

  const serviceIcon = () => {
    if (serviceType === 'hypnotherapy') {
      return (
        <SpatialAudioIcon 
          className={isServiceHovered ? 'service-panel-icon' : 'service-panel-icon-hovered'}
          sx={{height: '50px', width: '50px'}}
        />
      );
    } else if (serviceType === 'meditation') {
      return (
        <SelfImprovementIcon 
          className={isServiceHovered ? 'service-panel-icon' : 'service-panel-icon-hovered'}
          sx={{height: '50px', width: '50px'}}
        />
      );
    } 
    return (
      <EmailIcon
        className={isServiceHovered ? 'service-panel-icon' : 'service-panel-icon-hovered'}
        sx={{height: '50px', width: '50px'}}
      />
    ); 
  };

  const serviceTypeCapitalized = () => {
    return (
      title.charAt(0).toUpperCase() + title.slice(1)
    );
  };
  
  return (
    <>
      <Link className="service-link-text" to={`/${serviceType}`}>
        <div id={serviceType} className='service-panel-item'
          onMouseEnter={() => setServiceHovered(true)}
          onMouseLeave={() => setServiceHovered(false)}
          onClick={() => handleClickService()}
        >
          {serviceIcon()}
          <div id={serviceType} className="service-text">{serviceTypeCapitalized()}</div>
          <div id={serviceType} className="service-body-text">{serviceBodyText ? serviceBodyText : ''}</div>
          <div id={serviceType} className={isServiceHovered ? 'service-button-hovered' : 'service-button'}>{buttonText}</div>
        </div>
        </Link>
    </>
  )
}

export default ServiceItem;