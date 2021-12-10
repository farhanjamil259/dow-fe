import { NextPage } from "next";
import Head from "next/head";
import Container from "../../layout/Container";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Container>
        <h1>About</h1>
      </Container>
    </div>
  );
};

export default About;
