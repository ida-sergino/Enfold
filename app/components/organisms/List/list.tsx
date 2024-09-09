import React from "react";
import Case from "../../molecules/Case/Case";
import { ListProps } from "./types/types";

const List: React.FC<ListProps> = ({ list }) => {
  const { cards = [] } = list || {};
  console.log(cards[0]?.card?.title); // Ensure safe access with optional chaining

  return (
    <section className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((item: any, index: number) => {
          console.log(item); // Log the item to inspect its structure
          const card = item.card; // Access the nested card object
          return (
            <div className="flex-1" key={index}>
              <Case
                title={card?.title}
                description={card?.text}
                category={card?.category}
                image={card?.imageConnection?.edges[0]?.node}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default List;