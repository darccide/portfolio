import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import IndexStyles from './styles/IndexStyles';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <IndexStyles>
        <div className="main-content">
          <div className="splash-box">
            <img
              src="https://res.cloudinary.com/ddhlidgdf/image/upload/v1552349798/1546359638757.jpg"
              alt="Steven Thomson Profile"
              className="block mx-auto w-1/4 pb-6"
            />

            <h1 className="text-center pb-6">Hello. I'm Steven Thomson.</h1>
            <h2 className="text-center">I'm a Full-Stack Web Developer.</h2>
          </div>
        </div>
      </IndexStyles>
    </Layout>
  );
}

export default IndexPage;
