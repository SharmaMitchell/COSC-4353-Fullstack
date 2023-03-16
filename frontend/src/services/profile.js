import http from "../http-common";

class ProfileDataService {
    editProfile(data) {
        return http.put("/manage-profile", data);
    }

    createProfile(data) {
        return http.post("/register", data);
    }
}

export default new ProfileDataService();