import React from "react";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <section className="container mx-auto py-8 md:py-12 lg:py-24">
        <div className="error-page">
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </section>
    );
  }
}
