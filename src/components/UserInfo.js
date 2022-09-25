export default class UserInfo {
    constructor({ profileName, profileJob }) {
        this.name = document.querySelector(profileName);
        this.job = document.querySelector(profileJob);
    }

    getUserInfo() {
        return {
            name: this.name.textContent,
            job: this.job.textContent
        }
    }

    setUserInfo(item) {
        this.name.textContent = item.name;
        
        this.job.textContent = item.job;
    }
}