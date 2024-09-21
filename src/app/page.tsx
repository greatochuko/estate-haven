import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import RecentListings from "@/components/RecentListings";
import WhyUsSection from "@/components/WhyUsSection";
import PropertiesByLocationSection from "@/components/PropertiesByLocationSection";
import NewsLetterSection from "@/components/NewsLetterSection";
import { getProperties } from "@/services/propertyServices";
import { getUserSession } from "@/services/userServices";

export default async function Home() {
  const user = await getUserSession();
  const properties = await getProperties();

  return (
    <div className="flex flex-col gap-20">
      <Hero user={user} />
      <RecentListings properties={properties} user={user} />
      <WhyUsSection />
      <PropertiesByLocationSection properties={properties} />
      <CustomerReviews />
      <NewsLetterSection />
    </div>
  );
}
