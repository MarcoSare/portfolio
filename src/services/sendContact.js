const sendContact = {
    send({ body }) {
        const apiHost = import.meta.env.VITE_API_URL;
        const response = fetch(`${apiHost}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then((response) => response.json())
            .then((json) => { return json })
            .catch((error) => { return error })
        return response;
    },
}

export default sendContact;