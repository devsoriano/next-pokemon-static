import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

type Props = {
  children: JSX.Element;
  title: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="autor" content="Rafael Soriano" />
        <meta
          name="description"
          content={`Información sobre pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokémon, pokedex`} />

        <meta
          property="og:title"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
