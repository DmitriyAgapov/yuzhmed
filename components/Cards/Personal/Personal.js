import styles from  './Personal.module.css'

const Personal = ({name, img, specialist}) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				{img}
			</div>
			<h3 className={styles.card__title}>{name}</h3>
			<div className={styles.card__content}>
				<span className={styles.card__content_label}>Специализация</span>{specialist}
			</div>
		</div>
	)
}
export default Personal