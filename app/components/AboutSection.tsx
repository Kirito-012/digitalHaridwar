import React from 'react'

const AboutSection = () => {
	return (
		<div>
			<section
				id='about'
				className='relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-linear-to-br from-slate-50 via-white to-blue-50 overflow-hidden'>
				<div className='absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>
				<div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>

				<div className='max-w-7xl mx-auto relative z-10'>
					<div className='text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20'>
						<div className='inline-flex items-center space-x-2 px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full mb-6'>
							<svg
								className='w-4 h-4 text-cyan-600'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
							</svg>
							<span className='text-sm font-semibold text-cyan-700'>
								ABOUT US
							</span>
						</div>
						<h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight'>
							Empowering Businesses in the{' '}
							<span className='bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>
								Digital Age
							</span>
						</h2>
						<p className='text-lg md:text-xl text-slate-600 leading-relaxed'>
							We are a team of passionate digital strategists, creators, and
							innovators dedicated to transforming your online presence into a
							powerful growth engine.
						</p>
					</div>
					<div className='grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20'>
						<div className='relative order-2 lg:order-1'>
							<div className='relative rounded-2xl overflow-hidden shadow-2xl'>
								<img
									src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
									alt='Team collaboration'
									className='w-full h-auto object-cover'
								/>
								<div className='absolute inset-0 bg-linear-to-tr from-cyan-600/30 to-blue-600/30'></div>
							</div>

							<div className='absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden md:block'>
								<div className='flex items-center space-x-4'>
									<div className='p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl'>
										<svg
											className='w-8 h-8 text-white'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M13 10V3L4 14h7v7l9-11h-7z'
											/>
										</svg>
									</div>
									<div>
										<div className='text-3xl font-bold text-slate-900'>5+</div>
										<div className='text-sm text-slate-600'>
											Years Experience
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='space-y-8 order-1 lg:order-2'>
							<div className='space-y-6'>
								<h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-slate-900'>
									Your Success is Our Mission
								</h3>
								<p className='text-base md:text-lg text-slate-600 leading-relaxed'>
									At Digital Haridwar, we believe every business deserves a
									strong digital presence. Since our inception, we've helped
									over 150+ brands amplify their voice, reach their audience,
									and achieve measurable growth through strategic digital
									solutions.
								</p>
								<p className='text-base md:text-lg text-slate-600 leading-relaxed'>
									Our approach combines data-driven strategies with creative
									excellence, ensuring that every campaign, every piece of
									content, and every optimization effort delivers real, tangible
									results for your business.
								</p>
							</div>
							<div className='space-y-4'>
								<div className='flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300'>
									<div className='shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center'>
										<svg
											className='w-6 h-6 text-cyan-600'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
											/>
										</svg>
									</div>
									<div>
										<h4 className='font-semibold text-slate-900 mb-1'>
											Result-Driven Approach
										</h4>
										<p className='text-slate-600'>
											We focus on metrics that matter, delivering measurable ROI
											for every project.
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300'>
									<div className='shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
										<svg
											className='w-6 h-6 text-blue-600'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
											/>
										</svg>
									</div>
									<div>
										<h4 className='font-semibold text-slate-900 mb-1'>
											Transparent Communication
										</h4>
										<p className='text-slate-600'>
											Regular updates, clear reporting, and honest conversations
											throughout your journey.
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300'>
									<div className='shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center'>
										<svg
											className='w-6 h-6 text-cyan-600'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
											/>
										</svg>
									</div>
									<div>
										<h4 className='font-semibold text-slate-900 mb-1'>
											Expert Team
										</h4>
										<p className='text-slate-600'>
											Seasoned professionals with years of experience in digital
											marketing and growth.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12'>
						<div className='text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300'>
							<div className='text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2'>
								150+
							</div>
							<div className='text-slate-600 font-medium'>Happy Clients</div>
						</div>
						<div className='text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300'>
							<div className='text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2'>
								500+
							</div>
							<div className='text-slate-600 font-medium'>Projects Done</div>
						</div>
						<div className='text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300'>
							<div className='text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2'>
								98%
							</div>
							<div className='text-slate-600 font-medium'>Success Rate</div>
						</div>
						<div className='text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300'>
							<div className='text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2'>
								24/7
							</div>
							<div className='text-slate-600 font-medium'>Support</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutSection
