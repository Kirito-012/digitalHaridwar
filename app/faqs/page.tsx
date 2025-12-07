'use client'
import {useState} from 'react'
import Head from 'next/head'
import {motion, AnimatePresence} from 'framer-motion'
import {ChevronDown} from 'lucide-react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
			'Yes. We build professional custom websites and applications using tech stacks like Next.js, MERN, React Native and more based on your business goals.',
	},
	{
		question: 'Can you help grow my brand online?',
		answer:
			'Absolutely. We help businesses grow digitally through branding, social media strategy, and conversion-focused marketing solutions.',
	},
	{
		question: 'How can I get started?',
		answer:
			'You can request a free consultation through the Contact page. Our team will understand your requirements and recommend the best strategy for your growth.',
	},
	{
		question: 'Why choose Digital Haridwar over others?',
		answer:
			'Because we provide data-driven strategy, transparent communication, premium quality work and business-focused results.',
	},
]

export default function FAQsPage() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)
	const toggleFAQ = (index: number) =>
		setOpenIndex(openIndex === index ? null : index)

	return (
		<>
			<Head>
				<title>
					FAQs - Digital Marketing Questions Answered | Digital Haridwar
				</title>
				<meta
					name='description'
					content='Find answers to frequently asked questions about our digital marketing services, SEO, social media marketing, web design, and more at Digital Haridwar.'
				/>
				<meta
					name='keywords'
					content='Digital Marketing FAQs, SEO Questions, Social Media Marketing FAQ, Web Design Questions, Digital Agency FAQ'
				/>
				<meta
					property='og:title'
					content='FAQs - Digital Haridwar'
				/>
				<meta
					property='og:description'
					content='Find answers to frequently asked questions about our digital marketing services.'
				/>
				<meta
					property='og:url'
					content='https://www.digitalharidwar.com/faqs'
				/>
				<link
					rel='canonical'
					href='https://www.digitalharidwar.com/faqs'
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'FAQPage',
							mainEntity: faqs.map((faq) => ({
								'@type': 'Question',
								name: faq.question,
								acceptedAnswer: {
									'@type': 'Answer',
									text: faq.answer,
								},
							})),
						}),
					}}
				/>
			</Head>
			<Navbar />
			<div className='w-full min-h-screen mt-20 bg-white pb-24'>
				{/* HERO SECTION */}
				<section className='w-full py-16 md:py-32 bg-linear-to-r from-blue-600 to-cyan-400 text-white text-center'>
					<div className='max-w-3xl mx-auto px-4 sm:px-6'>
						<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
							Frequently Asked Questions
						</h1>
						<p className='text-white/90 mt-4 text-base sm:text-lg px-4'>
							Find answers to the most common questions about our services.
						</p>
					</div>
				</section>

				{/* FAQ LIST */}
				<section className='max-w-6xl mx-auto px-4 sm:px-6 mt-12 md:mt-16'>
					<div className='space-y-3 md:space-y-4'>
						{faqs.map((faq, index) => (
							<div
								key={index}
								onClick={() => toggleFAQ(index)}
								className='cursor-pointer p-4 sm:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white/80 backdrop-blur-xl'>
								<div className='flex justify-between items-start gap-4'>
									<h3 className='text-base sm:text-lg font-semibold text-gray-900 flex-1'>
										{faq.question}
									</h3>

									<motion.div
										animate={{rotate: openIndex === index ? 180 : 0}}
										transition={{duration: 0.25}}
										className='shrink-0'>
										<ChevronDown className='text-gray-600 w-5 h-5' />
									</motion.div>
								</div>

								<AnimatePresence>
									{openIndex === index && (
										<motion.p
											initial={{opacity: 0, height: 0}}
											animate={{opacity: 1, height: 'auto'}}
											exit={{opacity: 0, height: 0}}
											transition={{duration: 0.25}}
											className='text-gray-600 text-sm sm:text-base mt-3 pl-1 leading-relaxed'>
											{faq.answer}
										</motion.p>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</section>

				{/* CTA SECTION */}
				<section className='text-center mt-16 md:mt-20 px-4'>
					<h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4'>
						Still have questions?
					</h3>
					<p className='text-gray-600 mb-6 text-sm sm:text-base'>
						Our team is here to help you with anything you need.
					</p>
					<Link
						href='/contact'
						className='inline-block px-6 sm:px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-400 text-white font-semibold shadow-xl hover:opacity-90 transition text-sm sm:text-base'>
						Contact Us
					</Link>
				</section>
			</div>
			<Footer />
		</>
	)
}
