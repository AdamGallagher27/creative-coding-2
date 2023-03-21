
class Person {
    constructor() {
        // firstName
        // lastName
        // age
        // weight
        // height
        // gender

        this.gender = this.getGender()
        this.firstName = this.getFirstName(this.gender)
        this.lastName = this.getLastName()
        this.age = Math.round(random(18, 70))
        this.weight = Math.round(random(60, 200))
        this.height = Math.round(random(120, 200))

        this.x = Math.round(random(0, 500))
        this.y = Math.round(random(0, 500))

    }


    // create random first name
    getFirstName(gender) {

        const maleFirstNames = ["paul", "george", "john", "steve", "brian", "tom"]
        const femaleFirstNames = ["niamh", "lauren", "sinead", "kate", "eleanor", "eve" ]

        if(gender === "male") {
            return maleFirstNames[Math.floor(Math.random()*maleFirstNames.length)]
        }
        else if(gender === "female") {
            return femaleFirstNames[Math.floor(Math.random()*femaleFirstNames.length)]
        }

    }

    // get last name
    getLastName() {
        const lastNames = ["gallagher", "sharpe", "oniel", "bradford", "obrian", "devalera", "devlin"]
        return lastNames[Math.floor(Math.random()*lastNames.length)]
    }


    // get gender for person
    getGender() {

        const genders = ["male", "female"]
        return genders[Math.floor(Math.random()*genders.length)]
    }


}