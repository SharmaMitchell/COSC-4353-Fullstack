import http from "../http-common";

class ProfileDataService {
    editProfile(data) {
        return http.put("/manage-profile", data);
    }
}

export default new ProfileDataService();