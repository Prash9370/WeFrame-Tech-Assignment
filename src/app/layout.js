import './globals.css'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

export const metadata = {
  title: 'Product Page',
  description: 'Cheese – appareil à raclette 1/2 roue',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
