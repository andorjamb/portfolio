import React from 'react';
import { resources } from '/resourceList.json';

const Resources = () => {
    const resourceList = resources;
    return (
        <ul>
            {resourceList.map}
        </ul>
    );
};

export default Resources;