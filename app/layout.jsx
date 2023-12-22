import Footer from "@components/footer";
import Navbar from "@components/navbar";
import "@styles/global.css";
import defaultFeatureImage from "@assets/images/coverfm.png";

export const metadata = {
    title: "Football United",
    description : "This is Football United",
    metadataBase : new URL("http://localhost:3000"),
    openGraph : {
      images :  [defaultFeatureImage]
    }
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en" >
     
      <body>
        <Navbar />

        <main className="app">
            {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}

export default Rootlayout 