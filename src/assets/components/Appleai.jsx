import React from "react";
import { aivideo, iPhone16, applesec, appleLogo } from "../utils";
import "../../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Appleai = () => {
  useGSAP(() => {
    gsap.from(".ani3", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".ani3",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".ani4", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".ani4",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <>
      <div className="section-background w-full h-[450px] flex justify-center mb-[118px]">
        <div className="flex justify-center max-w-[1440px] ">
          <video autoPlay playsInline muted className="h-[450px]">
            <source src={aivideo} />
          </video>
        </div>
      </div>
      <div className="flex justify-center">
        <video autoPlay playsInline muted width={872} height={1062}>
          <source src={iPhone16} />
        </video>
      </div>
      <div className="gray-bg">
        <div className="flex justify-center py-[118px]">
          <p className="ani3 w-[658px] font-sf-pro text-[21px] font-medium text-center text-[#6e6e73] leading-[1.381002381] tracking-[.011em]">
            iPhone 16 is built for Apple Intelligence, the personal intelligence
            system that helps you{" "}
            <strong className="strong-text">
              write, express yourself, and get things done effortlessly.
            </strong>
            With groundbreaking privacy protections, it gives you peace of mind
            that no one else can access your data — not even Apple.
          </p>
        </div>
        <div className="max-w-[1680px] pb-[115px] ">
          <div className="max-w-[87%] m-[auto]">
            <div className="max-w-[50%] m-[auto] flex justify-center flex-col items-center">
              <div>
                <img
                  src={applesec}
                  alt="Apple security"
                  width={62}
                  height={82}
                  className="ani4"
                />
              </div>
              <div>
                <h3 className="ani4 h3-style mt-[40px]">
                  Great powers comes with great privacy.
                </h3>
              </div>
              <div className="flex gap-[40px] mt-[40px]">
                <div>
                  <p className="ani4 p-style">
                    Apple Intelligence is designed to{" "}
                    <strong className="strong-text">
                      protect your privacy at every step
                    </strong>
                    . It’s integrated into the core of iPhone through on-device
                    processing. So it’s aware of your personal information
                    without collecting your personal information.
                  </p>
                </div>
                <div>
                  <p className="ani4 p-style">
                    And with{" "}
                    <strong className="strong-text">
                      groundbreaking Private Cloud Compute
                    </strong>
                    , Apple Intelligence can draw on larger Apple-designed
                    server-based models, running on Apple silicon, to handle
                    more complex requests for you while protecting your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appleai;

//iPhone 16 is built for Apple Intelligence,
// the personal intelligence system that helps you write,
// express yourself, and get things done effortlessly.
// With groundbreaking privacy protections, it gives
// you peace of mind that no one else can access your data — not even Apple.
