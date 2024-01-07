let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0, minute = 0, second = 0, count = 0;
let timer = false;

startBtn.addEventListener('click', () => {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', () => {
	timer = false;
});

resetBtn.addEventListener('click', () => {
	timer = false;
	hour = minute = second = count = 0;
	updateDisplay();
});

function stopWatch() {
	if (timer) {
		count++;

		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = second = 0;
		}

		updateDisplay();
		setTimeout(stopWatch, 10);
	}
}

function updateDisplay() {
	const format = (val) => (val < 10 ? `0${val}` : val);
	const hrString = format(hour);
	const minString = format(minute);
	const secString = format(second);
	const countString = format(count);

	document.getElementById('hr').innerHTML = hrString;
	document.getElementById('min').innerHTML = minString;
	document.getElementById('sec').innerHTML = secString;
	document.getElementById('count').innerHTML = countString;
}
