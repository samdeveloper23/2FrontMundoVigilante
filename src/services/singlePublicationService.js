const singlePublicationService = async (publicationId) => {
    const res = await fetch(
        `http://eva00.3utilities.com/api/publications/${publicationId}`
    );
    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }

    return body.data.publication;
};

export default singlePublicationService;
