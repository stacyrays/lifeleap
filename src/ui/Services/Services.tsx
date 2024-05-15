import ServiceItem from './ServiceItem';
import './Services.css';
import '../../App.css';

const Services = () => {  
  const serviceItems = [
    {
      serviceType: "hypnotherapy",
      buttonText: "Learn More",
    },
    {
      serviceType: "meditation",
      buttonText: "Get Inspired",
    },
    {
      serviceType: "email",
      buttonText: "Get Free Gift",
    },
  ];
  return (
    <>
      <div className="service-panel-section">
        <div className="sub-header-text">Services</div>
        <div className="service-panel-container">
          {serviceItems.map(s => <ServiceItem serviceType={s.serviceType} buttonText={s.buttonText} />)}
        </div>
      </div>
    </>
  )
}

export default Services;