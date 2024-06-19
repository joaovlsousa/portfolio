// eslint-disable-next-line simple-import-sort/imports
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAge() {
  return Math.floor(
    (Date.now() - new Date(process.env.BIRTH_DATE!).getTime()) / 3.15576e10,
  )
}
