import React from 'react'
import {
	Award,
	Zap,
	Users,
	ChevronRight,
	Sparkles,
	TrendingUp,
	Target,
} from 'lucide-react'

const Hero = () => {
	return (
		<div>
			<section className='mt-24 md:mt-28 pt-8 md:pt-12 pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden'>
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
								<button className='group px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center space-x-2'>
									<span>Explore Services</span>
									<ChevronRight
										size={20}
										className='group-hover:translate-x-1 transition-transform'
									/>
								</button>
								<button className='px-6 py-3 sm:px-8 sm:py-4 bg-white text-slate-700 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300 font-semibold'>
									Contact Us
								</button>
							</div>

							<div className='grid grid-cols-3 gap-6 pt-8'>
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
							</div>
						</div>

						<div className='relative order-2'>
							<div className='relative z-10 mb-8 lg:mb-0'>
								<div className='relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500'>
									<img
										src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
										alt='Digital Marketing Dashboard'
										className='w-full h-auto object-cover'
									/>
									<div className='absolute inset-0 bg-linear-to-tr from-blue-600/20 to-cyan-500/20'></div>
								</div>

								<div className='absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-float'>
									<div className='flex items-center space-x-3'>
										<div className='p-2 bg-green-100 rounded-lg'>
											<TrendingUp
												className='text-green-600'
												size={20}
											/>
										</div>
										<div>
											<div className='text-xs text-slate-500'>
												Traffic Growth
											</div>
											<div className='text-lg font-bold text-slate-900'>
												+245%
											</div>
										</div>
									</div>
								</div>

								<div className='absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-float-delay'>
									<div className='flex items-center space-x-3'>
										<div className='p-2 bg-blue-100 rounded-lg'>
											<Award
												className='text-blue-600'
												size={20}
											/>
										</div>
										<div>
											<div className='text-xs text-slate-500'>
												Client Rating
											</div>
											<div className='text-lg font-bold text-slate-900'>
												4.9/5.0
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
								<div className='bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer'>
									<div className='p-3 bg-blue-100 rounded-xl w-fit mb-3 group-hover:scale-110 transition-transform'>
										<Target
											className='text-blue-600'
											size={24}
										/>
									</div>
									<h3 className='text-base font-semibold text-slate-900 mb-1'>
										SEO Mastery
									</h3>
									<p className='text-sm text-slate-600'>Drive organic growth</p>
								</div>

								<div className='bg-linear-to-br from-blue-600 to-cyan-500 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105'>
									<div className='p-3 bg-white/20 backdrop-blur-sm rounded-xl w-fit mb-3'>
										<Zap
											className='text-white'
											size={24}
										/>
									</div>
									<h3 className='text-base font-semibold text-white mb-1'>
										Fast Results
									</h3>
									<p className='text-sm text-blue-50'>Quick turnaround</p>
								</div>

								<div className='bg-linear-to-br from-cyan-500 to-blue-600 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:scale-105'>
									<div className='p-3 bg-white/20 backdrop-blur-sm rounded-xl w-fit mb-3'>
										<Sparkles
											className='text-white'
											size={24}
										/>
									</div>
									<h3 className='text-base font-semibold text-white mb-1'>
										Content Strategy
									</h3>
									<p className='text-sm text-cyan-50'>Engaging narratives</p>
								</div>

								<div className='bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer'>
									<div className='p-3 bg-cyan-100 rounded-xl w-fit mb-3 group-hover:scale-110 transition-transform'>
										<Users
											className='text-cyan-600'
											size={24}
										/>
									</div>
									<h3 className='text-base font-semibold text-slate-900 mb-1'>
										Expert Team
									</h3>
									<p className='text-sm text-slate-600'>Dedicated support</p>
								</div>
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
