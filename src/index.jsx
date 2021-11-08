console.log('Pintando App')
import React from "react";
import ReactDOM from 'react-dom';
import Iecho from './views/Iecho'
import { Provider } from "react-redux";
import { store ,persistor } from './store/config/configureStore';
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Iecho/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)