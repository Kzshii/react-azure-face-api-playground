import face from './Face';

const getPersonsUrlByGroupId = (personGroupId) => {
    return `/face/v1.0/persongroups/${personGroupId}`;
};

const statusTrainPersonGroupId = ({
    personGroupId,
    status,
    createdDateTime,
    lastActionDateTime,
    message
}) => {
    const url = `${getPersonsUrlByGroupId(personGroupId)}/training`;
    const body = JSON.stringify(status, createdDateTime, lastActionDateTime, message);
    return face.get(url, body)
};

const trainPersonGroupId = ({
    personGroupId
}) => {
    const url = `${getPersonsUrlByGroupId(personGroupId)}/train`;
    return face.post(url)
};

export {
    statusTrainPersonGroupId,
    trainPersonGroupId
}