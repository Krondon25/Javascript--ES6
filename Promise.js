/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Promise ////////////////////////////////////////////

	/*  Representa eventos asincronos que dura un tiempo determinado y tiene la 
		capacidad de informar sobre posibles casos de éxito y de fracaso" 

		Esta promesas reciben una funcion el cual tiene 2 parametros resolve y reject

		resolve: Es cuando es evaluada exitosamente
		reject: Es cuando se ha detectado un error  

		Para manejar los eventos exiten dos metodos "then" y "catch"
		ambos reciben una funcion con un parametro que el evento esperado

		then: Se utiliza para manejar los eventos Exitos
		catch: Se utiliza para manejar los posibles Errores

		Nota: El metodo "then" puede recibir un segundo parametro en el cual usted puede 
		manejar el error sin necesidad de utilizar el metodo "catch"
		*/



/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////// Creando una promesa ///////////////////////////////////
// Ejemplo 1

let Promise1 = new Promise((resolve,reject)=>{
	resolve('first')
});
Promise1
.then(responsePromise => {
		console.log('success',responsePromise)
	},
	error =>
		console.log("Error 1",error)
)

/////////////////////////////////////////////////////////////////////////////////////
// Ejemplo 2

let Promise2 = new Promise((resolve,reject)=>{
	reject('first')
});

Promise2
.then(responsePromise => {
		console.log('Success:',responsePromise);
	}
)
.catch(error =>
		console.log("Error: ",error)
)

/////////////////////////////////////////////////////////////////////////////////////
////////////////////// /////// Promesas encadenadas /////////////////////////////////
// Ejemplo 3

let Promise3 = new Promise((resolve,reject)=>{
	resolve('first')
});

let Promesa4 = new Promise((resolve,reject)=>{
	reject('second')
});

Promise3
.then((response)=>{
		console.log('Success: ',response);
		return Promesa4
	}
)
.then((promesaRetornada)=>{
		console.log('Success: ',promesaRetornada)	
	},
)
.catch(error =>
	console.log('Error: ', error)
)


//throw: Cumple una funcion muy parecida al return solo esta encadenara un error