import React from 'react';
import {
    compose,
    withProps,
    withState,
} from 'recompose';

import { identifyFace } from '../api/Identify';

const IdentifyFaceForm = ({
    faceId,
    identifyAttributes,
    candidates,
    confidenceThreshold,
    personGroupId,
    setFaceId,
    setCandidates,
    setConfidenceThreshold,
    setPersonGroupId,
    setIdentifyAttributes,
    ...props
}) => {
    return (
        <div>
            <h1>Identify Face</h1>
            <label>
                Person Group Id
                <input
                    value={personGroupId}
                    onChange={e => setPersonGroupId(e.target.value)}
                />
            </label>
            <br />
            <label>
                Face Id
                <input
                    value={faceId}
                    onChange={e => setFaceId(e.target.value)}
                />
            </label>
            <br />
            <button onClick={() => {
                const params = {
                    faceId,
                    candidates,
                    personGroupId,
                    confidenceThreshold,
                };

                identifyFace(params)
                    .then((response) => response.json())
                    .then((body) => setIdentifyAttributes(body.personGroupId))
                    .catch(console.error);
            }}>Identify Face</button>
            <br />
            {
                identifyAttributes
                    && <p>Last Created PersistedFaceId: {identifyAttributes}</p>
            }
       </div>
    )  
}

const enhance = compose (
    withState('candidates', 'setCandidates', null),
    withState('confidenceThreshold', 'setConfidenceThreshold', null),
    withState('faceId', 'setFaceId', null),
    withState('personGroupId', 'setPersonGroupId', null),
    withState('identifyAttributes', 'setIdentifyAttributes', null),
    withProps((props) => ({ 
        ...props,
        identifyFace,
    }))
);

export default enhance(IdentifyFaceForm);