import React from 'react';
import ReactDOM from 'react-dom';
import ClientProfile from "./components/client-profile";

// history is for the router inside the microfrontend
window.mountClientProfile = (containerId, history) => {
    ReactDOM.render(
        <ClientProfile />,
        document.getElementById(containerId)
    )
};

window.unmountClientProfile = (containerId, history) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};