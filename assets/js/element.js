class Elements {
	static clear(element) {
		element.innerHTML = ''
	}

	static new(name, children) {
		const elm = document.createElement(name)

		if (children) {
			if (Array.isArray(children)) {
				for (let child of children) elm.appendChild(child)
			} else {
				elm.appendChild(children)
			}
		}

		return elm
	}

	static add(elm, children) {
		if (children) {
			if (Array.isArray(children)) {
				for (let child of children) elm.appendChild(child)
			} else {
				elm.appendChild(children)
			}
		}

		return elm
	}

	static div(children) {
		const div = document.createElement('div')

		if (children) {
			if (Array.isArray(children)) {
				for (let child of children) div.appendChild(child)
			} else {
				div.appendChild(children)
			}
		}

		return div
	}

	static text(content) {
		return document.createTextNode(content)
	}

	static p(content) {
		const p = document.createElement('p')
		if (content !== undefined || content !== null) p.appendChild(this.text(content))
		return p
	}
}
