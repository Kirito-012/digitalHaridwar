'use client'
import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
import {Mail, Phone, MapPin, Send, Clock} from 'lucide-react'

export default function ContactUsPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Form submitted:', formData)
		alert('Thank you for your message! We will get back to you soon.')
		setFormData({
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: '',
		})
	}

	return (
		<div className='min-h-screen bg-white'>
			<Navbar />

			{/* Hero Section */}
			<section className='pt-40 pb-24 px-4 sm:px-6 lg:px-20 bg-linear-to-br from-blue-50 to-cyan-50'>
				<div className='max-w-7xl mx-auto text-center'>
					<motion.div
						initial={{opacity: 0, y: 30}}
						animate={{opacity: 1, y: 0}}
						transition={{duration: 0.6}}>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6'>
							Contact{' '}
							<span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500'>
								Us
							</span>
						</h1>
						<p className='text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
							Ready to transform your digital presence? Get in touch with our
							team and let&apos;s discuss how we can help your business grow.
						</p>
					</motion.div>
				</div>
			</section>

			<section className='py-16 px-4 sm:px-6 lg:px-20'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-12 lg:gap-16'>
						<motion.div
							initial={{opacity: 0, x: -30}}
							whileInView={{opacity: 1, x: 0}}
							transition={{duration: 0.6}}
							viewport={{once: true}}>
							<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>
								Get In Touch
							</h2>
							<p className='text-lg text-slate-600 mb-8 leading-relaxed'>
								We&apos;re here to help you succeed. Reach out to us through any
								of the channels below, and we&apos;ll respond as soon as
								possible.
							</p>

							<div className='space-y-6'>
								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white'>
										<Mail className='w-6 h-6' />
									</div>
									<div>
										<h3 className='text-lg font-semibold text-slate-900 mb-1'>
											Email Us
										</h3>
										<p className='text-slate-600'>info@digitalharidwar.com</p>
										<p className='text-slate-600'>
											support@digitalharidwar.com
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white'>
										<Phone className='w-6 h-6' />
									</div>
									<div>
										<h3 className='text-lg font-semibold text-slate-900 mb-1'>
											Call Us
										</h3>
										<p className='text-slate-600'>+91 98765 43210</p>
										<p className='text-slate-600'>+91 98765 43211</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white'>
										<MapPin className='w-6 h-6' />
									</div>
									<div>
										<h3 className='text-lg font-semibold text-slate-900 mb-1'>
											Visit Us
										</h3>
										<p className='text-slate-600'>
											123 Digital Street
											<br />
											Tech City, TC 12345
											<br />
											India
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white'>
										<Clock className='w-6 h-6' />
									</div>
									<div>
										<h3 className='text-lg font-semibold text-slate-900 mb-1'>
											Business Hours
										</h3>
										<p className='text-slate-600'>
											Monday - Friday: 9:00 AM - 6:00 PM
										</p>
										<p className='text-slate-600'>
											Saturday: 10:00 AM - 4:00 PM
										</p>
										<p className='text-slate-600'>Sunday: Closed</p>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							initial={{opacity: 0, x: 30}}
							whileInView={{opacity: 1, x: 0}}
							transition={{duration: 0.6, delay: 0.2}}
							viewport={{once: true}}>
							<div className='bg-white p-8 rounded-2xl shadow-xl border border-slate-100'>
								<h3 className='text-2xl font-bold text-slate-900 mb-6'>
									Send Us a Message
								</h3>
								<form
									onSubmit={handleSubmit}
									className='space-y-6'>
									<div className='grid md:grid-cols-2 gap-6'>
										<div>
											<label
												htmlFor='name'
												className='block text-sm font-medium text-slate-700 mb-2'>
												Full Name *
											</label>
											<input
												type='text'
												id='name'
												name='name'
												value={formData.name}
												onChange={handleChange}
												required
												className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
												placeholder='Your full name'
											/>
										</div>
										<div>
											<label
												htmlFor='email'
												className='block text-sm font-medium text-slate-700 mb-2'>
												Email Address *
											</label>
											<input
												type='email'
												id='email'
												name='email'
												value={formData.email}
												onChange={handleChange}
												required
												className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
												placeholder='your@email.com'
											/>
										</div>
									</div>

									<div className='grid md:grid-cols-2 gap-6'>
										<div>
											<label
												htmlFor='phone'
												className='block text-sm font-medium text-slate-700 mb-2'>
												Phone Number
											</label>
											<input
												type='tel'
												id='phone'
												name='phone'
												value={formData.phone}
												onChange={handleChange}
												className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
												placeholder='+91 98765 43210'
											/>
										</div>
										<div>
											<label
												htmlFor='subject'
												className='block text-sm font-medium text-slate-700 mb-2'>
												Subject *
											</label>
											<input
												type='text'
												id='subject'
												name='subject'
												value={formData.subject}
												onChange={handleChange}
												required
												className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
												placeholder='How can we help?'
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor='message'
											className='block text-sm font-medium text-slate-700 mb-2'>
											Message *
										</label>
										<textarea
											id='message'
											name='message'
											value={formData.message}
											onChange={handleChange}
											required
											rows={6}
											className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical'
											placeholder='Tell us about your project or inquiry...'
										/>
									</div>

									<button
										type='submit'
										className='w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group'>
										<span>Send Message</span>
										<Send className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
									</button>
								</form>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
