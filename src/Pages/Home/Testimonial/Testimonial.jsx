import { Swiper, SwiperSlide } from 'swiper/react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import quote from '../../../assets/icon/quote-left.png'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from 'react';


const Testimonial = () => {
    
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);


    return (
        <div className='mb-20'>
            <Sectiontitle subheading='What Our Clint Say' heading='Testimonials'></Sectiontitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-12 text-center">
                {reviews?.map(review => <SwiperSlide key={review?._id}>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={quote} className='w-20 h-24 mx-auto' alt="quote by david" />
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p className='mx-12'>{review.details}</p>
                        <h3 className='uppercase text-2xl  text-orange-400'>{review.name}</h3>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Testimonial;