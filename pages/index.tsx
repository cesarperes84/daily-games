import type { NextPage } from "next";
import { useMemo } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import games from "../utility/games";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { uniq } from 'lodash';

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const options = useMemo(
    () =>
      games?.map(({ title }) => ({
        label: title,
      })),
    [games]
  );

  const filteredGames = useMemo(
    () => (search ? games.filter((game) => search === game.title) : games),
    [search, games, options]
  );

  const uniqueTags = uniq(games.flatMap(({ tags }) => tags));

  return (
    <>
      <Head>
        <title>Daily Games</title>
        <meta
          name="description"
          content="All games diary chalenge games in one place"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {"<"}&bull;Daily Games&bull;{">"}
        </h1>
        <p style={{ fontSize: 10, display: 'flex', fontFamily: 'Silkscreen', justifyContent: 'center', marginTop: '0px', textTransform: 'uppercase' }}>
          All diary games chalenge in one place!
        </p>
        <div className={styles.container} style={{ display: 'flex', justifyContent: 'center' }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 340, marginTop: "10px", marginRight: `10px` }}
            onChange={(event: any, newValue: any) => setSearch(newValue?.label)}
            renderInput={(params) => (
              <TextField {...params} label="Search..." />
            )}
          />
        </div>
        <div className={styles.grid}>
          {filteredGames.map(
            ({ url, title, description, image, tags, stars }) => (
              <a href={url} target="_blank" className={styles.card}>
                <div
                  style={{
                    textAlign: "right",
                    width: "240px",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {stars > 0 &&
                    new Array(stars)
                      .fill(null)
                      .map(() => (
                        <img
                          src="https://res.cloudinary.com/dqaojtmfr/image/upload/v1711043294/thumbs-games/star.svg"
                          width="16"
                          style={{ marginLeft: "4px", marginRight: "5px" }}
                        />
                      ))}
                </div>
                <div style={{ minHeight: "270px" }}>
                  {image && <img src={image} width="240" height="140" />}
                  <h2>{title}</h2>
                  <p style={{ fontSize: "16px" }}>{description}</p>
                </div>
                <div>
                  {tags.length
                    ? tags.map((item) => (
                        <span className={styles.tag}>{item}</span>
                      ))
                    : null}
                </div>
              </a>
            )
          )}
        </div>

        <div className={styles.container}>
          <div className={styles.about}>
            <h3>About Daily Games</h3>
            <p>
              {" "}
              You like to play games that offer new content or puzzle each day?
              Then you came to the right place and definitely daily games are
              for you in one place! Whether you enjoy daily crosswords, daily
              sudoku, or daily jigsaws. This type of games help you to improve
              memory and mood. So, let's go and play daily game today and
              tomorrow!
            </p>

            <h3>Fun facts about Daily Games</h3>
            <p>
              Daily games are awesome because players enjoy playing each day's
              new puzzle and awesome content. The are totally free daily games
              and are inspired in classic games. Most of then get more
              challenging as the week goes on; for example, a Monday game is the
              easiest, and a Sunday game is the most challenging.
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.tags}>
            <h3>Tags</h3>
            {uniqueTags.map((tag) => <span className={styles.tag}>{tag}</span>)}
          </div>
        </div>
      </main>
      <div className={styles.container}>
        <footer className={styles.footer}>
          <a
            href="https://www.cperes.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            COPYRIGHT © {new Date().getFullYear()}
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
