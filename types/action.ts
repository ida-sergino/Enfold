type AdditionalParam = {
  url: string;
  title: {};
}

export type Action = {
    title: string;
    href: string;
    $: AdditionalParam;
  }

export type Image = {
    title: string;
    aspectRatio: any;
    filename: string;
    url: string;
    $: AdditionalParam;
  }