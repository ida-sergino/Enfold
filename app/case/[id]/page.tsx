"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/app/graphql/client";
import CasePageComponent from "@/app/components/page/Templates/Case-page/CasePageComponent";

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <CasePageComponent />
    </ApolloProvider>
  );
}
