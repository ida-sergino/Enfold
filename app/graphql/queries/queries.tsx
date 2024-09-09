import { gql } from "@apollo/client";

export const GET_PAGES_DATA = gql`
  query GetPages {
    all_page {
      items {
        page_components {
          ... on PagePageComponentsHero {
            __typename
            Hero {
              banner_description
              banner_imageConnection {
                edges {
                  node {
                    url
                    title
                  }
                }
              }
              banner_title
              bg_color
              call_to_action {
                href
                title
              }
              text_color
            }
          }
          ... on PagePageComponentsBreadcrumb {
            __typename
            breadcrumb {
              levels
            }
          }
          ... on PagePageComponentsContentBox {
            __typename
            ContentBox {
              call_to_action {
                href
                title
              }
              description
              imageConnection {
                edges {
                  node {
                    title
                    url
                  }
                }
              }
              image_alignment
              title_h2
            }
          }
          ... on PagePageComponentsSection {
            __typename
            section {
              bg_color
              modular_blocks {
                ... on PagePageComponentsSectionBlockModularBlocksTitle {
                  __typename
                  title {
                    alignment
                    text
                    element
                  }
                }
                ... on PagePageComponentsSectionBlockModularBlocksText {
                  __typename
                  text {
                    alignment
                    color
                    text
                    size
                  }
                }
                ... on PagePageComponentsSectionBlockModularBlocksButton {
                  __typename
                  button {
                    alignment
                    background_color
                    border
                    label
                    link {
                      href
                      title
                    }
                  }
                }
                ... on PagePageComponentsSectionBlockModularBlocksImage {
                  __typename
                  image {
                    alignment
                    aspect_ratio
                    imageConnection {
                      edges {
                        node {
                          url
                          title
                        }
                      }
                    }
                    width
                  }
                }
              }
            }
          }
          ... on PagePageComponentsSectionWithBuckets {
            __typename
            section_with_buckets {
              buckets {
                variant
                description
                call_to_action {
                  href
                  title
                }
                iconConnection {
                  edges {
                    node {
                      title
                      url
                    }
                  }
                }
                title_h3
              }
              bucket_tabular
              description
              title_h2
            }
          }
          ... on PagePageComponentsCallToActionBanner {
            __typename
            call_to_action_banner {
              button {
                label
                link {
                  href
                  title
                }
              }
              text
              title
            }
          }
          ... on PagePageComponentsQuote {
            __typename
            quote {
              quote
            }
          }
          ... on PagePageComponentsContactDetails {
            __typename
            contact_details {
              locations {
                ... on PagePageComponentsContactDetailsBlockLocationsLocation {
                  __typename
                  location {
                    address
                    email
                    phone
                  }
                }
              }
            }
          }
          ... on PagePageComponentsList {
            __typename
            list {
              cards {
                ... on PagePageComponentsListBlockCardsCard {
                  __typename
                  card {
                    category
                    text
                    imageConnection {
                      edges {
                        node {
                          title
                          url
                        }
                      }
                    }
                    title
                  }
                }
              }
              header
            }
          }
        }
        title
        url
      }
    }
  }
`;

export const GET_COMPONENTS = gql`
  query GetAditionalComponents {
    all_page {
      items {
        page_components {
          ... on PagePageComponentsSectionWithHtmlCode {
            __typename
            section_with_html_code {
              description {
                embedded_itemsConnection {
                  edges {
                    node {
                      ... on SysAsset {
                        title
                        url
                      }
                    }
                  }
                }
              }
              html_code
              html_code_alignment
              title
            }
          }
          ... on PagePageComponentsOurTeam {
            __typename
            our_team {
              description
              employees {
                designation
                imageConnection {
                  edges {
                    node {
                      title
                      url
                    }
                  }
                }
                name
              }
              title_h2
            }
          }
          ... on PagePageComponentsSectionWithCards {
            __typename
            section_with_cards {
              cards {
                call_to_action {
                  href
                  title
                }
                description
                title_h3
              }
            }
          }
          ... on PagePageComponentsSection {
            __typename
            section {
              bg_color
              modular_blocks {
                ... on PagePageComponentsSectionBlockModularBlocksTitle {
                  __typename
                  title {
                    alignment
                    text
                    element
                  }
                }
                ... on PagePageComponentsSectionBlockModularBlocksText {
                  __typename
                  text {
                    alignment
                    color
                    text
                    size
                  }
                }
                ... on PagePageComponentsSectionBlockModularBlocksButton {
                  __typename
                  button {
                    alignment
                    background_color
                    border
                    label
                    link {
                      href
                      title
                    }
                  }
                }
                ... on PagePageComponentsSectionBlockModularBlocksImage {
                  __typename
                  image {
                    alignment
                    aspect_ratio
                    imageConnection {
                      edges {
                        node {
                          url
                          title
                        }
                      }
                    }
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_NAV_ITEMS = gql`
  query GetNavItems {
    all_header {
      total
      items {
        navigation_menu {
          label
          page_referenceConnection {
            edges {
              node {
                ... on Page {
                  title
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_FOOTER_NAV_ITEMS = gql`
  query GetFooterNavItems {
    all_footer {
      items {
        copyright {
          embedded_itemsConnection {
            edges {
              node {
                ... on SysAsset {
                  title
                  url
                }
              }
            }
          }
          json
        }
        social {
          social_share {
            iconConnection {
              edges {
                node {
                  url
                  title
                  filename
                }
              }
            }
            link {
              href
              title
            }
          }
        }
        title
        navigation {
          link {
            href
            title
          }
        }
        logoConnection {
          edges {
            node {
              filename
              content_type
              description
              dimension {
                height
                width
              }
              file_size
              metadata
              title
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_CASES = gql`
  query GetCases {
    all_case {
      items {
        modular_blocks {
          ... on CaseModularBlocksSection {
            __typename
            section {
              bg_color
              modular_blocks {
                ... on CaseModularBlocksSectionBlockModularBlocksText {
                  __typename
                  text {
                    alignment
                    color
                    size
                    text
                  }
                }
                ... on CaseModularBlocksSectionBlockModularBlocksTitle {
                  __typename
                  title {
                    alignment
                    element
                    text
                  }
                }
                ... on CaseModularBlocksSectionBlockModularBlocksButton {
                  __typename
                  button {
                    alignment
                    background_color
                    border
                    label
                    link {
                      title
                      href
                    }
                  }
                }
                ... on CaseModularBlocksSectionBlockModularBlocksImage {
                  __typename
                  image {
                    alignment
                    aspect_ratio
                    imageConnection {
                      edges {
                        node {
                          title
                          url
                        }
                      }
                    }
                    width
                  }
                }
              }
              variant
            }
          }
        }
        title
        url
      }
    }
  }
`;
