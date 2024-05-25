import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
	return (
		<section>
			<SectionTitle
				heading={"Order Online"}
				subHeading={"From 11.00am to 10.00pm"}
			></SectionTitle>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				centeredSlides={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mb-24 mySwiper"
			>
				<SwiperSlide>
					<img
						src={slide1}
						alt=""
					/>
					<h3 className="-mt-16 text-4xl text-center text-white uppercase">
						Salads
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={slide2}
						alt=""
					/>
					<h3 className="-mt-16 text-4xl text-center text-white uppercase">
						Pizza
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={slide3}
						alt=""
					/>
					<h3 className="-mt-16 text-4xl text-center text-white uppercase">
						Soup
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={slide4}
						alt=""
					/>
					<h3 className="-mt-16 text-4xl text-center text-white uppercase">
						Desserts
					</h3>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={slide5}
						alt=""
					/>
					<h3 className="-mt-16 text-4xl text-center text-white uppercase">
						Salads
					</h3>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Category;
