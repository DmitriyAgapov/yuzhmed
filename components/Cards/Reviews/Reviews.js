import styles from  './Reviews.module.css'

const Reviews = ({name, img, doctor, date, content}) => {
	return (
		<div className={styles.card}>
			<h3 className={styles.card__title}>{name}</h3>
			<div className={styles.card__content}>
				{content}
			</div>
			<div className={styles.card__date}>
				{date}
			</div>
		</div>
	)
}
export default Reviews