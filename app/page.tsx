import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import WhyWeDifferSection from './components/WhyWeDifferSection'
import ServicesSection from './components/ServicesSection'
import BlogsSection from './components/BlogsSection'
import Footer from './components/Footer'

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutSection />
			<WhyWeDifferSection />
			<ServicesSection />
			<BlogsSection />
			<Footer />
		</>
	)
}
