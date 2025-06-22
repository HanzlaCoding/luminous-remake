import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { CgFacebook } from "react-icons/cg";
import { BsYoutube } from "react-icons/bs";
import HomeSVG from "../Components/HomeSVG";

const MiniKini = () => {
  return (
    <>
      <div className="w-full h-160 rounded-[40px] bg-[#000000]  bg-cover font-[sans] flex items-center justify-between overflow-hidden p-12">
        <div className="content w-full h-full text-white flex flex-col justify-between">

          <div className="info flex justify-between w-190">
            <div className="elem p-5 w-75 flex flex-col gap-y-10">
              <HomeSVG/>
              <div className="icons flex items-center gap-x-2">
                <div className="icon rounded-xl w-12 h-12 p-5 bg-zinc-800 flex justify-center items-center cursor-pointer transition duration-200 hover:bg-zinc-700">
                  <div className="insta">
                    <FaInstagram className="scale-[2]" />
                  </div>
                </div>

                <div className="icon rounded-xl w-12 h-12 p-5 bg-zinc-800 flex justify-center items-center cursor-pointer transition duration-200 hover:bg-zinc-700">
                  <div className="insta">
                    <LiaLinkedin className="scale-[2]" />
                  </div>
                </div>

                <div className="icon rounded-xl w-12 h-12 p-5 bg-zinc-800 flex justify-center items-center cursor-pointer transition duration-200 hover:bg-zinc-700">
                  <div className="insta">
                    <CgFacebook className="scale-[2]" />
                  </div>
                </div>

                <div className="icon rounded-xl w-12 h-12 p-5 bg-zinc-800 flex justify-center items-center">
                  <div className="insta">
                    <BsYoutube className="scale-[2]" />
                  </div>
                </div>
              </div>
              <div className="para flex flex-col gap-y-2 font-[swit]">
                <div className="para1 flex items-center gap-x-2">
                  <div className="img w-5 h-5 rounded-full border-1"></div>
                  <p className="text-[12px]">
                  Combined across all platforms: 11k followers
                  </p>
                </div>

                <div className="para1 flex items-center gap-x-2">
                  <div className="img w-5 h-5 rounded-full border-1"></div>
                  <p className="text-[12px]">
                  Daily: 50 requests/DMs
                  </p>
                </div>

                <div className="para1 flex items-center gap-x-2">
                  <div className="img w-5 h-5 rounded-full border-1"></div>
                  <p  className="text-[12px]">
                  Growth: 2% organic growth monthly
                  </p>
                </div>
              </div>
            </div>

            <div className="elem text-xs flex flex-col gap-y-4 p-5 font-[swit]">
              <p>Technology</p>
              <p>Company</p>
              <p>Shop</p>
              <p>Commercial</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>

            <div className="elem text-xs flex flex-col gap-y-4 p-5 text-[#787570] font-[swit]">
              <p>Shipping & Delivery</p>
              <p>Privacy Policy</p>
              <p>Revocation</p>
              <p>Terms & Conditions</p>
              <p>Imprint</p>
              <p>Press kit</p>
            </div>
          </div>

          <div className="bottom flex flex-col gap-y-15">
            <p className="text-[11px] w-150 leading-3 text-[#787570]">These statements have not been evaluated by the Food and Drug Administration. In the European Union, the intended use of our products does not fall within the scope or article 2 section 1 of 2017/45 MDR. Our products are not intended to diagnose, treat, cure, or prevent any disease.</p>

            <div className="marquee-stop flex items-center justify-between">
                <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b83d3df8f35516fe3654a_Paypal%20Logo%201.svg" alt="" />

                <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b83d35ef571f18754f1d9_mastercard.svg" alt="" />

                <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b83d332502896ff0a6677_maestro-seeklogo%201.svg" alt="" />

                <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b83d3e35ea2884ff9c21d_Visa%20Inc.%20logo%201.svg" alt="" />

                <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b83d35c1ff059444f715d_american.svg" alt="" />

                <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b83d38561e455c7a5523f_Klarna%20Logo%20black%201.svg" alt="" />

                <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b83d3683e74b31559ccff_JCB%20logo%201.svg" alt="" />

                <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b83d3b160e90e4f7f07a3_Venmo%20Logo%201.svg" alt="" />

                <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b83d3041007db7bdb4455_Apple%20Pay%20logo%201.svg" alt="" />

                <img src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/671b83d3cc6fd600174e2acb_Google%20Pay%20Logo%201.svg" alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MiniKini;
