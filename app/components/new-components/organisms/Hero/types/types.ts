export type HeroProps = {
    Hero: {
      banner_title?: string;
      banner_description?: string;
      backgroundImage?: string;
      call_to_action?: {
        title?: string;
        href?: string;
      }
    }
    variant?:
      | "primary"
      | "secondary"
      | "success"
      | "danger"
      | "warning"
      | "info"
      | "light"
      | "dark"
      | "image"
  }


  