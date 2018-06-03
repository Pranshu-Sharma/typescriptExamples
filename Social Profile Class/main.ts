class SocialProfile{

    name : string;
    email : string;
    friends : number;
    education : string;
    bday : string;
    age : number;
    phone : number;

    constructor(name : string,
        email : string,
        friends : number,
        education : string,
        bday : string,
        age : number,
        phone : number){
        this.name = name;
        this.friends = friends;
        this.education = education;
        this.bday = bday;
        this.age = age;
        this.phone = phone;
        this.email = email
    }

    getName = () =>{
        return this.name;
    }

    getEmail = () =>{
        return this.email;
    }

    getEducationDetails = () =>{
        return this.education;
    }

    getBdayDate = () =>{
        return this.bday;
    }

    getAge = () =>{
        return this.age;
    }

    getPhoneNumber = () =>{
        return this.phone;
    }

    getNumber0fFriends = () =>{
        return this.friends;
    }

    likedPosts = () =>{
        console.log("These posts have been liked");
    }

    interests = () =>{
        console.log("The things user is interested in!");
    }


}

let user = new SocialProfile("SomeUser","email@gmail.com",476,"ABC College of Engineering","27/05/1995",23,9999999999)

let _name = user.getName();
console.log(_name);

let email = user.getEmail();
console.log(email);

let friends = user.getNumber0fFriends();
console.log(friends);

let education = user.getEducationDetails();
console.log(education);

let bday = user.getBdayDate();
console.log(bday);

let age = user.getAge();
console.log(age);

let phone = user.getPhoneNumber();
console.log(phone);

let likedPosts = user.likedPosts();
likedPosts;

let interests = user.interests();
interests;