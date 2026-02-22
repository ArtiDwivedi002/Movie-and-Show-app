import Header from "@/components/Header/Header";
import { FavouriteProvider } from "@/context/favouriteContext";
import "@/style/global.scss";
import { NextIntlClientProvider } from "next-intl";
import { ToastContainer } from "react-toastify";
import "@/style/global.scss";
import Footer from "@/components/Footer/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextIntlClientProvider>
          <FavouriteProvider>
            <ToastContainer />
            <Header />
            {children}
            <Footer />
          </FavouriteProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
