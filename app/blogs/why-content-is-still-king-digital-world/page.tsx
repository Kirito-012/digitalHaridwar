'use client'
import React from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {ArrowLeft} from 'lucide-react'

const blog = {
	id: 3,
	title: 'Why Content is Still King in the Digital World',
	description:
		'Discover why content remains the core of brand communication and customer engagement.',
	img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
	date: 'December 3, 2025',
	slug: 'why-content-is-still-king-digital-world',
	content: `
# Why Content is Still King in the Digital World

Despite the rapid evolution of digital marketing, one truth remains constant: content is king. Here's why quality content continues to drive success.

## The Foundation of Digital Marketing

Content serves as the cornerstone of all digital marketing efforts:

- **SEO Success**: Search engines reward valuable content
- **Social Sharing**: Shareable content drives organic reach
- **Brand Authority**: Quality content builds trust and credibility

## Types of High-Impact Content

### Educational Content
- How-to guides and tutorials
- Industry insights and research
- Educational videos and infographics

### Entertaining Content
- Memes and viral challenges
- User-generated content campaigns
- Interactive quizzes and polls

### Inspirational Content
- Success stories and case studies
- Motivational content
- Behind-the-scenes looks

## Content Strategy Best Practices

### 1. Know Your Audience
Create buyer personas and understand their pain points.

### 2. Content Calendar Planning
Consistent publishing with strategic timing.

### 3. Multi-Channel Distribution
Repurpose content across different platforms.

### 4. Performance Measurement
Track engagement, shares, and conversions.

## The Future of Content

As AI tools evolve, the focus will shift from quantity to quality. Authentic, valuable content will become even more crucial.

## Conclusion

In the crowded digital landscape, quality content is your competitive advantage. Focus on creating value, and the results will follow.
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