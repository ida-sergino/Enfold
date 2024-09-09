"use client";

import { useQuery } from "@apollo/client";
import { GET_FOOTER_NAV_ITEMS } from "@/app/graphql/queries/queries";
import { NavigationItem } from "@/types/component";
import client from "@/app/graphql/client";

const useNavItems = () => {
  const { data } = useQuery(GET_FOOTER_NAV_ITEMS, { client });
  const navigation: NavigationItem[] = [];

  if (data && data.all_footer && data.all_footer.items) {
    data.all_footer.items.forEach((item: any) => {
      if (item.navigation && item.navigation.link) {
        item.navigation.link.forEach((link: any) => {
          if (link.title && link.href) {
            navigation.push({
              name: link.title,
              href: link.href,
            });
          }
        });
      }
    });
  }

  return navigation;
};

export default useNavItems;
