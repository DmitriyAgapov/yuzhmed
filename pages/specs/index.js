import Tabs from "../../components/Tabs/Tabs";
import PersonalList from "../../components/Cards/Personal/Personal-list";

export default function Specialists(props) {
	const meta = props.data.meta

	return (
		<main className={'main'}>
			<h1>{meta.title}</h1>
			<Tabs>
				<div label="Все врачи">
					<PersonalList
						specialist={'Врач-терапевт'}
		                img={'./img/no-person.png'}
		                name={'Андреев Андрев Андреевич'}
		                category={'Высшая'}
						link={'/specs/specs-id-1'}
		                stage={'15 лет'}
						visitDate={'31.04.22'}
		                education={'Образование: БОУ ВПО "Южно-Уральский государственный медицинский университет"'}
					/>
					<PersonalList
						specialist={'Врач-терапевт'}
		                img={'./img/no-person.png'}
		                name={'Андреев Андрев Андреевич'}
		                category={'Высшая'}
		                stage={'15 лет'}
						link={'/specs/specs-id-1'}
						visitDate={'31.04.22'}
		                education={'Образование: БОУ ВПО "Южно-Уральский государственный медицинский университет"'}
					/>
					<PersonalList
						specialist={'Врач-терапевт'}
		                img={'./img/no-person.png'}
		                name={'Андреев Андрев Андреевич'}
		                category={'Высшая'}
		                stage={'15 лет'}
						link={'/specs/specs-id-1'}
						visitDate={'31.04.22'}
		                education={'Образование: БОУ ВПО "Южно-Уральский государственный медицинский университет"'}
					/>
					<PersonalList
						specialist={'Врач-терапевт'}
		                img={'./img/no-person.png'}
		                name={'Андреев Андрев Андреевич'}
		                category={'Высшая'}
		                stage={'15 лет'}
						link={'/specs/specs-id-1'}
						visitDate={'31.04.22'}
		                education={'Образование: БОУ ВПО "Южно-Уральский государственный медицинский университет"'}
					/>

				</div>
				<div label="Терапевт">
					<PersonalList
						specialist={'Врач-терапевт'}
						img={'./img/no-person.png'}
						name={'Андреев Андрев Андреевич'}
						category={'Высшая'}
						stage={'15 лет'}
						link={'/specs/specs-id-1'}
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
						link={'/specs/specs-id-1'}
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
						link={'/specs/specs-id-1'}
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
				title: 'Специалисты',
				keywords: 'test, tamplate'
			}}


	const data = testData

	// Pass data to the page via props
	return { props: { data } }
}