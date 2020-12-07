import fetch from 'isomorphic-unfetch';

export const getLunchProgram = async (url) => {
    try {
        const response = await fetch(url).then(r => r.json());
        return response;

    } catch (e) {
        // Error log to some system
        return {};
    }
}

