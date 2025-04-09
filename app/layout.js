import "./globals.css"

export const metadata = {
  title:
    "MB100 India Chapter | Driving Impact Through Purpose-Driven Leadership",
  description:
    "The MB100 India Chapter brings together visionary leaders and mission-led businesses to strengthen India’s social entrepreneurship ecosystem through collaboration, innovation, and sustainable, profit-with-purpose growth.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
