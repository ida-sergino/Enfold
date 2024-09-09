import React from "react";
import Title from "@/app/components/atoms/Title/Title";
import Text from "@/app/components/atoms/Text/Text";
import Button from "@/app/components/atoms/Button/Button";
import cardBgOne from "@/app/assets/section_with_buckets/card-bg-1.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

type CardProps = {
  iconUrl?: string;
  iconAlt?: string;
  title?: string;
  description?: string;
  callToAction?: {
    title: string;
    href: string;
  };
  variant?:
    | "Default"
    | "Variant 1"
    | "Variant 2"
    | "Variant 3"
    | "Variant 4"
    | "Variant 5";
};

const Card: React.FC<CardProps> = ({
  iconUrl,
  iconAlt,
  title,
  description,
  callToAction,
  variant,
}) => {
  return (
    <div
      className={`flex flex-col flex-1 aspect-[4/5] p-8 min-h-[18rem] md:min-h-[24rem] md:p-10 text-left 
    ${
      variant === "Variant 1"
        ? "bg-enfold_red"
        : variant === "Variant 2"
          ? "bg-enfold_blue"
          : variant === "Variant 3"
            ? "bg-card-one bg-cover text-white"
            : variant === "Variant 4"
              ? "bg-card-two bg-cover text-white"
              : variant === "Variant 5"
                ? "bg-card-three bg-cover text-white"
                : variant === "Default"
                  ? "bg-[#F4F3F4]"
                  : ""
    }`}
    >
      {iconUrl && (
        <img
          className="mb-8 max-w-24 w-[48px] h-[48px]"
          src={iconUrl}
          alt={iconAlt || "icon"}
        />
      )}

      {title && <Title element="h3">{title}</Title>}
      {description && (
        <Text className={`${variant === "Default" ? "mt-auto" : ""}`}>
          {description}
        </Text>
      )}
      {callToAction?.title &&
        (variant === "Variant 3" ||
          variant === "Variant 4" ||
          variant === "Variant 5") && (
          <Button
            href={callToAction.href || "#"}
            className="mt-auto font-medium text-[#D76451]"
          >
            {`${callToAction.title}`}
            <span className="w-[18px] h-[18px]">
              <ArrowRightIcon />
            </span>
          </Button>
        )}
    </div>
  );
};

export default Card;
