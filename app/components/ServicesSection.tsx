'use client'
import {motion} from 'framer-motion'
import Link from 'next/link'
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
	ChevronRight,
	Sparkles,
} from 'lucide-react'

const services = [
	{
		title: 'Digital Marketing',
		icon: TrendingUp,
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
		points: ['SEO Packages', 'Local SEO', 'Ecommerce SEO'],
		gradient: 'from-cyan-500 to-blue-400',
	},
	{
		title: 'Social Media Marketing',
		icon: Share2,
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
		points: ['Google Ads', 'Conversion Setup', 'Lead Generation'],
		gradient: 'from-cyan-600 to-blue-500',
	},
	{
		title: 'Branding',
		icon: Palette,
		points: ['Brand Identity', 'Logo Design', 'Creative Direction'],
		gradient: 'from-blue-500 to-cyan-600',
	},
	{
		title: 'Web Development',
		icon: Code,
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
		points: ['App Launch Support', 'ASO Strategies', 'Keyword Optimization'],
		gradient: 'from-blue-600 to-cyan-400',
	},
	{
		title: 'Content Marketing',
		icon: FileText,
		points: ['Blogs & Articles', 'Email Marketing', 'Copywriting'],
		gradient: 'from-cyan-600 to-blue-400',
	},
	{
		title: 'Reputation Management',
		icon: Star,
		points: ['Review Boosting', 'Brand Monitoring', 'Public Relations'],
		gradient: 'from-blue-500 to-cyan-500',
	},
]

export default function ServicesSection() {
	return (
		<section className='w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-blue-50/30 relative overflow-hidden'>
			{/* Background decoration */}
			<div className='absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10' />
			<div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10' />

			<div className='max-w-7xl mx-auto'>
				{/* Heading */}
				<div className='text-center mb-16 space-y-4'>
					<div className='inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200 shadow-sm'>
						<Sparkles
							className='text-blue-600'
							size={18}
						/>
						<span className='text-sm font-semibold text-blue-700'>
							What We Offer
						</span>
					</div>
					<h2 className='text-4xl lg:text-5xl font-bold text-slate-900'>
						Our Premium{' '}
						<span className='bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent'>
							Services
						</span>
					</h2>
					<p className='text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed'>
						Comprehensive digital solutions designed to elevate your brand and
						drive measurable growth
					</p>
				</div>

				{/* Services Grid */}
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
					{services.map((service, idx) => {
						const Icon = service.icon
						return (
							<motion.div
								key={idx}
								initial={{opacity: 0, y: 20}}
								whileInView={{opacity: 1, y: 0}}
								viewport={{once: true}}
								transition={{delay: idx * 0.1}}
								whileHover={{y: -8, scale: 1.02}}
								className='group relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10'>
								{/* Gradient background on hover */}
								<div className='absolute inset-0 bg-linear-to-br from-blue-50/50 to-cyan-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

								{/* Content */}
								<div className='relative z-10'>
									{/* Icon */}
									<div
										className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${service.gradient} mb-5 shadow-lg`}>
										<Icon
											className='text-white'
											size={28}
										/>
									</div>

									{/* Title */}
									<h3 className='text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors'>
										{service.title}
									</h3>

									{/* Points */}
									<ul className='space-y-2.5'>
										{service.points.map((p, i) => (
											<li
												key={i}
												className='flex items-start gap-2.5 text-slate-600'>
												<div className='mt-1.5 w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-400 shrink-0' />
												<span className='text-sm leading-relaxed'>{p}</span>
											</li>
										))}
									</ul>

									{/* Learn More Link */}
									<div className='mt-6 pt-4 border-t border-slate-100'>
										<Link
											href='/services'
											className='inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors'>
											<span>Learn More</span>
											<ChevronRight
												size={16}
												className='ml-1 group-hover:translate-x-1 transition-transform'
											/>
										</Link>
									</div>
								</div>
							</motion.div>
						)
					})}
				</div>

				{/* CTA Button */}
				<div className='flex justify-center mt-16'>
					<Link
						href='/services'
						className='group inline-flex items-center space-x-2 px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300'>
						<span>View All Services</span>
						<ChevronRight
							size={20}
							className='group-hover:translate-x-1 transition-transform'
						/>
					</Link>
				</div>
			</div>
		</section>
	)
}
