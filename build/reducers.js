"use strict";

module.exports.bigDaddyReduce = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { serverCalls: 0 };
	var action = arguments[1];

	switch (action.type) {
		case "INCREASE_SERVER_CALLS":
			return Object.assign({}, state, { serverCalls: state.serverCalls + 1 });

		default:
			return state;
	}
};