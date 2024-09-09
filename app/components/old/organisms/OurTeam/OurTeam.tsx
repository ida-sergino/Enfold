import { useQuery } from "@apollo/client";
import { GET_COMPONENTS } from "@/app/graphql/queries/queries";
import Image from "next/image";
import Title from "@/app/components/new-components/atoms/Title/Title";
import Text from "@/app/components/new-components/atoms/Text/Text";

type AdditionalParam = {
  title: string;
  title_h2: string;
  title_h3: string;
  description: string;
  html_code: string;
  designation: string;
  name: string;
};

type Employee = {
  imageConnection: {
    edges: {
      node: {
        url: string;
        title: string;
      };
    }[];
  };
  name: string;
  designation: string;
  $: AdditionalParam;
};

type TeamProps = {
  title_h2: string;
  description: string;
  $: AdditionalParam;
  employees: Employee[];
};

export default function TeamSection() {
  const { loading, error, data } = useQuery(GET_COMPONENTS);

  if (loading) return "";
  if (error) return "";

  // Extract the items array from the data
  const items = data.all_page.items;

  // Find the our_team component
  const ourTeam = items
    .flatMap((item: any) => item.page_components)
    .find((component: any) => component.our_team);

  if (!ourTeam) return <p>No team data found</p>;

  const teamData: TeamProps = ourTeam.our_team;

  return (
    <section className="bg-gray">
      <div className="container mx-auto py-8 px-8 md:w-3/4 md:py-12lg:py-18 lg:w-6/12">
        {teamData.title_h2 && (
          <Title element="h2" {...(teamData.$?.title_h2 as {})}>
            {teamData.title_h2}
          </Title>
        )}
        {teamData.description ? (
          <Text {...(teamData.$?.description as {})}>
            {teamData.description}
          </Text>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-wrap justify-center text-center pb-24 m-1.5">
        {teamData.employees?.map((employee, index) => (
          <div className="px-4" key={index}>
            {/* Render employee details here */}
            <Image
              src={employee.imageConnection.edges[0].node.url}
              alt={employee.name}
              className="w-72 mb-5 inline-block rounded-[30px]"
            />
            <Title className="mt-2" {...(employee.$?.name as {})} element="h3">
              {employee.name}
            </Title>
            <Text {...(employee.$?.designation as {})}>
              {employee.designation}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
}
