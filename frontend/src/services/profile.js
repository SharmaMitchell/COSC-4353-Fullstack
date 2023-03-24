import http from "../http-common";

class ProfileDataService {
    editProfile(data) {
        return http.put("/manage-profile", data);
    }

    createProfile(data) {
        return http.post("/register", data);
    }

    getProfileData(id) {
        return http.get(`/get-profile?id=${id}`);
    }

    loginProfile(data) {
        return http.post("/login",data);
    }

}

export default new ProfileDataService();
