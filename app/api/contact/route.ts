import {NextRequest, NextResponse} from 'next/server'
import connectToDatabase from '../../lib/mongodb'
import Contact from '../../lib/models/Contact'

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

		return NextResponse.json(
			{message: 'Contact form submitted successfully'},
			{status: 201}
		)
	} catch (error) {
		console.error('Error saving contact:', error)
		return NextResponse.json({error: 'Internal server error'}, {status: 500})
	}
}
