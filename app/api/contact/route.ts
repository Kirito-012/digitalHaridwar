import {NextRequest, NextResponse} from 'next/server'
import connectToDatabase from '../../lib/mongodb'
import Contact from '../../lib/models/Contact'
import {Resend} from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
	try {
		await connectToDatabase()

		const {name, number, email, message} = await request.json()

		if (!name || !number || !email || !message) {
			return NextResponse.json(
				{error: 'All fields are required'},
				{status: 400}
			)
		}

		const newContact = new Contact({
			name,
			number,
			email,
			message,
		})

		await newContact.save()

		// Send email to admin
		await resend.emails.send({
			from: 'Digital Haridwar <onboarding@resend.dev>',
			to: process.env.ADMIN_EMAIL || 'admin@digitalharidwar.com',
			subject: 'New Contact Form Submission',
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Phone:</strong> ${number}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Message:</strong></p>
				<p>${message}</p>
			`,
		})

		// Send confirmation email to user
		await resend.emails.send({
			from: 'Digital Haridwar <onboarding@resend.dev>',
			to: email,
			subject: 'Thank you for contacting Digital Haridwar',
			html: `
				<h2>Thank you for contacting us!</h2>
				<p>Dear ${name},</p>
				<p>We have received your message and will get back to you shortly.</p>
				<p><strong>Your Message:</strong></p>
				<p>${message}</p>
				<br/>
				<p>Best regards,</p>
				<p>Digital Haridwar Team</p>
			`,
		})

		return NextResponse.json(
			{message: 'Contact form submitted successfully'},
			{status: 201}
		)
	} catch (error) {
		console.error('Error saving contact:', error)
		return NextResponse.json({error: 'Internal server error'}, {status: 500})
	}
}
