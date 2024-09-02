import Agent from "@/components/Agent";
import { getProperties } from "@/services/propertyServices";
import { getAgents } from "@/services/userServices";
import React from "react";

export default async function AgentListPage() {
  const agents = await getAgents();
  const properties = await getProperties();

  return (
    <div className="gap-4 gap-y-8 sm:gap-6 lg:gap-8 grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))]">
      {agents.map((agent) => (
        <Agent
          key={agent.id}
          agent={agent}
          numOfListings={
            properties.filter((property) => property.agent.id === agent.id)
              .length
          }
        />
      ))}
    </div>
  );
}
