import localFont from "next/font/local";
import "@/app/globals.css";
import { Nunito } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import NavbarComponent from "@/components/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata = {
  title: "Bali Sri Organik",
  description: "Generated by create next app",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params: { locale } }) {
  // Fetch messages for the given locale
  const messages = await getMessages();

  return (
    <html data-theme="light" lang={locale}>
      <body className={`${nunito.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <NavbarComponent />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
