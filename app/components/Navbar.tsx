'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {usePathname} from 'next/navigation'
import {Menu, X} from 'lucide-react'

export default function Navbar() {
	const pathname = usePathname()
	const [menuOpen, setMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-xl shadow-lg border-b border-blue-100`}>
			<div className='max-w-7xl mx-auto px-6 py-2 flex justify-between items-center'>
				<Link
					href='/'
					className='flex items-center gap-2'>
					<Image
						src='/logo.png'
						alt='logo'
						width={55}
						height={55}
					/>
					<span className='font-bold text-xl text-slate-900 tracking-wide'>
						Digital Haridwar
					</span>
				</Link>

				<div className='hidden md:flex items-center space-x-10 font-medium text-slate-900'>
					{['Home', 'About Us', 'Services', 'Blogs'].map((item) => {
						const href = `/${
							item === 'Home' ? '' : item.toLowerCase().replace(' ', '')
						}`
						const isActive =
							(href === '/' && pathname === '/') ||
							(href !== '/' && pathname.startsWith(href))
						return (
							<Link
								key={item}
								href={href}
								className={`relative group ${
									isActive ? 'text-blue-600 font-semibold' : ''
								}`}>
								<span
									className={`transition group-hover:text-blue-600 ${
										isActive ? 'text-blue-600' : ''
									}`}>
									{item}
								</span>
								<span
									className={`absolute left-0 bottom-[-5px] h-[2.5px] ${
										isActive ? 'w-full' : 'w-0'
									} bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full`}></span>
							</Link>
						)
					})}

					<Link
						href='/contact'
						className={`px-5 py-2 bg-linear-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition tracking-wide ${
							pathname.startsWith('/contact') ? 'ring-2 ring-blue-400' : ''
						}`}>
						Contact Us
					</Link>
				</div>

				<button
					className='md:hidden text-slate-900'
					onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{menuOpen && (
				<div className='md:hidden bg-white/95 text-slate-900 text-center space-y-6 py-6 shadow-xl border-t border-blue-100'>
					{['Home', 'About Us', 'Services', 'Blogs', 'Contact Us'].map(
						(item) => {
							const href = `/${
								item === 'Home' ? '' : item.toLowerCase().replace(' ', '')
							}`
							const isActive =
								(href === '/' && pathname === '/') ||
								(href !== '/' && pathname.startsWith(href))
							return (
								<Link
									key={item}
									href={href}
									onClick={() => setMenuOpen(false)}
									className={`block text-lg font-medium transition ${
										isActive
											? 'text-blue-600 font-semibold'
											: 'hover:text-blue-600'
									}`}>
									{item}
								</Link>
							)
						}
					)}
				</div>
			)}
		</nav>
	)
}
