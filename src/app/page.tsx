import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import RecentListings from "@/components/RecentListings";
import WhyUsSection from "@/components/WhyUsSection";
import PropertiesByLocationSection from "@/components/PropertiesByLocationSection";
import NewsLetterSection from "@/components/NewsLetterSection";
import { getProperties } from "@/services/propertyServices";

export default async function Home() {
  const properties = await getProperties();

  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <RecentListings properties={properties} />
      <WhyUsSection />
      <PropertiesByLocationSection />
      <CustomerReviews />
      <NewsLetterSection />
    </div>
  );
}
