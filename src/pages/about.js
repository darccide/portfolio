import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutPageStyles from './styles/AboutPageStyles';
import { skills } from '../../static/data';

import htmlIcon from '../images/html5-plain.svg';
import cssIcon from '../images/css3-original.svg';
import bootstrapIcon from '../images/bootstrap-plain.svg';
import javascriptIcon from '../images/javascript-plain.svg';
import jqueryIcon from '../images/jquery-plain.svg';
import reactIcon from '../images/react-original.svg';
import nodejsIcon from '../images/nodejs-plain.svg';
import expressIcon from '../images/express-original.svg';
import postgresqlIcon from '../images/postgresql-plain.svg';
import mongodbIcon from '../images/mongodb-plain.svg';
import graphqlIcon from '../images/graphql.svg';
import jasmineIcon from '../images/jasmine-plain.svg';
import sequelizeIcon from '../images/sequelize-plain.svg';
import reduxIcon from '../images/redux-original.svg';
import herokuIcon from '../images/heroku-plain.svg';
import githubIcon from '../images/github-original.svg';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <AboutPageStyles>
        <div className="about-sidebar">
          <h1>Steven Thomson</h1>
          <img
            src="https://res.cloudinary.com/ddhlidgdf/image/upload/v1552349798/1546359638757.jpg"
            alt="Steven Thomson Profile"
          />
        </div>
        <div className="about-main">
          <h1>Steven Thomson</h1>
          <h2>About Me</h2>
          <p>
            I am a full stack web developer who enjoys creating clean, useful
            code. I have been in the education industry in South Korea for the
            last five years and have decided to make a career change. My
            education at Bloc has developed my passion for and knowledge of
            Javascript on both the front end and the back end, but I am very
            eager to learn new technologies and expand my fields of expertise. I
            love and thoroughly enjoy code and development.
          </p>
          <br />
          <p>
            My journey with coding started when I was in ninth grade when I took
            a course that introduced me to Visual Basic. I enjoyed the class,
            but was more focused on electronic engineering at the time. I later
            encountered the C language as an undergraduate. I again enjoyed
            programming, but was more concerned with finishing my degree I was
            pursuing. While teaching in South Korea, I was looking for a career
            and a life path that was more fulfilling. I liked my life, but
            teaching student who mostly didn't want to learn English wasn't what
            got me up in the morning. I started teaching myself about
            javascript, HTML, and CSS. I was immediately interested and
            enthralled. I have since followed that love and enthusiasm to
            finishing the Bloc web development track.
          </p>
          <br />
          <p>
            I had a moment when finishing a coding challenge that summarizes my
            feelings for programming best. I was creating a program for said
            coding challenge and I had a critical design flaw I had caught with
            a day before the challenge was due. I spent the next twenty hours
            fixing the problem and deploying the site. I finished in time and I
            actually enjoyed the process. I went to teach students for the next
            four hours after a short nap and that actually felt way more
            agonizing. This experience has reaffirmed my decision to go down
            this path.
          </p>
          <br />
          <p>
            I love learning and growing as a developer. I also am recently
            married and when I am not knee deep in code I enjoy spending time
            with my wife, coffee, cooking, and sports. Current I am in the
            process of relocating to Minneapolis (March, 2019). I am open to
            work the United States, or remote positions right now. Time zones
            are no restriction. Get in touch and let's work together!
          </p>
          <div className="skills-box">
            <h2 className="pt-12">Skills</h2>
            <div className="primary-skill-list">
              <h3>Very Familiar With:</h3>
              <ul className="familiar-list">
                <li>
                  <img src={htmlIcon} alt="html" style={{ height: '55px' }} />
                  <p>HTML</p>
                </li>
                <li>
                  <img src={cssIcon} alt="css" style={{ height: '55px' }} />
                  <p>CSS</p>
                </li>
                <li>
                  <img
                    src={bootstrapIcon}
                    alt="graphql"
                    style={{ height: '55px' }}
                  />
                  <p>Bootstrap</p>
                </li>
                <li>
                  <img
                    src={javascriptIcon}
                    alt="graphql"
                    style={{ height: '55px' }}
                  />
                  <p>Javascript</p>
                </li>
                <li>
                  <img
                    src={jqueryIcon}
                    alt="jquery"
                    style={{ height: '55px' }}
                  />
                  <p>JQuery</p>
                </li>
                <li>
                  <img src={reactIcon} alt="react" style={{ height: '55px' }} />
                  <p>React</p>
                </li>
                <li>
                  <img
                    src={nodejsIcon}
                    alt="nodejs"
                    style={{ height: '55px' }}
                  />
                  <p>NodeJS</p>
                </li>
                <li>
                  <img
                    src={expressIcon}
                    alt="graphql"
                    style={{ height: '55px' }}
                  />
                  <p>Express</p>
                </li>
                <li>
                  <img
                    src={postgresqlIcon}
                    alt="postgresql"
                    style={{ height: '55px' }}
                  />
                  <p>PostgreSQL</p>
                </li>
                <li>
                  <img
                    src={mongodbIcon}
                    alt="mongodb"
                    style={{ height: '55px' }}
                  />
                  <p>MongoDB</p>
                </li>
                <li>
                  <img
                    src={graphqlIcon}
                    alt="graphql"
                    style={{ height: '55px' }}
                  />
                  <p>GraphQL</p>
                </li>
                <li>
                  <img
                    src={jasmineIcon}
                    alt="jasmine"
                    style={{ height: '55px' }}
                  />
                  <p>Jasmine</p>
                </li>
                <li>
                  <img
                    src={sequelizeIcon}
                    alt="sequelize"
                    style={{ height: '55px' }}
                  />
                  <p>Sequelize</p>
                </li>
                <li>
                  <img src={reduxIcon} alt="redux" style={{ height: '55px' }} />
                  <p>Redux</p>
                </li>
                <li>
                  <img
                    src={herokuIcon}
                    alt="heroku"
                    style={{ height: '55px' }}
                  />
                  <p>Heroku</p>
                </li>
                <li>
                  <img
                    src={githubIcon}
                    alt="github"
                    style={{ height: '55px' }}
                  />
                  <p>Github</p>
                </li>
              </ul>
            </div>
            <div className="skills-comfortable">
              <h3 className="pt-12">Comfortable With:</h3>
              <ul className="secondary-skills">
                {skills.map(skill => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
            <h3>Skills On the Horizon:</h3>
            <div className="skills-to-learn">
              <p>
                I am looking to become much more proficient in Java, however I
                welcome any challenge you would like to put my way.
              </p>
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </Layout>
  );
}

export default AboutPage;
