import { useParams, useRoutMatch, Link } from "react-router-dom";
function ArtDescription({ gallery }) {
  const { galleryId, artId } = useParams();
  console.log(Object.keys(gallery));
  return (
    <div>
      <Link to={`/galleries/${galleryId}`}>Back to Gallery</Link>
      <h1>Hello from description</h1>
    </div>
  );
}
export default ArtDescription;
