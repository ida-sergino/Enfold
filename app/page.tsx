"use client";

import HomepageComponent from "@/app/components/page/Templates/Homepage/HomePageComponent";
import { ApolloProvider } from "@apollo/client";
import client from "@/app/graphql/client";

export default function Homepage() {
  return (
    <ApolloProvider client={client}>
      <HomepageComponent />
    </ApolloProvider>
  );
}