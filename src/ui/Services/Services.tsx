import ServiceItem from './ServiceItem';
import './Services.css';
import '../../App.css';

const Services = () => {  
  const serviceItems = [
    {
      serviceType: "hypnotherapy",
      title: 'NPL and Hypnosis',
      buttonText: "See Services",
      // serviceBodyText: "See",
    },
    {
      serviceType: "meditation",
      title: 'Meditation Videos',
      buttonText: "Get Inspired",
      serviceBodyText: "Coming soon!",
    },
    {
      serviceType: "email",
      title: 'Email',
      buttonText: "Get Free Gift",
      serviceBodyText: "Maybe some more detail...",
    },
  ];
  return (
    <>
      <div className="service-panel-section">
        {/* <div className="services-sub-header-text">Services</div> */}
        <div className="service-panel-container">
          {serviceItems.map(s => <ServiceItem serviceType={s.serviceType} buttonText={s.buttonText} serviceBodyText={s.serviceBodyText} title={s.title} />)}
        </div>
      </div>
    </>
  )
}

export default Services;