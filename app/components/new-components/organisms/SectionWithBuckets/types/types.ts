import { Image, Action } from "@/types/action";

export type AdditionalParam = {
    title: string;
    title_h2: string;
    title_h3: string;
    description: string;
    html_code: string;
    designation: string;
    name: string;
  };
  
 export type Buckets = {
    variant: "Default" | "Variant 1" | "Variant 2" | "Variant 3" | undefined;
    title_h3: string;
    description: string;
    call_to_action: Action;
    icon: Image;
    iconConnection: {
      edges: {
        node: Image;
      }[];
    };
    $: AdditionalParam;
  };
  
  export type BucketProps = {
    title_h2: string;
    description: string;
    buckets: [Buckets];
    $: AdditionalParam;
  };