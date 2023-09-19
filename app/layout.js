import Nav from "@/components/Nav"

export const metadata = {
  title: 'Apply',
  description: 'Gérez vos candidatures',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
