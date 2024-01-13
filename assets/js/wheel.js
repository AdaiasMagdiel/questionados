const wheel = document.querySelector('.wheel')

class Wheel {
  constructor(colors, titles) {
    this.colors = colors
    this.numSlots = this.colors.length
    this.titles = titles
    this.isSpining = false
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

    console.log('ABCDEF'[index]);
  }

  spinWheel(e, angle) {
    if (this.isSpining) return

    this.isSpining = true
    const randomAngle = angle === undefined ? 360 * 30 + Math.floor(Math.random() * 360) : angle;
    const duration = angle === undefined ? 5 : 1

    e.currentTarget.style.transition = 'none';
    e.currentTarget.style.transform = 'rotate(0deg)';

    e.currentTarget.offsetHeight;

    e.currentTarget.style.transition = `transform ${duration}s cubic-bezier(0,1,1,.99)`;
    e.currentTarget.style.transform = `rotate(${360-randomAngle}deg)`;

    setTimeout(() => this.verifyEndSlot(randomAngle), duration * 1000 + 10)
  }

  draw(container) {
    const slots = Array(this.numSlots).fill(0).map((_, idx) => {
      const slot = Elements.div(Elements.text(this.titles[idx]))
      slot.classList.add('slot', this.colors[idx])
      slot.style.rotate = `${360 / this.numSlots * idx}deg`

      return slot
    })
    const slotsBox = Elements.div(slots)
    slotsBox.classList.add("w-full", "aspect-square", "relative", "overflow-hidden", "rounded-full", "border-4", "border-stone-300")
    slotsBox.addEventListener('click', this.spinWheel.bind(this))

    const needle = Elements.div()
    needle.classList.add('w-2', 'h-8', 'bg-black', 'absolute', 'left-2/4', 'top-0')
    needle.style.clipPath = 'polygon(100% 0, 0 0, 0% 100%)'

    container.appendChild(slotsBox)
    container.appendChild(needle)
  }
}
