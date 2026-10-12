"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface GalleryImageItem {
  url: string;
  title: string;
  alt: string;
  aspect: string;
  ratio: string;
}

export const GALLERY_IMAGES: GalleryImageItem[] = [
  {
    url: "/images/gallery/amazing-wellness-spa-reception-counter-delhi.webp",
    title: "Sanctuary Reception Desk",
    alt: "Luxury Reception Counter with Illuminated Blue Lattice and Floral Decor at Amazing Wellness Spa Lajpat Nagar 2 Delhi",
    aspect: "aspect-[1091/1333]",
    ratio: "1091 / 1333",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-vip-couple-massage-suite.webp",
    title: "VIP Couple Therapy Suite",
    alt: "Luxury VIP Couple Massage Suite with Ambient Wall Niches and Royal Armchair at Amazing Wellness Spa New Delhi",
    aspect: "aspect-[1280/960]",
    ratio: "1280 / 960",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-jacuzzi-bath-rose-petals.webp",
    title: "Rose Petal Jacuzzi Hydrotherapy",
    alt: "Hydrotherapy Jacuzzi Bathtub with Fresh Rose Petals and Floral Arrangements at Amazing Wellness Spa Delhi",
    aspect: "aspect-[1272/838]",
    ratio: "1272 / 838",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-circular-bed-therapy-room.webp",
    title: "Executive Circular Bed Suite",
    alt: "Executive Circular Bed Therapy Room with Ambient Lighting and Glass Shower at Amazing Wellness Spa Lajpat Nagar",
    aspect: "aspect-[960/1280]",
    ratio: "960 / 1280",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-luxury-double-treatment-room.webp",
    title: "Ambient Double Therapy Chamber",
    alt: "Private Therapy Room with Large Bed, Carved Ceiling and Blue Mood Lighting at Amazing Wellness Spa",
    aspect: "aspect-[960/1280]",
    ratio: "960 / 1280",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-full-body-massage-therapy.webp",
    title: "Full Body Massage Session",
    alt: "Professional Therapist Administering Full Body Oil Massage Therapy at Amazing Wellness Spa New Delhi",
    aspect: "aspect-[704/1472]",
    ratio: "704 / 1472",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-thai-oil-massage-treatment.webp",
    title: "Traditional Thai Oil Massage",
    alt: "Certified Therapist Performing Soothing Leg Massage with Herbal Essential Oils at Amazing Wellness Spa",
    aspect: "aspect-[1356/1064]",
    ratio: "1356 / 1064",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-couple-jacuzzi-massage-chamber.webp",
    title: "Couple Jacuzzi & Therapy Chamber",
    alt: "Exclusive Couple Massage Chamber with Hydrotherapy Jacuzzi and Buddha Wall Art at Amazing Wellness Spa",
    aspect: "aspect-[600/800]",
    ratio: "600 / 800",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-twin-bed-couple-treatment-room.webp",
    title: "Twin Bed Couple Treatment Room",
    alt: "Couple Treatment Room with Twin Massage Beds, Glass Shower Enclosure and Private Bathtub",
    aspect: "aspect-[1272/944]",
    ratio: "1272 / 944",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-luxury-round-bed-suite.webp",
    title: "Private Round Bed Wellness Suite",
    alt: "Round Bed Spa Suite with Rose Petal Decor and Glass Enclosed Rain Shower at Amazing Wellness Spa",
    aspect: "aspect-[960/1280]",
    ratio: "960 / 1280",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-relaxation-waiting-lounge.webp",
    title: "Relaxation Waiting Lounge",
    alt: "Comfortable Waiting Lounge with Leather Sofas, Marble Table and Buddha Wall Lamp at Amazing Wellness Spa",
    aspect: "aspect-[1218/1599]",
    ratio: "1218 / 1599",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-executive-lounge-interior.webp",
    title: "Executive Lounge & Room Entrance",
    alt: "Luxury Spa Lounge Interior with Designer Wallpaper and Private Treatment Room Entrances",
    aspect: "aspect-[1204/1600]",
    ratio: "1204 / 1600",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-lounge-room1-door.webp",
    title: "Private Suite Lounge Area",
    alt: "Spa Waiting Area with Leather Seating, Warm Sconces and Treatment Suite 1 at Amazing Wellness Spa",
    aspect: "aspect-[1205/1600]",
    ratio: "1205 / 1600",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-illuminated-corridor-hallway.webp",
    title: "Ambient Spa Hallway Corridor",
    alt: "Illuminated Spa Corridor Hallway Leading to Private Therapy Suites at Amazing Wellness Spa New Delhi",
    aspect: "aspect-[1208/1600]",
    ratio: "1208 / 1600",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-private-therapy-bedroom.webp",
    title: "Private Therapy Bedroom Suite",
    alt: "Private Therapy Bedroom Suite with Plush Headboard, Mood Lighting and En-Suite Shower",
    aspect: "aspect-[960/1280]",
    ratio: "960 / 1280",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-dual-massage-table-room.webp",
    title: "Atmospheric Double Massage Room",
    alt: "Atmospheric Double Massage Room with Twin Therapy Tables and Blue Relaxation Lighting",
    aspect: "aspect-[1211/1600]",
    ratio: "1211 / 1600",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-single-massage-table-room.webp",
    title: "Private Therapy Room Table",
    alt: "Single Massage Therapy Table with Clean Linens and Fresh Towels in Wood Paneled Room",
    aspect: "aspect-[720/1280]",
    ratio: "720 / 1280",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-ayurvedic-therapy-room.webp",
    title: "Serene Treatment Room",
    alt: "Serene Therapy Room with Massage Table, Towel Art and Buddha Art at Amazing Wellness Spa Lajpat Nagar",
    aspect: "aspect-[960/1280]",
    ratio: "960 / 1280",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-modern-wooden-slat-hallway.webp",
    title: "Modern Wood-Slat Hallway",
    alt: "Modern Spa Hallway with Vertical Wooden Slats, Brass Flower Bowls and Soft Floor Lighting",
    aspect: "aspect-[387/516]",
    ratio: "387 / 516",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-deep-tissue-back-massage.webp",
    title: "Deep Tissue Back Massage",
    alt: "Deep Tissue Back Therapy Session by Skilled Therapist in Peaceful Spa Setting",
    aspect: "aspect-[365/547]",
    ratio: "365 / 547",
  },
  {
    url: "/images/gallery/amazing-wellness-spa-neck-shoulder-stress-relief.webp",
    title: "Relaxing Neck & Shoulder Massage",
    alt: "Relaxing Neck and Shoulder Stress Relief Massage by Expert Therapist at Amazing Wellness Spa",
    aspect: "aspect-[524/384]",
    ratio: "524 / 384",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);
  const prevImage = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const nextImage = () =>
    setSelectedIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section
      id="gallery"
      className="scroll-mt-24 relative py-16 sm:py-24 md:py-28 text-[#16211c] overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #EDE6D7 50%, #F3EEE2 100%)" }}
    >
      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">

        {/* Centered Luxury Header */}
        <div className="text-center border-b border-[#e5dfd3]/70 pb-6 mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase text-[#9d7431] font-medium">
            <span className="w-6 h-px bg-[#d8ab5e]" /> Authentic Sanctuary Photography <span className="w-6 h-px bg-[#d8ab5e]" />
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#16211c] tracking-tight">
            Spa <span className="italic" style={{ color: "oklch(0.78 0.11 78)" }}>Gallery</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#16211c]/70 max-w-xl mx-auto">
            Explore our state-of-the-art wellness suites, Jacuzzi chambers, and private therapy rooms in Lajpat Nagar 2, New Delhi.
          </p>
        </div>

        {/* Responsive Masonry Grid Composition (2 cols on mobile, up to 5 cols on desktop) */}
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-5 space-y-3 sm:space-y-5">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedIndex(i)}
              aria-label={`View ${img.title} - ${img.alt}`}
              style={img.ratio ? { aspectRatio: img.ratio } : undefined}
              className={`group block relative w-full overflow-hidden rounded-[14px] sm:rounded-[18px] border border-[#e5dfd3]/80 bg-[#f2ece1]/40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9d7431]/40 ${img.aspect}`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Subtle hover gradient overlay with image title for enhanced UX */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 sm:p-3 pointer-events-none">
                <p className="text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow line-clamp-1 text-left">
                  {img.title}
                </p>
              </div>

              {/* Minimal Corner Zoom Icon on Hover */}
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#16211c]/60 text-[#f8f5f0] opacity-0 group-hover:opacity-100 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Fullscreen Lightbox with Pure Backdrop Blur */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-xl flex items-center justify-center px-2 sm:px-6 pt-[78px] sm:pt-20 pb-[76px] sm:pb-12 overflow-hidden select-none"
          onClick={closeLightbox}
        >
          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous Image"
            className="absolute left-1 sm:left-6 z-50 p-2 sm:p-3 text-white/90 hover:text-white bg-black/50 hover:bg-black/80 rounded-full border border-white/20 backdrop-blur-md cursor-pointer focus:outline-none transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next Image"
            className="absolute right-1 sm:right-6 z-50 p-2 sm:p-3 text-white/90 hover:text-white bg-black/50 hover:bg-black/80 rounded-full border border-white/20 backdrop-blur-md cursor-pointer focus:outline-none transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Centered Image Wrapper (Dead Center between Navbar and Bottom Footer/MobileBar) */}
          <div
            className="relative inline-flex items-center justify-center w-fit h-fit max-w-[74vw] sm:max-w-[78vw] md:max-w-[72vw] max-h-[50vh] sm:max-h-[62vh] md:max-h-[68vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cut Button Attached Directly to Top-Right Corner of the Image */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close Lightbox"
              className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-3.5 z-[60] p-1.5 sm:p-2 text-white bg-[#16211c] hover:bg-[#9d7431] rounded-full border border-white/40 shadow-2xl cursor-pointer focus:outline-none transition-transform hover:scale-110 active:scale-95"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Complete Uncropped Image in its Original Natural Ratio (No Text) */}
            <img
              src={GALLERY_IMAGES[selectedIndex].url}
              alt={GALLERY_IMAGES[selectedIndex].alt}
              className="max-w-[74vw] sm:max-w-[78vw] md:max-w-[72vw] max-h-[50vh] sm:max-h-[62vh] md:max-h-[68vh] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 block select-none pointer-events-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
