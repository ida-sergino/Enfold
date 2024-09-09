import React from "react";
import { useQuery } from "@apollo/client";
import { useInView } from "react-intersection-observer";
import { GET_COMPONENTS } from "@/app/graphql/queries/queries";
import icon from "@/app/assets/section_with_buckets/icon-5.webp"; // Ensure the correct path to the icon

function ContactDetails(component: any) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactDetails = component.contact_details;

  return (
    <>
      <section
        ref={ref}
        className={`w-full px-8 pt-8 md:py-16 lg:pt-24 lg:px-24 relative ${
          inView ? "opacity-0 animate-fade" : ""
        }`} style={{ animationDelay: "500ms" }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-medium text-left mb-8">Our Offices</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {contactDetails.locations?.map(
            (locationWrapper: any, index: number) => (
              <div key={index} className="location lg:flex lg:items-center">
                <img src={icon.src} className="max-w-24 h-24" />
                <div className="mt-6 lg:ml-24">
                  <p className="mb-2 text-lg">
                    <strong>Address:</strong> {locationWrapper.location.address}
                  </p>
                  <p className="mb-2 text-lg">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${locationWrapper.location.email}`}
                      className="text-blue-500"
                    >
                      {locationWrapper.location.email}
                    </a>
                  </p>
                  <p className="mb-2 text-lg">
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${locationWrapper.location.phone}`}
                      className="text-blue-500"
                    >
                      {locationWrapper.location.phone}
                    </a>
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <section className="container mx-auto relative h-[33rem] md:h-96 mt-20 md:mt-10 opacity-0 animate-fade">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.538555383471!2d5.071768977934215!3d52.06992537194672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c665773e1020bb%3A0x7dd9144adb8a717f!2sVan%20Deventerlaan%2031%2C%203528%20AG%20Utrecht!5e0!3m2!1snl!2snl!4v1725270959907!5m2!1snl!2snl"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}

export default ContactDetails;
