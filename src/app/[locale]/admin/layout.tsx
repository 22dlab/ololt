export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' style={{ margin: 0, padding: 0 }}>
      <body>{children}</body>
    </html>
  )
}
