export type ContentBoxProps {
    ContentBox: {
      title_h2?: string;
      description?: string;
      call_to_action?: {
        href: string;
        title: string;
      };
      imageConnection?: {
        edges: [
          {
            node: {
              url: string;
              $?: {
                url: string;
              };
            };
          }
        ];
      };
      image_alignment: string;
      aspectRatio: string;
    };
  }
  