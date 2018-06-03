var SocialProfile = /** @class */ (function () {
    function SocialProfile(name, email, friends, education, bday, age, phone) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getEducationDetails = function () {
            return _this.education;
        };
        this.getBdayDate = function () {
            return _this.bday;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getPhoneNumber = function () {
            return _this.phone;
        };
        this.getNumber0fFriends = function () {
            return _this.friends;
        };
        this.likedPosts = function () {
            console.log("These posts have been liked");
        };
        this.interests = function () {
            console.log("The things user is interested in!");
        };
        this.name = name;
        this.friends = friends;
        this.education = education;
        this.bday = bday;
        this.age = age;
        this.phone = phone;
        this.email = email;
    }
    return SocialProfile;
}());
var user = new SocialProfile("SomeUser", "email@gmail.com", 476, "ABC College of Engineering", "27/05/1995", 23, 9999999999);
var _name = user.getName();
console.log(_name);
var email = user.getEmail();
console.log(email);
var friends = user.getNumber0fFriends();
console.log(friends);
var education = user.getEducationDetails();
console.log(education);
var bday = user.getBdayDate();
console.log(bday);
var age = user.getAge();
console.log(age);
var phone = user.getPhoneNumber();
console.log(phone);
var likedPosts = user.likedPosts();
likedPosts;
var interests = user.interests();
interests;
