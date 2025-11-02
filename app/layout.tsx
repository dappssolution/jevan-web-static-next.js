

"use client"
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";


function BodyWithFont({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  return (
    <body
      className={`antialiased`}
      style={
        language === 'ar'
          ? { fontFamily: 'Noto Sans Arabic, sans-serif' }
          : undefined
      }
    >
      {children}
    </body>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Jevan Auto Accessories | Best Car Modification in Dubai</title>
        <meta name="description" content="Jevan Auto Accessories - Best Car Modification in Dubai. We specialize in all types of interior and exterior work, offering comprehensive transformations to personalize your vehicle." />
        <meta name="keywords" content="Car Modification Dubai, Auto Accessories, Car Customization, Interior Work, Exterior Work, Car Personalization, Car Transformation" />
        <meta name="author" content="Jevan Auto Accessories" />
        <meta property="og:title" content="Jevan Auto Accessories | Best Car Modification in Dubai" />
        <meta property="og:description" content="We specialize in all types of interior and exterior work, offering comprehensive transformations to personalize your vehicle." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jevan Auto Accessories | Best Car Modification in Dubai" />
        <meta name="twitter:description" content="We specialize in all types of interior and exterior work, offering comprehensive transformations to personalize your vehicle." />
        <meta name="twitter:image" content="/logo.png" />
  <link rel="icon" type="image/png" href="/x-logo.png" />
  <link rel="shortcut icon" type="image/png" href="/x-logo.png" />
  <link rel="apple-touch-icon" href="/x-logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <LanguageProvider>
        <BodyWithFont>
          <Header />
          {children}
          <Footer />
        </BodyWithFont>
      </LanguageProvider>
    </html>
  );
}
