import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import styles from './Slider.module.scss';
import Section from "../Section/Section";
import Button from "../ui/Button";
import {useEffect, useState} from "react";

const SliderTemplate = ({perView, items, perViewMob, perViewTablet, gap}) => {
	const [active, setActive] = useState(false)
	useEffect(() => setActive(true), [active])
	return active ? (
		<Swiper
			className={styles.slider}
			spaceBetween={gap}
			loop={true}
			// slidesPerView={perView}
			pagination={true}

			modules={[Pagination]}
			breakpoints={{
				// when window width is >= 320px
				320: {
				slidesPerView: perViewMob,
				spaceBetween: 16
			},
				// when window width is >= 480px
				768: {
				slidesPerView: perViewTablet,
				spaceBetween: 24
			},
				// when window width is >= 640px
				1024: {
				slidesPerView: perView,
				spaceBetween: 32
			}
			}}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log(swiper)}
		>

			{items.map((item, index) =>
				<SwiperSlide key={index}>
					{item}
				</SwiperSlide>
			)
			}


		</Swiper>
	) : 'Loading';
}

export default SliderTemplate