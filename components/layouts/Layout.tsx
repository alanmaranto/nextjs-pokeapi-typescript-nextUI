import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";

interface Props {
  title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Alan Maranto"></meta>
        <meta name="description" content={`Info about pokemon ${title}`}></meta>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>
      </Head>
      <main>{children}</main>
    </>
  );
};
