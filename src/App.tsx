import { Provider } from "react-redux";
import FeedCard from "./components/feedCard";
import Header from "./components/header";
import createReduxStore from "./store/createStore";
import FeedPage from "./views/FeedPage";

const store = createReduxStore();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <FeedCard />
        <FeedPage />
      </div>
    </Provider>
  );
}

export default App;
