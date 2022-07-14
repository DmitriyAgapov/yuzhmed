import Tabs from "../../components/Tabs/Tabs";
import PersonalList from "../../components/Cards/Personal/Personal-list";

export default function ServicesLists(props) {
	const meta = props.data.meta

	return (
		<main className={'main'}>
			<h1>{meta.title}</h1>
			<Tabs>
				<div label="Все услуги">
					<PersonalList
						// specialist={'Врач-терапевт'}
		                img={'./img/no-person.png'}
		                name={'Название услуги'}
		                // category={'Высшая'}
						link={'/services/service-id-1'}
		                // stage={'15 лет'}
						// visitDate={'31.04.22'}
		                education={'Гинекология- область медицины, отвечающая  за репродуктивную функцию женщины, её физиологическое и гормональное здоровье. Врач гинеколог, самый важный врач для здоровья женщины.'}
					/>
					{/*<PersonalList*/}
					{/*	specialist={'Врач-терапевт'}*/}
		            {/*    img={'./img/no-person.png'}*/}
		            {/*    name={'Андреев Андрев Андреевич'}*/}
		            {/*    category={'Высшая'}*/}
		            {/*    stage={'15 лет'}*/}
					{/*	visitDate={'31.04.22'}*/}
		            {/*    education={'Образование: БОУ ВПО "Южно-Уральский государственный медицинский университет"'}*/}
					{/*/>*/}
					{/*<PersonalList*/}
					{/*	specialist={'Врач-терапевт'}*/}
					{/*	img={'./img/no-person.png'}*/}
					{/*	name={'Андреев Андрев Андреевич'}*/}
					{/*	category={'Высшая'}*/}
					{/*	stage={'15 лет'}*/}
					{/*	visitDate={'31.04.22'}*/}
					{/*	education={'Образование: БОУ ВПО "Южно-Уральский государственный медицинский университет"'}*/}
					{/*/>*/}
					{/*<PersonalList*/}
					{/*	specialist={'Врач-терапевт'}*/}
		            {/*    img={'./img/no-person.png'}*/}
		            {/*    name={'Андреев Андрев Андреевич'}*/}
		            {/*    category={'Высшая'}*/}
		            {/*    stage={'15 лет'}*/}
					{/*	visitDate={'31.04.22'}*/}
		            {/*    education={'Образование: БОУ ВПО "Южно-Уральский государственный медицинский университет"'}*/}
					{/*/>*/}

				</div>
				<div label="Терапевт">
					<PersonalList
						specialist={'Врач-терапевт'}
						img={'./img/no-person.png'}
						name={'Андреев Андрев Андреевич'}
						category={'Высшая'}
						stage={'15 лет'}
						visitDate={'31.04.22'}
						education={'Образование: БОУ ВПО "Южно-Уральский государственный медицинский университет"'}
					/>
				</div>
				<div label="Гинеколог">
					<PersonalList
						specialist={'Врач-Гинеколог'}
						img={'./img/no-person.png'}
						name={'Андреев Андрев Андреевич'}
						category={'Высшая'}
						stage={'15 лет'}
						visitDate={'31.04.22'}
						education={'Образование: БОУ ВПО "Южно-Уральский государственный медицинский университет"'}
					/>
				</div>
				<div label="УЗИ">
					<PersonalList
						specialist={'Врач-УЗИ'}
						img={'./img/no-person.png'}
						name={'Андреев Андрев Андреевич'}
						category={'Высшая'}
						stage={'15 лет'}
						visitDate={'31.04.22'}
						education={'Образование: БОУ ВПО "Южно-Уральский государственный медицинский университет"'}
					/>
				</div>

			</Tabs>
		</main>

	)
}

export async function getServerSideProps() {
	// Fetch data from external API
	const testData = {
		meta:
			{
				title: 'Услуги',
				keywords: 'test, tamplate'
			}}


	const data = testData

	// Pass data to the page via props
	return { props: { data } }
}