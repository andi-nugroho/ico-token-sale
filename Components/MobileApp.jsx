import React from "react";
import {IoLogoApple} from "react-icons/io"
import {AiFillAndroid} from "react-icons/ai"

const MobileApp = () => {
  return <section id="mobileapp" className="bg_light_dark" 
  data-z-index="1" data-parallax="scroll" data-image-src="assets/image/app_bg.png" >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="title_default_light title_border text_md_center">
            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              Download Mobile App
            </h4>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            Elevate your blockchain journey with the Zexocash Mobile App. Seamlessly bridging innovation and convenience, our app puts the power of the blockchain in the palm of your hand. Stay connected to the pulse of the blockchain world, manage your ZXT holdings effortlessly, and dive into a realm of endless possibilities, all within one intuitive interface.
            </p>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            Experience the future of finance at your fingertips. With the Zexocash Mobile App, effortlessly navigate through our ecosystem, monitor your investments, and engage with our suite of services, all optimized for mobile convenience. Stay informed with real-time updates, make swift transactions, and embark on your blockchain journey from anywhere, at any time.
            </p>
            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            Join us today and witness the seamless fusion of innovation and accessibility with the Zexocash Mobile App.
            </p>
          </div>

          <div className="btn_group text_md_center animation" data-animation="fadeInUp" data-animation-delay="0.6s">
            <a href="" className="btn btn-default btn-radius">
              <AiFillAndroid className="new_font_size"/> Google Store
            </a>
            <a href="" className="btn btn-default btn-radius">
              <IoLogoApple className="new_font_size"/> Apple Store
            </a>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="res_md_mt_50 res_sm_mt_30 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s">
            <img src="assets/images/mobile_app3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
};

export default MobileApp;
