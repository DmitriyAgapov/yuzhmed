import styles from './Personal.module.scss'
import Link from "next/link";
import Button from "../../ui/Button";
export const PersonalAbout = ({category, stage, education}) => {
	return (
	<ul className={styles.card_list_about_list}>
		<li className={styles.card_list_about_item}>Категория: <span className={styles.card_list_info_value}>{category}</span></li>
		<li className={styles.card_list_about_item}>Стаж: <span className={styles.card_list_info_value}>{stage}</span></li>
		<li className={styles.card_list_about_item}>Образовние: <span>{education}</span></li>
	</ul>
	)
}
export const PersonalReviews = ({number}) => {
	return (
		<div className={styles.card_list_reviews}>
			<div className={styles.card_list_stars}>
				star | star | star
			</div>
			<Link href={'#'}>
				<a className={styles.card_list_reviews_link}>
					Отзывы  <span className={styles.card_list_rewiews_number}>(5)</span>
				</a>
			</Link>
		</div>
	)
}

const PersonalList = ({name, img, specialist, category, link, stage, education, visitDate}) => {
	return (
		<div className={styles.card_list}>
			<div className={styles.card__image_list}>
				<img src={img} alt={''} />
			</div>
			<div className={styles.card_list_content}>
				<div className={styles.card__content_specialist}>
					{specialist}
				</div>
				<h3 className={styles.card__title}>{name}</h3>
				<PersonalReviews/>
				<PersonalAbout education={education} stage={stage} category={category} />
				<div className={styles.card_list_links}>
					<Button text={'Запись на прием'} variant={'button-primary'}/>
					<Button link={link} text={'Подробнее'} variant={'button-outline'}/>
				</div>
			</div>
			<div className={styles.card_list_visit}>
				<span className={styles.card_list_visit_nearest}>Ближайшая дата приема: <span className={styles.card_list_info_value}>{visitDate}</span></span>
				<div className={styles.card_list_visit_chips}>
					<Button text={'08:00'} variant={'button-chips'}/>
					<Button text={'08:30'} variant={'button-chips'}/>
					<Button text={'09:00'} variant={'button-chips'}/>
					<Button text={'10:00'} variant={'button-chips'}/>
					<Button text={'11:00'} variant={'button-chips'}/>
				</div>
			</div>


		</div>
	)
}
export default PersonalList