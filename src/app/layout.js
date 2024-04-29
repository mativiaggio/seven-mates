/* eslint-disable @next/next/no-sync-scripts */
export const metadata = {
  title: "SEVENMA7ES | Home",
  description: "Generated by Next.js",
};

import "bootstrap/dist/css/bootstrap.css";
import "./layout.scss";

// import Navbar from "../../components/Navbar/Navbar";
import Navbar from "@/components/Navbar/Navbar";

import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body>
        {/* <Navbar />
        <div className="main">{children}</div>
        <Footer /> */}
        <h1 className="coming-soon ">Proximamente...</h1>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
