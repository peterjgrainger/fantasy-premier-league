define("constants", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Constants;
    (function (Constants) {
        Constants["BASE_URL"] = "https://fantasy.premierleague.com/drf/";
        Constants["H2H_STANDINGS"] = "leagues-h2h-standings/";
    })(Constants = exports.Constants || (exports.Constants = {}));
});
define("connection/url-call", ["require", "exports", "request-promise", "constants"], function (require, exports, request_promise_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UrlCall = /** @class */ (function () {
        function UrlCall(path) {
            this.url = constants_1.Constants.BASE_URL + path;
        }
        UrlCall.prototype.sendMessage = function () {
            return request_promise_1.get(this.url);
        };
        return UrlCall;
    }());
    exports.UrlCall = UrlCall;
});
define("leagues/head-to-head", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("matches/matches", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FizzBuzz = /** @class */ (function () {
        function FizzBuzz(n) {
            var output = "";
            for (var i = 1; i <= n; i++) {
                if (i % 5 && i % 3) {
                    output += i + ' ';
                }
                if (i % 3 === 0) {
                    output += 'Fizz ';
                }
                if (i % 5 === 0) {
                    output += 'Buzz ';
                }
            }
            this.output = output;
        }
        return FizzBuzz;
    }());
    exports.FizzBuzz = FizzBuzz;
});
//# sourceMappingURL=premier-league.js.map