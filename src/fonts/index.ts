import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'

export const nats = localFont({ src: './nats.ttf' })
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
