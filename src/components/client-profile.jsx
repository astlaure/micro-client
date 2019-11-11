import React, { useEffect, useState } from 'react';

const ClientProfile = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        window.clientService.getClient()
            .then(response => setName(response.name));
    });
    return (
        <div className="client-profile">
            <h1>ClientProfile</h1>
            <p>Name: {name}</p>
        </div>
    )
};

export default ClientProfile;