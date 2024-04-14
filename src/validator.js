export default class Validator {
	validateUsername(username) {
		const regex = /^[a-z][a-z0-9_-]*[a-z]$/i
		const sequenceCheck = /\d{4,}/
		if (regex.test(username) && !sequenceCheck.test(username)) {
			return true
		}
		return false
	}
}
