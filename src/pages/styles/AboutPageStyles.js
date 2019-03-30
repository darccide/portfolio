import styled from 'styled-components';

const AboutPageStyles = styled.div`
  .about-main {
    width: 100%;
    padding-bottom: 50px;
    h1,
    h2,
    h3 {
      text-align: center;
      padding-bottom: 2rem;
    }
    h1,
    h2,
    h3,
    li {
      text-align: center;
    }
    p {
      font-size: 1.3rem;
      line-height: 2rem;
      letter-spacing: 0.05rem;
      @media (max-width: 900px) {
        width: 95%;
        margin-left: 2.5%;
      }
    }
    h2 {
      font-size: 1.9rem;
    }
    h3 {
      font-size: 1.7rem;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    .familiar-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr 1fr;
      grid-gap: 20px;
      justify-items: center;
      align-items: center;
      text-align: center;
      @media (max-width: 450px) {
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, 1fr);
        padding: 10px;
      }
      i {
        font-size: 4rem;
      }
      p {
        font-size: 1.4rem;
        padding: 5px;
      }
    }
    ul.secondary-skills {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-gap: 20px;
      justify-items: center;
      align-items: center;
      text-align: center;
      @media (max-width: 450px) {
        width: 100%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(6, 1fr);
        padding: 10px;
      }
      li {
        font-size: 1.4rem;
      }
    }
    .skills-to-learn {
      p {
        text-align: justify;
        padding: 3px;
      }
    }
  }
  h1 {
    text-align: center;
    font-size: 2rem;
  }
`;

export default AboutPageStyles;
