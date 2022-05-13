import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}

const origin = (typeof window === 'undefined' ? '' : window.location)

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Alan Maranto"></meta>
        <meta name="description" content={`Info about pokemon ${title}`}></meta>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>

        <meta
          property="og:title"
          content={`Pokemon data about ${title}`}
        />
        <meta
          property="og:description"
          content={`This page is about ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>
      <Navbar />
      <main style={{ padding: "opx 20px" }}>{children}</main>
    </>
  );
};

// https://ahrefs.com/blog/open-graph-meta-tags/