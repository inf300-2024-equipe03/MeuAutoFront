import api from "../../services/api";

const UserResource  = {
    login: async (email, password) => {
        return await api.post('/auth/login', { email, password})
    } 

};

export default UserResource;