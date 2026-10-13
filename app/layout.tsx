import type { Metadata, Viewport } from "next";
import {
  Marcellus,
  Karla,
  Noto_Sans_Devanagari,
  Alex_Brush,
  Cormorant_Garamond,
  Playfair_Display,
  Great_Vibes,
  Allura,
  Montserrat,
  Lato,
  Open_Sans,
  Inter,
  Caveat,
  Poiret_One,
  Josefin_Sans,
} from "next/font/google";
import "./globals.css";

const poiretOne = Poiret_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poiret",
  display: "swap",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-devanagari",
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#332219",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://amazingspa.site"),
  title: {
    default: "Amazing Spa in Lajpat Nagar, Delhi | Massage & Wellness",
    template: "%s | Amazing Spa",
  },
  description:
    "Discover Amazing Spa in Lajpat Nagar, New Delhi, for relaxing massage and wellness services. Explore available treatments, view service details, and contact us to book your visit.",
  keywords: [
    "Amazing Spa",
    "spa in Lajpat Nagar",
    "spa in Lajpat Nagar Delhi",
    "massage spa in Lajpat Nagar",
    "spa in South Delhi",
    "massage centre in Lajpat Nagar",
    "wellness spa in New Delhi",
    "body massage in Lajpat Nagar",
    "relaxation massage in Lajpat Nagar",
    "full body massage in Lajpat Nagar",
    "deep tissue massage in Lajpat Nagar",
    "massage services in South Delhi",
  ],
  alternates: {
    canonical: "https://amazingspa.site",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Amazing Spa in Lajpat Nagar, Delhi | Massage & Wellness",
    description:
      "Discover Amazing Spa in Lajpat Nagar, New Delhi, for relaxing massage and wellness services. Explore available treatments, view service details, and contact us to book your visit.",
    type: "website",
    url: "https://amazingspa.site",
    siteName: "Amazing Spa",
    locale: "en_IN",
    images: [
      {
        url: "https://amazingspa.site/images/massage2.jpg",
        width: 1200,
        height: 800,
        alt: "Amazing Spa Treatment Room Lajpat Nagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazing Spa in Lajpat Nagar, Delhi | Massage & Wellness",
    description:
      "Discover Amazing Spa in Lajpat Nagar, New Delhi, for relaxing massage and wellness services. Explore available treatments, view service details, and contact us to book your visit.",
    images: ["https://amazingspa.site/images/massage2.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://amazingspa.site/#website",
      "url": "https://amazingspa.site",
      "name": "Amazing Spa",
      "description": "Premium massage and wellness spa in Lajpat Nagar, New Delhi.",
      "publisher": {
        "@id": "https://amazingspa.site/#business",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://amazingspa.site/#webpage",
      "url": "https://amazingspa.site",
      "name": "Amazing Spa in Lajpat Nagar, Delhi | Massage & Wellness",
      "isPartOf": {
        "@id": "https://amazingspa.site/#website",
      },
      "about": {
        "@id": "https://amazingspa.site/#business",
      },
      "description":
        "Discover Amazing Spa in Lajpat Nagar, New Delhi, for relaxing massage and wellness services. Explore available treatments, view service details, and contact us to book your visit.",
      "inLanguage": "en-IN",
    },
    {
      "@type": ["HealthAndBeautyBusiness", "DaySpa"],
      "@id": "https://amazingspa.site/#business",
      "name": "Amazing Spa",
      "url": "https://amazingspa.site",
      "logo": "https://amazingspa.site/images/logo.png",
      "image": "https://amazingspa.site/images/massage2.jpg",
      "telephone": "+91 7982909680",
      "email": "amazingspainfo9@gmail.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "34, Block A Lajpat Nagar 1 Rd, Block A, Lajpat Nagar I, Lajpat Nagar",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110024",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.5727999,
        "longitude": 77.2408173,
      },
      "hasMap":
        "https://www.google.com/maps/place/Amazing+Spa+%7C+Massage+spa+in+lajpat+nagar/@28.5727387,77.2407985,21z/data=!4m6!3m5!1s0x390ce383d8c8f46f:0xc13ee65b5010ca0c!8m2!3d28.5727999!4d77.2408173!16s%2Fg%2F11zy5mj199?entry=ttu",
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Lajpat Nagar",
        },
        {
          "@type": "AdministrativeArea",
          "name": "South Delhi",
        },
        {
          "@type": "AdministrativeArea",
          "name": "New Delhi",
        },
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "00:00",
          "closes": "23:59",
        },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Spa & Massage Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Turkish Massage",
              "description": "The hammam tradition with steam, deep tissue work, gentle stretching and aromatic oil.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Body Massage",
              "description": "Full body therapy designed to relieve tension, release muscle knots, and restore vitality.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Deep Tissue Massage",
              "description": "Targeted deep pressure technique focusing on deeper muscle layers to ease stiffness.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Aroma Therapy",
              "description": "Essential oils chosen for relaxation, stress relief, and physical and mental wellness.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Thai Balm Massage",
              "description": "Authentic massage treatment using cooling herbal Thai balm for joint and muscle relief.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} ${marcellus.variable} ${karla.variable} ${devanagari.variable} ${alexBrush.variable} ${cormorant.variable} ${playfair.variable} ${greatVibes.variable} ${allura.variable} ${montserrat.variable} ${lato.variable} ${openSans.variable} ${poiretOne.variable} ${josefinSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
