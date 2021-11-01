/*const btns = document.querySelectorAll('button');
console.log(btns);*/

/// скрипти и время их виполнения
const btn = document.querySelector('.btn');
let timerId,
i=0;

btn.addEventListener('click', () => {
	//const timerId = setTimeout(logger, 2000);
	timerId = setInterval(logger, 500);
	});

/*const timerId = setTimeout(function(text) {
	console.log('text');
}, 2000);*/

//const timerId = setTimeout(logger, 2000);

function logger () {
	if (i ===3) {
		clearInterval(timerId);
	}
	console.log('text');
	i++;
}

let id = setTimeout(function log() {
	console.log('Hello');
	id = setTimeout(log, 500);
},500);

// Работа с датами

//const now = new Date('2021-11-01');
//console.log(now);

const now = new Date();
//console.log(now.getFullYear());
//console.log(now.getMonth());
//console.log(now.getDate());
//console.log(now.getHours());
//console.log(now.getUTCHours());

//console.log(now.getTimezoneOffset());
//console.log(now.getTime());

// set
//console.log(now.setHours(18));
//console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i ** 3;
}
let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
