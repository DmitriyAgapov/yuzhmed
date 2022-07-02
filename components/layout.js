import Header from './header'
import Footer from './footer'
import Nav from './Nav/Nav'
import NewHead from "./head";

export default function Layout({ children }) {
	return (
		<>
			<NewHead />
			<Header />
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	)
}