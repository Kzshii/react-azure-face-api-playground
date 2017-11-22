import React from 'react';
import {
    compose,
    withProps,
    withState,
} from 'recompose';

import { detectFace } from '../api/Detect';

const DetectFaceForm = ({
    url,
    returnFaceId,
    lastCreatedFaceId,
    setUrl,
    setReturnFaceId,
    setLastCreatedFaceId,
    ...props
}) => {
    return (
        <div>
            <h1>Detect Face</h1>
            <label>
                Photo Url
                <input
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                />
            </label>
            <br />
            <button onClick={() => {
                const params = {
                    url,
                    returnFaceId,
                };

                detectFace(params)
                    .then((response) => response.json())
                    .then((body) => setLastCreatedFaceId(body.faceId))
                    .catch(console.error);
            }}>Detect Face</button>
            <br />
            {
                lastCreatedFaceId
                    && <p>Last Created FaceId: {lastCreatedFaceId}</p>
            }
       </div>
    )  
}

const enhance = compose (
    withState('url', 'setUrl', null),
    withState('returnFaceId', 'setReturnFaceId', null),
    withState('lastCreatedFaceId', 'setLastCreatedFaceId', null),
    withProps((props) => ({ 
        ...props,
        detectFace,
    }))
);

export default enhance(DetectFaceForm);