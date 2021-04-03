import './assets/scss/style.scss';
import routes from "./routes/routes";
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className={'app__container'}>
        {
                Object.values(routes).map(route =>
                    <Route
                        exact
                        key={route.component}
                        path={route.url}
                        component={route.component}
                    />
                )
        }
      </div>
    </div>
  );
}

export default App;
