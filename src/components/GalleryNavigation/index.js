import { NavLink, useRouteMatch } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation({ galleries: { records: records } }) {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/">Home</NavLink>
      <ul>
        {records.map((el) => {
          return (
            <li key={el.id}>
              <NavLink to={`galleries/${el.gallerynumber}`}>{el.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default GalleryNavigation;
