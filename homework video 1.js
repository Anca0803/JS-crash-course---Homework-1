class Store {
    constructor(name, type){
        this.name = name
        this.type= type
        this.cities =[]
    }
    sayName(){
        console.log("Store name is", this.name)
    }
    sayType(){
        return this.type
    }
    attend (city){
        this.cities.push(city)
        city.attendees.push(this)
    } 

    
}


var store1 = new Store('carrefour', 'hypermarket')
var store2 = new Store('DM', 'drogerie-market')
var store3 = new Store("gesundShoe", 'shoes store')

var Type = class {
    constructor (city){
        this.city = city
       
    }
}


var City = class {
    constructor(name) {
        this.name = name
        this.attendees =[]
    }

}

var city1 = new City ("Berlin")
var city2 = new City ("Rostock")
var city3 = new City ('Hamburg')

store1.attend(city1)
store2.attend(city2)
store3.attend(city3)
store3.attend(city1)


console.log(store1)
console.log(store2)
console.log(store3)