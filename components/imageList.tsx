import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import itemData from "../data.js";
import { Stack } from "@mui/material";
import styles from "./css/imagelist.module.css";

export default function TitlebarBelowImageList({ data }) {
  const [photos, setPhotos] = React.useState(data.data);
  console.log(data.data[0]);
  return (
    <ImageList
      className={styles.my_image_list}
      sx={{ width: "100%", height: "60%" }}
    >
      {photos.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${
              "https://nani-image-gallery.herokuapp.com" +
              item.attributes.photo.data?.attributes.formats.large.url
            }?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.event}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.attributes.event}
            subtitle={
              <Stack>
                <span>Location: {item.attributes.location}</span>
                <span>Social: {item.attributes.social}</span>
              </Stack>
            }
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
