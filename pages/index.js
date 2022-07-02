import Section from "../components/Section/Section";
import Button from "../components/ui/Button";
import {SpecSvg, ToolsSvg} from "../components/svg/Svg";
import Features from "../components/Cards/Features/Features";
import Personal from "../components/Cards/Personal/Personal";
import FormQuestion from "../components/Form/FormQuestion";
import News from "../components/Cards/News/News";

export default function Home() {
	return (
		<>
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
                    <Button text={'Запись на прием'} variant={'button__primary'}/>
                    <Button text={'Подробнее'} variant={'button__outline'}/>
                </>}
			/>
			<Section
				title={'Информация о центре'}
				type={'section-contrast section-1-2 section-links-1'}
				content={'Наш медицинский центр расположен в центре города Южноуральска по адресу ул. Мира д. 51, имеется парковка непосредственно у входной группы. Клиника ведет прием ежедневно без перерыва на обед с 7.00 до 19.00'}
				img={<>
				<img src={'./content/images/about1.png'} alt={''} />
				<img src={'./content/images/about2.png'} alt={''} />
				<img src={'./content/images/about3.png'} alt={''} />
				</>}
				links={<>
					<Features
						title={'Специалисты'}
						img={<SpecSvg />}
						content={'Грамотные и отзывчивые врачи и персонал'}
						/>
					<Features
						title={'Оборудование'}
						img={<ToolsSvg />}
						content={'Современное, передовое оборудование'}
						/>
					<Features
						title={'Специалисты'}
						img={<SpecSvg />}
						content={'Грамотные и отзывчивые врачи и персонал'}
					/>
					<Features
						title={'Специалисты'}
						img={<SpecSvg />}
						content={'Грамотные и отзывчивые врачи и персонал'}
					/>
					</>
				}
			/>
			<Section
				title={'Наши специалисты'}
				type={'section-links-1 section-personal'}
				links={<>
					<Personal
						name={'Фамилия Имя Очество'}
						img={<img src={'./img/no-person.png'} alt={''} />}
						/>
					<Personal
						name={'Фамилия Имя Очество'}
						img={<img src={'./img/no-person.png'} alt={''} />}
						/>
					<Personal
						name={'Фамилия Имя Очество'}
						img={<img src={'./img/no-person.png'} alt={''} />}
						/>
					<Personal
						name={'Фамилия Имя Очество'}
						img={<img src={'./img/no-person.png'} alt={''} />}
						/>

					</>
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
				type={'section-links-1 section-personal'}
				links={<>
					<News
						title={'Заголовок'}
						img={<img src={'./content/images/news.png'} alt={''} />}
						content={'Описание'}
						date={'10.03.2022'}
					/>
					<News
						title={'Заголовок'}
						img={<img src={'./content/images/news.png'} alt={''} />}
					/>
					<News
						title={'Заголовок'}
						img={<img src={'./content/images/news.png'} alt={''} />}
					/>
					<News
						title={'Заголовок'}
						img={<img src={'./content/images/news.png'} alt={''} />}
					/>


				</>
				}
			/>
		</>

	)
}
