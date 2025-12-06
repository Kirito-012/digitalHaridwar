'use client'
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {ChevronDown} from 'lucide-react'

const faqs = [
	{
		question: 'What services does Digital Haridwar provide?',
		answer:
			'We offer complete digital growth solutions including Digital Marketing, SEO, Social Media Marketing, PPC, Branding, Web & App Development, Content Marketing, and Reputation Management.',
	},
	{
		question: 'How long does it take to see results from digital marketing?',
		answer:
			'Generally, SEO and content efforts show visible growth in 2-3 months while paid campaigns like Google Ads & SMM can generate instant results based on optimized strategy.',
	},
	{
		question: 'Do you build custom websites and mobile apps?',
		answer:
			'Yes. We build professional custom websites and applications using Tech stacks like Next.js, React, MERN, WordPress and more based on your business goals.',
	},
	{
		question: 'Can you help grow my brand online?',
		answer:
			'Absolutely. We help businesses grow digitally through branding, reputation management, social media strategy, and conversion-focused marketing solutions.',
	},
	{
		question: 'How can I get started?',
		answer:
			'You can request a free consultation through the Contact page. Our team will understand your requirements and recommend the best strategy for your growth.',
	},
]

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className='py-24 bg-white'>
			<div className='max-w-6xl mx-auto px-6'>
				{/* Title */}
				<div className='text-center mb-10'>
					<span className='text-sm font-semibold bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full'>
						FAQ
					</span>
					<h2 className='text-4xl font-bold mt-4'>
						Frequently Asked{' '}
						<span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400'>
							Questions
						</span>
					</h2>
					<p className='text-gray-500 mt-3'>
						Everything you need to know about our services and process.
					</p>
				</div>

				{/* FAQ Accordion */}
				<div className='space-y-4'>
					{faqs.map((faq, index) => (
						<div
							key={index}
							onClick={() => toggleFAQ(index)}
							className='cursor-pointer p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white/80 backdrop-blur-xl'>
							<div className='flex justify-between items-center'>
								<h3 className='text-lg font-semibold text-gray-900'>
									{faq.question}
								</h3>

								<motion.div
									animate={{rotate: openIndex === index ? 180 : 0}}
									transition={{duration: 0.25}}>
									<ChevronDown className='text-gray-600' />
								</motion.div>
							</div>

							<AnimatePresence>
								{openIndex === index && (
									<motion.p
										initial={{opacity: 0, height: 0}}
										animate={{opacity: 1, height: 'auto'}}
										exit={{opacity: 0, height: 0}}
										transition={{duration: 0.25}}
										className='text-gray-600 text-sm mt-3'>
										{faq.answer}
									</motion.p>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
