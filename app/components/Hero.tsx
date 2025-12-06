'use client'
import React, { useState } from 'react'
import {ChevronRight, Sparkles} from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
	const [formData, setFormData] = useState({
		name: '',
		number: '',
		email: '',
		message: '',
	})
	const [loading, setLoading] = useState(false)
	const [submitMessage, setSubmitMessage] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setSubmitMessage('')

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setSubmitMessage('Thank you! Your message has been sent successfully.')
				setFormData({ name: '', number: '', email: '', message: '' })
			} else {
				setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
			}
		} catch (error) {
			setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
		} finally {
			setLoading(false)
		}
	}
	return (
		<div>
			<section className='mt-24 md:mt-40 pt-8 md:pt-12 pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
						<div className='space-y-8 order-1'>
							<div className='inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200 shadow-sm'>
								<Sparkles
									className='text-blue-600'
									size={18}
								/>
								<span className='text-sm font-semibold text-blue-700'>
									Your Digital Growth Partner
								</span>
							</div>

							<h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight'>
								Transform Your
								<span className='block mt-2 bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-linear'>
									Digital Presence
								</span>
							</h1>

							<p className='text-lg md:text-xl text-slate-600 leading-relaxed'>
								Elevate your brand with our comprehensive digital services. From
								strategic content marketing to advanced SEO solutions, we help
								businesses thrive in the digital landscape.
							</p>

							<div className='flex flex-col sm:flex-row gap-4'>
								<Link href='/services'>
									<button className='group px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center space-x-2'>
										<span>Explore Services</span>
										<ChevronRight
											size={20}
											className='group-hover:translate-x-1 transition-transform'
										/>
									</button>
								</Link>
								<Link href='/contact'>
									<button className='px-6 py-3 sm:px-8 sm:py-4 bg-white text-slate-700 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300 font-semibold'>
										Contact Us
									</button>
								</Link>
							</div>

							{/* <div className='grid grid-cols-3 gap-6 pt-8'>
								<div className='text-center md:text-left'>
									<div className='text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
										150+
									</div>
									<div className='text-sm text-slate-600 mt-1 font-medium'>
										Happy Clients
									</div>
								</div>
								<div className='text-center md:text-left'>
									<div className='text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
										98%
									</div>
									<div className='text-sm text-slate-600 mt-1 font-medium'>
										Success Rate
									</div>
								</div>
								<div className='text-center md:text-left'>
									<div className='text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
										24/7
									</div>
									<div className='text-sm text-slate-600 mt-1 font-medium'>
										Support
									</div>
								</div>
							</div> */}
						</div>

						<div className='relative order-2'>
							<div className='bg-white p-8 rounded-3xl shadow-2xl border border-slate-100'>
								<h3 className='text-2xl font-bold text-slate-900 mb-6 text-center'>
									Get Your Free Consultation
								</h3>
								{submitMessage && (
									<div className={`mb-4 p-3 rounded-xl text-center text-sm font-medium ${
										submitMessage.includes('Thank you')
											? 'bg-green-100 text-green-800'
											: 'bg-red-100 text-red-800'
									}`}>
										{submitMessage}
									</div>
								)}
								<form onSubmit={handleSubmit} className='space-y-4'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-slate-700 mb-1'>
											Your Name
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formData.name}
											onChange={handleInputChange}
											className='w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
											placeholder='Enter your full name'
											required
										/>
									</div>
									<div>
										<label
											htmlFor='number'
											className='block text-sm font-medium text-slate-700 mb-1'>
											Your Number
										</label>
										<input
											type='tel'
											id='number'
											name='number'
											value={formData.number}
											onChange={handleInputChange}
											className='w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
											placeholder='Enter your phone number'
											required
										/>
									</div>
									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-slate-700 mb-1'>
											Your Email
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleInputChange}
											className='w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
											placeholder='Enter your email address'
											required
										/>
									</div>
									<div>
										<label
											htmlFor='message'
											className='block text-sm font-medium text-slate-700 mb-1'>
											Message
										</label>
										<textarea
											id='message'
											name='message'
											rows={4}
											value={formData.message}
											onChange={handleInputChange}
											className='w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none'
											placeholder='Tell us about your project or requirements'
											required></textarea>
									</div>
									<button
										type='submit'
										disabled={loading}
										className='w-full py-3 px-6 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>
										{loading ? 'Submitting...' : 'Submit'}
									</button>
								</form>
							</div>

							<div className='absolute -z-10 top-1/4 -right-12 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>
							<div className='absolute -z-10 bottom-1/4 -left-12 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Hero
