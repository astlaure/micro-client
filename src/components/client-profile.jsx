import React, { useEffect, useState } from 'react';

const ClientProfile = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        window.clientService.getClient()
            .then(response => setName(response.name));
    });

    const handleClick = () => {
        window.eventEmitter.emit('ProfileSubmit');
    };

    return (
        <div className="client-profile">
            <h1>ClientProfile</h1>
            <p>Name: {name}</p>
            <button type="button" onClick={handleClick}>Click me</button>
        </div>
    )
};

export default ClientProfile;