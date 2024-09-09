"use client";

import { useQuery } from '@apollo/client';
import { GET_NAV_ITEMS } from '@/app/graphql/queries/queries';
import { NavigationItem } from '@/types/component';
import client from '@/app/graphql/client';

const useNavItems = () => {
  const { data } = useQuery(GET_NAV_ITEMS, { client });
  const navigation: NavigationItem[] = [];

  if (data && data.all_header && data.all_header.items) {
    data.all_header.items.forEach((item: any) => {
      if (item.navigation_menu) {
        item.navigation_menu.forEach((menu: any) => {
          if (menu.page_referenceConnection && menu.page_referenceConnection.edges) {
            menu.page_referenceConnection.edges.forEach((edge: any) => {
              if (edge.node) {
                navigation.push({
                  name: edge.node.title, href: edge.node.url
                });
              }
            });
          }
        });
      }
    });
  }

  return navigation;
};

export default useNavItems;