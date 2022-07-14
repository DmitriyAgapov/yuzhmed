import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import styles from './Slider.module.scss';
import Section from "../Section/Section";
import Button from "../ui/Button";

const Slider = () => {
	return (
		<Swiper
			className={styles.slider}
			spaceBetween={50}
			slidesPerView={1}
			pagination={true}
			style={{backgroundColor: '#E6EEF1'}}
			modules={[Pagination]}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				<Section
					type={'section-slide'}
					title={'Заголовок'}
					uptitle={'Новая акция'}
					img={<img src={'./slides/slide.jpg'} alt={''}/>}
					content={<p>Человеческий организм получает почти все необходимые вещества именно через пищу и воду. С питанием связаны все жизненно важные функции организма. Недостаток полезных веществ, содержащихся в том же мясе, например железа высокой биологической доступности, может вызвать серьезные проблемы со здоровьем.</p>}
					links={<>
						<Button text={'Запись на прием'} variant={'button-primary'}/>
						<Button text={'Подробнее'} variant={'button-outline'}/>
					</>}
				></Section>
			</SwiperSlide>
			<SwiperSlide><Section
				type={'section-slide'}
				title={'Заголовок'}
				uptitle={'Новая акция'}
				img={<img src={'./slides/slide.jpg'} alt={''}/>}
				content={<p>Человеческий организм получает почти все необходимые вещества именно через пищу и воду. С питанием связаны все жизненно важные функции организма. Недостаток полезных веществ, содержащихся в том же мясе, например железа высокой биологической доступности, может вызвать серьезные проблемы со здоровьем.</p>}
				links={<>
					<Button text={'Запись на прием'} variant={'button-primary'}/>
					<Button text={'Подробнее'} variant={'button-outline'}/>
				</>}
			></Section></SwiperSlide>
			<SwiperSlide><Section
				type={'section-slide'}
				title={'Заголовок'}
				uptitle={'Новая акция'}
				img={<img src={'./slides/slide.jpg'} alt={''}/>}
				content={<p>Человеческий организм получает почти все необходимые вещества именно через пищу и воду. С питанием связаны все жизненно важные функции организма. Недостаток полезных веществ, содержащихся в том же мясе, например железа высокой биологической доступности, может вызвать серьезные проблемы со здоровьем.</p>}
				links={<>
					<Button text={'Запись на прием'} variant={'button-primary'}/>
					<Button text={'Подробнее'} variant={'button-outline'}/>
				</>}
			></Section></SwiperSlide>
			<SwiperSlide><Section
				type={'section-slide'}
				title={'Заголовок'}
				uptitle={'Новая акция'}
				img={<img src={'./slides/slide.jpg'} alt={''}/>}
				content={<p>Человеческий организм получает почти все необходимые вещества именно через пищу и воду. С питанием связаны все жизненно важные функции организма. Недостаток полезных веществ, содержащихся в том же мясе, например железа высокой биологической доступности, может вызвать серьезные проблемы со здоровьем.</p>}
				links={<>
					<Button text={'Запись на прием'} variant={'button-primary'}/>
					<Button text={'Подробнее'} variant={'button-outline'}/>
				</>}
			></Section></SwiperSlide>

		</Swiper>
	);
}

export default Slider