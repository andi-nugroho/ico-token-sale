import React from "react";
import {BsArrowRight} from "react-icons/bs"

const About = () => {
  return <section id="about" className="small_pt">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="text_md_center">
            <img src="assets/images/about_img2.png" alt="" className="animation"
            data-animation="zoomIn" data-animation-delay="0.2s" />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
          <div className="title_default_light title_border">
            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              About The Zexocash
            </h4>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
            Welcome to Zexocash, your gateway to a world of innovative blockchain projects and native token utility!
            </p>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">At Zexocash, we are passionate about pioneering the next generation of blockchain-based solutions. Our platform serves as a launchpad for groundbreaking projects, all powered by our native token, ZXT.</p>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.8s">
            Zexocash envisions a future where blockchain technology seamlessly integrates into everyday life, offering practical solutions and driving positive change. We aim to create an ecosystem where innovation, reliability, and accessibility converge.
            </p>
          </div>

          <a href="" className="btn btn-default btn-radius video animation"
          data-animation="fadeInUp" data-animation-delay="1s">
            Let's Start <BsArrowRight/>
          </a>
        </div>
      </div>
    </div>
  </section>;
};

export default About;
