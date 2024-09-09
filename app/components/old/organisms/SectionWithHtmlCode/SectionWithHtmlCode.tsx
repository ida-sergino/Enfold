import parse from "html-react-parser";

type AdditionalParam = {
  title: string;
  title_h2: string;
  title_h3: string;
  description: string;
  html_code: string;
  designation: string;
  name: string;
};

type ObjectProps = {
  html_code_alignment: string;
  title: string;
  description: string;
  html_code: string;
  $: AdditionalParam;
};

export default function SectionWithHtmlCode({
  section_with_html_code,
}: {
  section_with_html_code: ObjectProps;
}) {
  if (section_with_html_code.html_code_alignment === "Left") {
    return (
      <section className="container mx-auto py-8 md:py-12 lg:py-12">
        <div className="contact-page-section max-width">
          <div className="contact-page-content">
            {section_with_html_code.title && (
              <h2 {...(section_with_html_code.$?.title as {})}>{section_with_html_code.title}</h2>
            )}
            {typeof section_with_html_code.description === "string" && (
              <div {...(section_with_html_code.$?.description as {})}>
                {parse(section_with_html_code.description)}
              </div>
            )}
          </div>
          <div className="contact-page-form">
            {typeof section_with_html_code.html_code === "string" && (
              <div {...(section_with_html_code.$?.html_code as {})}>
                {parse(section_with_html_code.html_code)}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="container mx-auto py-8 md:py-12 lg:py-12">
      <div className="contact-maps-section max-width">
        <div className="maps-details">
          {typeof section_with_html_code.html_code === "string" && (
            <div {...(section_with_html_code.$?.html_code as {})}>
              {parse(section_with_html_code.html_code)}
            </div>
          )}
        </div>
        <div className="contact-maps-content">
          {section_with_html_code.title ? <h2>{section_with_html_code.title}</h2> : ""}
          {typeof section_with_html_code.description === "string" && (
            <div {...(section_with_html_code.$?.description as {})}>
              {parse(section_with_html_code.description)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
