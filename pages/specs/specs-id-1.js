import Button from "../../components/ui/Button";
import Section from "../../components/Section/Section";
import {PersonalAbout, PersonalReviews} from "../../components/Cards/Personal/Personal-list";
import SliderTemplate from "../../components/Slider/Slider-template";
import News from "../../components/Cards/News/News";
import Reviews from "../../components/Cards/Reviews/Reviews";
import FormPriemOrder from "../../components/Form/FormPriemOrder";

const reviewItems = [<Reviews
	name={'ФИО'}
	key={1}
	date={'10.03.2022'}
	content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan ut viverra proin sit consectetur. Fringilla at laoreet convallis in porttitor in tellus consequat purus. Mauris suspendisse augue sagittis diam ultrices. Eget faucibus cursus fringilla quis leo.'}
/>,
	<Reviews
		name={'ФИО'}
		img={<img src={'./content/images/news.png'} alt={''} />}
		key={2}
		date={'10.03.2022'}
		content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan ut viverra proin sit consectetur. Fringilla at laoreet convallis in porttitor in tellus consequat purus. Mauris suspendisse augue sagittis diam ultrices. Eget faucibus cursus fringilla quis leo.'}
	/>,
	<Reviews
		key={3}
		name={'ФИО'}
		date={'10.03.2022'}
		content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan ut viverra proin sit consectetur. Fringilla at laoreet convallis in porttitor in tellus consequat purus. Mauris suspendisse augue sagittis diam ultrices. Eget faucibus cursus fringilla quis leo.'}
	/>]

export default function Specialist(props) {
	const meta = props.data.meta

	return (
		<>
			<Section
				type={'section-slide section-spec-full'}
				title={'Андреев Андрев Андреевич'}
				uptitle={'Врач-терапевт'}

				img={<img src={'../../slides/slide.jpg'} alt={''}/>}
				content={<>
					<PersonalReviews/>
					<PersonalAbout education={'БОУ ВПО "Южно-Уральский государственный медицинский университет"'}
					               stage={'15 лет'} category={'Высшая'}/>
				</>}
				links={<>
					<Button text={'Запись на прием'} variant={'button-primary'}/>
					<Button text={'Подробнее'} variant={'button-outline'}/>
				</>}
			></Section>
			<Section
				// type={'section-slide'}
				title={'Профессиональные навыки'}
				content={<ul>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
				</ul>}
			/>
			<Section
				// type={'section-slide'}
				title={'Образование'}
				content={<ul>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
				</ul>}/>
			<Section
				title={'Отзывы'}
				type={'section-reviews'}
				links={<SliderTemplate
				items={reviewItems}
				perView={2}
				itemsMob={1}
				itemsTablet={2}
				gap={24}/>}
			/>
			<Section
				title={'Запись на прием'}
				type={'section-priem-order'}
				content={<FormPriemOrder />}
			/>

		</>
	)
}

export async function getServerSideProps() {
	// Fetch data from external API
	const testData = {
		meta:
			{
				title: 'Андреев Андрев Андреевич',
				keywords: 'test, tamplate'
			}
	}


	const data = testData

	// Pass data to the page via props
	return {props: {data}}
}