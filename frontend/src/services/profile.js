import http from "../http-common";

class ProfileDataService {
    editProfile(data) {
        return http.put("/manage-profile", data);
    }

    createProfile(data) {
        return http.post("/register", data);
    }
<<<<<<< Updated upstream
=======

    getProfileData(data) {
        return http.get("/get-profile", data);
    }
>>>>>>> Stashed changes
}

export default new ProfileDataService();