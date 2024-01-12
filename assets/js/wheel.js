const wheel = document.querySelector('.wheel')

wheel.addEventListener('click', (e) => {
	spinWheel()
})

function spinWheel(angle) {
  const randomAngle = angle === undefined ? 360 * 30 + Math.floor(Math.random() * 360) : angle;
  console.log(randomAngle)
  const duration = angle === undefined ? 5 : 1

  // Reset rotation
  rotation = 0;
  wheel.style.transition = 'none';
  wheel.style.transform = `rotate(${rotation}deg)`;

  // Trigger reflow to reset transition
  wheel.offsetHeight;

  // Apply smooth rotation
  wheel.style.transition = `transform ${duration}s cubic-bezier(0,1,1,.99)`;
  rotation = randomAngle // Spin 30 times plus a random amount
  wheel.style.transform = `rotate(${360-rotation}deg)`;

  setTimeout(() => checkEndSpin(randomAngle), duration * 1000 + 10)
}

function checkEndSpin(angle) {
	console.log(angle)
	countSlot(angle)
}

function countSlot(angle) {
	const angleN = (angle%360) -29

	console.log(angleN+29, angleN)
	let index = Math.floor((angleN+29) / 60)
	if (index < 0) index = 0
	console.log('ABCDEF'[index])
}
