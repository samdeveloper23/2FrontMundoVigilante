const onwerUserService = async (token) => {
    const res = await fetch('http://eva00.3utilities.com/api/users/owner', {
        headers: {
            Authorization: token,
        },
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }

    return body.data.user;
};

export default onwerUserService;