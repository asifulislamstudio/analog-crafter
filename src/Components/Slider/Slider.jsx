import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const Slider = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='bg-fslider flex items-center pl-24
             h-[200px] md:h-[350px] lg:h-[600px] bg-no-repeat bg-center bg-cover'>


                    <div className='flex flex-col'>
                        <h1 className='text-bold font-primary-font    text-white font-normal text-7xl my-2'>Take hold of<br></br> peaceful beauty</h1>
                        <p className='text-white text-2xl my-2'>Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                        <div>
                            <button className='py-4 mr-2 px-8 bg-[#F58A6B] font-primary-font text-xl rounded-md text-white '>Get Started</button>
                            <button className='py-4 px-8 border-2 font-primary-font text-xl rounded-md text-[#F58A6B] border-[#F58A6B] '>Learn More</button>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-sslider flex items-center pl-24 h-[200px] md:h-[350px] lg:h-[600px] bg-no-repeat bg-center bg-cover'>

                    <div className='flex flex-col'>
                        <h1 className='text-bold font-primary-font    text-white font-normal text-7xl my-2'>Take hold of<br></br> peaceful beauty</h1>
                        <p className='text-white text-2xl my-2'>Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                        <div>
                            <button className='py-4 mr-2 px-8 bg-[#F58A6B] font-primary-font text-xl rounded-md text-white '>Get Started</button>
                            <button className='py-4 px-8 border-2 font-primary-font text-xl rounded-md text-[#F58A6B] border-[#F58A6B] '>Learn More</button>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-tslider flex items-center pl-24 h-[200px] md:h-[350px] lg:h-[600px] bg-no-repeat bg-center bg-cover'>

                <div className='flex flex-col'>
              <h1 className='text-bold font-primary-font    text-white font-normal text-7xl my-2'>Take hold of<br></br> peaceful beauty</h1>
               <p className='text-white text-2xl my-2'>Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
               <div>
                <button className='py-4 mr-2 px-8 bg-[#F58A6B] font-primary-font text-xl rounded-md text-white '>Get Started</button>
                <button className='py-4 px-8 border-2 font-primary-font text-xl rounded-md text-[#F58A6B] border-[#F58A6B] '>Learn More</button>
               </div>
              </div>

                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;