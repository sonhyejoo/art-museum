import { NavLink, useRouteMatch } from "react-router-dom";

function GalleryNavigation({ galleries: { records: records } }) {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/">Home</NavLink>
      {records.map((el) => {
        return (
          <li key={el.id}>
            <NavLink to={`galleries/${el.gallerynumber}`}>{el.name}</NavLink>
          </li>
        );
      })}
    </nav>
  );
}

export default GalleryNavigation;
