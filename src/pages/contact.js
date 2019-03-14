import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />

      <form className="mx-auto w-3/4 text-justify">
        <h1 className="text-center mb-4">Contact</h1>
        <p className="leading-normal mb-8">
          If you would like to work together or have any questions, please fill
          in the fields and submit. I look forward to hearing from you.
        </p>

        <input
          className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
          id="first-name"
          type="text"
          placeholder="First Name"
        />

        <input
          className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
          id="last-name"
          type="text"
          placeholder="Last Name"
        />

        <textarea
          className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
          placeholder="Your message..."
          rows="8"
        />

        <button className="bg-indigo-dark hover:bg-indigo font-bold font-sans-serif px-6 py-3 rounded text-sm text-grey-light">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default ContactPage;
