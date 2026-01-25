import { connectToDatabase } from '@/lib/db'
import Link from '@/models/link'

export async function GET() {
  await connectToDatabase()
  try {
    const links = await Link.find({})

    if (!links.length) {
      return Response.json(
        { success: false, message: 'No links were found!' },
        { status: 200 }
      )
    } else {
      return Response.json(links, { status: 200 })
    }
  } catch (error) {
    console.error('Error retrieving links:', error)
    return Response.json(
      { success: false, message: 'Error retrieving links' },
      { status: 500 }
    )
  }
}
