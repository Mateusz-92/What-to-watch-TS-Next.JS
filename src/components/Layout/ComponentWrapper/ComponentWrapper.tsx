import Head from "next/head";
import React, { FC, ReactNode } from "react";

interface ComponentWrapperProps {
  children: ReactNode;
}

const ComponentWrapper: FC<ComponentWrapperProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Co by tu obejrzeć? - Kino Oldschool</title>
        <link rel="icon" type="image/png" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Zapraszamy do naszej kolekcji filmów oldschoolowych z lat 1910-2010. Znajdziesz tu klasyki kina, od melodramatów po filmy akcji, z wszystkich możliwych gatunków."
        />
        <meta
          name="keywords"
          content="filmy oldschoolowe, kino klasyczne, filmy z lat 1910-2010, gatunki filmowe, melodramat, komedia, dramat, akcja, noir, western, horror"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Co by tu obejrzeć? - Kino Oldschool"
        />
        <meta
          property="og:description"
          content="Zapraszamy do naszej kolekcji filmów oldschoolowych z lat 1910-2010. Znajdziesz tu klasyki kina, od melodramatów po filmy akcji, z wszystkich możliwych gatunków."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cobytuobejrzec.pl/" />

        {/* Inne meta tagi SEO */}
      </Head>
      <div className="appWrapper">{children}</div>;
    </>
  );
};

export default ComponentWrapper;
