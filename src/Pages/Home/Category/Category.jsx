import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';

const Category = () => {
    return (
        <section>
            <Sectiontitle subheading="From 11:00am to 10:00pm" heading="Order Online"></Sectiontitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-8 w-4/5"
            >
                <SwiperSlide><img src={img1} alt="" />
                    <h1 className='text-white uppercase text-center text-4xl -mt-20'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h1 className='text-white uppercase text-center text-4xl -mt-20'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h1 className='text-white uppercase text-center text-4xl -mt-20'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h1 className='text-white uppercase text-center text-4xl -mt-20'>Soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h1 className='text-white uppercase text-center text-4xl -mt-20'>Desert</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h1 className='text-white uppercase text-center text-4xl -mt-20'>Salads</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;