import "../../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg, rightArrow } from "../utils";
import VideoCarousel from "./videocarousel";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Highlights = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".ani1",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".ani1",
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden fh-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-20 w-full md:flex items-end justify-between ">
          <h1
            className="title-text items-end opacity-0 ani1"
            style={{ height: "70px" }}
          >
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5 align-end">
            <p className="link ani1">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
