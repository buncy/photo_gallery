import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import ResponsiveAppBar from "../components/navBar";
import TitlebarBelowImageList from "../components/imageList";
import Testimonies from "../components/testimonies";

interface ResponseData {
  data: any;
}

const Home: NextPage<ResponseData> = ({ data }) => {
  return (
    <>
      <ResponsiveAppBar />

      <Container maxWidth="lg">
        <TitlebarBelowImageList data={data} />
        <Testimonies />
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>

          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default Home;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:1337/api/photos?populate=photo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const photos = await res.json();
  //console.log(photos.data[0].attributes.photo.data);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: photos,
    },
  };
}
