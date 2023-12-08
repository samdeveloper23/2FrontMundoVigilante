const sendRecoverPassService = async (email) => {
    const res = await fetch('http://eva00.3utilities.com/api/users/password/recover', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
        }),
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }
};

export default sendRecoverPassService;
