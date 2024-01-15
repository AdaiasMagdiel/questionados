const wheel = document.querySelector('.wheel')

class Wheel {
  constructor(categories, callback) {
    this.categories = categories
    this.numSlots = this.categories.length
    this.isSpining = false
    this.callback = callback
  }

  static getContainer() {
    return document.querySelector('.wheel__box')
  }

  verifyEndSlot(angle) {
    const normalizedAngle = (angle % 360);
    const slotSize = 360 / this.numSlots;
    const startOffset = 360 - (slotSize / 2);
    let index = -1;

    for (let i = 0; i < this.numSlots; i++) {
        const startAngle = (i * slotSize + startOffset) % 360;
        const endAngle = ((i + 1) * slotSize + startOffset) % 360;

        if (normalizedAngle >= startAngle && normalizedAngle < endAngle) {
            index = i;
            break;
        }
    }

    if (index === -1) index = 0
    this.isSpining = false

    console.log(this.categories[index].name);
    this.callback(index)
  }

  getRandomDeg(){
    return Math.floor(Math.random() * 360)
  }

  spinWheel(e, angle) {
    if (this.isSpining) return

    const target = e !== undefined
      ? e.currentTarget
      : document.querySelector('.slots__box')

    this.isSpining = true
    const randomAngle = angle === undefined
      ? (360 * 30 + this.getRandomDeg() + this.getRandomDeg() + this.getRandomDeg())
      : angle;
    const duration = angle === undefined ? 5 : 1

    target.style.transition = 'none';
    target.style.transform = 'rotate(0deg)';

    target.offsetHeight;

    target.style.transition = `transform ${duration}s cubic-bezier(0,1,1,.99)`;
    target.style.transform = `rotate(${360-randomAngle}deg)`;

    setTimeout(() => this.verifyEndSlot(randomAngle), duration * 1000 + 10)
  }

  draw(container) {
    const slots = this.categories.map((category, idx) => {
      const text = Elements.p(category.name)
      if (category.name === '👑') text.classList.add('text-4xl')
      else {
        text.innerHTML = category.name.split('').join('<br>')
        text.style.lineHeight = '1rem'
      }
      const slot = Elements.div(text)

      slot.classList.add('slot', category.color)
      slot.style.rotate = `${360 / this.numSlots * idx}deg`

      return slot
    })
    const slotsBox = Elements.div(slots)
    slotsBox.classList.add('slots__box', "w-full", "aspect-square", "relative", "overflow-hidden", "rounded-full", "border-4", "border-stone-300")
    slotsBox.addEventListener('click', this.spinWheel.bind(this))

    const needle = Elements.div()
    needle.classList.add('w-2', 'h-8', 'bg-black', 'absolute', 'left-2/4', 'top-0')
    needle.style.clipPath = 'polygon(100% 0, 0 0, 0% 100%)'

    container.appendChild(slotsBox)
    container.appendChild(needle)
  }
}
