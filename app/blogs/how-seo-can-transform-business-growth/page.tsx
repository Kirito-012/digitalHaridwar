'use client'
import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {ArrowLeft} from 'lucide-react'

const blog = {
	id: 1,
	title: 'How SEO Can Transform Your Business Growth',
	description:
		'Understand the importance of SEO and learn how to scale your brand visibility digitally.',
	img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600&auto=format&fit=crop',
	date: 'December 5, 2025',
	slug: 'how-seo-can-transform-business-growth',
	content: `
# How SEO Can Transform Your Business Growth

Search Engine Optimization (SEO) is no longer optional—it's essential for any business aiming to thrive in the digital landscape. In this comprehensive guide, we'll explore how SEO can revolutionize your business growth.

## The Power of Organic Traffic

Unlike paid advertising, SEO provides sustainable, long-term results. Organic traffic from search engines is:

- **Cost-effective**: No ongoing ad spend required
- **Trustworthy**: Users trust organic results more than ads
- **Scalable**: Results compound over time

## Key SEO Strategies for Growth

### 1. Technical SEO Foundation
Ensure your website is technically sound with proper indexing, fast loading speeds, and mobile optimization.

### 2. Content Marketing Excellence
Create high-quality, valuable content that answers user questions and establishes your authority.

### 3. Local SEO Optimization
For local businesses, optimize for "near me" searches and Google My Business.

## Measuring SEO Success

Track your progress with key metrics:
- Organic traffic growth
- Keyword ranking improvements
- Conversion rate increases
- Domain authority scores

## Conclusion

SEO is a marathon, not a sprint. With consistent effort and the right strategies, it can transform your business growth trajectory.
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