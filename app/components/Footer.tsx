'use client'
import Link from 'next/link'
import {Facebook, Instagram, Linkedin, Mail, Phone} from 'lucide-react'

export default function Footer() {
	return (
		<footer className='w-full bg-[#0C0F1A] text-gray-300 pt-20 pb-10'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-4 gap-12'>
				{/* Brand Section */}
				<div>
					<h2 className='text-2xl font-bold mb-4 text-white flex items-center gap-2'>
						<span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400'>
							Digital Haridwar
						</span>
					</h2>
					<p className='text-gray-400 text-sm leading-relaxed'>
						Empowering businesses with innovative digital solutions. We help
						brands achieve growth through marketing, development and strategy.
					</p>

					<div className='flex gap-4 mt-5'>
						<a
							href='#'
							className='hover:text-blue-400 transition'>
							<Facebook size={20} />
						</a>
						<a
							href='#'
							className='hover:text-blue-400 transition'>
							<Instagram size={20} />
						</a>
						<a
							href='#'
							className='hover:text-blue-400 transition'>
							<Linkedin size={20} />
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className='text-white font-semibold text-lg mb-4'>Quick Links</h3>
					<ul className='space-y-2 text-sm'>
						<li>
							<Link
								href='/'
								className='hover:text-blue-400 transition'>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/about'
								className='hover:text-blue-400 transition'>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href='/services'
								className='hover:text-blue-400 transition'>
								Services
							</Link>
						</li>
						<li>
							<Link
								href='/blogs'
								className='hover:text-blue-400 transition'>
								Blogs
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								className='hover:text-blue-400 transition'>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Services */}
				<div>
					<h3 className='text-white font-semibold text-lg mb-4'>Services</h3>
					<ul className='space-y-2 text-sm'>
						<li className='hover:text-blue-400 transition'>
							Digital Marketing
						</li>
						<li className='hover:text-blue-400 transition'>
							Search Engine Optimization
						</li>
						<li className='hover:text-blue-400 transition'>
							Social Media Marketing
						</li>
						<li className='hover:text-blue-400 transition'>Branding</li>
						<li className='hover:text-blue-400 transition'>
							Web & App Development
						</li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h3 className='text-white font-semibold text-lg mb-4'>Contact</h3>
					<ul className='space-y-3 text-sm'>
						<li className='flex items-center gap-2'>
							<Phone
								size={18}
								className='text-blue-400'
							/>{' '}
							+91 98765 43210
						</li>
						<li className='flex items-center gap-2'>
							<Mail
								size={18}
								className='text-blue-400'
							/>{' '}
							connect@digitalharidwar.com
						</li>
						<li>Haridwar, Uttarakhand, India</li>
					</ul>
				</div>
			</div>

			{/* bottom strip */}
			<div className='mt-14 border-t border-gray-700 pt-5'>
				<p className='text-center text-gray-400 text-sm'>
					© {new Date().getFullYear()} Digital Haridwar. All Rights Reserved.
				</p>
			</div>
		</footer>
	)
}
