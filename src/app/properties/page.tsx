import PropertiesPageMain from "@/components/PropertiesPageMain";
import SearchForm from "@/components/SearchForm";
import { getProperties } from "@/services/propertyServices";
import React from "react";

export default async function PropertiesPage() {
  const properties = await getProperties();
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <SearchForm />
      <PropertiesPageMain properties={properties} />
    </div>
  );
}
