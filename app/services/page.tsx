'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
import {
	TrendingUp,
	Search,
	Share2,
	MousePointerClick,
	Palette,
	Code,
	Smartphone,
	FileText,
	Star,
	Trees,
	Briefcase,
	Heart,
	Sparkles,
} from 'lucide-react'
import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Our Services - Digital Marketing, SEO, Web Design | Digital Haridwar',
	description:
		'Explore our comprehensive digital marketing services in Haridwar including SEO, social media marketing, PPC, web design, content marketing, and digital branding solutions.',
	keywords: [
		'Digital Marketing Services Haridwar',
		'SEO Services Haridwar',
		'Social Media Marketing Haridwar',
		'Website Designing Haridwar',
		'PPC Services Haridwar',
		'Google Ads Company Haridwar',
		'Content Marketing Haridwar',
		'Web Development Haridwar',
		'Digital Branding Haridwar',
	],
	openGraph: {
		title: 'Our Services - Digital Haridwar',
		description:
			'Explore our comprehensive digital marketing services including SEO, social media marketing, PPC, and web design.',
		url: 'https://www.digitalharidwar.com/services',
	},
	alternates: {
		canonical: 'https://www.digitalharidwar.com/services',
	},
}

const digitalServices = [
	{
		title: 'Digital Marketing',
		icon: TrendingUp,
		description:
			'Comprehensive digital marketing strategies including 360° growth planning, analytics tracking, and performance optimization to boost your online presence.',
		points: [
			'360° Digital Growth',
			'Strategy & Planning',
			'Analytics & Tracking',
		],
		gradient: 'from-blue-500 to-cyan-400',
	},
	{
		title: 'Search Engine Optimization',
		icon: Search,
		description:
			'Improve your search rankings with our expert SEO services, from local SEO to e-commerce optimization, ensuring better visibility and organic traffic.',
		points: ['SEO Packages', 'Local SEO', 'Ecommerce SEO'],
		gradient: 'from-cyan-500 to-blue-400',
	},
	{
		title: 'Social Media Marketing',
		icon: Share2,
		description:
			'Engage your audience across social platforms with targeted campaigns, influencer partnerships, and optimized content strategies.',
		points: [
			'Instagram & Facebook',
			'Campaign Optimization',
			'Influencer Marketing',
		],
		gradient: 'from-blue-600 to-cyan-500',
	},
	{
		title: 'Pay Per Click (PPC)',
		icon: MousePointerClick,
		description:
			'Drive immediate results with expertly managed PPC campaigns on Google Ads, focusing on conversions and lead generation.',
		points: ['Google Ads', 'Conversion Setup', 'Lead Generation'],
		gradient: 'from-cyan-600 to-blue-500',
	},
	{
		title: 'Branding',
		icon: Palette,
		description:
			'Build a strong brand identity with professional logo design, creative direction, and comprehensive branding solutions.',
		points: ['Brand Identity', 'Logo Design', 'Creative Direction'],
		gradient: 'from-blue-500 to-cyan-600',
	},
	{
		title: 'Web Development',
		icon: Code,
		description:
			'Custom website development using modern technologies like Next.js, MERN stack, and WordPress for responsive, high-performance sites.',
		points: [
			'Next.js / MERN / WordPress',
			'Corporate Websites',
			'E-commerce Stores',
		],
		gradient: 'from-cyan-500 to-blue-600',
	},
	{
		title: 'App Store Optimization',
		icon: Smartphone,
		description:
			'Optimize your mobile apps for better visibility in app stores with ASO strategies, keyword optimization, and launch support.',
		points: ['App Launch Support', 'ASO Strategies', 'Keyword Optimization'],
		gradient: 'from-blue-600 to-cyan-400',
	},
	{
		title: 'Content Marketing',
		icon: FileText,
		description:
			'Create engaging content that drives results, from blog articles and email campaigns to professional copywriting services.',
		points: ['Blogs & Articles', 'Email Marketing', 'Copywriting'],
		gradient: 'from-cyan-600 to-blue-400',
	},
	{
		title: 'Reputation Management',
		icon: Star,
		description:
			'Protect and enhance your brand reputation with review management, brand monitoring, and strategic public relations.',
		points: ['Review Boosting', 'Brand Monitoring', 'Public Relations'],
		gradient: 'from-blue-500 to-cyan-500',
	},
]

const eventServices = [
	{
		title: 'Farm Tourism',
		icon: Trees,
		description:
			'Experience authentic rural life with our curated farm tourism packages, including farm stays, agricultural activities, and cultural immersion experiences.',
		points: ['Farm Stays', 'Agricultural Activities', 'Cultural Experiences'],
		gradient: 'from-green-500 to-emerald-400',
	},
	{
		title: 'Corporate Events',
		icon: Briefcase,
		description:
			'Professional event management for corporate gatherings, conferences, team-building activities, and business networking events tailored to your company needs.',
		points: ['Conference Planning', 'Team Building', 'Event Logistics'],
		gradient: 'from-slate-600 to-slate-500',
	},
	{
		title: 'Destination Weddings',
		icon: Heart,
		description:
			'Create your dream wedding in stunning destinations with our comprehensive planning services, from venue selection to full ceremony coordination.',
		points: ['Venue Selection', 'Ceremony Planning', 'Vendor Coordination'],
		gradient: 'from-pink-500 to-rose-400',
	},
	{
		title: 'Special Occasions',
		icon: Sparkles,
		description:
			'Make every special moment memorable with our event planning services for birthdays, anniversaries, celebrations, and milestone events.',
		points: ['Theme Design', 'Entertainment', 'Personalized Planning'],
		gradient: 'from-purple-500 to-pink-500',
	},
]

export default function ServicesPage() {
	return (
		<div className='min-h-screen bg-white'>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Service',
							serviceType: 'Digital Marketing Services',
							provider: {
								'@type': 'Organization',
								name: 'Digital Haridwar',
								url: 'https://www.digitalharidwar.com',
							},
							areaServed: {
								'@type': 'City',
								name: 'Haridwar',
							},
							hasOfferCatalog: {
								'@type': 'OfferCatalog',
								name: 'Digital Marketing Services',
								itemListElement: [
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'SEO Services',
											description:
												'Search Engine Optimization services to improve website rankings',
										},
									},
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'Social Media Marketing',
											description:
												'Comprehensive social media marketing and management',
										},
									},
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'PPC Services',
											description:
												'Pay-per-click advertising and Google Ads management',
										},
									},
									{
										'@type': 'Offer',
										itemOffered: {
											'@type': 'Service',
											name: 'Web Design & Development',
											description:
												'Professional website design and development services',
										},
									},
								],
							},
						}),
					}}
				/>
			</head>
			<Navbar />
			<section className='pt-40 pb-24 px-4 sm:px-6 lg:px-20 bg-linear-to-br from-blue-50 to-cyan-50'>
				<div className='max-w-7xl mx-auto text-center'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6'>
							Our{' '}
							<span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500'>
								Services
							</span>
						</h1>
						<p className='text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
							Comprehensive solutions for digital growth and event management.
							From SEO and marketing to wedding planning and corporate events.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Digital Services Section */}
			<section className='py-16 px-4 sm:px-6 lg:px-20'>
				<div className='max-w-7xl mx-auto'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}
						viewport={{once: true}}
						className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
							Digital Services
						</h2>
						<p className='text-lg text-slate-600 max-w-2xl mx-auto'>
							Transform your digital presence with our expert services
						</p>
					</motion.div>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{digitalServices.map((service, index) => (
							<motion.div
								key={service.title}
								initial={{opacity: 0, y: 30}}
								whileInView={{opacity: 1, y: 0}}
								transition={{duration: 0.6, delay: index * 0.1}}
								viewport={{once: true}}
								className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group`}>
								<div
									className={`w-16 h-16 bg-linear-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
									<service.icon className='w-8 h-8' />
								</div>
								<h3 className='text-xl font-bold text-slate-900 mb-3'>
									{service.title}
								</h3>
								<div className='text-sm font-semibold text-blue-600 mb-2 bg-blue-50 px-3 py-1 rounded-full inline-block'>
									2026 coming soon
								</div>
								<p className='text-slate-600 mb-4 leading-relaxed'>
									{service.description}
								</p>
								<ul className='space-y-2'>
									{service.points.map((point, idx) => (
										<li
											key={idx}
											className='flex items-center text-sm text-slate-600'>
											<div className='w-1.5 h-1.5 bg-blue-500 rounded-full mr-3'></div>
											{point}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Event Management Services Section */}
			<section className='py-16 px-4 sm:px-6 lg:px-20 bg-slate-50'>
				<div className='max-w-7xl mx-auto'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}
						viewport={{once: true}}
						className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
							Event Management Services
						</h2>
						<p className='text-lg text-slate-600 max-w-2xl mx-auto'>
							Create unforgettable experiences with our professional event
							planning
						</p>
					</motion.div>
					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{eventServices.map((service, index) => (
							<motion.div
								key={service.title}
								initial={{opacity: 0, y: 30}}
								whileInView={{opacity: 1, y: 0}}
								transition={{duration: 0.6, delay: index * 0.1}}
								viewport={{once: true}}
								className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group`}>
								<div
									className={`w-16 h-16 bg-linear-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform`}>
									<service.icon className='w-8 h-8' />
								</div>
								<h3 className='text-xl font-bold text-slate-900 mb-3'>
									{service.title}
								</h3>
								<div className='text-sm font-semibold text-blue-600 mb-2 bg-blue-50 px-3 py-1 rounded-full inline-block'>
									2026 coming soon
								</div>
								<p className='text-slate-600 mb-4 leading-relaxed'>
									{service.description}
								</p>
								<ul className='space-y-2'>
									{service.points.map((point, idx) => (
										<li
											key={idx}
											className='flex items-center text-sm text-slate-600'>
											<div className='w-1.5 h-1.5 bg-blue-500 rounded-full mr-3'></div>
											{point}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
