'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
import {
	Users,
	Target,
	Award,
	TrendingUp,
	RefreshCcw,
	Layers,
	ShieldCheck,
} from 'lucide-react'

export default function AboutUsPage() {
	return (
		<div className='min-h-screen bg-white'>
			<Navbar />

			{/* Hero Section */}
			<section className='pt-52 pb-24 px-4 sm:px-6 lg:px-20 bg-linear-to-br from-blue-50 to-cyan-50'>
				<div className='max-w-7xl mx-auto text-center'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6'>
							About{' '}
							<span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500'>
								Digital Haridwar
							</span>
						</h1>
						<p className='text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
							We are a passionate team of digital strategists, creators, and
							innovators dedicated to transforming your online presence into a
							powerful growth engine.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Our Story Section */}
			<section className='py-16 px-4 sm:px-6 lg:px-20'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						<motion.div
							initial={{opacity: 0, x: -30}}
							whileInView={{opacity: 1, x: 0}}
							transition={{duration: 0.6}}
							viewport={{once: true}}>
							<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>
								Our Story
							</h2>
							<p className='text-base md:text-lg text-slate-600 leading-relaxed mb-4'>
								Founded in 2020, Digital Haridwar started as a small team with a
								big vision: to democratize digital marketing and make it
								accessible to businesses of all sizes.
							</p>
							<p className='text-base md:text-lg text-slate-600 leading-relaxed mb-4'>
								Over the years, we&apos;ve grown into a full-service digital
								agency, helping over 150+ brands achieve their digital goals
								through innovative strategies and cutting-edge technologies.
							</p>
							<p className='text-base md:text-lg text-slate-600 leading-relaxed'>
								Our commitment to excellence and client success has made us a
								trusted partner in the digital landscape.
							</p>
						</motion.div>
						<motion.div
							initial={{opacity: 0, x: 30}}
							whileInView={{opacity: 1, x: 0}}
							transition={{duration: 0.6, delay: 0.2}}
							viewport={{once: true}}
							className='relative'>
							<div className='rounded-2xl overflow-hidden shadow-2xl'>
								<img
									src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
									alt='Our team'
									className='w-full h-auto'
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Our Team Section */}
			{/* <section className='py-16 px-4 sm:px-6 lg:px-20 bg-slate-50'>
				<div className='max-w-7xl mx-auto'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}
						viewport={{once: true}}
						className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
							Meet Our Team
						</h2>
						<p className='text-lg text-slate-600 max-w-2xl mx-auto'>
							The creative minds and strategic thinkers behind your digital
							success.
						</p>
					</motion.div>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{[
							{
								name: 'Aryan Chauhan',
								role: 'CEO & Founder',
								image:
									'',
							},
							{
								name: 'Aarav Agarwal',
								role: 'Head of Marketing',
								image:
									'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
							},
							{
								name: 'Palak Singh',
								role: 'Lead Developer',
								image:
									'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
							},
						].map((member, index) => (
							<motion.div
								key={member.name}
								initial={{opacity: 0, y: 30}}
								whileInView={{opacity: 1, y: 0}}
								transition={{duration: 0.6, delay: index * 0.1}}
								viewport={{once: true}}
								className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
								<div className='text-center'>
									<img
										src={member.image}
										alt={member.name}
										className='w-24 h-24 rounded-full mx-auto mb-4 object-cover'
									/>
									<h3 className='text-xl font-semibold text-slate-900 mb-1'>
										{member.name}
									</h3>
									<p className='text-slate-600'>{member.role}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section> */}

			{/* Our Values Section */}
			<section className='py-16 px-4 sm:px-6 lg:px-20'>
				<div className='max-w-7xl mx-auto'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}
						viewport={{once: true}}
						className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
							Our Values
						</h2>
						<p className='text-lg text-slate-600 max-w-2xl mx-auto'>
							The principles that guide everything we do.
						</p>
					</motion.div>
					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{
								icon: <Target className='w-8 h-8' />,
								title: 'Innovation',
								desc: 'We embrace new technologies and creative solutions.',
							},
							{
								icon: <Users className='w-8 h-8' />,
								title: 'Collaboration',
								desc: 'We work closely with our clients as partners.',
							},
							{
								icon: <Award className='w-8 h-8' />,
								title: 'Excellence',
								desc: 'We strive for the highest quality in everything.',
							},
							{
								icon: <TrendingUp className='w-8 h-8' />,
								title: 'Growth',
								desc: 'We help our clients and ourselves grow continuously.',
							},
						].map((value, index) => (
							<motion.div
								key={value.title}
								initial={{opacity: 0, y: 30}}
								whileInView={{opacity: 1, y: 0}}
								transition={{duration: 0.6, delay: index * 0.1}}
								viewport={{once: true}}
								className='text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow'>
								<div className='w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white'>
									{value.icon}
								</div>
								<h3 className='text-xl font-semibold text-slate-900 mb-2'>
									{value.title}
								</h3>
								<p className='text-slate-600'>{value.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* What Makes Us Different Section */}
			<section className='py-16 px-4 sm:px-6 lg:px-20 bg-slate-50'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
						{/* LEFT TEXT SIDE */}
						<motion.div
							initial={{opacity: 0, x: -30}}
							whileInView={{opacity: 1, x: 0}}
							transition={{duration: 0.6}}
							viewport={{once: true}}>
							<span className='px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold'>
								Exclusive Service
							</span>

							<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight'>
								What Makes Us Different
							</h2>

							<p className='text-base md:text-lg text-gray-600 mt-4 leading-relaxed'>
								Google Panda focuses on content quality and authenticity. We
								help businesses achieve higher search rankings by optimizing
								website content, removing penalties, and creating long-term
								sustainable SEO growth strategies aligned with Panda&apos;s
								standards.
							</p>

							<motion.button
								whileHover={{scale: 1.05}}
								className='mt-6 bg-linear-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-semibold shadow-lg'>
								Learn More
							</motion.button>
						</motion.div>

						{/* RIGHT CARDS SIDE */}
						<motion.div
							initial={{opacity: 0, x: 30}}
							whileInView={{opacity: 1, x: 0}}
							transition={{duration: 0.6, delay: 0.15}}
							viewport={{once: true}}
							className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
							<div className='p-4 md:p-6 rounded-xl shadow-xl bg-white text-gray-800'>
								<div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl mb-3 bg-blue-50 text-blue-600'>
									<TrendingUp className='w-5 h-5 md:w-6 md:h-6' />
								</div>
								<h4 className='font-semibold text-base md:text-lg'>
									Better Search Rankings
								</h4>
								<p className='mt-1 text-xs md:text-sm text-gray-500'>
									Improve visibility & outrank competitors.
								</p>
							</div>
							<div className='p-4 md:p-6 rounded-xl shadow-xl bg-linear-to-br from-blue-600 to-cyan-500 text-white'>
								<div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl mb-3 bg-white/20'>
									<RefreshCcw className='w-5 h-5 md:w-6 md:h-6' />
								</div>
								<h4 className='font-semibold text-base md:text-lg'>
									Penalty Recovery
								</h4>
								<p className='mt-1 text-xs md:text-sm opacity-90'>
									Fix issues affecting performance.
								</p>
							</div>
							<div className='p-4 md:p-6 rounded-xl shadow-xl bg-linear-to-br from-cyan-500 to-blue-600 text-white'>
								<div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl mb-3 bg-white/20'>
									<Layers className='w-5 h-5 md:w-6 md:h-6' />
								</div>
								<h4 className='font-semibold text-base md:text-lg'>
									Quality Content Strategy
								</h4>
								<p className='mt-1 text-xs md:text-sm opacity-90'>
									Build trust & brand authority.
								</p>
							</div>
							<div className='p-4 md:p-6 rounded-xl shadow-xl bg-white text-gray-800'>
								<div className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl mb-3 bg-cyan-50 text-cyan-600'>
									<ShieldCheck className='w-5 h-5 md:w-6 md:h-6' />
								</div>
								<h4 className='font-semibold text-base md:text-lg'>
									Long-Term Organic Growth
								</h4>
								<p className='mt-1 text-xs md:text-sm text-gray-500'>
									Achieve sustainable SEO success.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className='py-16 px-4 sm:px-6 lg:px-20 bg-linear-to-r from-blue-600 to-cyan-500 text-white'>
				<div className='max-w-7xl mx-auto'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}
						viewport={{once: true}}
						className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Impact</h2>
						<p className='text-lg opacity-90 max-w-2xl mx-auto'>
							Numbers that speak to our commitment and success.
						</p>
					</motion.div>
					<div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{number: '150+', label: 'Happy Clients'},
							{number: '500+', label: 'Projects Completed'},
							{number: '98%', label: 'Success Rate'},
							{number: '5+', label: 'Years Experience'},
						].map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{opacity: 0, scale: 0.8}}
								whileInView={{opacity: 1, scale: 1}}
								transition={{duration: 0.6, delay: index * 0.1}}
								viewport={{once: true}}
								className='text-center'>
								<div className='text-4xl md:text-5xl font-bold mb-2'>
									{stat.number}
								</div>
								<div className='text-lg opacity-90'>{stat.label}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
