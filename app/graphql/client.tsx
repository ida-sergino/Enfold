import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: `https://azure-eu-graphql.contentstack.com/stacks/${process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY}?environment=${process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT}`,
        fetch: fetch,
        headers: {
        access_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN!,
        'Content-Type': "application/json",
        branch: process.env.NEXT_PUBLIC_CONTENTSTACK_BRANCH!
        },
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
        },
        query: {
            fetchPolicy: 'no-cache',
    },
    },
});
  
export default client
