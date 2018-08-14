////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Metodos de las Promesas ///////////////////////////

         /*	Metodo "All" Retorna una array con los valores de las promesas
         	cumplidas en el mismo orden en que se difinieron en el 
         	iterador(array). Siempre y cuando toda las promesas sea existosa
         	si no se cumple esa condicion y existe un falla en las promesa 
         	solo retorna el error */

// Example 1

let PromiseOne = new Promise((resolve,reject) =>{
		resolve('Success One:')
})

let PromiseTwo = new Promise((resolve,reject) =>{
		resolve('Success Two:')
})

let PromiseThree = new Promise((resolve,reject) =>{
		resolve('Success Three:')
})

let PromiseFour = new Promise((resolve,reject) =>{
		resolve('Success Four:')
})

let PromiseFive = new Promise((resolve,reject) =>{
		resolve('Success Five:')
})


Promise.all(
	[
		PromiseOne,
		PromiseTwo,
		PromiseThree,
		PromiseFour,
		PromiseFive,
	]
)
.then((values) => console.log(values))
.catch((error) => console.log('Error',error))

/////////////////////////////////////////////////////////////////////////////////
// Example 2

let PromiseOne = new Promise((resolve,reject) =>{
		resolve('Success Promise One:')
})

let PromiseTwo = new Promise((resolve,reject) =>{
		resolve('Success Promise Two:')
})

let PromiseThree = new Promise((resolve,reject) =>{
		resolve('Success Promise Three:')
})

let PromiseFour = new Promise((resolve,reject) =>{
		resolve('Success Promise Four:')
})

let PromiseFive = new Promise((resolve,reject) =>{
		reject('Fails! Promise Five:')
})


Promise.all(
	[
		PromiseOne,
		PromiseTwo,
		PromiseThree,
		PromiseFour,
		PromiseFive,
	]
)
.then((values) => console.log(values))
.catch((error) => console.log('Error: ',error))

/////////////////////////////////////////////////////////////////////////////////

      /* Metodo "Race" retorna la primera promesa mas rapida en ejecutarce
      	 con los valores que contenga ella, ya sea una falla o una
      	 promesa exitosa */
      	 
////////////////////////////////////////////////////////////////////////////////
// Example 3

let PromiseOne = new Promise((resolve,reject) => {
		setTimeout(() =>{
			resolve('Success Promise One:')
		},3000
	)
		
});

let PromiseTwo = new Promise((resolve,reject) =>{
		setTimeout(() => {
			resolve('Success Promise Two:')
		},2000
	)
});

let PromiseThree = new Promise((resolve,reject) =>{
		setTimeout(() => {
			resolve('Success Promise Three:')
		},2500
	)
});

Promise.race(
	[
		PromiseOne,
		PromiseTwo,
		PromiseThree,
	]
)
.then((values) => console.log(values))
.catch((error) => console.log('Error: ',error))
/////////////////////////////////////////////////////////////////////////////////