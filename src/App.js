import Routes from "./Routes/routes";
import store from "./Redux/store";
import {Provider} from 'react-redux';

function App() {

    return (
        <>
            <Provider store={store}>
                <Routes/>
            </Provider>
        </>
    );
}

export default App;
