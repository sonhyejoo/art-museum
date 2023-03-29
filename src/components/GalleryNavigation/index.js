import { NavLink, useRouteMatch } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation({ galleries: { records: records } }) {
  const { url } = useRouteMatch();
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/">Home</NavLink>
      <ul>
        {records.map((el) => {
          return (
            <li key={el.id}>
              <NavLink to={`galleries/${el.gallerynumber}`}>
                {el.name}: {el.theme}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default GalleryNavigation;
