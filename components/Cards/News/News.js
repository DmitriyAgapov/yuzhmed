import styles from  './News.module.css'

const News = ({title, img, specialist, date, content}) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				{img}
			</div>
			<h3 className={styles.card__title}>{title}</h3>
			<div className={styles.card__content}>
				{content}
			</div>
			<div className={styles.card__date}>
				{date}
			</div>
		</div>
	)
}
export default News