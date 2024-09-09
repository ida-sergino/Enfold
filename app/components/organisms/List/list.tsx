import React from "react";
import Case from "../../molecules/Case/Case";
import { ListProps } from "./types/types";

const List: React.FC<ListProps> = ({ list }) => {
  const { cards = [], header } = list || {};
  return (
    <section className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((item: any, index: number) => (
          <div className="flex-1" key={index}>
            <Case title="item.title" category="item.catergory" image="{item.image}" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
