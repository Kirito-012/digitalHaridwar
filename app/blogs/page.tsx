'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
import Image from 'next/image'

const blogs = [
	{
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
	},
	{
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
	},
	{
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
	},
]

export default function BlogsPage() {
	return (
		<div className='min-h-screen bg-white'>
			<Head>
				<title>Digital Marketing Blogs & Insights - Digital Haridwar</title>
				<meta
					name='description'
					content='Read the latest blogs on digital marketing, SEO, social media marketing, and online business growth strategies from Digital Haridwar experts.'
				/>
				<meta
					name='keywords'
					content='Digital Marketing Blogs, SEO Tips Haridwar, Social Media Marketing Insights, Content Marketing Articles, Digital Marketing Trends, Online Marketing Blog'
				/>
				<meta property='og:title' content='Digital Marketing Blogs - Digital Haridwar' />
				<meta
					property='og:description'
					content='Read the latest blogs on digital marketing, SEO, and online business growth strategies.'
				/>
				<meta property='og:url' content='https://www.digitalharidwar.com/blogs' />
				<link rel='canonical' href='https://www.digitalharidwar.com/blogs' />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Blog',
							name: 'Digital Haridwar Blog',
							description: 'Digital marketing insights, SEO tips, and online business growth strategies',
							url: 'https://www.digitalharidwar.com/blogs',
							publisher: {
								'@type': 'Organization',
								name: 'Digital Haridwar',
								logo: {
									'@type': 'ImageObject',
									url: 'https://www.digitalharidwar.com/logo.png',
								},
							},
							blogPost: blogs.map(blog => ({
								'@type': 'BlogPosting',
								headline: blog.title,
								description: blog.description,
								datePublished: blog.date,
								author: {
									'@type': 'Organization',
									name: 'Digital Haridwar',
								},
								url: `https://www.digitalharidwar.com/blogs/${blog.slug}`,
						})),
					}),
				}}
			/>
		</Head>
			<Navbar />			{/* Hero Section */}
			<section className='pt-40 pb-24 px-4 sm:px-6 lg:px-20 bg-linear-to-br from-blue-50 to-cyan-50'>
				<div className='max-w-7xl mx-auto text-center'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6'>
							Our{' '}
							<span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500'>
								Blogs
							</span>
						</h1>
						<p className='text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
							Stay updated with the latest trends in digital growth & marketing.
							Insights, strategies, and expert advice to help your business
							thrive.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Blogs Grid */}
			<section className='py-16 px-4 sm:px-6 lg:px-20'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{blogs.map((blog, index) => (
							<motion.article
								key={blog.id}
								initial={{opacity: 0, y: 30}}
								whileInView={{opacity: 1, y: 0}}
								transition={{duration: 0.6, delay: index * 0.1}}
								viewport={{once: true}}
								className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group'>
								<Link href={`/blogs/${blog.slug}`}>
									<div className='relative h-48 overflow-hidden'>
										<Image
											src={blog.img}
											alt={blog.title}
											fill
											className='object-cover group-hover:scale-105 transition-transform duration-300'
										/>
									</div>
									<div className='p-6'>
										<div className='text-sm text-slate-500 mb-2'>
											{blog.date}
										</div>
										<h2 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors'>
											{blog.title}
										</h2>
										<p className='text-slate-600 leading-relaxed mb-4'>
											{blog.description}
										</p>
										<div className='text-blue-600 font-semibold group-hover:text-blue-700 transition-colors'>
											Read More →
										</div>
									</div>
								</Link>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
