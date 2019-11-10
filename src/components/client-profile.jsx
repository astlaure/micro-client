import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientProfile = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        axios.get('/clientapi/api/client')
            .then(response => setName(response.data.name));
    });
    return (
        <div className="client-profile">
            <h1>ClientProfile</h1>
            <p>Name: {name}</p>
        </div>
    )
};

export default ClientProfile;