import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import RecentListings from "@/components/RecentListings";
import WhyUsSection from "@/components/WhyUsSection";
import PropertiesByAreaSection from "@/components/PropertiesByAreaSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <RecentListings />
      <WhyUsSection />
      <PropertiesByAreaSection />
      <CustomerReviews />
    </main>
  );
}
