import Header from './header'
import Footer from './footer'
import Nav from './Nav'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	)
}