"use client";

import ContactPageComponent from "@/app/components/page/Templates/Contact-page/ContactPageComponent";
import { ApolloProvider } from "@apollo/client";
import client from "@/app/graphql/client";

export default function contactPage() {
  return (
    <ApolloProvider client={client}>
      <ContactPageComponent />
    </ApolloProvider>
  );
}
