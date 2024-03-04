import React from "react";
import { FaFacebookSquare, FaMinus, FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import background from "../Assets/Path 10741.png";
const Footer = () => {
  return (
    <div className="bg-[#02033B] mt-20">
      <div className="w-9/12 mx-auto text-white flex justify-between items-start pt-20">
        <div className=" flex justify-between flex-1">
          <div>
            <h1 className="font-bold tracking-wider text-xl">
              Scan. Detect. Remove.
            </h1>
            <div className="text-4xl flex py-5 items-center gap-5">
              <FaSquareTwitter />
              <FaYoutube />
              <FaFacebookSquare />
            </div>
            <h1>
              <span className="text-[12px] tracking-wider underline mt-2">
                Privacy Policy
              </span>{" "}
              <span className="text-[12px] tracking-wider underline ml-4">
                Terms of Service
              </span>
            </h1>
            <p className="text-[12px] w-10/12 mt-5 tracking-wider">
              Copyright © 2022 Certo Software Limited | Registered in England &
              Wales No. 10072356
            </p>
            <h1 className="text-[12px] tracking-wider mt-4">
              Designed & developed by{" "}
              <span className="underline">Bigger Picture</span>
            </h1>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Miro.</h1>
            <h1 className="border-[1px] border-white mt-4"> </h1>
            <div className="text-[#FFC247] flex flex-col gap-5 mt-5 text-sm">
              <button className="flex items-center gap-4 tracking-wider font-[600]">
                <FaMinus />
                iPhone
              </button>
              <button className="flex items-center gap-4 tracking-wider font-[600]">
                <FaMinus />
                Android
              </button>
              <button className="flex items-center gap-4 tracking-wider font-[600]">
                <FaMinus />
                Help
              </button>
              <button className="flex items-center gap-4 tracking-wider font-[600]">
                <FaMinus />
                About
              </button>
              <button className="flex items-center gap-4 tracking-wider font-[600]">
                <FaMinus />
                Insights
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <div
            className="bg-[#FFC247] text-secondary rounded-3xl w-8/12 mx-auto px-6 py-5"
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <h1 className="font-bold tracking-wider text-xl">
              Sign up to our newsletter
            </h1>
            <p className=" tracking-wider mt-3 text-[13px]">
              Receive the latest mobile security news, exclusive discounts &
              offers straight to your inbox!
            </p>
            <div className="w-full relative mt-5">
              <input
                type="email"
                name=""
                className="input input-bordered h-10 rounded-full"
                placeholder="email address"
                id=""
              />
              <button className="px-5 -ml-8 h-10 bg-secondary text-white rounded-r-full">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        <h1 className="text-white w-7/12 pt-14 tracking-wider text-[13px] pb-20">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
