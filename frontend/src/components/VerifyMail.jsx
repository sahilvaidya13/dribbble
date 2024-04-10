import React, { useEffect } from "react";
import search_svg from "../assets/search.svg";
import bag_svg from "../assets/bag.svg";
import profile from "../assets/default-image.jpeg";
import mail_svg from "../assets/mail.svg";
import dribble_logo from "../assets/dribbble_logo.svg";
import twitter_logo from "../assets/twitter_logo.svg";
import facebook_logo from "../assets/facebook_logo.svg";
import instagram_logo from "../assets/instagram_logo.svg";
import pinterest_logo from "../assets/pinterest_logo.svg";
import dribble_color from "../assets/dribble_color.svg";
const VerifyMail = () => {
  const token = localStorage.getItem("token");

  const myfunction = async () => {
    try {
      const response = await fetch(
        `https://dribbble-uyit.onrender.com/api/send-mail`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error sending mail", error.message);
    }
  };

  useEffect(() => myfunction, []);

  return (
    <div>
      <div className="verify-section  overflow-x-hidden flex flex-col ">
        <div className="navbar  w-full h-16  flex max-sm:flex-col max-sm:gap-6 max-sm:justify-evenly justify-between">
          <div className="flex gap-6 h-full items-center pl-10 ">
            <h3 className="font-goodline text-2xl">dribbble</h3>
            <div className="flex gap-8 font-Monamedium text-sm text-[#8b8b8b]">
              <h3>Inspiration</h3>
              <h3>Find Work</h3>
              <h3>Learn Design</h3>
              <h3>Go Pro</h3>
              <h3>Hire Designers</h3>
            </div>
          </div>
          <div className="flex h-full max-sm:justify-center items-center gap-3 pr-8 font-Monamedium text-[#8b8b8b]">
            <div className="w-24 h-10 bg-[#f2f5f4] flex items-center gap-2 rounded-md p-2">
              <img src={search_svg} />
              <p className="font-Monamedium text-sm">Search</p>
            </div>
            <div>
              <img src={bag_svg} />
            </div>
            <div className="profile">
              <img src={profile} className="w-10 h-10" />
            </div>
            <div className="upload-btn">
              <button className="px-6 py-2 bg-[#ea4b8b] text-white rounded-md hover:bg-[#ff3e8b] focus:outline-none font-helmed text-sm">
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="content  w-full flex flex-col items-center mt-16 gap-5">
          <div className="title-heading font-Monabold text-3xl">
            <h1>Please verify your email...</h1>
          </div>
          <div className="mail-svg">
            <img src={mail_svg} className="w-42 h-42" />
          </div>
          <div className="mail-desc flex flex-col items-center gap-3">
            <div className="txt1 max-sm:text-center">
              <p className="font-Monamedium text-[#808080]">
                Please verify your email address. We've sent a confirmation
                email to:
              </p>
            </div>
            <div className="txt2">
              <p className="font-Monabold">sahil.vaidya13@gmail.com</p>
            </div>
            <div className="txt3 max-sm:text-center">
              <p className="font-Monamedium text-[#808080]">
                Click the confirmation link in that email to begin using
                Dribbble.
              </p>
            </div>
            <div className="txt4 text-center">
              <p className="font-Monamedium text-[#808080]">
                Didn't receive the email? Check your spam folder, it may have
                been caught by a filter. <br></br>If you still don't see it, you
                can{" "}
                <span className=" text-[#ea4b8b] font-Monabold">
                  resend the confirmation email.
                </span>
              </p>
            </div>
            <div className="txt4">
              <p className="font-Monamedium text-[#808080]">
                Wrong email address?{" "}
                <span className=" text-[#ea4b8b] font-Monabold">
                  Change it.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer bg-[#fafafa] mt-14">
          <div className="w-full pt-10 ">
            <div className="main-footer-content flex gap-14 pl-10">
              <div className="left-logo flex max-sm:hidden flex-col gap-5 div1 w-64">
                <div className="logo">
                  <h3 className="font-goodline text-3xl text-[#ea4b8b]">
                    dribbble
                  </h3>
                </div>
                <div className="desc-below-logo font-Monamedium text-sm">
                  <p>
                    Dribbble is the world's leading community for creatives to
                    share, grow, and get hired.
                  </p>
                </div>
                <div className="social-links flex gap-4">
                  <img src={dribble_logo} />
                  <img src={twitter_logo} />
                  <img src={facebook_logo} />
                  <img src={instagram_logo} />
                  <img src={pinterest_logo} />
                </div>
              </div>
              <div className="grow flex gap-16">
                <div className="div2 flex flex-col gap-5 text-sm font-Monaregular">
                  <p className="font-Monabold">For designers</p>
                  <p>Go Pro!</p>
                  <p>Explore design work</p>
                  <p>Design blog</p>
                  <p>Overtime podcast</p>
                  <p>Playoffs</p>
                  <p>Weekly Warm-up</p>
                  <p>Refer a Friend</p>
                  <p>Code of Conduct</p>
                </div>
                <div className="div3 flex flex-col gap-5 text-sm font-Monaregular">
                  <p className="font-Monabold">Hire designers</p>
                  <p>Post a job opening</p>
                  <p>Post a freelance project</p>
                  <p>Search for designers</p>
                  <p className="font-Monabold">Brands</p>
                  <p>Advertise with us</p>
                </div>
                <div className="div4 flex flex-col max-sm:hidden gap-5 text-sm font-Monaregular">
                  <p className="font-Monabold">Company</p>
                  <p>About</p>
                  <p>Careers</p>
                  <p>Support</p>
                  <p>Media Kit</p>
                  <p>Testimonials</p>
                  <p>API</p>
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                  <p>Cookie Policy</p>
                </div>
                <div className="div5 flex flex-col max-sm:hidden gap-5 text-sm font-Monaregular">
                  <p className="font-Monabold">Directories</p>
                  <p>Design Jobs</p>
                  <p>Designers for hire</p>
                  <p>
                    Freelance designers <br></br>for hire
                  </p>
                  <p>Tags</p>
                  <p>Places</p>
                  <p className="font-Monabold">Design assets</p>
                  <p>Dribble Marketplace</p>
                  <p>Creative Market</p>
                  <p>Fontspring</p>
                  <p>Font Squirrel</p>
                </div>
                <div className="div6 flex flex-col max-sm:hidden gap-5 text-sm font-Monaregular">
                  <p className="font-Monabold">Design resources</p>
                  <p>Freelancing</p>
                  <p>Design hiring</p>
                  <p>Design portfolio</p>
                  <p>Design education</p>
                  <p>Creative Process</p>
                  <p>
                    Design Industry<br></br>Trends
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-end-content mt-12 w-full flex justify-center h-24 ">
              <div className="border-t border-solid border-[#bbbbbb] border-opacity-100 w-[80%] h-full flex justify-between items-center ">
                <div className="div1-footer font-Monaregular">
                  <p> ©️ 2023 Dribbble. All rights reserved</p>
                </div>
                <div className="div2-footer font-Monaregular flex items-center gap-2">
                  <p>
                    {" "}
                    <span className="font-Monabold">20,501,853</span> shots
                    dribbbled
                  </p>
                  <img src={dribble_color} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;
