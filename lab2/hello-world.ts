class BaseWorld {
    constructor() {}
}
class World extends BaseWorld {
    firstname: String;
    lastname: String;

    greeter = function () {
        console.log("hello world!");
    };
}

let w = new World();
w.greeter();