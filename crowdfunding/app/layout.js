import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Decantralized Crowdfunding",
  description: "decentralized crowdfunding application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
