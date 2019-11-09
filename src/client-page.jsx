import './sass/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import ClientPage from "./components/client-page";

// history is for the router inside the microfrontend
window.mountClientPage = (containerId, history) => {
    ReactDOM.render(
        <ClientPage />,
        document.getElementById(containerId)
    )
};

window.unmountClientPage = (containerId, history) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};