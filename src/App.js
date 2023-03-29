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
        </Route>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
