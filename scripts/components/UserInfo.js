export default class UserInfo {
    constructor({ profileName, profileJob }) {
        this.name = document.querySelector(profileName);
        this.info = document.querySelector(profileJob);
    }

    getUserInfo() {
        const userInfo = {};
        userInfo.name = this.name.textContent;
        userInfo.info = this.info.textContent;
        return userInfo;
    }

    setUserInfo(item) {
        this.name.textContent = item.name;
        this.info.textContent = item.Job;
    }
}