import styles from  './Features.module.css'

const Features = ({title, img, content}) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				{img}
			</div>
			<h3 className={styles.card__title}>{title}</h3>

			<p className={styles.card__content}>
				{content}
			</p>
		</div>
	)
}
export default Features