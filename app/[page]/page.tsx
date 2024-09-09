"use client";

import ContentPageComponent from "@/app/components/page/Templates/Content-page/ContentPageComponent";
import { ApolloProvider } from "@apollo/client";
import client from "@/app/graphql/client";

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <ContentPageComponent />
    </ApolloProvider>
  );
}
