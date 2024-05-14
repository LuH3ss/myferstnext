import Navbar from '../components/Navbar'
import { Manrope } from 'next/font/google'

export const metadata = {
    title:'Primer Proyecto React',
    description:'Este es un primer proyecto de Next.js 13'

}

const manrope = Manrope({
    weight: ["200","300","400","500","600","700"] ,
    styles: ["italic", "normal"],
    subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html>
      {/* <header>
        <h1>Menu</h1>
        este h1 no se renderiza porque next busca la etiqueta body 
      </header> */}

      <body className={manrope.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
