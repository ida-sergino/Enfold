"use client";

import { useQuery } from '@apollo/client';
import { GET_ALL_CASES } from '@/app/graphql/queries/queries';
import client from '@/app/graphql/client';

const useAllCases = () => {
  const { loading, data } = useQuery(GET_ALL_CASES, { client });

  return { loading, data };
};

export default useAllCases;