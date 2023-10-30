import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CourseMania',
  description: 'House of Courses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
