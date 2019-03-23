import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import htmlIcon from '../images/html5-plain.svg';
import cssIcon from '../images/css3-original.svg';
import javascriptIcon from '../images/javascript-plain.svg';
import bootstrapIcon from '../images/bootstrap-plain.svg';
import nodejsIcon from '../images/nodejs-plain.svg';
import expressIcon from '../images/express-original.svg';
import postgresqlIcon from '../images/postgresql-plain.svg';
import jasmineIcon from '../images/jasmine-plain.svg';
import reactIcon from '../images/react-original.svg';
import graphqlIcon from '../images/graphql.svg';
import herokuIcon from '../images/heroku-plain.svg';

import bmartImage from '../images/bmart.svg';
import quikiImage from '../images/quicki-wiki.svg';
import beenredImage from '../images/beenred.svg';
import shopperImage from '../images/smartshopper.svg';
import conwayImage from '../images/gameoflife.svg';
import jamsImage from '../images/justjams.svg';

function PortfolioPage() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1 className="text-center pb-8">Portfolio</h1>
      <p className="text-xl leading-normal">
        Take a look at some of the projects I have worked on. If the project is
        currently deployed, clicking the image will take you to the site.
        Otherwise clicking the image, like clicking the title below it, will
        take you to the project's github page. Enjoy!
      </p>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 pb-8">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="https://bmart-next-production.herokuapp.com/">
                <img
                  alt="Bmart"
                  className="block h-auto w-full"
                  src={bmartImage}
                  style={{ height: '8em' }}
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="https://github.com/darccide/bmart"
                  >
                    BMart
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <div className="flex items-center no-underline text-black">
                  <p className="no-underline font-bold text-black pr-2">
                    Tech:
                  </p>
                  <img
                    alt="react"
                    className="block rounded-full"
                    src={reactIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="graphql"
                    className="block rounded-full"
                    src={graphqlIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="nodejs"
                    className="block rounded-full"
                    src={nodejsIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="postgresql"
                    className="block rounded-full"
                    src={postgresqlIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="heroku"
                    className="block rounded-full"
                    src={herokuIcon}
                    style={{ height: '2em' }}
                  />
                </div>
              </footer>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 pb-8">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="https://quicki-wiki.herokuapp.com/">
                <img
                  alt="Quicki-Wiki"
                  className="block h-auto w-full"
                  src={quikiImage}
                  style={{ height: '8em' }}
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="https://github.com/darccide/Quicki-Wiki"
                  >
                    Quicki-Wiki
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <div
                  className="flex items-center no-underline text-black"
                  href="https://github.com/darccide/BeenRed"
                >
                  <p className="no-underline font-bold text-black pr-2">
                    Tech:
                  </p>
                  <img
                    alt="github"
                    className="block rounded-full"
                    src={bootstrapIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="heroku deploy"
                    className="block rounded-full"
                    src={nodejsIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="heroku deploy"
                    className="block rounded-full"
                    src={postgresqlIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="heroku deploy"
                    className="block rounded-full"
                    src={jasmineIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="heroku"
                    className="block rounded-full"
                    src={herokuIcon}
                    style={{ height: '2em' }}
                  />
                </div>
              </footer>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 pb-8">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="https://github.com/darccide/BeenRed">
                <img
                  alt="BeenRed"
                  className="block h-auto w-full"
                  src={beenredImage}
                  style={{ height: '8em' }}
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="https://github.com/darccide/BeenRed"
                  >
                    BeenRed
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <div className="flex items-center no-underline text-black">
                  <p className="no-underline font-bold text-black pr-2">
                    Tech:
                  </p>
                  <img
                    alt="bootstrap"
                    className="block rounded-full"
                    src={bootstrapIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="nodejs"
                    className="block rounded-full"
                    src={nodejsIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="express"
                    className="block rounded-full"
                    src={expressIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="postgresql"
                    className="block rounded-full"
                    src={postgresqlIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="jasmine"
                    className="block rounded-full"
                    src={jasmineIcon}
                    style={{ height: '2em' }}
                  />
                </div>
              </footer>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 pb-8">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="https://github.com/darccide/Smartshopper">
                <img
                  alt="Smartshopper"
                  className="block h-auto w-full"
                  src={shopperImage}
                  style={{ height: '8em' }}
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="https://github.com/darccide/Smartshopper"
                  >
                    Smart Shopper
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <div className="flex items-center no-underline text-black">
                  <p className="no-underline font-bold text-black pr-2">
                    Tech:
                  </p>
                  <img
                    alt="bootstrap"
                    className="block rounded-full"
                    src={bootstrapIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="nodejs"
                    className="block rounded-full"
                    src={nodejsIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="express"
                    className="block rounded-full"
                    src={expressIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="postgresql"
                    className="block rounded-full"
                    src={postgresqlIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="jasmine"
                    className="block rounded-full"
                    src={jasmineIcon}
                    style={{ height: '2em' }}
                  />
                </div>
              </footer>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 pb-8">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="https://github.com/darccide/ConwayGameOfLife">
                <img
                  alt="Game of Live"
                  className="block h-auto w-full"
                  src={conwayImage}
                  style={{ height: '8em' }}
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="https://github.com/darccide/ConwayGameOfLife"
                  >
                    Conway's Game of Life
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <div className="flex items-center no-underline text-black">
                  <p className="no-underline font-bold text-black pr-2">
                    Tech:
                  </p>
                  <img
                    alt="html"
                    className="block rounded-full"
                    src={htmlIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="css"
                    className="block rounded-full"
                    src={cssIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="javascript"
                    className="block rounded-full"
                    src={javascriptIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="react"
                    className="block rounded-full"
                    src={reactIcon}
                    style={{ height: '2em' }}
                  />
                </div>
              </footer>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 pb-8">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="https://bloc-jams-on.netlify.com/">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={jamsImage}
                  style={{ height: '8em' }}
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a
                    className="no-underline hover:underline text-black"
                    href="https://github.com/darccide/bloc-jams"
                  >
                    Bloc Jams
                  </a>
                </h1>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <div className="flex items-center no-underline text-black">
                  <p className="no-underline font-bold text-black pr-2">
                    Tech:
                  </p>
                  <img
                    alt="html"
                    className="block rounded-full"
                    src={htmlIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="css"
                    className="block rounded-full"
                    src={cssIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="javascript"
                    className="block rounded-full"
                    src={javascriptIcon}
                    style={{ height: '2em' }}
                  />
                  <img
                    alt="react"
                    className="block rounded-full"
                    src={reactIcon}
                    style={{ height: '2em' }}
                  />
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PortfolioPage;
