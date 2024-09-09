"use client";

import { useQuery } from '@apollo/client';
import { GET_PAGES_DATA } from '@/app/graphql/queries/queries';
import client from '@/app/graphql/client';

const useAllPages = () => {
  const { loading, data } = useQuery(GET_PAGES_DATA, { client });

  return { loading, data };
};

export default useAllPages;