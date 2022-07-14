import Button from "../../components/ui/Button";
import Section from "../../components/Section/Section";
import {PersonalAbout, PersonalReviews} from "../../components/Cards/Personal/Personal-list";
import SliderTemplate from "../../components/Slider/Slider-template";
import News from "../../components/Cards/News/News";
import Reviews from "../../components/Cards/Reviews/Reviews";
import FormPriemOrder from "../../components/Form/FormPriemOrder";
import Personal from "../../components/Cards/Personal/Personal";
const specsItems = [<Personal
	name={'Фамилия Имя Очество'}
	key={0}
	specialist={'Врач-терапевт'}
	img={<img src={'../../img/no-person.png'} alt={''} />}
/>,
	<Personal
		key={1}
		specialist={'Врач-терапевт'}
		name={'Фамилия Имя Очество'}
		img={<img src={'../../img/no-person.png'} alt={''} />}
	/>,
	<Personal
		key={2}
		specialist={'Врач-терапевт'}
		name={'Фамилия Имя Очество'}
		img={<img src={'../../img/no-person.png'} alt={''} />}
	/>,
	<Personal
		key={3}
		specialist={'Врач-терапевт'}
		name={'Фамилия Имя Очество'}
		img={<img src={'../../img/no-person.png'} alt={''} />}
	/>]
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

export default function ServiceList(props) {
	const meta = props.data.meta

	return (
		<>
			<Section
				type={'section-slide section-service-full'}
				title={'Гинекология'}
				// uptitle={'Врач-терапевт'}

				img={<img src={'../../slides/slide.jpg'} alt={''}/>}
				content={<p>
					Гинекология- область медицины, отвечающая  за репродуктивную функцию женщины, её физиологическое и гормональное здоровье. Врач гинеколог, самый важный врач для здоровья женщины.
				</p>}
				links={<>
					<Button text={'Запись на прием'} variant={'button-primary'}/>
					<Button text={'Подробнее'} variant={'button-outline'}/>
				</>}
			></Section>
			<Section
				// type={'section-slide'}
				title={'Описание'}
				content={<>
					<p>Гинекология- область медицины, отвечающая  за репродуктивную функцию женщины, её физиологическое и гормональное здоровье. Врач гинеколог, самый важный врач для здоровья женщины.</p>
						<ul>
					<li>Диагностика и лечение заболеваний женской половой системы


					</li>
					<li>Лечение ЗППП</li>
					<li>Лечение эрозии шейки матки</li>
				</ul></>}
			/>
			<Section
				// type={'section-slide'}
				title={'Цены'}
				content={<ul>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
					<li>Здесь какие то навыки</li>
				</ul>}/>
			<Section
				title={'Наши специалисты'}
				type={'section-links-1 section-personal'}
				content={specsItems}
				links={
					<Button text={'Все специалисты'} variant={'button-primary'}/>
				}
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