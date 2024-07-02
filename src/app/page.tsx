import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import RecentListings from "@/components/RecentListings";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <RecentListings />
      <CustomerReviews />
    </main>
  );
}
