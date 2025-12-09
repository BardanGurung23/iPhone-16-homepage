import React from "react";
import { a18 } from "../utils";
import "../../App.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Chip = () => {
  useGSAP(() => {
    gsap.from(".ani9", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".ani9",
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <>
      <section className="bg-black pt-80">
        <div>
          <div className="scroll-animate min-width pb-40 padding-l">
            <h1 className="h1-style  text-white ani9">
              Explore the all new <br />
              <span className="gradient-text ani9">A18 Chip</span>
            </h1>
          </div>
          <div>
            <video autoPlay playsInline muted loop={false}>
              <source src={a18} type="video/mp4" />
            </video>
          </div>
          <div className="w-full h-[100vh]">
            <div className="min-width pl-[210px]">
              <div className="mt-32">
                <h1 className="h1-style text-light-pink">A18 chip.</h1>
                <h1 className="h1-style text-white">Hi. IQ.</h1>
              </div>
              <div className="w-[548.33px] mt-20">
                <p className="p-text-size">
                  Meet A18,{" "}
                  <span className="text-white">
                    custom-built for Apple Intelligence
                  </span>{" "}
                  — and so much more. It jumps two generations ahead of the A16
                  Bionic chip in iPhone 15. And it powers next-level camera
                  features like Photographic Styles and Camera Control. All with
                  exceptional power efficiency to extend battery life.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-[1102px] m-auto purple-gradient rounded-[28px] ">
                <div className=" max-w-[887px] m-auto mt-[56px] flex gap-[140px] pb-20">
                  <p className="secondary-p-text text-white">
                    Up to <br />
                    <span className="new-span text-[#eda4ff]">60% faster </span>
                    <span className="new-p text-[#86868b]">6-core CPU</span>
                  </p>
                  <p className="secondary-p-text text-white">
                    Up to <br />
                    <span
                      className="new-span text-[#eda4ff]
                    "
                    >
                      2x faster{" "}
                    </span>
                    <span className="new-p text-[#86868b]">5-core GPU</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chip;
