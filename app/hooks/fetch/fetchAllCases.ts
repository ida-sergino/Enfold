import client from '@/app/graphql/client';
import { GET_ALL_CASES } from '@/app/graphql/queries/queries';

export async function fetchAllCases() {
  const { data } = await client.query({
    query: GET_ALL_CASES,
  });
  return data;
}