import face from './Face';

const identifyFace = ({
    faceIds,
    personGroupId,
    confidenceThreshold,
}) => {
    const requestUrl = 'face/v1.0/identify';
    const body = JSON.stringify({ faceIds, personGroupId, confidenceThreshold});

    return face.post(requestUrl, body);   
}

export {
    identifyFace,
}
