'use client'
import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {ArrowLeft} from 'lucide-react'

const blog = {
	id: 2,
	title: 'Top Digital Marketing Strategies for 2025',
	description:
		'Explore innovative marketing trends and tools reshaping brand success this year.',
	img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
	date: 'December 4, 2025',
	slug: 'top-digital-marketing-strategies-2025',
	content: `
# Top Digital Marketing Strategies for 2025

As we enter 2025, digital marketing continues to evolve rapidly. Here are the strategies that will define success this year.

## AI-Powered Personalization

Artificial Intelligence is revolutionizing how we approach customer engagement:

- **Dynamic Content**: AI-tailored content based on user behavior
- **Predictive Analytics**: Anticipate customer needs before they arise
- **Chatbots and Virtual Assistants**: 24/7 customer support

## Video Content Dominance

Video continues to be the king of content formats:

- **Short-form videos** on TikTok and Instagram Reels
- **Live streaming** for real-time engagement
- **Video SEO** optimization for search engines

## Voice Search Optimization

With the rise of smart speakers, voice search is becoming crucial:

- **Conversational keywords**
- **Featured snippets** optimization
- **Local SEO** for voice queries

## Privacy-First Marketing

With changing privacy regulations, focus on:

- **First-party data** collection
- **Consent-based marketing**
- **Transparent data practices**

## Conclusion

2025 will be defined by AI, video, and privacy-conscious marketing. Adapt these strategies to stay ahead of the curve.
	`,
}

export default function BlogPost() {
	return (
		<div className='min-h-screen bg-white'>
			<Navbar />

			{/* Hero Section */}
			<section className='pt-28 pb-8 px-4 sm:px-6 lg:px-20'>
				<div className='max-w-4xl mx-auto'>
					<Link
						href='/blogs'
						className='inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors'>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Back to Blogs
					</Link>

					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}>
						<div className='text-sm text-slate-500 mb-4'>{blog.date}</div>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight'>
							{blog.title}
						</h1>
						<p className='text-lg text-slate-600 leading-relaxed mb-8'>
							{blog.description}
						</p>
						<div className='relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg'>
							<Image
								src={blog.img}
								alt={blog.title}
								fill
								className='object-cover'
							/>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Content Section */}
			<section className='py-16 px-4 sm:px-6 lg:px-20'>
				<div className='max-w-4xl mx-auto'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}
						viewport={{once: true}}
						className='prose prose-lg max-w-none'>
						<pre className='whitespace-pre-line text-slate-700 leading-relaxed'>
							{blog.content}
						</pre>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
