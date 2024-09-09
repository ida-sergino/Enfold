import React, { useState, useEffect } from 'react';
import ComponentList from '@/app/components/utils/ComponentList';
import { usePathname } from 'next/navigation';
import SkeletonLoader from '@/app/components/utils/SkeletonLoader/SkeletonLoader';
import { mapComponents } from '@/app/components/utils/ComponentMappings';
import useAllPages from '@/app/hooks/use/useAllPages';
import ErrorPage from '@/app/404';

function ContentPageComponent() {
  const { loading, data } = useAllPages();
  const currentUrl = usePathname();

  if (loading) {
    return <SkeletonLoader />;
  }

  // Filter the page data based on the current URL
  const pageData = data.all_page.items.find((page: any) => page.url === currentUrl);
  if (!pageData) {
    return <ErrorPage />;
  }

  // Map the page components to the format expected by ComponentList
  let componentList = mapComponents(pageData.page_components);

  return <ComponentList componentList={componentList} />;
}

export default ContentPageComponent;