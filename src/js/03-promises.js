import Notiflix from 'notiflix';

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const promiseForm = document.querySelector('.form');
const promiseBtn = document.querySelector('button');

promiseForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
	promiseBtn.setAttribute('disabled', true);

	let delay = Number(delayInput.value);
	let step = Number(stepInput.value);
	let amount = Number(amountInput.value);

	for (let position = 1; position <= amount; position += 1) {
		createPromise(position, delay)
			.then(({ position, delay }) => {
				Notiflix.Notify.success(
					`✅ Fulfilled promise ${position} in ${delay}ms`
				);
			})
			.catch(({ position, delay }) => {
				Notiflix.Notify.failure(
					`❌ Rejected promise ${position} in ${delay}ms`
				);
			});

		delay += step;
	}
	promiseForm.reset();
	setTimeout(() => {
		promiseBtn.removeAttribute('disabled');
	}, 1000);
}

function createPromise(position, delay) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			const shouldResolve = Math.random() > 0.3;
			if (shouldResolve) {
				res({ position, delay });
			} else {
				rej({ position, delay });
			}
		}, delay);
	});
}