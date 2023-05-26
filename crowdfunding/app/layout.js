import './globals.css'


export const metadata = {
  title: 'Decantralized Crowdfunding',
  description: 'decentralized crowdfunding application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
