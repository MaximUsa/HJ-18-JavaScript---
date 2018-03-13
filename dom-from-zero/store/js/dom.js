'use strict';

function createElement(node) {
	if (typeof node === 'string') {
		return document.createTextNode(node);
	}
	
	const element = document.createElement(node.name);

	if (node.props !== null) {
		Object.keys(node.props).forEach(i => element.setAttribute(i, node.props[i]));
	}
	
	node.childs.forEach(function (item) {
		if (typeof item === 'string') {
			element.textContent += item;
		} else {
			element.appendChild(createElement(item))
		}
	})
	 
	return element;
}

