import './globals.css'

export const metadata = {
  title: 'Google Clone',
  description: 'Google search',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
