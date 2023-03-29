import { useParams } from "react-router-dom";

function GalleryView({ galleries: { records } }) {
  const { galleryId } = useParams();
  const gallery = records.find((el) => el.id === parseInt(galleryId));
  console.log(gallery);

  return (
    <div>
      <h1>Hello from GalleryView </h1>
      <h2>{gallery.name}</h2>
    </div>
  );
}

export default GalleryView;
