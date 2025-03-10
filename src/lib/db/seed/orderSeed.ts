import { loadEnvConfig } from '@next/env'
import { cwd } from 'process'
import { connectToDatabase } from '..'
import { data } from '../../../../data'
import Order from '@/models/order'

loadEnvConfig(cwd())

const main = async () => {
  try {
    const { dummyOrders } = data
    await connectToDatabase(process.env.MONGODB_URI)
    await Order.deleteMany()
    const createdOrders = await Order.insertMany(dummyOrders)

    console.log({ createdOrders, message: 'Seeded database successfully' })
    process.exit(0)
  } catch (error) {
    console.error({ error })
    throw new Error('Failed to seed database')
  }
}

main()
