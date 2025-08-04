import React from "react";
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaFacebookF} from 'react-icons/fa'
import {BsArrowRight} from "react-icons/bs"

const Contact = () => {
  return <section id="contact" className="contact_section small_pt">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 offset-lg-2">
          <div className="title_default_light title_border text-center">
            <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              Get In Touch
            </h4>
          </div>
        </div>
      </div>

      <div className="row align-items-center small_space">
          <div className="col-lg-4 col-md-6 offset-lg-2">
            <div className="bg_light_dark contact_box_s2 animation"
            data-animation="fadeInUp" data-animation-delay="0.1s">
              <div className="contact_title">
                <h5 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  Contact With Us
                </h5>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  Reach out to us through our various channels—be it email, social media, or our dedicated support portal. Your voice matters, and we're eager to connect, collaborate, and build a brighter future together.
                </p>
              </div>

              <ul className="list_none contact_info mt-margin">
                <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  <i className="ion-ios-email"></i>
                  <div className="contact_detail">
                    <span>Address</span>
                    <p>Jakarta Selatan</p>
                  </div>
                </li>
                <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                <i className="ion-ios-email"></i>
                  <div className="contact_detail">
                    <span>Phone</span>
                    <p>+62 8887770451</p>
                  </div>
                </li>
                <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  <i className="ion-ios-email"></i>
                  <div className="contact_detail">
                    <span>Email</span>
                    <p>team@zexocash.com</p>
                  </div>
                </li>
              </ul>

              <div className="contact_follow pt-2 pt-md-4">
                <span className="text-uppercase animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  Follow Us
                </span>
              </div>
              <ul className="list_none social_icon">
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                    <a href="#" className="icon_color">
                      <FaFacebookF className="icon_color"/>
                    </a>
                  </li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                    <a href="#" className="icon_color">
                      <FaInstagram className="icon_color"/>
                    </a>
                  </li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                    <a href="#" className="icon_color">
                      <FaLinkedinIn className="icon_color"/>
                    </a>
                  </li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                    <a href="#" className="icon_color">
                      <FaTwitter className="icon_color"/>
                    </a>
                  </li>
                  <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                    <a href="#" className="icon_color">
                      <FaYoutube className="icon_color"/>
                    </a>
                  </li>
                </ul>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <div className="pt-4 pt-md-0 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              <form action="#" method="post" className="field_form" name="enq">
                <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  <input type="text" id="name" required placeholder="Enter Name" className="form-control" name="name" />
                </div>
                <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  <input type="email" id="email" required placeholder="Enter Email" className="form-control" name="email" />
                </div>
                <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  <input type="text" id="subject" required placeholder="Enter Subject" className="form-control" name="subject" />
                </div>
                <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  <textarea type="text" id="description" required placeholder="Message" className="form-control" name="description" role="2" />
                </div>
                <div className="col-md-12 text-center animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                  <button type="submit" title="Submit Your Message" className="btn btn-default btn-radius btn-block"
                  name="submit" value={"Submit"}>
                    Submit <BsArrowRight/>
                  </button>
                </div>

                <div className="col-md-12">
                  <div id="alert-msg" className="alert-msg text-center"></div>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  </section>
};

export default Contact;
