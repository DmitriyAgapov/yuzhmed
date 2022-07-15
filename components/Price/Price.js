import styles from './Price.module.scss'

const testPrice = [
  {
    title: 'Консультация с осмотром',
    price: 1200
  },
    {
    title: 'Повторная консультация',
    price: 1200
  },
    {
    title: 'Консультативный прием по результатам гемостазиограммы',
    price: 1200
  },
    {
    title: 'Введение ВМС',
    price: 1200
  },
    {
    title: 'Удаление ВМС',
    price: 1200
  },

]
const PriceItem = ({title, value}) => {
  return (
      <div className={styles.price__item}>
        <div className={styles.price__item_title}>{title}</div>
        <div className={styles.price__item_value}>{value}</div>
      </div>
  )
}

const Price = () => {

  return(
      <div className={styles.price}>
        <div className={styles.price__header}>
          <div className={styles.price__header_title}>Услуги</div>
          <div className={styles.price__header_value}>Цена, руб</div>
        </div>
        {testPrice.map((item, index) =>
          <PriceItem title={item.title} key={item.index} value={item.price} />
        )}

      </div>

  )
}

export default Price