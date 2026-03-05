"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Gift, Sparkles, Zap, Crown } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="largeSmall"
      background="noiseDiagonalGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="LUXOR WATCHES"
          button={{ text: "Shop Now", href: "#products" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Premium Men's Watch Store"
          description="Discover the finest collection of luxury men's wrist watches. Each timepiece is handpicked for elegance, precision, and lasting value. Experience timeless sophistication with LUXOR WATCHES."
          background={{ variant: "noiseDiagonalGradient" }}
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/pensive-bearded-man-dark-suit-is-checking-what-time-is-now-dark-photo-studio_613910-12654.jpg",              alt: "Premium luxury watch collection"
            }
          ]}
          avatarText="Trusted by 5000+ watch enthusiasts worldwide"
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "View Collection", href: "#new-arrivals" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Hero section - Premium men's watch store"
        />
      </div>

      <div id="best-selling" data-section="best-selling">
        <ProductCardFour
          title="Best Selling Watches"
          description="Discover our most popular timepieces, trusted by thousands of watch collectors around the world."
          tag="Best Sellers"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",              name: "Classic Leather Watch",              price: "$35",              variant: "Brown leather strap",              imageSrc: "http://img.b2bpic.net/free-photo/worker-equipment-manual-tool-surface_1303-374.jpg?_wi=1",              imageAlt: "Classic leather watch with brown strap"
            },
            {
              id: "2",              name: "Minimal Black Watch",              price: "$40",              variant: "Sleek black face",              imageSrc: "http://img.b2bpic.net/free-vector/clock-designs-collection_1333-7.jpg?_wi=1",              imageAlt: "Minimal black design watch"
            },
            {
              id: "3",              name: "Stainless Steel Watch",              price: "$50",              variant: "Metal bracelet",              imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-sexy-handsome-model-man-casual-cloth-sunglasses-street_158538-9739.jpg?_wi=1",              imageAlt: "Stainless steel watch with metal band"
            },
            {
              id: "4",              name: "Business Style Watch",              price: "$45",              variant: "Professional black",              imageSrc: "http://img.b2bpic.net/free-photo/mid-section-businessman-holding-wristwatch-his-hand_23-2147941431.jpg",              imageAlt: "Business style professional watch"
            }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="new-arrivals" data-section="new-arrivals">
        <ProductCardFour
          title="New Arrival Watches"
          description="Stay ahead of trends with our latest luxury timepiece additions to the collection."
          tag="New Arrivals"
          tagIcon={Zap}
          products={[
            {
              id: "5",              name: "Luxury Gold Watch",              price: "$80",              variant: "Premium gold plating",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-modern-man-accessories_1328-2271.jpg",              imageAlt: "Luxury gold watch"
            },
            {
              id: "6",              name: "Elegant Silver Watch",              price: "$60",              variant: "Polished silver finish",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-looking-watch_1163-3199.jpg",              imageAlt: "Elegant silver polished watch"
            },
            {
              id: "7",              name: "Smart Fitness Watch",              price: "$75",              variant: "Tech-enabled tracking",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-sportswoman-using-fitness-tracker-while-working-out-gym_637285-8546.jpg?_wi=1",              imageAlt: "Smart fitness watch with technology"
            },
            {
              id: "8",              name: "Premium Designer Watch",              price: "$90",              variant: "Exclusive designer collection",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-seller-s-hand-gloves-shows-exclusive-men-s-watch-from-new-collection-luxury-jewelry-store_613910-20420.jpg",              imageAlt: "Premium designer exclusive watch"
            }
          ]}
          gridVariant="bento-grid-inverted"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="luxury-collection" data-section="luxury-collection">
        <ProductCardFour
          title="Luxury Watch Collection"
          description="Experience the pinnacle of watchmaking craftsmanship with our exclusive luxury lineup."
          tag="Premium"
          tagIcon={Crown}
          products={[
            {
              id: "9",              name: "Sport Chronograph Watch",              price: "$55",              variant: "Professional chronometer",              imageSrc: "http://img.b2bpic.net/free-photo/modern-black-watch-wrist-man-sitting-car_181624-58251.jpg?_wi=1",              imageAlt: "Sport chronograph professional watch"
            },
            {
              id: "10",              name: "Tactical Sport Watch",              price: "$65",              variant: "Military-grade rugged",              imageSrc: "http://img.b2bpic.net/free-photo/female-jogger-looking-smartwatch_23-2148762285.jpg?_wi=1",              imageAlt: "Tactical rugged sport watch"
            },
            {
              id: "11",              name: "Classic Leather Watch",              price: "$35",              variant: "Vintage brown leather",              imageSrc: "http://img.b2bpic.net/free-photo/worker-equipment-manual-tool-surface_1303-374.jpg?_wi=2",              imageAlt: "Classic vintage leather watch"
            },
            {
              id: "12",              name: "Minimal Black Watch",              price: "$40",              variant: "Ultra-thin minimalist",              imageSrc: "http://img.b2bpic.net/free-vector/clock-designs-collection_1333-7.jpg?_wi=2",              imageAlt: "Minimal ultra-thin black watch"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="sport-watches" data-section="sport-watches">
        <ProductCardFour
          title="Sport Watches"
          description="Built for performance and durability. Perfect for active lifestyles and outdoor adventures."
          tag="Performance"
          tagIcon={Zap}
          products={[
            {
              id: "13",              name: "Sport Chronograph Watch",              price: "$55",              variant: "Race-ready timing",              imageSrc: "http://img.b2bpic.net/free-photo/modern-black-watch-wrist-man-sitting-car_181624-58251.jpg?_wi=2",              imageAlt: "Sport chronograph race watch"
            },
            {
              id: "14",              name: "Tactical Sport Watch",              price: "$65",              variant: "Adventure-ready tough",              imageSrc: "http://img.b2bpic.net/free-photo/female-jogger-looking-smartwatch_23-2148762285.jpg?_wi=2",              imageAlt: "Tactical adventure sport watch"
            },
            {
              id: "15",              name: "Smart Fitness Watch",              price: "$75",              variant: "Training intelligence",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-sportswoman-using-fitness-tracker-while-working-out-gym_637285-8546.jpg?_wi=2",              imageAlt: "Smart fitness training watch"
            },
            {
              id: "16",              name: "Stainless Steel Watch",              price: "$50",              variant: "Durable lightweight",              imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-sexy-handsome-model-man-casual-cloth-sunglasses-street_158538-9739.jpg?_wi=2",              imageAlt: "Stainless steel durable sport watch"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="LUXOR WATCHES transformed my collection. The quality is exceptional, and every timepiece exceeds my expectations. The customer service made the entire experience seamless and delightful."
          rating={5}
          author="James Mitchell, Luxury Watch Collector"
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              alt: "James Mitchell"
            },
            {
              src: "http://img.b2bpic.net/free-photo/handsome-business-man-wearing-suit-looking-camera-smiling-broadly-with-happy-face-standing-white-background_141793-54115.jpg",              alt: "Michael Chen"
            },
            {
              src: "http://img.b2bpic.net/free-photo/outdoor-shot-young-caucasian-man-with-beard-relaxing-open-air-surrounded-by-beautiful-mountain-setting-rainforest_273609-1855.jpg",              alt: "David Rodriguez"
            },
            {
              src: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg",              alt: "Christopher Bell"
            }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="opacity"
          useInvertedBackground={false}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Premium Watch Brands"
          description="We partner with the world's most prestigious watch manufacturers to bring you authentic luxury timepieces."
          tag="Verified Partners"
          textboxLayout="default"
          useInvertedBackground={false}
          names={["Rolex", "Omega", "Tag Heuer", "Patek Philippe", "Breitling", "Cartier", "Longines", "Seiko"]}
          logos={[
            "http://img.b2bpic.net/free-vector/logos-collection-with-vintage-luxury-style_23-2147842744.jpg",            "http://img.b2bpic.net/free-vector/elegant-ornamental-logo-with-letter-q_1017-6178.jpg",            "http://img.b2bpic.net/free-vector/logos-collection-with-vintage-luxury-style_23-2147842744.jpg",            "http://img.b2bpic.net/free-photo/businessman-hand-pants-pocket_1262-18152.jpg",            "http://img.b2bpic.net/free-vector/logos-collection-with-vintage-luxury-style_23-2147842744.jpg",            "http://img.b2bpic.net/free-vector/logos-collection-with-vintage-luxury-style_23-2147842744.jpg",            "http://img.b2bpic.net/free-vector/logos-collection-with-vintage-luxury-style_23-2147842742.jpg",            "http://img.b2bpic.net/free-vector/logos-collection-with-vintage-luxury-style_23-2147842742.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactCTA
          tag="Ready to Elevate Your Style?"
          tagIcon={Gift}
          title="Start Your Luxury Watch Journey Today"
          description="Browse our exclusive collection of premium men's watches. With free shipping, 30-day warranty, and secure checkout, your perfect timepiece is just a few clicks away."
          buttons={[
            { text: "Shop The Collection", href: "#products" },
            { text: "Contact Our Experts", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="LUXOR WATCHES"
          columns={[
            {
              items: [
                { label: "Shop", href: "#products" },
                { label: "Best Sellers", href: "#best-selling" },
                { label: "New Arrivals", href: "#new-arrivals" },
                { label: "Sport Watches", href: "#sport-watches" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#" },
                { label: "Craftsmanship", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "Customer Service", href: "#contact" },
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Shipping Info", href: "#" }
              ]
            },
            {
              items: [
                { label: "Legal", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Warranty Info", href: "#" }
              ]
            },
            {
              items: [
                { label: "Follow Us", href: "#" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
