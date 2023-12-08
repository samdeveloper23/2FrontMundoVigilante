const commentCreateService = async (text, id, token) => {
    const formData = new FormData();

    formData.append('text', text);

    const res = await fetch(
        `http://eva00.3utilities.com/api/publications/${id}/comments`,
        {
            method: 'post',
            headers: {
                Authorization: token,
            },
            body: formData,
        }
    );

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }
};

export default commentCreateService;
