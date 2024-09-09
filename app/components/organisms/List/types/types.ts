export type CardContent = {
    __typename: string;
    title?: {
      title: string;
    };
    text?: {
      description: string;
    };
    image?: {
      alt: string;
      height: number;
      width: number;
      srcConnection: {
        edges: {
          node: {
            url: string;
          };
        }[];
      };
    };
  }
  
  export type Card = {
    category: string;
    title: string;
    content: CardContent[];
    imageConnection: {
      edges: {
        node: {
          url: string;
        };
      }[];
    };
  }
  
  export type ListProps = {
    list: {
      cards: { card: Card }[];
      header: string;
    };
  }