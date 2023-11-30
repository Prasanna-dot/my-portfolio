"use client"
import Navbar from '@/components/Navbar'
import Image from "next/image";
import MyPhoto from "./../image/IMG_1555.jpg";
import TypingEffect from '@/components/TypingEffect';

export default function Home() {
  return (
    <>
      <div className='overflow-hidden'>
        
      </div>
      <section className='div_backgrounds h-[100vh] w-full flex justify-center items-center' id='home'>
        <div className='w-[65%]'>
          <h1 className='my-font w-full text-left text-[6vw]'><TypingEffect text="Heey, It's Prasanna venkatesh. Full stack developer" /></h1>
        </div>
      </section>
      <section className='div_backgrounds h-[100vh] flex justify-center items-center' id='project'>
        <div className='w-[80%] h-[50vh] flex'>
          <div className='h-full w-1/3 p-[3%] my-font'>
            <a href="./front-end-development">
              <div className='backdrop-blur-sm bg-white/10 h-full rounded-3xl p-[12%] relative text-center cursor-pointer hover:bg-indigo-900'>
                <div className='w-full h-1/2 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="80" width="78" fill='#fff' viewBox="0 0 448 512"><path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" /></svg>
               </div>
                <div className='text-[2.5vw] h-1/2'><div>Front-End Development</div>
                  <p className='text-[1vw] my-font2 mt-5'>6 Project</p></div>
              </div>
            </a>
          </div>
          <div className='h-full w-1/3 p-[3%] my-font'>
            <a href="./back-end-development">
              <div className='backdrop-blur-sm bg-white/10 h-full rounded-3xl p-[12%] relative text-center cursor-pointer hover:bg-indigo-900'>
                <div className='w-full h-1/2 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="80" width="84" fill='#fff' viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
              </div>
                <div className='text-[2.5vw] h-1/2'>
                  <div>Back-End Development</div>
                  <p className='text-[1vw] my-font2 mt-5'>1 Project</p>
                </div>
              </div>
            </a>
          </div>
          <div className='h-full w-1/3 p-[3%] my-font'>
            <a href="./database-design">
              <div className='backdrop-blur-sm bg-white/10 h-full rounded-3xl p-[12%] relative text-center cursor-pointer hover:bg-indigo-900'>
                <div className='w-full h-1/2 flex justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="80" width="80" fill='#fff' viewBox="0 0 512 512"><path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z" /></svg>
                </div>
                <div className='text-[2.5vw] h-1/2'><div>Database Design</div>
                  <p className='text-[1vw] my-font2 mt-5'>1 Project</p></div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className='div_backgrounds h-[100vh] flex justify-center items-center' id='my-journey'>
        <div className='w-[80%] h-[50vh] p-5 flex'>
          <div className='w-[30%] h-full overflow-hidden bg-black rounded-3xl'>
          <Image
            src={MyPhoto}
            alt={""}
            style={{
              height: "auto",
              width: "100%",
            }}
          />
          </div>
          <div className='ml-[8%] w-[60%] text-[2vw] my-font'>
            <div className='pl-3 mt-[5%]'>
            Hello, I’m Prasanna, and here’s a glimpse into my journey. It all began back in 2016 when I enrolled in a diploma program for Electrical and Electronics Engineering at Sastra University in Thanjavur.
            
            </div>
            
            <div className='text-[2vw] my-[10%]'>
              <a
                href="./my-journey"
                className="rounded-lg px-3 py-2 text-[2vw] font-semibold leading-7 text-[#fff] hover:bg-indigo-500"
              >
                Read more
              </a>
            </div>
          </div>
      </div>
      </section>
    </>
  )
}
