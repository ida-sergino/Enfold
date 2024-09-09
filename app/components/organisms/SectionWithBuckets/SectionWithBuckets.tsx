import React from "react";

import Title from "@/app/components/atoms/Title/Title";
import Text from "@/app/components/atoms/Text/Text"; // Import the Text component correctly
import Card from "@/app/components/molecules/Card/Card";
import { BucketProps } from "./types/types";

export default function SectionBucket({
  section_with_buckets,
  key
}: {
  section_with_buckets: BucketProps;
  key: string;
}) {
  return (
    <section className="container mx-auto p-8">
      <div
        className="opacity-0 animate-fadeUp rounded-lg"
        style={{ animationDelay: "1500ms" }}
      >
        <div className="w-full md:w-[60%] text-enfold_blue_dark">
          {section_with_buckets.title_h2 && (
            <Title {...(section_with_buckets.$?.title_h2 as {})} element="h2" className="mb-5">
              {section_with_buckets.title_h2}
            </Title>
          )}
          {section_with_buckets.description && (
            <Text {...(section_with_buckets.$?.description as {})} className="text-[#525252] text-[1.5rem] leading-[2.2rem]">
              {section_with_buckets.description}
            </Text>
          )}
        </div>
        <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {section_with_buckets.buckets?.map((bucket, index) => (
            <Card variant={bucket.variant} iconUrl={bucket.iconConnection.edges[0]?.node.url} iconAlt="icon" title={bucket.title_h3} description={bucket.description} callToAction={bucket.call_to_action} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}