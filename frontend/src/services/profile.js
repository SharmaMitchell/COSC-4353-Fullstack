import http from "../http-common";

class ProfileDataService {
  editProfile(data) {
    return http.put("/manage-profile", data);
  }

  createProfile(data) {
    return http.post("/register", data);
  }

<<<<<<< HEAD
  getProfileData(data) {
    return http.get("/get-profile", data);
  }
=======
    getProfileData(id) {
        return http.get(`/get-profile?id=${id}`);
    }
>>>>>>> e292d04 (navbar stuff)
}

export default new ProfileDataService();
