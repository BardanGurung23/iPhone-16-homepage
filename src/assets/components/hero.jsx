import "../../App.css";
import { appleIntelligenceImage } from "../utils";
import { heroImage } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.from("#apple-intelligence-image", {
      scale: 1.1, // Start zoomed-in
      opacity: 0, // Optional fade
      duration: 3,
      ease: "power3.out",
    });
    gsap.from("#hero-image", {
      scale: 1.1, // Start zoomed-in
      opacity: 0, // Optional fade
      duration: 3,
      ease: "power3.out",
    });
    gsap.from(".btn-ani", {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <section className=" relative flex flex-col items-center justify-center w-full mt-[112px]">
      <h1 className="font-sf-pro text-white text-[28px] font-medium">
        iPhone 16
      </h1>
      <div
        className=" absolute flex items-center justify-center w-full h-full mb-[462px]"
        id="apple-intelligence-image"
      >
        <img
          src={appleIntelligenceImage}
          alt=""
          width={938}
          height={226}
          loading="lazy"
        />
      </div>
      <div
        className="  flex items-center justify-center mt-[40px]"
        id="hero-image"
      >
        <img
          src={heroImage}
          alt="HeroImage"
          width={1278}
          height={370}
          className="mt-[47px] flex justify-center"
          loading="lazy"
        />
      </div>
      <div className=" flex flex-col items-center justify-center gap-[30px]">
        <a
          href="#"
          id="btn"
          className="text-white
           text-[17px] font-sf-pro font-semilight w-[62px] h-[44px]  bg-custom-blue  rounded-[22px] flex items-center justify-center mt-[45px] btn-ani"
        >
          Buy
        </a>
        <p className="font-medium text-[17.5px] tracking-[0.02px] btn-ani">
          From $799 or $33.29/mo. for 24 mo.
        </p>
      </div>
    </section>
  );
};

export default Hero;
