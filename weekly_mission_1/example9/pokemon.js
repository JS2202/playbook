class pokemon {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hola mi nombre es ${this.name}`);
    }
    sayMessage(message) {
        console.log(`${this.name} dice: ${message}`);
    }
}

module.exports = pokemon;
