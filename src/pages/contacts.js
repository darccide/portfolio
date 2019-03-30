import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import resumeIcon from '../images/resume-plain.svg';
import githubIcon from '../images/github-original.svg';
import twitterIcon from '../images/twitter-circle.svg';
import linkedinIcon from '../images/linkedin-circle.svg';
import emailIcon from '../images/email.svg';

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contacts"
        keywords={[`contacts`, `email`, `twitter`, `github`]}
      />
      <div className="main-content">
        <div className="splash-box">
          <h1 className="text-center pb-6">Contacts</h1>
          <h2 className="text-center pb-6">
            Check out Steven's Resume or Contact Him
          </h2>
          <p className="text-center pb-6">
            <a href="https://drive.google.com/open?id=1WvkUsDPAxhvq7z1cbVGtzlIx-xQhkcYX">
              <img src={resumeIcon} alt="resume" style={{ height: '8em' }} />
            </a>
            <a href="https://github.com/darccide">
              <img src={githubIcon} alt="github" style={{ height: '8em' }} />
            </a>
            <a href="https://twitter.com/notyourvegas">
              <img src={twitterIcon} alt="twitter" style={{ height: '8em' }} />
            </a>
            <a href="https://www.linkedin.com/in/steventhomson1988/">
              <img
                src={linkedinIcon}
                alt="linkedin"
                style={{ height: '8em' }}
              />
            </a>
            <a href="mailto:steven.thomson88@gmail.com">
              <img src={emailIcon} alt="email" style={{ height: '8em' }} />
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
