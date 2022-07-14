import Section from "../components/Section/Section";
import Button from "../components/ui/Button";
import {SpecSvg,ToolsSvg} from "../components/svg/Svg";
import Features from "../components/Cards/Features/Features";
import Personal from "../components/Cards/Personal/Personal";
import FormQuestion from "../components/Form/FormQuestion";
import News from "../components/Cards/News/News";
import Lnk from "../components/ui/Link";
import Slider from "../components/Slider/Slider";
import Social from "../components/Social";
import SliderTemplate from "../components/Slider/Slider-template";

export default function Home() {
	const newsItems = [<News
		title={'Заголовок'}
		img={<img src={'./content/images/news.png'} alt={''} />}
		key={1}
		date={'10.03.2022'}
		content={'Описание'}
	/>,
		<News
			title={'Заголовок'}
			key={2}
			date={'10.03.2022'}
			content={'Описание'}
			img={<img src={'./content/images/news.png'} alt={''} />}
		/>,
		<News
			key={3}
			title={'Заголовок'}
			date={'10.03.2022'}
			content={'Описание'}
			img={<img src={'./content/images/news.png'} alt={''} />}
		/>,
	<News
			key={3}
			title={'Заголовок'}
			date={'10.03.2022'}
			content={'Описание'}
			img={<img src={'./content/images/news.png'} alt={''} />}
		/>,
	<News
			key={3}
			title={'Заголовок'}
			date={'10.03.2022'}
			content={'Описание'}
			img={<img src={'./content/images/news.png'} alt={''} />}
		/>,
	]
	const specsItems = [<Personal
		name={'Фамилия Имя Очество'}
		key={0}
		specialist={'Врач-терапевт'}
		img={<img src={'./img/no-person.png'} alt={''} />}
	/>,
		<Personal
			key={1}
			specialist={'Врач-терапевт'}
			name={'Фамилия Имя Очество'}
			img={<img src={'./img/no-person.png'} alt={''} />}
		/>,
		<Personal
			key={2}
			specialist={'Врач-терапевт'}
			name={'Фамилия Имя Очество'}
			img={<img src={'./img/no-person.png'} alt={''} />}
		/>,
		<Personal
			key={3}
			specialist={'Врач-терапевт'}
			name={'Фамилия Имя Очество'}
			img={<img src={'./img/no-person.png'} alt={''} />}
		/>]
	return (
		<>
			<Slider />
			<Section
				title={'Наши услуги'}
				type={'section-1-2'}
				content={<><h3>Гинекология</h3><p>Человеческий организм получает почти все необходимые вещества именно
					через пищу и воду. С питанием связаны все жизненно важные функции организма. Недостаток полезных
					веществ, содержащихся в том же мясе, например железа высокой биологической доступности, может
					вызвать серьезные проблемы со здоровьем.</p>
				</>}
				img={<img src={'./content/images/covid-recovery-center-female-doctor-holding-older-patient-s-hands 1.jpg'}
					alt={''}/>}
                links={<>
                    <Button text={'Запись на прием'} variant={'button-primary'}/>
                    <Button text={'Подробнее'} variant={'button-outline'}/>
                </>}
			/>
			<Section
				title={'Информация о центре'}
				type={'section-contrast section-1-2 section-links-1'}
				content={'Наш медицинский центр расположен в центре города Южноуральска по адресу ул. Мира д. 51, имеется парковка непосредственно у входной группы. Клиника ведет прием ежедневно без перерыва на обед с 7.00 до 19.00'}
				img={<>
					<div className={'section__image'}> <img src={'./content/images/about1.png'} alt={''} /></div>
				<div className={'section__image'}> <img src={'./content/images/about2.png'} alt={''} /></div>
				<div className={'section__image'}> <img src={'./content/images/about3.png'} alt={''} /></div>
				</>}
				links={<>
					<Features
						title={'Специалисты'}
						img={<SpecSvg />}
						key={0}
						content={'Грамотные и отзывчивые врачи и персонал'}
					/>
					<Features
						title={'Оборудование'}
						img={<ToolsSvg />}
						key={1}
						content={'Современное, передовое оборудование'}
					/>
					<Features
						title={'Специалисты'}
						img={<SpecSvg />}
						key={2}
						content={'Грамотные и отзывчивые врачи и персонал'}
					/>
					<Features
						title={'Специалисты'}
						img={<SpecSvg />}
						key={3}
						content={'Грамотные и отзывчивые врачи и персонал'}
					/></>}
			/>
			<Section
				title={'Наши специалисты'}
				type={'section-links-1 section-personal'}
				content={specsItems}
				links={
					<Button text={'Все специалисты'} variant={'button-primary'}/>
					}
			/>
			<Section
				title={'Задать вопрос врачу'}
				type={'section-1-2'}
				content={<FormQuestion />}
				img={<img src={'./content/images/doctor.png'}
				          alt={''}/>}
			/>
			<Section
				title={'Наши новости'}
				type={'section-links-1 section-news'}
				content={<SliderTemplate items={newsItems} perView={4} perViewMob={1} perViewTablet={2} gap={24}/>}

			/>
			<Section
				title={'Контакты'}
				type={'section-1-2 section-contacts'}
				content={<>
				<dl>
					<dt>Адрес</dt>
					<dd>г. Южноуральск ул. Мира, д. 51, пом. 13</dd>
				</dl>
				<dl>
					<dt>Телефон</dt>
					<dd><Lnk href={"tel:73513456077"} text={'8 (35134) 5 60 77'}/></dd>
				</dl>
				<dl>
					<dt>e-mail</dt>
					<dd><Lnk href={"info@юж-мед.рф"} text={'mailto:info@юж-мед.рф'}/></dd>
				</dl>
				<dl>
					<dt>Время работы</dt>
					<dd>7:00 - 19:00, без выходных</dd>
				</dl>


				</>}
				img={<img src={'./content/images/covid-recovery-center-female-doctor-holding-older-patient-s-hands 1.jpg'}
				          alt={''}/>}
				links={<Social />}
			/>
		</>

	)
}
export async function getServerSideProps() {
	// Fetch data from external API
	const testData = {
		meta:
		{
			title: 'Главная',
			keywords: 'test, tamplate'
		}}


	const data = testData

	// Pass data to the page via props
	return { props: { data } }
}