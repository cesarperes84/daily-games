import type { NextPage } from "next";
import { useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import games from "../utility/games";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Home: NextPage = () => {
  const options = useMemo(
    () =>
      games?.map(({ title }) => ({
        label: title,
      })),
    [games]
  );

  return (
    <>
      <Head>
        <title>Daily Games</title>
        <meta
          name="description"
          content="All games diary chalenge games in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ flexGrow: 1, justify: 'center' }}>
        <h1 className={styles.title}>
          {" "}
          {"<"}&bull;Daily Games&bull;{">"}
        </h1>
        <div>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search..." />}
          />
        </div>
        
        </AppBar>
      </Box> */}
      <main className={styles.main}>
      <h1 className={styles.title}>
          {" "}
          {"<"}&bull;Daily Games&bull;{">"}
        </h1>
        <p className={styles.description}>
          All diary games chalenge in one place!
        </p>
        <div className={styles.grid}>
          {games.map(({ url, title, description, image, tags }) => (
              <a href={url} target="_blank" className={styles.card}>
              {image && <img src={image} width="240" height="140" />}
                <h2>{title}</h2>
                <p>{description}</p>
                {tags.length ? tags.map((item) => <span className={styles.tag}>{item}</span>) : null}
              </a>
          ))}
          </div>
          <div className={styles.container}>
          <div className={styles.about}>
          <h3>About Daily Games</h3>
<p>If you like to play games that offer new content or puzzle each day? Then you came to the right place and definitely daily games are for you in one place! Whether you enjoy daily crosswords, daily sudoku, or daily jigsaws. 
This type of games help you to improve memory and mood. So, let's go and play daily game today and tomorrow!</p>

<p>Fun facts about Daily Games:</p>
<p>Daily games are awesome because players enjoy playing each day's new puzzle and awesome content.
The are totally free daily games and are inspired in classic games.
Most of then get more challenging as the week goes on; for example, a Monday game is the easiest, and a Sunday game is the most challenging.</p>
          </div>

          </div>
      </main>
      <div className={styles.container}>
      <footer className={styles.footer}>
        
          <a href="http://www.cperes.com.br" target="_blank" rel="noopener noreferrer">
          COPYRIGHT © {new Date().getFullYear()}
          </a>
      </footer>
        </div>
    </>
  );
};

export default Home;
