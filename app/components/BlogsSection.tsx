'use client'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
const blogs = [
	{
		id: 1,
		title: 'How SEO Can Transform Your Business Growth',
		description:
			'Understand the importance of SEO and learn how to scale your brand visibility digitally.',
		img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600&auto=format&fit=crop',
	},
	{
		id: 2,
		title: 'Top Digital Marketing Strategies for 2025',
		description:
			'Explore innovative marketing trends and tools reshaping brand success this year.',
		img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
	},
	{
		id: 3,
		title: 'Why Content is Still King in the Digital World',
		description:
			'Discover why content remains the core of brand communication and customer engagement.',
		img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
	},
]

export default function BlogsSection() {
	return (
		<section className='w-full py-24 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
				{/* Heading */}
				<div className='text-center mb-12'>
					<span className='text-sm font-semibold bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full'>
						Latest Insights
					</span>
					<h2 className='text-4xl font-bold mt-4'>
						Our{' '}
						<span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400'>
							Blogs
						</span>
					</h2>
					<p className='text-gray-500 mt-3'>
						Stay updated with the latest trends in digital growth & marketing.
					</p>
				</div>

				{/* Blog Cards */}
				<div className='grid md:grid-cols-3 gap-8'>
					{blogs.map((blog) => (
						<motion.div
							key={blog.id}
							whileHover={{y: -6}}
							className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all'>
							<div className='relative h-56 w-full'>
								<Image
									src={blog.img}
									alt={blog.title}
									fill
									className='object-cover'
								/>
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-2'>{blog.title}</h3>
								<p className='text-gray-500 text-sm mb-4'>{blog.description}</p>

								<Link
									href={`/blogs/${blog.id}`}
									className='text-blue-600 font-medium hover:underline'>
									Read More →
								</Link>
							</div>
						</motion.div>
					))}
				</div>

				{/* Button */}
				<div className='flex justify-center mt-12'>
					<Link
						href='/blogs'
						className='px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-400 text-white font-semibold shadow-xl hover:opacity-90 transition'>
						View All Blogs
					</Link>
				</div>
			</div>
		</section>
	)
}
