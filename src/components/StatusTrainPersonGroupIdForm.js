import React from 'react';
import {
    compose,
    withProps,
    withState,
} from 'recompose';

import { statusTrainPersonGroupId } from '../api/Train';

const StatusTrainPersonGroupId = ({
    personGroupId,
    status,
    createdDateTime,
    lastActionDateTime,
    message,
    trainPersonGroupId,
    checkTrainPersonGroupId,
    setPersonGroupId,
    setStatus,
    setCreatedDateTime,
    setMessage,
    setTrainPersonGroupId,
    setCheckTrainPersonGroupId,
    ...props
}) => {
    return (
        <div>
            <h1>Status Train Person Group Id</h1>
            <label>
                Person Group Id
                <input
                    value={personGroupId}
                    onChange={e => setPersonGroupId(e.target.value)}
                />
            </label>
            <br />
            <button onClick={() => {
                const params = {
                    personGroupId,
                    status,
                    createdDateTime,
                    lastActionDateTime,
                    message
                };

                statusTrainPersonGroupId(params)
                    .then((response) => response.json())
                    .then((body) => setCheckTrainPersonGroupId(body.status))
                    .catch(console.error);
            }}>Train Person Group Id</button>
            <br />
            {
                checkTrainPersonGroupId
                && <p>Status: {checkTrainPersonGroupId}</p>
            }
        </div>
    )
}

const enhance = compose(
    withState('personGroupId', 'setPersonGroupId', null),
    withState('status', 'setStatus', null),
    withState('createdDateTime', 'setCreatedDateTime', null),
    withState('lastActionDateTime', 'setLastActionDateTime', null),
    withState('message', 'setMessage', null),
    withState('trainPersonGroupId', 'setTrainPersonGroupId', null),
    withState('checkTrainPersonGroupId', 'setCheckTrainPersonGroupId', null),
    withProps((props) => ({
        ...props,
        statusTrainPersonGroupId,
    }))
);

export default enhance(StatusTrainPersonGroupId);