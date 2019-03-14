import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import myAvatar from '../images/myAvatar.png';

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <div className="main-content">
        <div className="splash-box">
          <img
            src={myAvatar}
            className="block mx-auto w-1/4 pb-6"
            alt="Steven Thomson Avatar"
          />
          <h1 className="text-center pb-6">Hello. I'm Steven Thomson.</h1>
          <h2 className="text-center">I'm a Full-Stack Web Developer.</h2>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
