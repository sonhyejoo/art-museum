import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route, Switch, NavLink, Router } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <Switch>
        <Route exact path="/">
          <GalleryNavigation galleries={harvardArt} />
        </Route>
        <Route path="/galleries/:galleryId">
          <GalleryView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
