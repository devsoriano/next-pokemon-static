import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

type Props = {
  children: JSX.Element;
  title: string;
};

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
