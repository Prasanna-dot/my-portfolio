/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import MyPhoto from "./../../image/IMG_1555.jpg";

export default function MyJourney() {
  return (
    <section className='div_backgrounds h-auto w-full'>
      <div className="w-full h-[100vh] ">
        <div className="w-full h-[65vh] justify-center items-end flex">
          <div className="overflow-hidden w-[500px] h-[500px] rounded-full bg-black">
            <Image
              src={MyPhoto}
              alt={""}
              style={{
                height: "auto",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="justify-center items-center flex mt-[5%]">
          <h1 className='my-font w-[80%] text-center text-[4vw]'>Hello, I’m Prasanna, and here’s a glimpse into my journey</h1>
        </div>
      </div>
      <div className="h-auto px-[10%] pb-[7%] my-font2 text-center text-[2vw]">
        <p className="py-5">It all began back in 2016 when I enrolled in a diploma program for Electrical and Electronics Engineering at Sastra University in Thanjavur. The initial year flew by, and as I stepped into the second year, an advice from one of our staff members changed my course.</p>
        <p className="py-5">I spent my semester breaks interning at a kirana store, but it was a stint at an electrical repair shop that truly ignited something within me. For 10 days, I toiled and earned 50 rupees daily, forging a crucial contact with an electrician.</p>
        <p className="py-5">My fascination with photography blossomed during my third year, but life took an unexpected turn when tragedy struck – my father passed away. To support my family, my brother began part-time work with Swiggy deliveries. Whenever exams beckoned, I’d step in for him. Despite these trying times, I completed my diploma.</p>
        <p className="py-5">Joining Ashok Leyland brought anticipation, but the reality was different. I found myself fixing tires for new lorries instead of the electrical work I expected. Disheartened, the blow of an unexpected arrear in my final semester compounded my frustration, leading to my resignation and a return to my hometown.</p>
        <p className="py-5">Freelancing as a video editor provided solace, but it was a stint at Amazon delivery that opened another door. A friend's request to capture a wedding sparked an entrepreneurial drive. Embracing freelance photography while working at a photo studio was an exhilarating phase, but I yearned for more.</p>
        <p className="py-5">Web development caught my eye, inspiring a journey into a new domain. Building websites became a passion, fueled by learning and practice. A call from a friend's brother requesting a website in 2021 reinforced my interest, prompting me to delve deeper into the field.</p>
        <p className="py-5">Then, fate intervened with a post from Freshworks Software Academy. I seized the opportunity, kickstarting my career in the software industry. From experiences in engineering, photography, freelancing, and web development, I found my true calling – crafting innovative solutions in the world of software.</p>
      </div>
    </section>
  );
}
