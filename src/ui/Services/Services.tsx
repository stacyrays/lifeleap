import ServiceItem from './ServiceItem';
import './Services.css';

const Services = () => {  
  return (
    <>
      <div className="service-panel-section">
        <div className="sub-header-text">Services</div>
        <div className="service-panel-container">
          <ServiceItem serviceType="hypnotherapy" buttonText="Learn More" />
          <ServiceItem serviceType="meditation" buttonText="Get Inspired" />
          <ServiceItem serviceType="email" buttonText="Get Free Gift" />
        </div>
      </div>
    </>
  )
}

export default Services;