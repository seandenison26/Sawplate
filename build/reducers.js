"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.bigDaddyReduce = bigDaddyReduce;
function bigDaddyReduce() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { serverCalls: 0 };
	var action = arguments[1];

	switch (action.type) {
		case "INCREASE_SERVER_CALLS":
			return Object.assign({}, state, { serverCalls: state.serverCalls + 1 });

		default:
			return state;
	}
};