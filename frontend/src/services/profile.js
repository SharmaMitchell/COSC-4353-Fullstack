import http from "../http-common";

class ProfileDataService {
    editProfile(data) {
        return http.put("/manage-profile", data);
    }

    createProfile(data) {
        return http.post("/register", data);
    }

    getProfileData(data) {
        return http.get("/get-profile", data);
    }
}

export default new ProfileDataService();