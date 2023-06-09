import { Route, useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";

function GalleryView({ galleries: { records } }) {
  const { galleryId } = useParams();
  const gallery = records.find((el) => el.id === parseInt(galleryId));
  // console.log(gallery);

  return (
    <div>
      <h1>Hello from GalleryView </h1>
      <h2>{gallery.name}</h2>
      <Route path={`/galleries/:galleryId/art/:artId`}>
        <ArtDescription gallery={gallery} />
      </Route>

      <Route exact path={`/galleries/${galleryId}`}>
        <ul>
          {gallery.objects.map((el) => {
            return (
              <li key={el.id}>
                <ArtImageTile art={el} />
              </li>
            );
          })}
        </ul>
      </Route>
    </div>
  );
}

export default GalleryView;
