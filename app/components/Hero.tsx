'use client'
import React, {useState} from 'react'
import {
	ChevronRight,
	Sparkles,
	Phone,
	Mail,
	User,
	MessageSquare,
	ShieldCheck,
	Star,
} from 'lucide-react'
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

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const {name, value} = e.target
		setFormData((prev) => ({...prev, [name]: value}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		
		// Validate all fields are filled
		if (!formData.name.trim() || !formData.number.trim() || !formData.email.trim() || !formData.message.trim()) {
			setSubmitMessage('Please fill in all fields before submitting.')
			return
		}
		
		setLoading(true)
		setSubmitMessage('')
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(formData),
			})
			if (response.ok) {
				setSubmitMessage('Thank you! Your message has been sent successfully. Check your email for confirmation.')
				setFormData({name: '', number: '', email: '', message: ''})
			} else {
				setSubmitMessage('Sorry, something went wrong. Please try again.')
			}
		} catch (error) {
			setSubmitMessage('Sorry, something went wrong. Please try again.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<section className='relative min-h-screen pt-24 md:pt-32 pb-24 px-4 sm:px-6 lg:px-14 flex items-center overflow-hidden'>
			{/* Subtle abstract illustration background */}
			<div className='absolute inset-0 -z-10 opacity-[0.15] pointer-events-none'>
				<svg
					className='w-full h-full'
					viewBox='0 0 1920 1080'
					preserveAspectRatio='xMidYMid slice'
					xmlns='http://www.w3.org/2000/svg'>
					<defs>
						<linearGradient
							id='grad'
							x1='0%'
							y1='0%'
							x2='100%'
							y2='100%'>
							<stop
								offset='0%'
								stopColor='#3B82F6'
							/>
							<stop
								offset='100%'
								stopColor='#06B6D4'
							/>
						</linearGradient>
					</defs>

					<path
						d='M0,600 C300,450 600,900 900,750 C1200,600 1500,300 1920,500 L1920,1080 L0,1080 Z'
						fill='url(#grad)'
					/>
					<circle
						cx='85%'
						cy='20%'
						r='220'
						fill='url(#grad)'
						opacity='.6'
					/>
					<circle
						cx='15%'
						cy='75%'
						r='180'
						fill='url(#grad)'
						opacity='.5'
					/>
				</svg>
			</div>

			{/* Existing container */}
			<div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
				{/* Keep rest of the content unchanged */}

				{/* Left Content */}
				<div className='space-y-8'>
					<div className='inline-flex items-center space-x-2 px-5 py-2 bg-white/60 backdrop-blur-lg rounded-full border border-slate-200 shadow-md'>
						<Sparkles
							className='text-blue-600'
							size={18}
						/>
						<span className='text-sm font-semibold text-blue-700'>
							Your Digital Growth Partner
						</span>
					</div>

					<h1 className='text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight'>
						Transform Your
						<span className='block mt-2 bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent'>
							Digital Presence
						</span>
					</h1>

					<p className='text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl'>
						Elevate your brand with our premium digital services — from advanced
						SEO and conversion-focused websites to strategic branding designed
						for growth.
					</p>

					<div className='flex flex-col sm:flex-row gap-4'>
						<Link href='/services'>
							<button className='group px-7 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center space-x-2'>
								<span>Explore Services</span>
								<ChevronRight
									size={20}
									className='group-hover:translate-x-1 transition-transform'
								/>
							</button>
						</Link>
						<Link href='/contact'>
							<button className='px-7 py-4 bg-white backdrop-blur-md text-slate-700 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 shadow-md hover:shadow-lg transition-all duration-300 font-semibold'>
								Contact Us
							</button>
						</Link>
					</div>

					{/* Trust badges */}
					<div className='flex items-center gap-6 pt-6'>
						<div className='flex items-center gap-2 text-sm text-slate-600 font-medium'>
							<Star
								size={18}
								className='text-yellow-500'
							/>
							5-Star Rated Support
						</div>
						<div className='flex items-center gap-2 text-sm text-slate-600 font-medium'>
							<ShieldCheck
								size={18}
								className='text-blue-600'
							/>
							100% Secure & Reliable
						</div>
					</div>
				</div>

				{/* Form section */}
				<div className='relative animate-[float_6s_ease-in-out_infinite]'>
					<div className='bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-200'>
						<h3 className='text-2xl font-bold text-slate-900 mb-6 text-center'>
							Get Your Free Consultation
						</h3>

						{submitMessage && (
							<div
								className={`mb-4 p-3 rounded-xl text-center text-sm font-medium ${
									submitMessage.includes('Thank you')
										? 'bg-green-100 text-green-800'
										: 'bg-red-100 text-red-800'
								}`}>
								{submitMessage}
							</div>
						)}

						<form
							onSubmit={handleSubmit}
							className='space-y-4'>
							{[
								{
									icon: User,
									name: 'name',
									type: 'text',
									placeholder: 'Your Full Name',
								},
								{
									icon: Phone,
									name: 'number',
									type: 'tel',
									placeholder: 'Phone Number',
								},
								{
									icon: Mail,
									name: 'email',
									type: 'email',
									placeholder: 'Email Address',
								},
							].map((input, i) => (
								<div
									key={i}
									className='relative'>
									<div className='absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500'>
										<input.icon size={18} />
									</div>
									<input
										type={input.type}
										name={input.name}
										value={(formData as any)[input.name]}
										onChange={handleInputChange}
										placeholder={input.placeholder}
										required
										className='w-full pl-10 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all'
									/>
								</div>
							))}

							<div className='relative'>
								<textarea
									name='message'
									rows={4}
									value={formData.message}
									onChange={handleInputChange}
									placeholder='Tell us about your project...'
									required
									className='w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all resize-none'
								/>
							</div>

							<button
								type='submit'
								disabled={loading}
								className='w-full py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold disabled:opacity-50'>
								{loading ? 'Submitting...' : 'Submit'}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
