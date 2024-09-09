import { usePathname } from "next/navigation";
import Link from "@/app/components/atoms/Link/Link";
import './Breadcrumb.css';

const Breadcrumb: React.FC = () => {
  const currentUrl = usePathname();

  // Split the pathname into segments
  const pathSegments = currentUrl.split("/").filter((segment) => segment);

  // Function to handle segment transformation
  const transformSegment = (segment: string) => {
    // Replace dashes with spaces and capitalize each word
    const transformedSegment = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    // Handle special case for "case"
    const transformedLink = segment === "case" ? "cases" : segment;

    return { transformedSegment, transformedLink };
  };

  // Generate breadcrumb links
  const breadcrumbs = pathSegments.map((segment, index) => {
    const { transformedSegment, transformedLink } = transformSegment(segment);
    const href = "/" + pathSegments.slice(0, index + 1).map((seg, i) => i === index ? transformedLink : seg).join("/");
    const isLast = index === pathSegments.length - 1;

    return (
      <span key={href}>
        {!isLast ? <Link href={href}>{transformedSegment}</Link> : <span>{transformedSegment}</span>}
        {!isLast && " / "}
      </span>
    );
  });

  return (
    <section>
      <nav className="breadcrumb container mx-auto pt-12 px-8 md:w-3/4 md:pt-24 xl:w-6/12" aria-label="breadcrumb">
        <Link href="/" className="font-semibold text-enfold_red">Home</Link>
        {pathSegments.length > 0 && " / "}
        {breadcrumbs}
      </nav>
    </section>
  );
};

export default Breadcrumb;