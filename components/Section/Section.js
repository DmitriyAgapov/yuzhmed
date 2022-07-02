const Section = ({children, type = "", title, content, img, links, tabs}) => {
	return (
		<section className={`section ${type}`}>
			{title ? <h2 className={'section__title'}>{title}</h2> : null}
			{tabs ? <div className={'section__tabs'}>{tabs}</div> : null}
			{content ? <div className={'section__content'}>{content}{children}</div> : null}
			{img ? <div className={'section__image'}>{img}</div> : null}
			{links ? <div className={'section__links'}>{links}</div> : null}
		</section>
	)

}
export default Section