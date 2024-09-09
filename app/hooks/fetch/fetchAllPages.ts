import client from '@/app/graphql/client';
import { GET_COMPONENTS, GET_PAGES_DATA } from '@/app/graphql/queries/queries';

export async function fetchAllPages() {
  // Execute the GET_PAGES_DATA query
  const { data: pagesData } = await client.query({
    query: GET_PAGES_DATA,
  });

  // Execute the GET_COMPONENTS query
  const { data: additionalComponents } = await client.query({
    query: GET_COMPONENTS,
  });

  return [pagesData, additionalComponents];
}