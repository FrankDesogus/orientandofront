import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import Navdue from "@modules/layout/templates/nav/navdue"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
