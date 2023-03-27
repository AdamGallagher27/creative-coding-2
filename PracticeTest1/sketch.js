

// question one

// load csv data
// let luas

// function preload(){
//   luas = loadTable('./data/LUAS_Flow.csv', 'csv', 'header' )
// }



// function setup() {
  
//   // created array from csv data
//   let mapped = luas.rows.map(element => element.obj)
//   console.log(mapped)

//   // changing string to int
//   let toInt = mapped.map(element => ({...element,'VALUE': +(element.VALUE)}) )
//   console.log(toInt)

//   let filtered = toInt.filter(element => element['Statistic Label'] === 'Average Red Line Flow' && element['Days of Week'] === 'Sunday')
//   console.log(filtered)

//   let reduced1 = filtered.reduce((accumulator, current) => accumulator + current.VALUE , 0)
//   console.log(reduced1)

//   let avgReduced = filtered.reduce((accumulator, current) => accumulator + current.VALUE, 0) / filtered.length
//   console.log(avgReduced)


//   for(let i = 0; i < 5; i++) {
//     for(let j = i + 1; j < 5; j++) {
//       console.log(i, j)
//     }
//   }


// }




let luas

function preload(){
  luas = loadTable('./data/LUAS_Flow.csv', 'csv', 'header')
}



function setup() {
  console.log(luas)

  let mapped = luas.rows.map(element => element.obj)
  
  mapped = mapped.map(element => ({...element, VALUE: +(element.VALUE)}))
  console.log(mapped)

  let filtered = mapped.filter(element => element.VALUE > 60673)
  console.log(filtered)

  let total = filtered.reduce((acc, curr) => acc + curr.VALUE, 0)
  console.log(total)
  let avg = filtered.reduce((acc, curr) => acc + curr.VALUE, 0) / filtered.length
  console.log(avg)


  for(let i = 0; i < 5; i++) {
    for(let j = i + 1; j < 5; j++) {
      console.log(i, j)
    }
  }
}


function draw() {

}

