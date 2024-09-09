import React from 'react';
import { usePathname } from 'next/navigation';
import SkeletonLoader from '@/app/components/utils/SkeletonLoader/SkeletonLoader';
import ComponentList from '@/app/components/utils/ComponentList';
import ErrorPage from '@/app/404';
import useAllCases from '@/app/hooks/use/useAllCases';
import { mapComponents } from '@/app/components/utils/ComponentMappings';
import Breadcrumb from '@/app/components/molecules/Breadcrumb/Breadcrumb';

function CasePageComponent() {
  const { loading, data } = useAllCases();
  const currentUrl = usePathname();

  if (loading) {
    return <SkeletonLoader />;
  }

  // Adjusted to match the JSON structure
  const pageData = data.all_case.items.find(
    (page: any) => page.url === currentUrl
  );
  if (!pageData) {
    return <ErrorPage />;
  }

  // Handle the case where modular_blocks might be missing
  let componentList = pageData.modular_blocks
    ? mapComponents(pageData.modular_blocks)
    : [];

  return (
  <>
    <Breadcrumb />
    <ComponentList componentList={componentList} />;
  </>
  );
}

export default CasePageComponent;