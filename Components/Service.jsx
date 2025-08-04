import React from "react";

const Service = () => {
  const services = [
    {
        title: "Secure Storage",
        description: "Zexocash's secure storage solution ensures the utmost protection for your digital assets. Your peace of mind matters, and our cutting-edge technology guarantees the safety and integrity of your holdings within our ecosystem."
    },
    {
        title: "Mobile App",
        description: "Experience Zexocash on-the-go with our intuitive mobile app. Seamlessly access our ecosystem, manage your holdings, and stay updated with the latest developments in blockchain innovation, right at your fingertips."
    },
    {
        title: "Exchange Service",
        description: "Zexocash’s exchange service offers a seamless platform to effortlessly trade and exchange digital assets. With our user-friendly interface and robust security measures, embark on a smooth journey to diversify and manage your portfolio."
    },
    {
        title: "Investment Project",
        description: "Explore Zexocash’s investment projects for unparalleled opportunities. Our carefully curated ventures open doors to groundbreaking initiatives, empowering you to be part of innovative endeavors that shape the future."
    },
    {
        title: "Credit Card Use",
        description: "Unlock the power of your Zexocash holdings with our integrated credit card service. Seamlessly utilize your digital assets for everyday transactions, enhancing convenience and expanding the utility of your portfolio."
    },
    {
        title: "Planning",
        description: "Zexocash is your partner in planning for a secure financial future. Our comprehensive approach and diverse services empower you to strategize and build a robust foundation for your blockchain investments."
    }
]
  
  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4 className="animation" 
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                Meet our solution for you
              </h4>
              <p className="animation" 
              data-animation="fadeInUp"
              data-animation-delay="0.2s">
                At Zexocash, we're not just redefining blockchain; we're reinventing what's possible. Our platform isn’t just a space for transactions; it’s a gateway to a world of groundbreaking ideas, cutting-edge projects, and unparalleled opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {
            services.map((service, i) => (
              <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
                <div className="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${i + 1}s`}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Service;
