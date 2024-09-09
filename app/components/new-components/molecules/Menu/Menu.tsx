import Link from "next/link";
import React from "react";
import { DialogProps } from "@/types/component";

const Menu: React.FC<DialogProps> = ({ navigation }) => {
  return (
    <>
      {navigation.map((item, key) => (
        <Link key={key} href={item.href}>
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Menu;
