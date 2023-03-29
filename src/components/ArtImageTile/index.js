import { Link, useRouteMatch } from "react-router-dom";

function ArtImageTile({ art }) {
  const artId = art.id;
  const firstImage = art.images[0];
  const imageUrl = firstImage.baseimageurl;
  const altText = firstImage.alttext;
  const {
    url,
    params: { galleryId },
  } = useRouteMatch();
  // console.log(galleryId);
  return (
    <Link to={`${url}/art/${artId}`}>
      <img src={imageUrl} alt={altText}></img>
    </Link>
  );
}

export default ArtImageTile;
