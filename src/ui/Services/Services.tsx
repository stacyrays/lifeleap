import ServiceItem from './ServiceItem';
import './Services.css';
import '../../App.css';

const Services = () => {  
  const serviceItems = [
    {
      serviceType: "hypnotherapy",
      buttonText: "Learn More",
      serviceBodyText: "Maybe some more detail...",
    },
    {
      serviceType: "meditation",
      buttonText: "Get Inspired",
      serviceBodyText: "Maybe some more detail...",
    },
    {
      serviceType: "email",
      buttonText: "Get Free Gift",
      serviceBodyText: "Maybe some more detail...",
    },
  ];
  return (
    <>
      <div className="service-panel-section">
        <div className="services-sub-header-text">Services</div>
        <div className="service-panel-container">
          {serviceItems.map(s => <ServiceItem serviceType={s.serviceType} buttonText={s.buttonText} serviceBodyText={s.serviceBodyText} />)}
        </div>
      </div>
    </>
  )
}

export default Services;