import styled from 'styled-components';

const AboutPageStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  padding: 40px 30px;
  @media (max-width: 900px) {
    width: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 1fr minmax(500px, 3fr);
    padding: 10px;
  }
  @media (max-width: 450px) {
    grid-template-rows: 1fr minmax(500px, 5fr);
  }
  .about-sidebar {
    width: 100%;
    align-self: start;
    @media (max-width: 900px) {
      align-self: center;
    }
    img {
      border-radius: 50%;
      width: 150px;
      margin-left: calc(50% - 75px);
    }
    .sidebar-links {
      a {
        font-size: 1.5rem;
        display: block;
        padding: 20px 0;
        width: 60%;
        margin-left: 20%;
        @media (max-width: 900px) {
          text-align: center;
        }
      }
    }
    h1 {
      @media (min-width: 900px) {
        display: none;
      }
    }
  }
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
    h1 {
      @media (max-width: 900px) {
        display: none;
      }
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
    text-transform: uppercase;
  }
`;

export default AboutPageStyles;
