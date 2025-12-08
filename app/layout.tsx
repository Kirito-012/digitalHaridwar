import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Digital Haridwar - Best Digital Marketing Agency in Haridwar',
	description:
		'Leading digital marketing agency in Haridwar offering SEO, social media marketing, PPC, web design, and digital branding services. Transform your business with expert digital solutions.',
	keywords: [
		'Digital Marketing Agency in Haridwar',
		'Haridwar Digital Marketing Services',
		'Best Digital Agency in Haridwar',
		'SEO Services in Haridwar',
		'Social Media Marketing Haridwar',
		'Website Designing in Haridwar',
		'PPC Services in Haridwar',
		'Google Ads Company in Haridwar',
		'Digital Branding Agency Haridwar',
		'Online Marketing Services Haridwar',
		'Content Marketing Agency Haridwar',
		'Local SEO Services Haridwar',
		'Digital Growth Solutions Haridwar',
		'E-commerce Marketing Haridwar',
		'Lead Generation Services Haridwar',
	],
	authors: [{name: 'Digital Haridwar'}],
	creator: 'Digital Haridwar',
	publisher: 'Digital Haridwar',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://www.digitalharidwar.com',
		siteName: 'Digital Haridwar',
		title: 'Digital Haridwar - Best Digital Marketing Agency in Haridwar',
		description:
			'Leading digital marketing agency in Haridwar offering SEO, social media marketing, PPC, web design, and digital branding services.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Digital Haridwar - Digital Marketing Services',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Digital Haridwar - Best Digital Marketing Agency in Haridwar',
		description:
			'Leading digital marketing agency in Haridwar offering SEO, social media marketing, PPC, web design, and digital branding services.',
		images: ['/og-image.png'],
		creator: '@digitalharidwar',
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 5,
	},
	alternates: {
		canonical: 'https://www.digitalharidwar.com',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
				<meta
					name='theme-color'
					content='#2563eb'
				/>
				<meta
					name='google-site-verification'
					content='google-site-verification=DmLXWylyIytnMn9gmq3oNHOJ1zCpQG_YD6Z0Y83RQpY'
				/>
				<link
					rel='canonical'
					href='https://www.digitalharidwar.com'
				/>

				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-9THFMF0LY7'></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-9THFMF0LY7');
						`,
					}}
				/>

				{/* Organization Schema */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'Digital Haridwar',
							url: 'https://www.digitalharidwar.com',
							logo: 'https://www.digitalharidwar.com/logo.png',
							description:
								'Leading digital marketing agency in Haridwar offering SEO, social media marketing, PPC, web design, and digital branding services.',
							address: {
								'@type': 'PostalAddress',
								streetAddress:
									'184, Subhash Nagar, Shankar Ashram, Alankar complex, Jwalapur',
								addressLocality: 'Haridwar',
								addressRegion: 'Uttarakhand',
								postalCode: '249407',
								addressCountry: 'IN',
							},
							contactPoint: {
								'@type': 'ContactPoint',
								telephone: '+91-98765-43210',
								contactType: 'Customer Service',
								areaServed: 'IN',
								availableLanguage: ['English', 'Hindi'],
							},
							sameAs: [
								'https://www.facebook.com/digitalharidwar',
								'https://www.instagram.com/digitalharidwar',
								'https://www.linkedin.com/company/digitalharidwar',
							],
							aggregateRating: {
								'@type': 'AggregateRating',
								ratingValue: '4.9',
								reviewCount: '150',
							},
						}),
					}}
				/>

				{/* Local Business Schema */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'LocalBusiness',
							name: 'Digital Haridwar',
							image: 'https://www.digitalharidwar.com/logo.png',
							'@id': 'https://www.digitalharidwar.com',
							url: 'https://www.digitalharidwar.com',
							telephone: '+91-98765-43210',
							priceRange: '₹₹',
							address: {
								'@type': 'PostalAddress',
								streetAddress:
									'184, Subhash Nagar, Shankar Ashram, Alankar complex, Jwalapur',
								addressLocality: 'Haridwar',
								addressRegion: 'Uttarakhand',
								postalCode: '249407',
								addressCountry: 'IN',
							},
							geo: {
								'@type': 'GeoCoordinates',
								latitude: 29.9457,
								longitude: 78.1642,
							},
							openingHoursSpecification: {
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: [
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday',
									'Saturday',
								],
								opens: '09:00',
								closes: '18:00',
							},
						}),
					}}
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
