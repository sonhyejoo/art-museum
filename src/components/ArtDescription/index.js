import { useParams, useRoutMatch, Link } from "react-router-dom";

function ArtDescription({ gallery }) {
  const { galleryId, artId } = useParams();
  const object1 = gallery.objects.find((el) => el.id == parseInt(artId));
  console.log(object1);
  return (
    <div>
      <Link to={`/galleries/${galleryId}`}>Back to {gallery.name}</Link>
      <Link to={{ pathname: object1.url }} target="_blank">
        <h1>{object1.title}</h1>
      </Link>
      <ul>
        {object1.images.map((img) => {
          return (
            <li key={img.id}>
              <img src={img.baseimageurl}></img>
            </li>
          );
        })}
        <li>Description: {object1.labeltext}</li>
        <li>Technique: {object1.technique}</li>
        <li>Credit: {object1.creditline}</li>
      </ul>
    </div>
  );
}
export default ArtDescription;
