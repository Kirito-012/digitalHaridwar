'use client'

import {motion} from 'framer-motion'
import {ShieldCheck, TrendingUp, RefreshCcw, Layers} from 'lucide-react'

export default function WhyWeDifferSection() {
	return (
		<section className='py-24'>
			<div className='container mx-auto px-4 grid md:grid-cols-2 gap-14 items-center'>
				{/* LEFT TEXT SIDE */}
				<motion.div
					initial={{opacity: 0, x: -30}}
					whileInView={{opacity: 1, x: 0}}
					transition={{duration: 0.6}}
					viewport={{once: true}}>
					<span className='px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold'>
						Exclusive Service
					</span>

					<h2 className='text-4xl md:text-5xl font-bold mt-4 leading-tight'>
						Outsmart Competitors with
						<br />
						<span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500'>
							Google Panda Optimization
						</span>
					</h2>

					<p className='text-gray-600 mt-4 text-lg leading-relaxed'>
						Google Panda focuses on content quality and authenticity. We help
						businesses achieve higher search rankings by optimizing website
						content, removing penalties, and creating long-term sustainable SEO
						growth strategies aligned with Panda's standards.
					</p>

					<motion.button
						whileHover={{scale: 1.05}}
						className='mt-6 bg-linear-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg'>
						Learn More
					</motion.button>
				</motion.div>

				{/* RIGHT CARDS SIDE */}
				<motion.div
					initial={{opacity: 0, x: 30}}
					whileInView={{opacity: 1, x: 0}}
					transition={{duration: 0.6, delay: 0.15}}
					viewport={{once: true}}
					className='grid grid-cols-2 gap-4'>
					<Card
						icon={<TrendingUp />}
						title='Better Search Rankings'
						desc='Improve visibility & outrank competitors.'
						gradient={false}
					/>
					<Card
						icon={<RefreshCcw />}
						title='Penalty Recovery'
						desc='Fix issues affecting performance.'
						gradient={true}
					/>
					<Card
						icon={<Layers />}
						title='Quality Content Strategy'
						desc='Build trust & brand authority.'
						gradient={false}
					/>
					<Card
						icon={<ShieldCheck />}
						title='Long-Term Organic Growth'
						desc='Achieve sustainable SEO success.'
						gradient={false}
					/>
				</motion.div>
			</div>
		</section>
	)
}

function Card({
	icon,
	title,
	desc,
	gradient,
}: {
	icon: React.ReactNode
	title: string
	desc: string
	gradient: boolean
}) {
	return (
		<motion.div
			whileHover={{scale: 1.04}}
			className={`p-6 rounded-xl shadow-xl ${
				gradient
					? 'bg-linear-to-br from-blue-600 to-cyan-500 text-white'
					: 'bg-white text-gray-800'
			}`}>
			<div
				className={`w-10 h-10 flex items-center justify-center rounded-xl mb-3 ${
					gradient ? 'bg-white/20' : 'bg-blue-50 text-blue-600'
				}`}>
				{icon}
			</div>
			<h4 className='font-semibold text-lg'>{title}</h4>
			<p
				className={`mt-1 text-sm ${gradient ? 'opacity-90' : 'text-gray-500'}`}>
				{desc}
			</p>
		</motion.div>
	)
}
