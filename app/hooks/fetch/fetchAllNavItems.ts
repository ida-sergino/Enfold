import client from '@/app/graphql/client';
import { GET_NAV_ITEMS } from '@/app/graphql/queries/queries';

export async function fetchAllNavItems() {
  const { data } = await client.query({
    query: GET_NAV_ITEMS,
  });
  return data;
}