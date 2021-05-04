export function loadFromLocal(key) {
	return JSON.parse(localStorage.getItem(key))
}

export function saveToLocal(key, data) {
	localStorage.setItem(key, JSON.stringify(data))
}
