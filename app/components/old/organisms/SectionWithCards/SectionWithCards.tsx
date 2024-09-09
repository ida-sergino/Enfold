import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CASES } from '@/app/graphql/queries/queries';
import Link from "next/link";
import './SectionWithCards.css';
import Title from '@/app/components/new-components/atoms/Title/Title';
import Text from '@/app/components/new-components//atoms/Text/Text';

type Action = {
  title: string;
  href: string;
};

type AdditionalParam = {
  title_h3: string;
  description: string;
};

type Card = {
  title: string;
  description: string;
  url: string;
  $: AdditionalParam;
};

type SectionWithCards = {
  cards: Card[];
};

type CardProps = {
  section_with_cards: SectionWithCards;
};

export default function SectionWithCards() {
  const { loading, error, data } = useQuery(GET_ALL_CASES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cards = data.all_case.items;

  return (
    <section className="section-with-cards h-[60dvh]">
      {cards?.map((card: Card, index: number) => (
        <div className="cards h-64 p-8" key={index}>
          {card.title && (
            <Title element="h3">{card.title}</Title>
          )}
          {card.description && (
            <Text>{card.description}</Text>
          )}
          <div className="card-cta">
            {card.url && (
              <Link className="text-enfold_red" href={card.url}>
                Read more
              </Link>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}