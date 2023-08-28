import Footer from "@/components/Footer";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="gradient-bg-hero">
          <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto">
            {/* <div className="md:flex-[0.5] flex-initial justify-center items-center">
              <Image
                className="md:w-32 w-40 cursor-pointer"
                src={'/timeless'}
                alt="logo"
                fill
              />
            </div> */}

            <ul
              className="md:flex-[0.5] md:flex text-white flex list-none justify-between items-center 
      flex-initial"
            >
              <Link href={"/"}>
                <li className="mx-4 cursor-pointer">Home</li>
              </Link>
              <Link href={"/proposal"}>
                <li className="mx-4 cursor-pointer">Proposal</li>
              </Link>
              <Link href={"/members"}>
                <li className="mx-4 cursor-pointer">Members</li>
              </Link>
              <Link href={"/contact"}>
                <li className="mx-4 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
