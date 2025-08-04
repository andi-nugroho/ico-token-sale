import React from "react";

const Footer = () => {
  const footerList = [
    "Zexocash", "How its work", "Token", "FAQ", "Contact"
  ]
  return <footer>
    <div className="top_footer bg_light_dark"
    data-z-index="1"
    data-parallax="scroll"
    data-image-src="assets/images/footer_bg.png">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="footer_logo mb-3 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              <a href="#home_section" className="page-scroll">
                <img src="assets/images/zexocash.png" alt="" className="" />
              </a>
            </div>

            <div className="footer_desc">
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
              Zexocash stands at the forefront of revolutionizing blockchain solutions, offering a comprehensive suite of services that redefine the landscape of digital finance. Our commitment to innovation, security, and user-centricity drives us to create an ecosystem that empowers individuals and businesses alike.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
            <h4 className="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">
              Quick Links
            </h4>

            <ul className="footer_link">
              {
                footerList.map((list, i) => (
                  <li key={i} className="animation" data-animation="fadeInUp" data-animation-delay={`0.${i + 2}s`}>
                    <a href="#">{list}</a>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
            <div className="newsletter_form">
              <h4 className="footer_title border_title animation">
                Newsletter
              </h4>

              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                By subscribing to our mailing list you will always be update with the latest news from us
              </p>

              <form action="#" className="subscribe_form animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                <input type="text" required placeholder="Enter Email Address" className="input-rounded" />

                <button type="submit" title="Subscribe" className="btn-info" name="submit" value="Submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bottom_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="copyright">
              Copyright &copy; 2023 All Right reserved by @andi-nugroho
            </p>
          </div>

          <div className="col-md-6">
            <ul className="list_none footer_menu">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
