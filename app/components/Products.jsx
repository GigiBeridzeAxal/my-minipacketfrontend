'use client'
import React from 'react'
import { Autoplay, EffectCoverflow  } from 'swiper/modules';
import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css/pagination';



export default function Products() {


   

  return (
    <div className="productss">
        <div className="productframe">


             <div className="productimage">
              <Swiper       
              effect={'coverflow'}
              grabCursor={true}

              loop={true}
             
      modules={[Navigation, Autoplay,  Pagination, Scrollbar, A11y]}
      slidesPerView={'auto'}
      spaceBetween={0}
      autoplay={{
        delay:2500,
      }}

      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}  className="productlister">
                <SwiperSlide><img width={550} height={450} src="vashliswveni.png" alt="" /></SwiperSlide>
                <SwiperSlide><img  width={550} height={450} src="Kiwi.png" alt="" /></SwiperSlide>
                <SwiperSlide><img  width={550} height={450} src="Dragonfruit.png" alt="" /></SwiperSlide>
                <SwiperSlide><img  width={550} height={450} src="Raspberry.png" alt="" /></SwiperSlide>
              


</Swiper>
</div>
             <div className="productdesc">

               <div className="productmaintittle">პირველი ნატურალური წვენი  საქართველოს მასშტაბით საუკეთესო სერვისით</div>
               <div className="productservice">ჩვენი სერვისი შეგიძლიათ შეიძინოთ საქართველოს ნებისმიერ კუთხეში </div>
               <div className="productprices">
                <div className="apple">ვაშლის წვენი - 25₾</div>
                <div className="apple">მაყვალის წვენი - 35₾</div>
                <div className="apple">დრაკონის წვენი - 55₾</div>
                <div className="apple">კივის წვენი - 45₾</div>
                <a href='#contacts' className='bg-red-600' >შეუკვეთე</a>
               </div>
             </div>


        </div>
    </div>
  )
}
