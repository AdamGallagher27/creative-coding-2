
let people = []


function setup(){
  // let test = new Person
  // console.log(test)

  for(let i = 0; i < 1000; i++) {
    people.push(new Person)
  }

  console.log(people)

  const map = people.map((element) => element.age )
  console.log(map)
}


function draw() {

}