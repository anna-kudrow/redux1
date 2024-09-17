
import './App.css';
import { store } from "../../redux1/src/store/store";
import {Provider, useDispatch, useSelector} from 'react-redux';
import { toggleTheme} from "../../redux1/src/store/toggleReducer";

function App() {

  const dispatch = useDispatch();
const {theme} = useSelector((state) => state.theme);

  return (

        <Provider store={store}> 
            <div className={theme}>
                <h2>Changing theme</h2>
                <p>Desparatly trying to use Redux and crying</p>
                <button onClick={() => {dispatch(toggleTheme())}}>Change theme</button>
            </div>
        </Provider>
   
  )
}

export default App
