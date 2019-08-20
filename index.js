'use strict';

module.exports = time => {
	const parsedHours = parseInt(time.slice(0, time.indexOf(':')), 10);
	const minutes = time.slice(time.indexOf(':'));
	const suffix = parsedHours >= 12 ? 'PM' : 'AM';
	const convertedTime =
		parsedHours > 12 ? parsedHours - 12 : parsedHours === 0 ? 12 : parsedHours;

	return `${convertedTime}${minutes}${suffix}`;
};
