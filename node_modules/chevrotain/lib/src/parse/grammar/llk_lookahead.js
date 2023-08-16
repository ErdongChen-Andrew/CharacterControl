"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLkLookaheadStrategy = void 0;
var flatMap_1 = __importDefault(require("lodash/flatMap"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var errors_public_1 = require("../errors_public");
var parser_1 = require("../parser/parser");
var checks_1 = require("./checks");
var lookahead_1 = require("./lookahead");
var LLkLookaheadStrategy = /** @class */ (function () {
    function LLkLookaheadStrategy(options) {
        var _a;
        this.maxLookahead =
            (_a = options === null || options === void 0 ? void 0 : options.maxLookahead) !== null && _a !== void 0 ? _a : parser_1.DEFAULT_PARSER_CONFIG.maxLookahead;
    }
    LLkLookaheadStrategy.prototype.validate = function (options) {
        var leftRecursionErrors = this.validateNoLeftRecursion(options.rules);
        if ((0, isEmpty_1.default)(leftRecursionErrors)) {
            var emptyAltErrors = this.validateEmptyOrAlternatives(options.rules);
            var ambiguousAltsErrors = this.validateAmbiguousAlternationAlternatives(options.rules, this.maxLookahead);
            var emptyRepetitionErrors = this.validateSomeNonEmptyLookaheadPath(options.rules, this.maxLookahead);
            var allErrors = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], leftRecursionErrors, true), emptyAltErrors, true), ambiguousAltsErrors, true), emptyRepetitionErrors, true);
            return allErrors;
        }
        return leftRecursionErrors;
    };
    LLkLookaheadStrategy.prototype.validateNoLeftRecursion = function (rules) {
        return (0, flatMap_1.default)(rules, function (currTopRule) {
            return (0, checks_1.validateNoLeftRecursion)(currTopRule, currTopRule, errors_public_1.defaultGrammarValidatorErrorProvider);
        });
    };
    LLkLookaheadStrategy.prototype.validateEmptyOrAlternatives = function (rules) {
        return (0, flatMap_1.default)(rules, function (currTopRule) {
            return (0, checks_1.validateEmptyOrAlternative)(currTopRule, errors_public_1.defaultGrammarValidatorErrorProvider);
        });
    };
    LLkLookaheadStrategy.prototype.validateAmbiguousAlternationAlternatives = function (rules, maxLookahead) {
        return (0, flatMap_1.default)(rules, function (currTopRule) {
            return (0, checks_1.validateAmbiguousAlternationAlternatives)(currTopRule, maxLookahead, errors_public_1.defaultGrammarValidatorErrorProvider);
        });
    };
    LLkLookaheadStrategy.prototype.validateSomeNonEmptyLookaheadPath = function (rules, maxLookahead) {
        return (0, checks_1.validateSomeNonEmptyLookaheadPath)(rules, maxLookahead, errors_public_1.defaultGrammarValidatorErrorProvider);
    };
    LLkLookaheadStrategy.prototype.buildLookaheadForAlternation = function (options) {
        return (0, lookahead_1.buildLookaheadFuncForOr)(options.prodOccurrence, options.rule, options.maxLookahead, options.hasPredicates, options.dynamicTokensEnabled, lookahead_1.buildAlternativesLookAheadFunc);
    };
    LLkLookaheadStrategy.prototype.buildLookaheadForOptional = function (options) {
        return (0, lookahead_1.buildLookaheadFuncForOptionalProd)(options.prodOccurrence, options.rule, options.maxLookahead, options.dynamicTokensEnabled, (0, lookahead_1.getProdType)(options.prodType), lookahead_1.buildSingleAlternativeLookaheadFunction);
    };
    return LLkLookaheadStrategy;
}());
exports.LLkLookaheadStrategy = LLkLookaheadStrategy;
//# sourceMappingURL=llk_lookahead.js.map