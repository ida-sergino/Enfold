import React, { useState, useEffect } from 'react';
import ComponentList from '@/app/components/utils/ComponentList';
import { usePathname } from 'next/navigation';
import SplashScreen from '@/app/components/utils/SplashScreen/SplashScreen';
import { mapComponents } from '@/app/components/utils/ComponentMappings';
import useAllPages from '@/app/hooks/use/useAllPages';
import ErrorPage from '@/app/404';

function HomepageComponent() {
  const { loading, data } = useAllPages();
  const currentUrl = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  } , 2000);
  
  if (loading || isLoading) {
    return <SplashScreen />;
  }

  // Filter the page data based on the current URL
  const pageData = data.all_page.items.find((page: any) => page.url === currentUrl);
  if (!pageData) {
    return <ErrorPage />;
  }

  // Map the page components to the format expected by ComponentList
  let componentList = mapComponents(pageData.page_components);

  return (
    <>
      <ComponentList componentList={componentList} />
    </>
  );
}

export default HomepageComponent;