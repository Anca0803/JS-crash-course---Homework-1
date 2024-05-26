class Person  {
    constructor(name, age){
        this.name = name
        this.age = age
        this.meetups= []
    }

    sayName(){
        console.log("My name is", this.name)
    }
    sayAge() {
        return this.age   
    }
    attend (meetup) {
        this.meetups.push(meetup)
        meetup.attendees.push(this)
    }
        
}

var anca = new Person("Irimia", 40)
var anna = new Person (" Anna k", 20)

var Meetup = class {
    constructor(name) {
        this.name = name
        this.attendees = []
    }

}

var wtmb = new Meetup("Women TechMakers Berlin")

anca.attend(wtmb)
anna.attend(wtmb)

console.log(anna)
console.log(anca)
