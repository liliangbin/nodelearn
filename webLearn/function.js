function Hello() {
    var name = "lilaingbin";
    this.setName = function(thyName) {
        name = thyName;
    };


    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;
