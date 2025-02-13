export const metadata = {
  title: 'E-Voting',
  description: 'Generated by Next.js',
}

import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-webBg bg-cover bg-center">
        {children}
      </body>
    </html>
  )
}
