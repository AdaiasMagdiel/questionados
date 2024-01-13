class Elements {
	static clear(element) {
		element.innerHTML = ''
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
}
