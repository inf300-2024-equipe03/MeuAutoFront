import api from "../../services/api";

const UserResource  = {
    login: async (email, password) => {
        return await api.post('/auth/login', { email, password })
    },
    register: async(email, password, name) => {
        return await api.post('/auth/register', { email, password, name })
    }

};

export default UserResource;