import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route, Switch, NavLink, Router } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt} />

      <Switch>
        <Route exact path="/">
          <h2>Harvard Art Museum</h2>
          <p>
            Look, but Don't Touch. Please select a Gallery in the navigation
            bar.
          </p>
        </Route>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt} />
        </Route>
        <Route path="/">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
