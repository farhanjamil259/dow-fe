import type { NextPage } from "next";
import Head from "next/head";
import Container from "../layout/Container";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <div className="homepage">
          <section className="section-main">
            <h1>DOGES OF WAR</h1>
          </section>
        </div>
      </Container>
    </div>
  );
};
export default Home;
