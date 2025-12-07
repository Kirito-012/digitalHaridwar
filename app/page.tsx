import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import WhyWeDifferSection from './components/WhyWeDifferSection'
import ServicesSection from './components/ServicesSection'
import BlogsSection from './components/BlogsSection'
import Footer from './components/Footer'
import FAQSection from './components/FAQSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Digital Haridwar - Best Digital Marketing Agency in Haridwar',
	description: 'Transform your business with Digital Haridwar - leading digital marketing agency offering SEO, social media marketing, PPC, web design, and branding services in Haridwar.',
	keywords: [
		'Digital Marketing Agency in Haridwar',
		'Best Digital Agency Haridwar',
		'SEO Services Haridwar',
		'Social Media Marketing Haridwar',
		'Website Designing Haridwar',
		'PPC Services Haridwar',
		'Digital Branding Agency',
		'Online Marketing Haridwar',
	],
	openGraph: {
		title: 'Digital Haridwar - Best Digital Marketing Agency in Haridwar',
		description: 'Transform your business with expert digital marketing services in Haridwar.',
		url: 'https://www.digitalharidwar.com',
	},
	alternates: {
		canonical: 'https://www.digitalharidwar.com',
	},
}

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<AboutSection />
			<WhyWeDifferSection />
			<ServicesSection />
			<BlogsSection />
			<FAQSection />
			<Footer />
		</>
	)
}
