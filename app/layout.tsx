import './globals.css'
import { ReactNode } from 'react'  // Add this import

export default function RootLayout({
  children,
}: {
  children: ReactNode  // You can now use ReactNode directly
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}