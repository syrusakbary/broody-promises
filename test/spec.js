var spec = require("promises-aplus-tests"),
    Promise = require("../src/promise");

describe("Promises/A+ Tests", function () {
    spec.mocha({
        resolved: function(value) {
            return Promise.resolve(value);
        },

        rejected: function(reason) {
            return Promise.reject(reason);
        },

        deferred: function() {
            var promise, resolve, reject;

            promise = new Promise(function(_resolve, _reject) {
                resolve = function(value) {
                    try { _resolve(value) } catch (err) {}
                };

                reject = function(reason) {
                    try { _reject(reason) } catch (err) {}
                };
            });

            return {
                promise: promise,
                resolve: resolve,
                reject:  reject
            };
        }
    });
});