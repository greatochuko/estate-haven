import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import RecentListings from "@/components/RecentListings";
import WhyUsSection from "@/components/WhyUsSection";
import PropertiesByLocationSection from "@/components/PropertiesByLocationSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <RecentListings />
      <WhyUsSection />
      <PropertiesByLocationSection />
      <CustomerReviews />
    </main>
  );
}
