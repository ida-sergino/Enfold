import client from '@/app/graphql/client';
import { GET_FOOTER_NAV_ITEMS } from '@/app/graphql/queries/queries';

export async function fetchAllFooterNavItems() {
  const { data } = await client.query({
    query: GET_FOOTER_NAV_ITEMS,
  });
  return data;
}