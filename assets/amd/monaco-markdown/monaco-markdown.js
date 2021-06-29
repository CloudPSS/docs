/**!
© 2019 JetBrains
@version 0.0.11
@license MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("monaco-editor"));
	else if(typeof define === 'function' && define.amd)
		define("MonacoMarkdown", ["vs/editor/editor.main"], factory);
	else if(typeof exports === 'object')
		exports["MonacoMarkdown"] = factory(require("monaco-editor"));
	else
		root["MonacoMarkdown"] = factory(root["monaco"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(9);
// export function values<V = any>(set: Set<V>): V[];
// export function values<K = any, V = any>(map: Map<K, V>): V[];
function values(forEachable) {
    var result = [];
    forEachable.forEach(function (value) { return result.push(value); });
    return result;
}
exports.values = values;
var Position = /** @class */ (function () {
    function Position(line, character) {
        if (line < 0) {
            throw errors_1.illegalArgument('line must be non-negative');
        }
        if (character < 0) {
            throw errors_1.illegalArgument('character must be non-negative');
        }
        this._line = line;
        this._character = character;
    }
    Position.Min = function () {
        var positions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            positions[_i] = arguments[_i];
        }
        if (positions.length === 0) {
            throw new TypeError();
        }
        var result = positions[0];
        for (var i = 1; i < positions.length; i++) {
            var p = positions[i];
            if (p.isBefore(result)) {
                result = p;
            }
        }
        return result;
    };
    Position.Max = function () {
        var positions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            positions[_i] = arguments[_i];
        }
        if (positions.length === 0) {
            throw new TypeError();
        }
        var result = positions[0];
        for (var i = 1; i < positions.length; i++) {
            var p = positions[i];
            if (p.isAfter(result)) {
                result = p;
            }
        }
        return result;
    };
    Position.isPosition = function (other) {
        if (!other) {
            return false;
        }
        if (other instanceof Position) {
            return true;
        }
        var _a = other, line = _a.line, character = _a.character;
        if (typeof line === 'number' && typeof character === 'number') {
            return true;
        }
        return false;
    };
    Object.defineProperty(Position.prototype, "line", {
        get: function () {
            return this._line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "character", {
        get: function () {
            return this._character;
        },
        enumerable: true,
        configurable: true
    });
    Position.prototype.isBefore = function (other) {
        if (this._line < other._line) {
            return true;
        }
        if (other._line < this._line) {
            return false;
        }
        return this._character < other._character;
    };
    Position.prototype.isBeforeOrEqual = function (other) {
        if (this._line < other._line) {
            return true;
        }
        if (other._line < this._line) {
            return false;
        }
        return this._character <= other._character;
    };
    Position.prototype.isAfter = function (other) {
        return !this.isBeforeOrEqual(other);
    };
    Position.prototype.isAfterOrEqual = function (other) {
        return !this.isBefore(other);
    };
    Position.prototype.isEqual = function (other) {
        return this._line === other._line && this._character === other._character;
    };
    Position.prototype.compareTo = function (other) {
        if (this._line < other._line) {
            return -1;
        }
        else if (this._line > other.line) {
            return 1;
        }
        else {
            // equal line
            if (this._character < other._character) {
                return -1;
            }
            else if (this._character > other._character) {
                return 1;
            }
            else {
                // equal line and character
                return 0;
            }
        }
    };
    Position.prototype.translate = function (lineDeltaOrChange, characterDelta) {
        if (characterDelta === void 0) { characterDelta = 0; }
        if (lineDeltaOrChange === null || characterDelta === null) {
            throw errors_1.illegalArgument();
        }
        var lineDelta;
        if (typeof lineDeltaOrChange === 'undefined') {
            lineDelta = 0;
        }
        else if (typeof lineDeltaOrChange === 'number') {
            lineDelta = lineDeltaOrChange;
        }
        else {
            lineDelta = typeof lineDeltaOrChange.lineDelta === 'number' ? lineDeltaOrChange.lineDelta : 0;
            characterDelta = typeof lineDeltaOrChange.characterDelta === 'number' ? lineDeltaOrChange.characterDelta : 0;
        }
        if (lineDelta === 0 && characterDelta === 0) {
            return this;
        }
        return new Position(this.line + lineDelta, this.character + characterDelta);
    };
    Position.prototype.with = function (lineOrChange, character) {
        if (character === void 0) { character = this.character; }
        if (lineOrChange === null || character === null) {
            throw errors_1.illegalArgument();
        }
        var line;
        if (typeof lineOrChange === 'undefined') {
            line = this.line;
        }
        else if (typeof lineOrChange === 'number') {
            line = lineOrChange;
        }
        else {
            line = typeof lineOrChange.line === 'number' ? lineOrChange.line : this.line;
            character = typeof lineOrChange.character === 'number' ? lineOrChange.character : this.character;
        }
        if (line === this.line && character === this.character) {
            return this;
        }
        return new Position(line, character);
    };
    Position.prototype.toJSON = function () {
        return { line: this.line, character: this.character };
    };
    return Position;
}());
exports.Position = Position;
var Range = /** @class */ (function () {
    function Range(startLineOrStart, startColumnOrEnd, endLine, endColumn) {
        var start;
        var end;
        if (typeof startLineOrStart === 'number' && typeof startColumnOrEnd === 'number' && typeof endLine === 'number' && typeof endColumn === 'number') {
            start = new Position(startLineOrStart, startColumnOrEnd);
            end = new Position(endLine, endColumn);
        }
        else if (startLineOrStart instanceof Position && startColumnOrEnd instanceof Position) {
            start = startLineOrStart;
            end = startColumnOrEnd;
        }
        if (!start || !end) {
            throw new Error('Invalid arguments');
        }
        if (start.isBefore(end)) {
            this._start = start;
            this._end = end;
        }
        else {
            this._start = end;
            this._end = start;
        }
    }
    Range.isRange = function (thing) {
        if (thing instanceof Range) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return Position.isPosition(thing.start)
            && Position.isPosition(thing.end);
    };
    Object.defineProperty(Range.prototype, "start", {
        get: function () {
            return this._start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "end", {
        get: function () {
            return this._end;
        },
        enumerable: true,
        configurable: true
    });
    Range.prototype.contains = function (positionOrRange) {
        if (positionOrRange instanceof Range) {
            return this.contains(positionOrRange._start)
                && this.contains(positionOrRange._end);
        }
        else if (positionOrRange instanceof Position) {
            if (positionOrRange.isBefore(this._start)) {
                return false;
            }
            if (this._end.isBefore(positionOrRange)) {
                return false;
            }
            return true;
        }
        return false;
    };
    Range.prototype.isEqual = function (other) {
        return this._start.isEqual(other._start) && this._end.isEqual(other._end);
    };
    Range.prototype.intersection = function (other) {
        var start = Position.Max(other.start, this._start);
        var end = Position.Min(other.end, this._end);
        if (start.isAfter(end)) {
            // this happens when there is no overlap:
            // |-----|
            //          |----|
            return undefined;
        }
        return new Range(start, end);
    };
    Range.prototype.union = function (other) {
        if (this.contains(other)) {
            return this;
        }
        else if (other.contains(this)) {
            return other;
        }
        var start = Position.Min(other.start, this._start);
        var end = Position.Max(other.end, this.end);
        return new Range(start, end);
    };
    Object.defineProperty(Range.prototype, "isEmpty", {
        get: function () {
            return this._start.isEqual(this._end);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "isSingleLine", {
        get: function () {
            return this._start.line === this._end.line;
        },
        enumerable: true,
        configurable: true
    });
    Range.prototype.with = function (startOrChange, end) {
        if (end === void 0) { end = this.end; }
        if (startOrChange === null || end === null) {
            throw errors_1.illegalArgument();
        }
        var start;
        if (!startOrChange) {
            start = this.start;
        }
        else if (Position.isPosition(startOrChange)) {
            start = startOrChange;
        }
        else {
            start = startOrChange.start || this.start;
            end = startOrChange.end || this.end;
        }
        if (start.isEqual(this._start) && end.isEqual(this.end)) {
            return this;
        }
        return new Range(start, end);
    };
    Range.prototype.toJSON = function () {
        return [this.start, this.end];
    };
    return Range;
}());
exports.Range = Range;
var Selection = /** @class */ (function (_super) {
    __extends(Selection, _super);
    function Selection(anchorLineOrAnchor, anchorColumnOrActive, activeLine, activeColumn) {
        var _this = this;
        var anchor;
        var active;
        if (typeof anchorLineOrAnchor === 'number' && typeof anchorColumnOrActive === 'number' && typeof activeLine === 'number' && typeof activeColumn === 'number') {
            anchor = new Position(anchorLineOrAnchor, anchorColumnOrActive);
            active = new Position(activeLine, activeColumn);
        }
        else if (anchorLineOrAnchor instanceof Position && anchorColumnOrActive instanceof Position) {
            anchor = anchorLineOrAnchor;
            active = anchorColumnOrActive;
        }
        if (!anchor || !active) {
            throw new Error('Invalid arguments');
        }
        _this = _super.call(this, anchor, active) || this;
        _this._anchor = anchor;
        _this._active = active;
        return _this;
    }
    Selection.isSelection = function (thing) {
        if (thing instanceof Selection) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return Range.isRange(thing)
            && Position.isPosition(thing.anchor)
            && Position.isPosition(thing.active)
            && typeof thing.isReversed === 'boolean';
    };
    Object.defineProperty(Selection.prototype, "anchor", {
        get: function () {
            return this._anchor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "isReversed", {
        get: function () {
            return this._anchor === this._end;
        },
        enumerable: true,
        configurable: true
    });
    Selection.prototype.toJSON = function () {
        return {
            start: this.start,
            end: this.end,
            active: this.active,
            anchor: this.anchor
        };
    };
    return Selection;
}(Range));
exports.Selection = Selection;
var EndOfLine;
(function (EndOfLine) {
    EndOfLine[EndOfLine["LF"] = 1] = "LF";
    EndOfLine[EndOfLine["CRLF"] = 2] = "CRLF";
})(EndOfLine = exports.EndOfLine || (exports.EndOfLine = {}));
var TextEdit = /** @class */ (function () {
    function TextEdit(range, newText) {
        this.range = range;
        this._newText = newText;
    }
    TextEdit.isTextEdit = function (thing) {
        if (thing instanceof TextEdit) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return Range.isRange(thing)
            && typeof thing.newText === 'string';
    };
    TextEdit.replace = function (range, newText) {
        return new TextEdit(range, newText);
    };
    TextEdit.insert = function (position, newText) {
        return TextEdit.replace(new Range(position, position), newText);
    };
    TextEdit.delete = function (range) {
        return TextEdit.replace(range, '');
    };
    TextEdit.setEndOfLine = function (eol) {
        var ret = new TextEdit(new Range(new Position(0, 0), new Position(0, 0)), '');
        ret.newEol = eol;
        return ret;
    };
    Object.defineProperty(TextEdit.prototype, "range", {
        get: function () {
            return this._range;
        },
        set: function (value) {
            if (value && !Range.isRange(value)) {
                throw errors_1.illegalArgument('range');
            }
            this._range = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEdit.prototype, "newText", {
        get: function () {
            return this._newText || '';
        },
        set: function (value) {
            if (value && typeof value !== 'string') {
                throw errors_1.illegalArgument('newText');
            }
            this._newText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEdit.prototype, "newEol", {
        get: function () {
            return this._newEol;
        },
        set: function (value) {
            if (value && typeof value !== 'number') {
                throw errors_1.illegalArgument('newEol');
            }
            this._newEol = value;
        },
        enumerable: true,
        configurable: true
    });
    TextEdit.prototype.toJSON = function () {
        return {
            range: this.range,
            newText: this.newText,
            newEol: this._newEol
        };
    };
    return TextEdit;
}());
exports.TextEdit = TextEdit;
var WorkspaceEdit = /** @class */ (function () {
    function WorkspaceEdit() {
        this._edits = new Array();
    }
    WorkspaceEdit.prototype.renameFile = function (from, to, options) {
        this._edits.push({ _type: 1, from: from, to: to, options: options });
    };
    WorkspaceEdit.prototype.createFile = function (uri, options) {
        this._edits.push({ _type: 1, from: undefined, to: uri, options: options });
    };
    WorkspaceEdit.prototype.deleteFile = function (uri, options) {
        this._edits.push({ _type: 1, from: uri, to: undefined, options: options });
    };
    WorkspaceEdit.prototype.replace = function (uri, range, newText) {
        this._edits.push({ _type: 2, uri: uri, edit: new TextEdit(range, newText) });
    };
    WorkspaceEdit.prototype.insert = function (resource, position, newText) {
        this.replace(resource, new Range(position, position), newText);
    };
    WorkspaceEdit.prototype.delete = function (resource, range) {
        this.replace(resource, range, '');
    };
    WorkspaceEdit.prototype.has = function (uri) {
        for (var _i = 0, _a = this._edits; _i < _a.length; _i++) {
            var edit = _a[_i];
            if (edit._type === 2 && edit.uri.toString() === uri.toString()) {
                return true;
            }
        }
        return false;
    };
    WorkspaceEdit.prototype.set = function (uri, edits) {
        if (!edits) {
            // remove all text edits for `uri`
            for (var i = 0; i < this._edits.length; i++) {
                var element = this._edits[i];
                if (element._type === 2 && element.uri.toString() === uri.toString()) {
                    this._edits[i] = undefined; // will be coalesced down below
                }
            }
            // this._edits = coalesce(this._edits); TODO
        }
        else {
            // append edit to the end
            for (var _i = 0, edits_1 = edits; _i < edits_1.length; _i++) {
                var edit = edits_1[_i];
                if (edit) {
                    this._edits.push({ _type: 2, uri: uri, edit: edit });
                }
            }
        }
    };
    WorkspaceEdit.prototype.get = function (uri) {
        var res = [];
        for (var _i = 0, _a = this._edits; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (candidate._type === 2 && candidate.uri.toString() === uri.toString()) {
                res.push(candidate.edit);
            }
        }
        return res;
    };
    WorkspaceEdit.prototype.entries = function () {
        var textEdits = new Map();
        for (var _i = 0, _a = this._edits; _i < _a.length; _i++) {
            var candidate = _a[_i];
            if (candidate._type === 2) {
                var textEdit = textEdits.get(candidate.uri.toString());
                if (!textEdit) {
                    textEdit = [candidate.uri, []];
                    textEdits.set(candidate.uri.toString(), textEdit);
                }
                textEdit[1].push(candidate.edit);
            }
        }
        return values(textEdits);
    };
    WorkspaceEdit.prototype._allEntries = function () {
        var res = [];
        for (var _i = 0, _a = this._edits; _i < _a.length; _i++) {
            var edit = _a[_i];
            if (edit._type === 1) {
                res.push([edit.from, edit.to, edit.options]);
            }
            else {
                res.push([edit.uri, [edit.edit]]);
            }
        }
        return res;
    };
    Object.defineProperty(WorkspaceEdit.prototype, "size", {
        get: function () {
            return this.entries().length;
        },
        enumerable: true,
        configurable: true
    });
    WorkspaceEdit.prototype.toJSON = function () {
        return this.entries();
    };
    return WorkspaceEdit;
}());
exports.WorkspaceEdit = WorkspaceEdit;
var TextEditorRevealType;
(function (TextEditorRevealType) {
    TextEditorRevealType[TextEditorRevealType["Default"] = 0] = "Default";
    TextEditorRevealType[TextEditorRevealType["InCenter"] = 1] = "InCenter";
    TextEditorRevealType[TextEditorRevealType["InCenterIfOutsideViewport"] = 2] = "InCenterIfOutsideViewport";
    TextEditorRevealType[TextEditorRevealType["AtTop"] = 3] = "AtTop";
})(TextEditorRevealType = exports.TextEditorRevealType || (exports.TextEditorRevealType = {}));
var TextEditorSelectionChangeKind;
(function (TextEditorSelectionChangeKind) {
    TextEditorSelectionChangeKind[TextEditorSelectionChangeKind["Keyboard"] = 1] = "Keyboard";
    TextEditorSelectionChangeKind[TextEditorSelectionChangeKind["Mouse"] = 2] = "Mouse";
    TextEditorSelectionChangeKind[TextEditorSelectionChangeKind["Command"] = 3] = "Command";
})(TextEditorSelectionChangeKind = exports.TextEditorSelectionChangeKind || (exports.TextEditorSelectionChangeKind = {}));
var SnippetString = /** @class */ (function () {
    function SnippetString(value) {
        this._tabstop = 1;
        this.value = value || '';
    }
    SnippetString.isSnippetString = function (thing) {
        if (thing instanceof SnippetString) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.value === 'string';
    };
    SnippetString._escape = function (value) {
        return value.replace(/\$|}|\\/g, '\\$&');
    };
    SnippetString.prototype.appendText = function (string) {
        this.value += SnippetString._escape(string);
        return this;
    };
    SnippetString.prototype.appendTabstop = function (number) {
        if (number === void 0) { number = this._tabstop++; }
        this.value += '$';
        this.value += number;
        return this;
    };
    SnippetString.prototype.appendPlaceholder = function (value, number) {
        if (number === void 0) { number = this._tabstop++; }
        if (typeof value === 'function') {
            var nested = new SnippetString();
            nested._tabstop = this._tabstop;
            value(nested);
            this._tabstop = nested._tabstop;
            value = nested.value;
        }
        else {
            value = SnippetString._escape(value);
        }
        this.value += '${';
        this.value += number;
        this.value += ':';
        this.value += value;
        this.value += '}';
        return this;
    };
    SnippetString.prototype.appendVariable = function (name, defaultValue) {
        if (typeof defaultValue === 'function') {
            var nested = new SnippetString();
            nested._tabstop = this._tabstop;
            defaultValue(nested);
            this._tabstop = nested._tabstop;
            defaultValue = nested.value;
        }
        else if (typeof defaultValue === 'string') {
            defaultValue = defaultValue.replace(/\$|}/g, '\\$&');
        }
        this.value += '${';
        this.value += name;
        if (defaultValue) {
            this.value += ':';
            this.value += defaultValue;
        }
        this.value += '}';
        return this;
    };
    return SnippetString;
}());
exports.SnippetString = SnippetString;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extHostTypes_1 = __webpack_require__(1);
var monaco_editor_1 = __webpack_require__(0);
var vscode_utils_1 = __webpack_require__(10);
var wordHelper_1 = __webpack_require__(11);
var TypeConverters = __webpack_require__(3);
var _modeId2WordDefinition = new Map();
function setWordDefinitionFor(modeId, wordDefinition) {
    _modeId2WordDefinition.set(modeId, wordDefinition);
}
exports.setWordDefinitionFor = setWordDefinitionFor;
function getWordDefinitionFor(modeId) {
    return _modeId2WordDefinition.get(modeId);
}
exports.getWordDefinitionFor = getWordDefinitionFor;
function revealRangeInEditor(_editor, range, revealType) {
    switch (revealType) {
        case extHostTypes_1.TextEditorRevealType.Default:
        case undefined:
            _editor.revealRange(range, monaco_editor_1.editor.ScrollType.Smooth);
            break;
        case extHostTypes_1.TextEditorRevealType.InCenter:
            _editor.revealRangeInCenter(range, monaco_editor_1.editor.ScrollType.Smooth);
            break;
        case extHostTypes_1.TextEditorRevealType.InCenterIfOutsideViewport:
            _editor.revealRangeInCenterIfOutsideViewport(range, monaco_editor_1.editor.ScrollType.Smooth);
            break;
        case extHostTypes_1.TextEditorRevealType.AtTop:
            _editor.revealRangeAtTop(range, monaco_editor_1.editor.ScrollType.Smooth);
            break;
        default:
            console.warn("Unknown revealType: " + revealType);
            break;
    }
}
var TextDocument = /** @class */ (function () {
    function TextDocument(model) {
        this._textLines = [];
        this.model = model;
        this.languageId = getLanguageId(model);
    }
    Object.defineProperty(TextDocument.prototype, "eol", {
        get: function () {
            switch (this.model.getEOL()) {
                case '\n': {
                    return extHostTypes_1.EndOfLine.LF;
                }
                case '\r\n': {
                    return extHostTypes_1.EndOfLine.CRLF;
                }
                default: {
                    throw new Error("invalid argument");
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TextDocument.prototype, "fileName", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextDocument.prototype, "isClosed", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextDocument.prototype, "isDirty", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextDocument.prototype, "isUntitled", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextDocument.prototype, "lineCount", {
        get: function () {
            return this.model.getLineCount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextDocument.prototype, "_lines", {
        get: function () {
            return this.model.getLinesContent();
        },
        enumerable: true,
        configurable: true
    });
    TextDocument.prototype.getText = function (range) {
        if (!range) {
            return this.model.getValue();
        }
        return this.model.getValueInRange(TypeConverters.Range.from(range));
    };
    TextDocument.prototype.lineAt = function (lineOrPosition) {
        var line;
        if (lineOrPosition instanceof extHostTypes_1.Position) {
            line = lineOrPosition.line;
        }
        else if (typeof lineOrPosition === 'number') {
            line = lineOrPosition;
        }
        if (typeof line !== 'number' || line < 0 || line >= this._lines.length) {
            throw new Error('Illegal value for `line`');
        }
        var result = this._textLines[line];
        if (!result || result.lineNumber !== line || result.text !== this._lines[line]) {
            var text = this._lines[line];
            var firstNonWhitespaceCharacterIndex = /^(\s*)/.exec(text)[1].length;
            var range = new extHostTypes_1.Range(line, 0, line, text.length);
            var rangeIncludingLineBreak = line < this._lines.length - 1
                ? new extHostTypes_1.Range(line, 0, line + 1, 0)
                : range;
            result = Object.freeze({
                lineNumber: line,
                range: range,
                rangeIncludingLineBreak: rangeIncludingLineBreak,
                text: text,
                firstNonWhitespaceCharacterIndex: firstNonWhitespaceCharacterIndex,
                isEmptyOrWhitespace: firstNonWhitespaceCharacterIndex === text.length
            });
            this._textLines[line] = result;
        }
        return result;
    };
    TextDocument.prototype.offsetAt = function (position) {
        return this.model.getOffsetAt(TypeConverters.Position.from(position));
    };
    TextDocument.prototype.positionAt = function (offset) {
        return TypeConverters.Position.to(this.model.getPositionAt(offset));
    };
    TextDocument.prototype.save = function () {
        throw new Error("Not implemented");
    };
    TextDocument.prototype.validateRange = function (range) {
        if (!(range instanceof extHostTypes_1.Range)) {
            throw new Error('Invalid argument');
        }
        var start = this.validatePosition(range.start);
        var end = this.validatePosition(range.end);
        if (start === range.start && end === range.end) {
            return range;
        }
        return new extHostTypes_1.Range(start.line, start.character, end.line, end.character);
    };
    TextDocument.prototype.validatePosition = function (position) {
        if (!(position instanceof extHostTypes_1.Position)) {
            throw new Error('Invalid argument');
        }
        var line = position.line, character = position.character;
        var hasChanged = false;
        if (line < 0) {
            line = 0;
            character = 0;
            hasChanged = true;
        }
        else if (line >= this._lines.length) {
            line = this._lines.length - 1;
            character = this._lines[line].length;
            hasChanged = true;
        }
        else {
            var maxCharacter = this._lines[line].length;
            if (character < 0) {
                character = 0;
                hasChanged = true;
            }
            else if (character > maxCharacter) {
                character = maxCharacter;
                hasChanged = true;
            }
        }
        if (!hasChanged) {
            return position;
        }
        return new extHostTypes_1.Position(line, character);
    };
    TextDocument.prototype.getWordRangeAtPosition = function (_position, regexp) {
        var position = this.validatePosition(_position);
        if (!regexp) {
            // use default when custom-regexp isn't provided
            regexp = getWordDefinitionFor(this.languageId);
        }
        else if (vscode_utils_1.regExpLeadsToEndlessLoop(regexp)) {
            // use default when custom-regexp is bad
            console.warn("[getWordRangeAtPosition]: ignoring custom regexp '" + regexp.source + "' because it matches the empty string.");
            regexp = getWordDefinitionFor(this.languageId);
        }
        var wordAtText = wordHelper_1.getWordAtText(position.character + 1, wordHelper_1.ensureValidWordDefinition(regexp), this._lines[position.line], 0);
        if (wordAtText) {
            return new extHostTypes_1.Range(position.line, wordAtText.startColumn - 1, position.line, wordAtText.endColumn - 1);
        }
        return undefined;
    };
    return TextDocument;
}());
exports.TextDocument = TextDocument;
function getLanguageId(model) {
    // @ts-ignore
    return model.getLanguageIdentifier().language;
}
var TextEditor = /** @class */ (function () {
    function TextEditor(editor) {
        this._disposed = false;
        this.editor = editor;
    }
    Object.defineProperty(TextEditor.prototype, "languageId", {
        get: function () {
            return getLanguageId(this.editor.getModel());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "document", {
        get: function () {
            return new TextDocument(this.editor.getModel());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "selection", {
        get: function () {
            return TypeConverters.Selection.to(this.editor.getSelection());
        },
        set: function (value) {
            this.editor.setSelection(TypeConverters.Selection.from(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "selections", {
        get: function () {
            return this.editor.getSelections().map(function (s) { return TypeConverters.Selection.to(s); });
        },
        set: function (value) {
            this.editor.setSelections(value.map(function (s) { return TypeConverters.Selection.from(s); }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "visibleRanges", {
        get: function () {
            return this.editor.getVisibleRanges().map(function (r) { return TypeConverters.Range.to(r); });
        },
        enumerable: true,
        configurable: true
    });
    TextEditor.prototype.edit = function (callback, options) {
        if (options === void 0) { options = {
            undoStopBefore: true,
            undoStopAfter: true
        }; }
        if (this._disposed) {
            return Promise.reject(new Error('TextEditor#edit not possible on closed editors'));
        }
        var edit = new TextEditorEdit(this.document, options);
        callback(edit);
        return this._applyEdit(edit);
    };
    TextEditor.prototype._applyEdit = function (editBuilder) {
        var editData = editBuilder.finalize();
        // return when there is nothing to do
        if (editData.edits.length === 0 && !editData.setEndOfLine) {
            return Promise.resolve(null);
        }
        // check that the edits are not overlapping (i.e. illegal)
        var editRanges = editData.edits.map(function (edit) { return edit.range; });
        // sort ascending (by end and then by start)
        editRanges.sort(function (a, b) {
            if (a.end.line === b.end.line) {
                if (a.end.character === b.end.character) {
                    if (a.start.line === b.start.line) {
                        return a.start.character - b.start.character;
                    }
                    return a.start.line - b.start.line;
                }
                return a.end.character - b.end.character;
            }
            return a.end.line - b.end.line;
        });
        // check that no edits are overlapping
        for (var i = 0, count = editRanges.length - 1; i < count; i++) {
            var rangeEnd = editRanges[i].end;
            var nextRangeStart = editRanges[i + 1].start;
            if (nextRangeStart.isBefore(rangeEnd)) {
                // overlapping ranges
                return Promise.reject(new Error('Overlapping ranges are not allowed!'));
            }
        }
        // prepare data for serialization
        var edits = editData.edits.map(function (edit) {
            return {
                range: TypeConverters.Range.from(edit.range),
                text: edit.text,
                forceMoveMarkers: edit.forceMoveMarkers
            };
        });
        this.editor.getModel().pushEditOperations(this.editor.getSelections(), edits, function () {
            return [];
        });
        return Promise.resolve(null);
    };
    // insertSnippet(snippet: SnippetString, where?: Position | readonly Position[] | Range | readonly Range[], options: { undoStopBefore: boolean; undoStopAfter: boolean; } = {
    //     undoStopBefore: true,
    //     undoStopAfter: true
    // }): Promise<boolean> {}
    // hide(): void {
    //     throw new Error("Not implemented")
    // }
    // @ts-ignore
    // show(column?: ViewColumn): void {
    //     throw new Error("Not implemented")
    // }
    TextEditor.prototype.revealRange = function (range, revealType) {
        revealRangeInEditor(this.editor, TypeConverters.Range.from(range), revealType);
    };
    // @ts-ignore
    // setDecorations(decorationType: TextEditorDecorationType, rangesOrOptions: Range[] | DecorationOptions[]): void {
    //     throw new Error("Not implemented")
    // }
    TextEditor.prototype.applyEdit = function (edit, newSelections) {
        if (!newSelections) {
            newSelections = [];
        }
        this.editor.getModel().pushEditOperations(this.editor.getSelections(), TypeConverters.WorkspaceEdit.from(edit), function () {
            return newSelections.map(function (s) { return TypeConverters.Selection.from(s); });
        });
        return Promise.resolve(null);
    };
    TextEditor.prototype.addAction = function (param) {
        this.editor.addAction(param);
    };
    TextEditor.prototype.executeCommand = function (commandId) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        switch (commandId) {
            case 'type':
                this.editor.trigger('keyboard', commandId, rest[0]);
                return Promise.resolve();
            case 'tab':
            case 'deleteLeft':
                this.editor.trigger('keyboard', commandId, undefined);
                return Promise.resolve();
            default:
                var action = this.editor.getAction(commandId);
                if (action) {
                    if (action.isSupported()) {
                        return action.run();
                    }
                }
                else {
                    new Error("unknown action id " + commandId);
                }
        }
    };
    TextEditor.prototype.getConfiguration = function (configurationId) {
        switch (configurationId) {
            case '':
                break;
            default:
                return new UndefinedConfiguration();
        }
    };
    return TextEditor;
}());
exports.TextEditor = TextEditor;
var UndefinedConfiguration = /** @class */ (function () {
    function UndefinedConfiguration() {
    }
    UndefinedConfiguration.prototype.get = function (_) {
        return undefined;
    };
    return UndefinedConfiguration;
}());
var TextEditorEdit = /** @class */ (function () {
    function TextEditorEdit(document, options) {
        this._collectedEdits = [];
        this._setEndOfLine = undefined;
        this._finalized = false;
        this._document = document;
        this._documentVersionId = document.version;
        this._undoStopBefore = options.undoStopBefore;
        this._undoStopAfter = options.undoStopAfter;
    }
    TextEditorEdit.prototype.finalize = function () {
        this._finalized = true;
        return {
            documentVersionId: this._documentVersionId,
            edits: this._collectedEdits,
            setEndOfLine: this._setEndOfLine,
            undoStopBefore: this._undoStopBefore,
            undoStopAfter: this._undoStopAfter
        };
    };
    TextEditorEdit.prototype._throwIfFinalized = function () {
        if (this._finalized) {
            throw new Error('Edit is only valid while callback runs');
        }
    };
    TextEditorEdit.prototype.replace = function (location, value) {
        this._throwIfFinalized();
        var range = null;
        if (location instanceof extHostTypes_1.Position) {
            range = new extHostTypes_1.Range(location, location);
        }
        else if (location instanceof extHostTypes_1.Range) {
            range = location;
        }
        else {
            throw new Error('Unrecognized location');
        }
        this._pushEdit(range, value, false);
    };
    TextEditorEdit.prototype.insert = function (location, value) {
        this._throwIfFinalized();
        this._pushEdit(new extHostTypes_1.Range(location, location), value, true);
    };
    TextEditorEdit.prototype.delete = function (location) {
        this._throwIfFinalized();
        var range = null;
        if (location instanceof extHostTypes_1.Range) {
            range = location;
        }
        else {
            throw new Error('Unrecognized location');
        }
        this._pushEdit(range, null, true);
    };
    TextEditorEdit.prototype._pushEdit = function (range, text, forceMoveMarkers) {
        var validRange = this._document.validateRange(range);
        this._collectedEdits.push({
            range: validRange,
            text: text,
            forceMoveMarkers: forceMoveMarkers
        });
    };
    TextEditorEdit.prototype.setEndOfLine = function (endOfLine) {
        this._throwIfFinalized();
        if (endOfLine !== extHostTypes_1.EndOfLine.LF && endOfLine !== extHostTypes_1.EndOfLine.CRLF) {
            throw new Error('Illegal argument endOfLine');
        }
        this._setEndOfLine = endOfLine;
    };
    return TextEditorEdit;
}());
exports.TextEditorEdit = TextEditorEdit;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var monaco_editor_1 = __webpack_require__(0);
var vscode = __webpack_require__(1);
var Selection;
(function (Selection) {
    function to(selection) {
        var selectionStartLineNumber = selection.selectionStartLineNumber, selectionStartColumn = selection.selectionStartColumn, positionLineNumber = selection.positionLineNumber, positionColumn = selection.positionColumn;
        var start = new vscode.Position(selectionStartLineNumber - 1, selectionStartColumn - 1);
        var end = new vscode.Position(positionLineNumber - 1, positionColumn - 1);
        return new vscode.Selection(start, end);
    }
    Selection.to = to;
    function from(selection) {
        var anchor = selection.anchor, active = selection.active;
        return new monaco_editor_1.Selection(anchor.line + 1, anchor.character + 1, active.line + 1, active.character + 1);
    }
    Selection.from = from;
})(Selection = exports.Selection || (exports.Selection = {}));
var Range;
(function (Range) {
    function from(range) {
        if (!range) {
            return undefined;
        }
        var start = range.start, end = range.end;
        return new monaco_editor_1.Range(start.line + 1, start.character + 1, end.line + 1, end.character + 1);
    }
    Range.from = from;
    function to(range) {
        if (!range) {
            return undefined;
        }
        var startLineNumber = range.startLineNumber, startColumn = range.startColumn, endLineNumber = range.endLineNumber, endColumn = range.endColumn;
        return new vscode.Range(startLineNumber - 1, startColumn - 1, endLineNumber - 1, endColumn - 1);
    }
    Range.to = to;
})(Range = exports.Range || (exports.Range = {}));
var Position;
(function (Position) {
    function to(position) {
        return new vscode.Position(position.lineNumber - 1, position.column - 1);
    }
    Position.to = to;
    function from(position) {
        return { lineNumber: position.line + 1, column: position.character + 1 };
    }
    Position.from = from;
})(Position = exports.Position || (exports.Position = {}));
var EndOfLine;
(function (EndOfLine) {
    function from(eol) {
        if (eol === vscode.EndOfLine.CRLF) {
            return monaco_editor_1.editor.EndOfLineSequence.CRLF;
        }
        else if (eol === vscode.EndOfLine.LF) {
            return monaco_editor_1.editor.EndOfLineSequence.LF;
        }
        return undefined;
    }
    EndOfLine.from = from;
    function to(eol) {
        if (eol === monaco_editor_1.editor.EndOfLineSequence.CRLF) {
            return vscode.EndOfLine.CRLF;
        }
        else if (eol === monaco_editor_1.editor.EndOfLineSequence.LF) {
            return vscode.EndOfLine.LF;
        }
        return undefined;
    }
    EndOfLine.to = to;
})(EndOfLine = exports.EndOfLine || (exports.EndOfLine = {}));
var WorkspaceEdit;
(function (WorkspaceEdit) {
    function from(value) {
        var edits = [];
        for (var _i = 0, _a = value._allEntries(); _i < _a.length; _i++) {
            var entry = _a[_i];
            var uri = entry[0], uriOrEdits = entry[1];
            if (Array.isArray(uriOrEdits)) {
                // text edits
                for (var _b = 0, uriOrEdits_1 = uriOrEdits; _b < uriOrEdits_1.length; _b++) {
                    var e = uriOrEdits_1[_b];
                    edits.push({
                        range: Range.from(e.range),
                        text: e.newText,
                        forceMoveMarkers: false
                    });
                }
            }
            else {
                // resource edits
                throw new Error("Not implemented for " + uri);
            }
        }
        return edits;
    }
    WorkspaceEdit.from = from;
})(WorkspaceEdit = exports.WorkspaceEdit || (exports.WorkspaceEdit = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var monaco_editor_1 = __webpack_require__(0);
var listEditing_1 = __webpack_require__(5);
var extHostTypes_1 = __webpack_require__(1);
function addKeybinding(editor, name, fun, keybindings, label, context, contextMenuGroupId) {
    if (contextMenuGroupId === void 0) { contextMenuGroupId = "markdown.extension.editing"; }
    editor.addAction({
        contextMenuGroupId: contextMenuGroupId,
        contextMenuOrder: 0,
        id: "markdown.extension.editing." + name,
        keybindingContext: context,
        keybindings: keybindings,
        label: label,
        precondition: "",
        run: function (_) {
            fun(editor);
            return undefined;
        }
    });
}
exports.addKeybinding = addKeybinding;
function activateFormatting(editor) {
    addKeybinding(editor, "toggleBold", toggleBold, [monaco_editor_1.KeyMod.CtrlCmd | monaco_editor_1.KeyCode.KEY_B], "Toggle bold");
    addKeybinding(editor, "toggleItalic", toggleItalic, [monaco_editor_1.KeyMod.CtrlCmd | monaco_editor_1.KeyCode.KEY_I], "Toggle italic");
    addKeybinding(editor, "toggleCodeSpan", toggleCodeSpan, [monaco_editor_1.KeyMod.CtrlCmd | monaco_editor_1.KeyCode.US_BACKTICK], "Toggle code span");
    addKeybinding(editor, "toggleStrikethrough", toggleStrikethrough, [monaco_editor_1.KeyMod.Alt | monaco_editor_1.KeyCode.KEY_S], "Toggle strikethrough");
    addKeybinding(editor, "toggleMath", toggleMath, [monaco_editor_1.KeyMod.CtrlCmd | monaco_editor_1.KeyCode.KEY_M], "Toggle math");
    addKeybinding(editor, "toggleMathReverse", toggleMathReverse, [monaco_editor_1.KeyMod.CtrlCmd | monaco_editor_1.KeyMod.Shift | monaco_editor_1.KeyCode.KEY_M], "Toggle math reverse");
    addKeybinding(editor, "toggleHeadingUp", toggleHeadingUp, [monaco_editor_1.KeyMod.WinCtrl | monaco_editor_1.KeyMod.Shift | monaco_editor_1.KeyCode.US_CLOSE_SQUARE_BRACKET], "Heading up");
    addKeybinding(editor, "toggleHeadingDown", toggleHeadingDown, [monaco_editor_1.KeyMod.WinCtrl | monaco_editor_1.KeyMod.Shift | monaco_editor_1.KeyCode.US_OPEN_SQUARE_BRACKET], "Heading down");
    addKeybinding(editor, "toggleList", toggleList, [monaco_editor_1.KeyMod.CtrlCmd | monaco_editor_1.KeyCode.KEY_L], "Toggle list");
    // addKeybinding(editor, paste, [KeyMod.CtrlCmd | KeyCode.KEY_B], "Toggle bold");
}
exports.activateFormatting = activateFormatting;
/**
 * Here we store Regexp to check if the text is the single link.
 */
var singleLinkRegex = createLinkRegex();
// Return Promise because need to chain operations in unit tests
function toggleBold(editor) {
    return styleByWrapping(editor, '**');
}
function toggleItalic(editor) {
    // let indicator = workspace.getConfiguration('markdown.extension.italic').get<string>('indicator');
    return styleByWrapping(editor, '*');
}
function toggleCodeSpan(editor) {
    return styleByWrapping(editor, '`');
}
function toggleStrikethrough(editor) {
    return styleByWrapping(editor, '~~');
}
var maxHeading = '######';
function toggleHeadingUp(editor) {
    var lineIndex = editor.selection.active.line;
    var lineText = editor.document.lineAt(lineIndex).text;
    return editor.edit(function (editBuilder) {
        if (!lineText.startsWith('#')) { // Not a heading
            editBuilder.insert(new extHostTypes_1.Position(lineIndex, 0), '# ');
        }
        else if (lineText.startsWith(maxHeading)) { // Reset heading at 6 level
            var deleteIndex = lineText.startsWith(maxHeading + ' ') ? maxHeading.length + 1 : maxHeading.length;
            editBuilder.delete(new extHostTypes_1.Range(new extHostTypes_1.Position(lineIndex, 0), new extHostTypes_1.Position(lineIndex, deleteIndex)));
        }
        else {
            editBuilder.insert(new extHostTypes_1.Position(lineIndex, 0), '#');
        }
    });
}
function toggleHeadingDown(editor) {
    var lineIndex = editor.selection.active.line;
    var lineText = editor.document.lineAt(lineIndex).text;
    editor.edit(function (editBuilder) {
        if (lineText.startsWith('# ')) { // Heading level 1
            editBuilder.delete(new extHostTypes_1.Range(new extHostTypes_1.Position(lineIndex, 0), new extHostTypes_1.Position(lineIndex, 2)));
        }
        else if (lineText.startsWith('#')) { // Heading (but not level 1)
            editBuilder.delete(new extHostTypes_1.Range(new extHostTypes_1.Position(lineIndex, 0), new extHostTypes_1.Position(lineIndex, 1)));
        }
        else { // No heading
            editBuilder.insert(new extHostTypes_1.Position(lineIndex, 0), maxHeading + ' ');
        }
    });
}
var MathBlockState;
(function (MathBlockState) {
    // State 1: not in any others states
    MathBlockState[MathBlockState["NONE"] = 0] = "NONE";
    // State 2: $|$
    MathBlockState[MathBlockState["INLINE"] = 1] = "INLINE";
    // State 3: $$ | $$
    MathBlockState[MathBlockState["SINGLE_DISPLAYED"] = 2] = "SINGLE_DISPLAYED";
    // State 4:
    // $$
    // |
    // $$
    MathBlockState[MathBlockState["MULTI_DISPLAYED"] = 3] = "MULTI_DISPLAYED";
})(MathBlockState || (MathBlockState = {}));
function getMathState(editor, cursor) {
    if (getContext(editor, cursor, '$') === '$|$') {
        return MathBlockState.INLINE;
    }
    else if (getContext(editor, cursor, '$$ ', ' $$') === '$$ | $$') {
        return MathBlockState.SINGLE_DISPLAYED;
    }
    else if (editor.document.lineAt(cursor.line).text === ''
        && cursor.line > 0
        && editor.document.lineAt(cursor.line - 1).text === '$$'
        && cursor.line < editor.document.lineCount - 1
        && editor.document.lineAt(cursor.line + 1).text === '$$') {
        return MathBlockState.MULTI_DISPLAYED;
    }
    else {
        return MathBlockState.NONE;
    }
}
/**
 * Modify the document, change from `oldMathBlockState` to `newMathBlockState`.
 * @param editor
 * @param cursor
 * @param oldMathBlockState
 * @param newMathBlockState
 */
function setMathState(editor, cursor, oldMathBlockState, newMathBlockState) {
    // Step 1: Delete old math block.
    editor.edit(function (editBuilder) {
        var rangeToBeDeleted;
        switch (oldMathBlockState) {
            case MathBlockState.NONE:
                rangeToBeDeleted = new extHostTypes_1.Range(cursor, cursor);
                break;
            case MathBlockState.INLINE:
                rangeToBeDeleted = new extHostTypes_1.Range(new extHostTypes_1.Position(cursor.line, cursor.character - 1), new extHostTypes_1.Position(cursor.line, cursor.character + 1));
                break;
            case MathBlockState.SINGLE_DISPLAYED:
                rangeToBeDeleted = new extHostTypes_1.Range(new extHostTypes_1.Position(cursor.line, cursor.character - 3), new extHostTypes_1.Position(cursor.line, cursor.character + 3));
                break;
            case MathBlockState.MULTI_DISPLAYED:
                rangeToBeDeleted = new extHostTypes_1.Range(new extHostTypes_1.Position(cursor.line - 1, 0), new extHostTypes_1.Position(cursor.line + 1, 2));
                break;
        }
        editBuilder.delete(rangeToBeDeleted);
    }).then(function () {
        // Step 2: Insert new math block.
        editor.edit(function (editBuilder) {
            var newCursor = editor.selection.active;
            var stringToBeInserted;
            switch (newMathBlockState) {
                case MathBlockState.NONE:
                    stringToBeInserted = '';
                    break;
                case MathBlockState.INLINE:
                    stringToBeInserted = '$$';
                    break;
                case MathBlockState.SINGLE_DISPLAYED:
                    stringToBeInserted = '$$  $$';
                    break;
                case MathBlockState.MULTI_DISPLAYED:
                    stringToBeInserted = '$$\n\n$$';
                    break;
            }
            editBuilder.insert(newCursor, stringToBeInserted);
        }).then(function () {
            // Step 3: Move cursor to the middle.
            var newCursor = editor.selection.active;
            var newPosition;
            switch (newMathBlockState) {
                case MathBlockState.NONE:
                    newPosition = newCursor;
                    break;
                case MathBlockState.INLINE:
                    newPosition = newCursor.with(newCursor.line, newCursor.character - 1);
                    break;
                case MathBlockState.SINGLE_DISPLAYED:
                    newPosition = newCursor.with(newCursor.line, newCursor.character - 3);
                    break;
                case MathBlockState.MULTI_DISPLAYED:
                    newPosition = newCursor.with(newCursor.line - 1, 0);
                    break;
            }
            editor.selection = new extHostTypes_1.Selection(newPosition, newPosition);
        });
    });
}
var transTable = [
    MathBlockState.NONE,
    MathBlockState.INLINE,
    MathBlockState.MULTI_DISPLAYED,
    MathBlockState.SINGLE_DISPLAYED
];
var reverseTransTable = new (Array.bind.apply(Array, [void 0].concat(transTable)))().reverse();
function toggleMath(editor) {
    _toggleMath(editor, transTable);
}
function toggleMathReverse(editor) {
    _toggleMath(editor, reverseTransTable);
}
function _toggleMath(editor, transTable) {
    if (!editor.selection.isEmpty)
        return;
    var cursor = editor.selection.active;
    var oldMathBlockState = getMathState(editor, cursor);
    var currentStateIndex = transTable.indexOf(oldMathBlockState);
    setMathState(editor, cursor, oldMathBlockState, transTable[(currentStateIndex + 1) % transTable.length]);
}
function toggleList(editor) {
    var doc = editor.document;
    var batchEdit = new extHostTypes_1.WorkspaceEdit();
    editor.selections.forEach(function (selection) {
        if (selection.isEmpty) {
            toggleListSingleLine(doc, selection.active.line, batchEdit);
        }
        else {
            for (var i = selection.start.line; i <= selection.end.line; i++) {
                toggleListSingleLine(doc, i, batchEdit);
            }
        }
    });
    return editor.applyEdit(batchEdit, [])
        .then(function () { return listEditing_1.fixMarker(editor); });
}
function toggleListSingleLine(doc, line, wsEdit) {
    var lineText = doc.lineAt(line).text;
    var indentation = lineText.trim().length === 0 ? lineText.length : lineText.indexOf(lineText.trim());
    var lineTextContent = lineText.substr(indentation);
    if (lineTextContent.startsWith("- ")) {
        wsEdit.replace(doc.uri, new extHostTypes_1.Range(line, indentation, line, indentation + 2), "* ");
    }
    else if (lineTextContent.startsWith("* ")) {
        wsEdit.replace(doc.uri, new extHostTypes_1.Range(line, indentation, line, indentation + 2), "+ ");
    }
    else if (lineTextContent.startsWith("+ ")) {
        wsEdit.replace(doc.uri, new extHostTypes_1.Range(line, indentation, line, indentation + 2), "1. ");
    }
    else if (/^\d\. /.test(lineTextContent)) {
        wsEdit.replace(doc.uri, new extHostTypes_1.Range(line, indentation + 1, line, indentation + 2), ")");
    }
    else if (/^\d\) /.test(lineTextContent)) {
        wsEdit.delete(doc.uri, new extHostTypes_1.Range(line, indentation, line, indentation + 3));
    }
    else {
        wsEdit.insert(doc.uri, new extHostTypes_1.Position(line, indentation), "- ");
    }
}
// async function paste() {
//     const editor = window.activeTextEditor;
//     const selection = editor.selection;
//     if (selection.isSingleLine && !isSingleLink(editor.document.getText(selection))) {
//         const text = await env.clipboard.readText();
//         if (isSingleLink(text)) {
//             return commands.executeCommand("editor.action.insertSnippet", { "snippet": `[$TM_SELECTED_TEXT$0](${text})` });
//         }
//     }
//     return commands.executeCommand("editor.action.clipboardPasteAction");
// }
/**
 * Creates Regexp to check if the text is a link (further detailes in the isSingleLink() documentation).
 *
 * @return Regexp
 */
function createLinkRegex() {
    // unicode letters range(must not be a raw string)
    var ul = '\\u00a1-\\uffff';
    // IP patterns
    var ipv4_re = '(?:25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}';
    var ipv6_re = '\\[[0-9a-f:\\.]+\\]'; // simple regex (in django it is validated additionally)
    // Host patterns
    var hostname_re = '[a-z' + ul + '0-9](?:[a-z' + ul + '0-9-]{0,61}[a-z' + ul + '0-9])?';
    // Max length for domain name labels is 63 characters per RFC 1034 sec. 3.1
    var domain_re = '(?:\\.(?!-)[a-z' + ul + '0-9-]{1,63})*';
    var tld_re = ''
        + '\\.' // dot
        + '(?!-)' // can't start with a dash
        + '(?:[a-z' + ul + '-]{2,63}' // domain label
        + '|xn--[a-z0-9]{1,59})' // or punycode label
        // + '(?<!-)'                            // can't end with a dash
        + '\\.?' // may have a trailing dot
    ;
    var host_re = '(' + hostname_re + domain_re + tld_re + '|localhost)';
    var pattern = ''
        + '^(?:[a-z0-9\\.\\-\\+]*)://' // scheme is not validated (in django it is validated additionally)
        + '(?:[^\\s:@/]+(?::[^\\s:@/]*)?@)?' // user: pass authentication
        + '(?:' + ipv4_re + '|' + ipv6_re + '|' + host_re + ')'
        + '(?::\\d{2,5})?' // port
        + '(?:[/?#][^\\s]*)?' // resource path
        + '$' // end of string
    ;
    return new RegExp(pattern, 'i');
}
/**
 * Checks if the string is a link. The list of link examples you can see in the tests file
 * `test/linksRecognition.test.ts`. This code ported from django's
 * [URLValidator](https://github.com/django/django/blob/2.2b1/django/core/validators.py#L74) with some simplifyings.
 *
 * @param text string to check
 *
 * @return boolean
 */
function isSingleLink(text) {
    return singleLinkRegex.test(text);
}
exports.isSingleLink = isSingleLink;
function styleByWrapping(editor, startPattern, endPattern) {
    if (endPattern == undefined) {
        endPattern = startPattern;
    }
    var selections = editor.selections;
    var batchEdit = new extHostTypes_1.WorkspaceEdit();
    var shifts = [];
    var newSelections = selections.slice();
    selections.forEach(function (selection, i) {
        var cursorPos = selection.active;
        var shift = shifts.map(function (_a) {
            var pos = _a[0], s = _a[1];
            return (selection.start.line == pos.line && selection.start.character >= pos.character) ? s : 0;
        })
            .reduce(function (a, b) { return a + b; }, 0);
        if (selection.isEmpty) {
            // No selected text
            if (startPattern !== '~~' && getContext(editor, cursorPos, startPattern) === startPattern + "text|" + endPattern) {
                // `**text|**` to `**text**|`
                var newCursorPos = cursorPos.with({ character: cursorPos.character + shift + endPattern.length });
                newSelections[i] = new extHostTypes_1.Selection(newCursorPos, newCursorPos);
                return;
            }
            else if (getContext(editor, cursorPos, startPattern) === startPattern + "|" + endPattern) {
                // `**|**` to `|`
                var start = cursorPos.with({ character: cursorPos.character - startPattern.length });
                var end = cursorPos.with({ character: cursorPos.character + endPattern.length });
                wrapRange(editor, batchEdit, shifts, newSelections, i, shift, cursorPos, new extHostTypes_1.Range(start, end), false, startPattern);
            }
            else {
                // Select word under cursor
                var wordRange = editor.document.getWordRangeAtPosition(cursorPos);
                if (wordRange == undefined) {
                    wordRange = selection;
                }
                // One special case: toggle strikethrough in task list
                var currentTextLine = editor.document.lineAt(cursorPos.line);
                if (startPattern === '~~' && /^\s*[\*\+\-] (\[[ x]\] )? */g.test(currentTextLine.text)) {
                    wordRange = currentTextLine.range.with(new extHostTypes_1.Position(cursorPos.line, currentTextLine.text.match(/^\s*[\*\+\-] (\[[ x]\] )? */g)[0].length));
                }
                wrapRange(editor, batchEdit, shifts, newSelections, i, shift, cursorPos, wordRange, false, startPattern);
            }
        }
        else {
            // Text selected
            wrapRange(editor, batchEdit, shifts, newSelections, i, shift, cursorPos, selection, true, startPattern);
        }
    });
    var hasSelection = editor.selection && !editor.selection.isEmpty;
    return editor.applyEdit(batchEdit, newSelections).then(function () {
        if (!hasSelection) {
            editor.selections = newSelections;
        }
    });
}
/**
 * Add or remove `startPattern`/`endPattern` according to the context
 * @param editor
 * @param options The undo/redo behavior
 * @param cursor cursor position
 * @param range range to be replaced
 * @param isSelected is this range selected
 * @param startPtn
 * @param endPtn
 */
function wrapRange(editor, wsEdit, shifts, newSelections, i, shift, cursor, range, isSelected, startPtn, endPtn) {
    if (endPtn == undefined) {
        endPtn = startPtn;
    }
    var text = editor.document.getText(range);
    var prevSelection = newSelections[i];
    var ptnLength = (startPtn + endPtn).length;
    var newCursorPos = cursor.with({ character: cursor.character + shift });
    var newSelection;
    if (isWrapped(text, startPtn)) {
        // remove start/end patterns from range
        wsEdit.replace(editor.document.uri, range, text.substr(startPtn.length, text.length - ptnLength));
        shifts.push([range.end, -ptnLength]);
        // Fix cursor position
        if (!isSelected) {
            if (!range.isEmpty) { // means quick styling
                if (cursor.character == range.end.character) {
                    newCursorPos = cursor.with({ character: cursor.character + shift - ptnLength });
                }
                else {
                    newCursorPos = cursor.with({ character: cursor.character + shift - startPtn.length });
                }
            }
            else { // means `**|**` -> `|`
                newCursorPos = cursor.with({ character: cursor.character + shift + startPtn.length });
            }
            newSelection = new extHostTypes_1.Selection(newCursorPos, newCursorPos);
        }
        else {
            newSelection = new extHostTypes_1.Selection(prevSelection.start.with({ character: prevSelection.start.character + shift }), prevSelection.end.with({ character: prevSelection.end.character + shift - ptnLength }));
        }
    }
    else {
        // add start/end patterns around range
        wsEdit.replace(editor.document.uri, range, startPtn + text + endPtn);
        shifts.push([range.end, ptnLength]);
        // Fix cursor position
        if (!isSelected) {
            if (!range.isEmpty) { // means quick styling
                if (cursor.character == range.end.character) {
                    newCursorPos = cursor.with({ character: cursor.character + shift + ptnLength });
                }
                else {
                    newCursorPos = cursor.with({ character: cursor.character + shift + startPtn.length });
                }
            }
            else { // means `|` -> `**|**`
                newCursorPos = cursor.with({ character: cursor.character + shift + startPtn.length });
            }
            newSelection = new extHostTypes_1.Selection(newCursorPos, newCursorPos);
        }
        else {
            newSelection = new extHostTypes_1.Selection(prevSelection.start.with({ character: prevSelection.start.character + shift }), prevSelection.end.with({ character: prevSelection.end.character + shift + ptnLength }));
        }
    }
    newSelections[i] = newSelection;
}
function isWrapped(text, startPattern, endPattern) {
    if (endPattern == undefined) {
        endPattern = startPattern;
    }
    return text.startsWith(startPattern) && text.endsWith(endPattern);
}
function getContext(editor, cursorPos, startPattern, endPattern) {
    if (endPattern == undefined) {
        endPattern = startPattern;
    }
    var startPositionCharacter = cursorPos.character - startPattern.length;
    var endPositionCharacter = cursorPos.character + endPattern.length;
    if (startPositionCharacter < 0) {
        startPositionCharacter = 0;
    }
    var leftText = editor.document.getText(new extHostTypes_1.Range(cursorPos.line, startPositionCharacter, cursorPos.line, cursorPos.character));
    var rightText = editor.document.getText(new extHostTypes_1.Range(cursorPos.line, cursorPos.character, cursorPos.line, endPositionCharacter));
    if (rightText == endPattern) {
        if (leftText == startPattern) {
            return startPattern + "|" + endPattern;
        }
        else {
            return startPattern + "text|" + endPattern;
        }
    }
    return '|';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(6);
var monaco_editor_1 = __webpack_require__(0);
var extHostTypes_1 = __webpack_require__(1);
var formatting_1 = __webpack_require__(4);
function onShiftTabKey(editor) {
    onTabKey(editor, 'shift');
}
function activateListEditing(editor) {
    var editorContext = "editorTextFocus && !editorReadonly && !suggestWidgetVisible";
    formatting_1.addKeybinding(editor, "onEnterKey", onEnterKey, [monaco_editor_1.KeyCode.Enter], "", editorContext, null);
    formatting_1.addKeybinding(editor, "onCtrlEnterKey", onCtrlEnterKey, [monaco_editor_1.KeyCode.Enter | monaco_editor_1.KeyMod.CtrlCmd], "", editorContext, null);
    formatting_1.addKeybinding(editor, "onShiftEnterKey", onShiftEnterKey, [monaco_editor_1.KeyCode.Enter | monaco_editor_1.KeyMod.Shift], "", editorContext, null);
    formatting_1.addKeybinding(editor, "onTabKey", onTabKey, [monaco_editor_1.KeyCode.Tab], "", editorContext, null);
    formatting_1.addKeybinding(editor, "onShiftTabKey", onShiftTabKey, [monaco_editor_1.KeyCode.Tab | monaco_editor_1.KeyMod.Shift], "", editorContext, null);
    formatting_1.addKeybinding(editor, "onBackspaceKey", onBackspaceKey, [monaco_editor_1.KeyCode.Backspace], "", editorContext, null);
    //
    // context.subscriptions.push(
    //     commands.registerCommand('markdown.extension.checkTaskList', checkTaskList),
    //     commands.registerCommand('markdown.extension.onMoveLineDown', onMoveLineDown),
    //     commands.registerCommand('markdown.extension.onMoveLineUp', onMoveLineUp),
    //     commands.registerCommand('markdown.extension.onCopyLineDown', onCopyLineDown),
    //     commands.registerCommand('markdown.extension.onCopyLineUp', onCopyLineUp),
    //     commands.registerCommand('markdown.extension.onIndentLines', onIndentLines),
    //     commands.registerCommand('markdown.extension.onOutdentLines', onOutdentLines)
    // );
}
exports.activateListEditing = activateListEditing;
function onShiftEnterKey(editor) {
    onEnterKey(editor, 'shift');
}
function onCtrlEnterKey(editor) {
    onEnterKey(editor, 'ctrl');
}
function onEnterKey(editor, modifiers) {
    var cursorPos = editor.selection.active;
    var line = editor.document.lineAt(cursorPos.line);
    var textBeforeCursor = line.text.substr(0, cursorPos.character);
    var textAfterCursor = line.text.substr(cursorPos.character);
    var lineBreakPos = cursorPos;
    if (modifiers == 'ctrl') {
        lineBreakPos = line.range.end;
    }
    if (modifiers == 'shift' || util_1.isInFencedCodeBlock(editor.document, cursorPos.line)) {
        return asNormal(editor, 'enter', modifiers);
    }
    // If it's an empty list item, remove it
    if (/^(>|([-+*]|[0-9]+[.)])( +\[[ x]\])?)$/.test(textBeforeCursor.trim()) && textAfterCursor.trim().length == 0) {
        return editor.edit(function (editBuilder) {
            editBuilder.delete(line.range);
            editBuilder.insert(line.range.end, '\n');
        }).then(function () {
            editor.revealRange(editor.selection);
        }).then(function () { return fixMarker(editor, findNextMarkerLineNumber(editor)); });
    }
    var matches;
    if (/^> /.test(textBeforeCursor)) {
        // Quote block
        return editor.edit(function (editBuilder) {
            editBuilder.insert(lineBreakPos, "\n> ");
        }).then(function () {
            // Fix cursor position
            if (modifiers == 'ctrl' && !cursorPos.isEqual(lineBreakPos)) {
                var newCursorPos = cursorPos.with(line.lineNumber + 1, 2);
                editor.selection = new extHostTypes_1.Selection(newCursorPos, newCursorPos);
            }
        }).then(function () {
            editor.revealRange(editor.selection);
        });
    }
    else if ((matches = /^(\s*[-+*] +(\[[ x]\] +)?)/.exec(textBeforeCursor)) !== null) {
        // Unordered list
        return editor.edit(function (editBuilder) {
            editBuilder.insert(lineBreakPos, "\n" + matches[1].replace('[x]', '[ ]'));
        }).then(function () {
            // Fix cursor position
            if (modifiers == 'ctrl' && !cursorPos.isEqual(lineBreakPos)) {
                var newCursorPos = cursorPos.with(line.lineNumber + 1, matches[1].length);
                editor.selection = new extHostTypes_1.Selection(newCursorPos, newCursorPos);
            }
        }).then(function () {
            editor.revealRange(editor.selection);
        });
    }
    else if ((matches = /^(\s*)([0-9]+)([.)])( +)((\[[ x]\] +)?)/.exec(textBeforeCursor)) !== null) {
        // Ordered list
        var config = editor.getConfiguration('markdown.extension.orderedList').get('marker');
        var marker = '1';
        var leadingSpace = matches[1];
        var previousMarker = matches[2];
        var delimiter = matches[3];
        var trailingSpace = matches[4];
        var gfmCheckbox = matches[5].replace('[x]', '[ ]');
        var textIndent = (previousMarker + delimiter + trailingSpace).length;
        if (config == 'ordered') {
            marker = String(Number(previousMarker) + 1);
        }
        // Add enough trailing spaces so that the text is aligned with the previous list item, but always keep at least one space
        trailingSpace = " ".repeat(Math.max(1, textIndent - (marker + delimiter).length));
        var toBeAdded_1 = leadingSpace + marker + delimiter + trailingSpace + gfmCheckbox;
        return editor.edit(function (editBuilder) {
            editBuilder.insert(lineBreakPos, "\n" + toBeAdded_1);
        }, { undoStopBefore: true, undoStopAfter: false }).then(function () {
            // Fix cursor position
            if (modifiers == 'ctrl' && !cursorPos.isEqual(lineBreakPos)) {
                var newCursorPos = cursorPos.with(line.lineNumber + 1, toBeAdded_1.length);
                editor.selection = new extHostTypes_1.Selection(newCursorPos, newCursorPos);
            }
        }).then(function () { return fixMarker(editor); }).then(function () {
            editor.revealRange(editor.selection);
        });
    }
    else {
        return asNormal(editor, 'enter', modifiers);
    }
}
function onTabKey(editor, modifiers) {
    var cursorPos = editor.selection.start;
    var lineText = editor.document.lineAt(cursorPos.line).text;
    if (util_1.isInFencedCodeBlock(editor.document, cursorPos.line)) {
        return asNormal(editor, 'tab', modifiers);
    }
    var match = /^\s*([-+*]|[0-9]+[.)]) +(\[[ x]\] +)?/.exec(lineText);
    if (match
        && (modifiers === 'shift'
            || !editor.selection.isEmpty
            || editor.selection.isEmpty && cursorPos.character <= match[0].length)) {
        if (modifiers === 'shift') {
            return outdent(editor).then(function () { return fixMarker(editor); });
        }
        else {
            return indent(editor).then(function () { return fixMarker(editor); });
        }
    }
    else {
        return asNormal(editor, 'tab', modifiers);
    }
}
function onBackspaceKey(editor) {
    var cursor = editor.selection.active;
    var document = editor.document;
    var textBeforeCursor = document.lineAt(cursor.line).text.substr(0, cursor.character);
    if (util_1.isInFencedCodeBlock(document, cursor.line)) {
        return asNormal(editor, 'backspace');
    }
    if (!editor.selection.isEmpty) {
        return asNormal(editor, 'backspace').then(function () { return fixMarker(editor, findNextMarkerLineNumber(editor)); });
    }
    else if (/^\s+([-+*]|[0-9]+[.)]) $/.test(textBeforeCursor)) {
        // e.g. textBeforeCursor === `  - `, `   1. `
        return outdent(editor).then(function () { return fixMarker(editor); });
    }
    else if (/^([-+*]|[0-9]+[.)]) $/.test(textBeforeCursor)) {
        // e.g. textBeforeCursor === `- `, `1. `
        return editor.edit(function (editBuilder) {
            editBuilder.replace(new extHostTypes_1.Range(cursor.with({ character: 0 }), cursor), ' '.repeat(textBeforeCursor.length));
        }).then(function () { return fixMarker(editor, findNextMarkerLineNumber(editor)); });
    }
    else if (/^\s*([-+*]|[0-9]+[.)]) +(\[[ x]\] )$/.test(textBeforeCursor)) {
        // e.g. textBeforeCursor === `- [ ]`, `1. [x]`, `  - [x]`
        return deleteRange(editor, new extHostTypes_1.Range(cursor.with({ character: textBeforeCursor.length - 4 }), cursor)).then(function () { return fixMarker(editor, findNextMarkerLineNumber(editor)); });
    }
    else {
        return asNormal(editor, 'backspace');
    }
}
function asNormal(editor, key, modifiers) {
    switch (key) {
        case 'enter':
            if (modifiers === 'ctrl') {
                return editor.executeCommand('editor.action.insertLineAfter');
            }
            else {
                return editor.executeCommand('type', { source: 'keyboard', text: '\n' });
            }
        case 'tab':
            if (editor.getConfiguration('emmet').get('triggerExpansionOnTab')) {
                return editor.executeCommand('editor.emmet.action.expandAbbreviation');
            }
            else if (modifiers === 'shift') {
                return editor.executeCommand('editor.action.outdentLines');
            }
            else {
                return editor.executeCommand('tab');
            }
        case 'backspace':
            return editor.executeCommand('deleteLeft');
    }
}
/**
 * If
 *
 * 1. it is not the first line
 * 2. there is a Markdown list item before this line
 *
 * then indent the current line to align with the previous list item.
 */
function indent(editor) {
    if (editor.getConfiguration("markdown.extension.list").get("indentationSize") === "adaptive") {
        try {
            var selection = editor.selection;
            var indentationSize = tryDetermineIndentationSize(editor, selection.start.line, editor.document.lineAt(selection.start.line).firstNonWhitespaceCharacterIndex);
            var edit = new extHostTypes_1.WorkspaceEdit();
            for (var i = selection.start.line; i <= selection.end.line; i++) {
                if (i === selection.end.line && !selection.isEmpty && selection.end.character === 0) {
                    break;
                }
                if (editor.document.lineAt(i).text.length !== 0) {
                    edit.insert(editor.document.uri, new extHostTypes_1.Position(i, 0), ' '.repeat(indentationSize));
                }
            }
            return editor.applyEdit(edit);
        }
        catch (error) {
        }
    }
    return editor.executeCommand('editor.action.indentLines');
}
/**
 * Similar to `indent`-function
 */
function outdent(editor) {
    if (editor.getConfiguration("markdown.extension.list").get("indentationSize") === "adaptive") {
        try {
            var selection = editor.selection;
            var indentationSize = tryDetermineIndentationSize(editor, selection.start.line, editor.document.lineAt(selection.start.line).firstNonWhitespaceCharacterIndex);
            var edit = new extHostTypes_1.WorkspaceEdit();
            for (var i = selection.start.line; i <= selection.end.line; i++) {
                if (i === selection.end.line && !selection.isEmpty && selection.end.character === 0) {
                    break;
                }
                var lineText = editor.document.lineAt(i).text;
                var maxOutdentSize = void 0;
                if (lineText.trim().length === 0) {
                    maxOutdentSize = lineText.length;
                }
                else {
                    maxOutdentSize = editor.document.lineAt(i).firstNonWhitespaceCharacterIndex;
                }
                if (maxOutdentSize > 0) {
                    edit.delete(editor.document.uri, new extHostTypes_1.Range(i, 0, i, Math.min(indentationSize, maxOutdentSize)));
                }
            }
            return editor.applyEdit(edit);
        }
        catch (error) {
        }
    }
    return editor.executeCommand('editor.action.outdentLines');
}
function tryDetermineIndentationSize(editor, line, currentIndentation) {
    while (--line >= 0) {
        var lineText = editor.document.lineAt(line).text;
        var matches = void 0;
        if ((matches = /^(\s*)(([-+*]|[0-9]+[.)]) +)(\[[ x]\] +)?/.exec(lineText)) !== null) {
            if (matches[1].length <= currentIndentation) {
                return matches[2].length;
            }
        }
    }
    throw "No previous Markdown list item";
}
/**
 * Returns the line number of the next ordered list item starting either from
 * the specified line or the beginning of the current selection.
 */
function findNextMarkerLineNumber(editor, line) {
    if (line === undefined) {
        // Use start.line instead of active.line so that we can find the first
        // marker following either the cursor or the entire selected range
        line = editor.selection.start.line;
    }
    while (line < editor.document.lineCount) {
        var lineText = editor.document.lineAt(line).text;
        if (/^\s*[0-9]+[.)] +/.exec(lineText) !== null) {
            return line;
        }
        line++;
    }
    return undefined;
}
/**
 * Looks for the previous ordered list marker at the same indentation level
 * and returns the marker number that should follow it.
 *
 * @returns the fixed marker number
 */
function lookUpwardForMarker(editor, line, currentIndentation) {
    while (--line >= 0) {
        var lineText = editor.document.lineAt(line).text;
        var matches = void 0;
        if ((matches = /^(\s*)(([0-9]+)[.)] +)/.exec(lineText)) !== null) {
            var leadingSpace = matches[1];
            var marker = matches[3];
            if (leadingSpace.length === currentIndentation) {
                return Number(marker) + 1;
            }
            else if ((!leadingSpace.includes('\t') && leadingSpace.length + matches[2].length <= currentIndentation)
                || leadingSpace.includes('\t') && leadingSpace.length + 1 <= currentIndentation) {
                return 1;
            }
        }
        else if ((matches = /^(\s*)\S/.exec(lineText)) !== null) {
            if (matches[1].length <= currentIndentation) {
                break;
            }
        }
    }
    return 1;
}
/**
 * Fix ordered list marker *iteratively* starting from current line
 */
function fixMarker(editor, line) {
    // if (!workspace.getConfiguration('markdown.extension.orderedList').get<boolean>('autoRenumber')) return;
    // if (workspace.getConfiguration('markdown.extension.orderedList').get<string>('marker') == 'one') return;
    if (line === undefined) {
        // Use either the first line containing an ordered list marker within the selection or the active line
        line = findNextMarkerLineNumber(editor);
        if (line === undefined || line > editor.selection.end.line) {
            line = editor.selection.active.line;
        }
    }
    if (line < 0 || editor.document.lineCount <= line) {
        return;
    }
    var currentLineText = editor.document.lineAt(line).text;
    var matches;
    if ((matches = /^(\s*)([0-9]+)([.)])( +)/.exec(currentLineText)) !== null) { // ordered list
        var leadingSpace_1 = matches[1];
        var marker_1 = matches[2];
        var delimiter_1 = matches[3];
        var trailingSpace = matches[4];
        var fixedMarker = lookUpwardForMarker(editor, line, leadingSpace_1.length);
        var listIndent_1 = marker_1.length + delimiter_1.length + trailingSpace.length;
        var fixedMarkerString_1 = String(fixedMarker);
        return editor.edit(function (editBuilder) {
            if (marker_1 === fixedMarkerString_1) {
                return;
            }
            // Add enough trailing spaces so that the text is still aligned at the same indentation level as it was previously, but always keep at least one space
            fixedMarkerString_1 += delimiter_1 + " ".repeat(Math.max(1, listIndent_1 - (fixedMarkerString_1 + delimiter_1).length));
            editBuilder.replace(new extHostTypes_1.Range(line, leadingSpace_1.length, line, leadingSpace_1.length + listIndent_1), fixedMarkerString_1);
        }, { undoStopBefore: false, undoStopAfter: false }).then(function () {
            var nextLine = line + 1;
            var indentString = " ".repeat(listIndent_1);
            while (editor.document.lineCount > nextLine) {
                var nextLineText = editor.document.lineAt(nextLine).text;
                if (/^\s*[0-9]+[.)] +/.test(nextLineText)) {
                    return fixMarker(editor, nextLine);
                }
                else if (/^\s*$/.test(nextLineText)) {
                    nextLine++;
                }
                else if (listIndent_1 <= 4 && !nextLineText.startsWith(indentString)) {
                    return;
                }
                else {
                    nextLine++;
                }
            }
        });
    }
}
exports.fixMarker = fixMarker;
function deleteRange(editor, range) {
    return editor.edit(function (editBuilder) {
        editBuilder.delete(range);
    }, 
    // We will enable undoStop after fixing markers
    { undoStopBefore: true, undoStopAfter: false });
}
// function checkTaskList(editor: TextEditor) {
//     let cursorPos = editor.selection.active;
//     let line = editor.document.lineAt(cursorPos.line).text;
//
//     let matches: RegExpExecArray;
//     if (matches = /^(\s*([-+*]|[0-9]+[.)]) +\[) \]/.exec(line)) {
//         return editor.edit((editBuilder:TextEditorEdit) => {
//             editBuilder.replace(new Range(cursorPos.with({ character: matches[1].length }), cursorPos.with({ character: matches[1].length + 1 })), 'x');
//         });
//     } else if (matches = /^(\s*([-+*]|[0-9]+[.)]) +\[)x\]/.exec(line)) {
//         return editor.edit((editBuilder:TextEditorEdit) => {
//             editBuilder.replace(new Range(cursorPos.with({ character: matches[1].length }), cursorPos.with({ character: matches[1].length + 1 })), ' ');
//         });
//     }
// }
// function onMoveLineUp() {
//     return commands.executeCommand('editor.action.moveLinesUpAction')
//         .then(() => fixMarker());
// }
//
// function onMoveLineDown() {
//     return commands.executeCommand('editor.action.moveLinesDownAction')
//         .then(() => fixMarker(findNextMarkerLineNumber(window.activeTextEditor.selection.start.line - 1)));
// }
//
// function onCopyLineUp() {
//     return commands.executeCommand('editor.action.copyLinesUpAction')
//         .then(() => fixMarker());
// }
//
// function onCopyLineDown() {
//     return commands.executeCommand('editor.action.copyLinesDownAction')
//         .then(() => fixMarker());
// }
//
// function onIndentLines() {
//     return indent().then(() => fixMarker());
// }
//
// function onOutdentLines() {
//     return outdent().then(() => fixMarker());
// }
function deactivate() {
}
exports.deactivate = deactivate;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extHostTypes_1 = __webpack_require__(1);
function isInFencedCodeBlock(doc, lineNum) {
    var textBefore = doc.getText(new extHostTypes_1.Range(new extHostTypes_1.Position(0, 0), new extHostTypes_1.Position(lineNum, 0)));
    var matches = textBefore.match(/^```[\w ]*$/gm);
    if (matches == null) {
        return false;
    }
    else {
        return matches.length % 2 != 0;
    }
}
exports.isInFencedCodeBlock = isInFencedCodeBlock;
/* ┌─────────────────┐
   │ Text Extraction │
   └─────────────────┘ */
/**
 * For example: [text](link) -> text
 * @param text
 */
function extractText(text) {
    return textInHtml(textInMd(text));
}
exports.extractText = extractText;
// [text](link) -> text. In case there are links in heading (#83)
// 💩
function textInMd(text) {
    return text.replace(/\[([^\]]+?)\]\([^\)]+?\)/g, function (_, g1) { return g1; });
}
// Convert HTML entities (#175)
// Strip HTML tags (#179)
// 💩
function textInHtml(text) {
    return text.replace(/(&emsp;)/g, function (_) { return ' '; })
        .replace(/(<!--[^>]*?-->)/g, '') // remove <!-- HTML comments -->
        .replace(/<span[^>]*>(.*?)<\/span>/g, function (_, g1) { return g1; }) // remove <span>
        .replace(/ +/g, ' ');
}
/* ┌─────────┐
   │ Slugify │
   └─────────┘ */
// Converted from `/[^\p{Word}\- ]/u`
// `\p{Word}` => ASCII plus Letter (Ll/Lm/Lo/Lt/Lu), Mark (Mc/Me/Mn), Number (Nd/Nl/No), Connector_Punctuation (Pc)
// Using <https://apps.timwhitlock.info/js/regex>
var PUNCTUATION_REGEXP = /[^0-9A-Z_a-z\- ª²-³µ¹-º¼-¾À-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ\u0300-ʹͶ-ͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ\u0483-ԣԱ-Ֆՙա-և\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7א-תװ-ײ\u0610-\u061aء-\u065e٠-٩ٮ-ۓە-\u06dc\u06de-\u06e8\u06ea-ۼۿܐ-\u074aݍ-ޱ߀-ߵߺ\u0901-ह\u093c-\u094dॐ-\u0954क़-\u0963०-९ॱ-ॲॻ-ॿ\u0981-\u0983অ-ঌএ-ঐও-নপ-রলশ-হ\u09bc-\u09c4\u09c7-\u09c8\u09cb-ৎ\u09d7ড়-ঢ়য়-\u09e3০-ৱ৴-৹\u0a01-\u0a03ਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹ\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51ਖ਼-ੜਫ਼੦-\u0a75\u0a81-\u0a83અ-ઍએ-ઑઓ-નપ-રલ-ળવ-હ\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acdૐૠ-\u0ae3૦-૯\u0b01-\u0b03ଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହ\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57ଡ଼-ଢ଼ୟ-\u0b63୦-୯ୱ\u0b82-ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹ\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcdௐ\u0bd7௦-௲\u0c01-\u0c03అ-ఌఎ-ఐఒ-నప-ళవ-హఽ-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56ౘ-ౙౠ-\u0c63౦-౯౸-౾\u0c82-\u0c83ಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6ೞೠ-\u0ce3೦-೯\u0d02-\u0d03അ-ഌഎ-ഐഒ-നപ-ഹഽ-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57ൠ-\u0d63൦-൵ൺ-ൿ\u0d82-\u0d83අ-ඖක-නඳ-රලව-ෆ\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2-\u0df3ก-\u0e3aเ-\u0e4e๐-๙ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-\u0eb9\u0ebb-ຽເ-ໄໆ\u0ec8-\u0ecd໐-໙ໜ-ໝༀ\u0f18-\u0f19༠-༳\u0f35\u0f37\u0f39\u0f3e-ཇཉ-ཬ\u0f71-\u0f84\u0f86-ྋ\u0f90-\u0f97\u0f99-\u0fbc\u0fc6က-၉ၐ-႙Ⴀ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ\u135f፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪ\u16ee-\u16f0ᜀ-ᜌᜎ-\u1714ᜠ-\u1734ᝀ-\u1753ᝠ-ᝬᝮ-ᝰ\u1772-\u1773ក-ឳ\u17b6-\u17d3ៗៜ-\u17dd០-៩៰-៹\u180b-\u180d᠐-᠙ᠠ-ᡷᢀ-ᢪᤀ-ᤜ\u1920-\u192b\u1930-\u193b᥆-ᥭᥰ-ᥴᦀ-ᦩ\u19b0-\u19c9᧐-᧙ᨀ-\u1a1b\u1b00-ᭋ᭐-᭙\u1b6b-\u1b73\u1b80-\u1baaᮮ-᮹ᰀ-\u1c37᱀-᱉ᱍ-ᱽᴀ-\u1de6\u1dfe-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‿-⁀⁔⁰-ⁱ⁴-⁹ⁿ-₉ₐ-ₔ\u20d0-\u20f0ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎ⅓-\u2188①-⒛⓪-⓿❶-➓Ⰰ-Ⱞⰰ-ⱞⱠ-Ɐⱱ-ⱽⲀ-ⳤ⳽ⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ\u2de0-\u2dffⸯ々-\u3007\u3021-\u302f〱-〵\u3038-〼ぁ-ゖ\u3099-\u309aゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎ㆒-㆕ㆠ-ㆷㇰ-ㇿ㈠-㈩㉑-㉟㊀-㊉㊱-㊿㐀-䶵一-鿃ꀀ-ꒌꔀ-ꘌꘐ-ꘫꙀ-ꙟꙢ-\ua672\ua67c-\ua67dꙿ-ꚗꜗ-ꜟꜢ-ꞈꞋ-ꞌꟻ-\ua827ꡀ-ꡳ\ua880-\ua8c4꣐-꣙꤀-\ua92dꤰ-\ua953ꨀ-\uaa36ꩀ-\uaa4d꩐-꩙가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ\ufe00-\ufe0f\ufe20-\ufe26︳-︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]/gu;
function slugify(heading) {
    // GitHub slugify function
    // <https://github.com/jch/html-pipeline/blob/master/lib/html/pipeline/toc_filter.rb>
    var slug = extractText(heading.trim())
        // .replace(/[A-Z]/g, match => match.toLowerCase()) // only downcase ASCII region
        .replace(PUNCTUATION_REGEXP, '')
        .replace(/ /g, '-');
    // if (doDowncase) {
    slug = slug.replace(/[A-Z]/g, function (match) { return match.toLowerCase(); });
    // }
    return slug;
}
exports.slugify = slugify;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//copied from ../completion.ts
//TODO: refactor?
var accents1 = [
    'tilde', 'mathring',
    'widetilde', 'overgroup',
    'utilde', 'undergroup',
    'acute', 'vec', 'Overrightarrow',
    'bar', 'overleftarrow', 'overrightarrow',
    'breve', 'underleftarrow', 'underrightarrow',
    'check', 'overleftharpoon', 'overrightharpoon',
    'dot', 'overleftrightarrow', 'overbrace',
    'ddot', 'underleftrightarrow', 'underbrace',
    'grave', 'overline', 'overlinesegment',
    'hat', 'underline', 'underlinesegment',
    'widehat', 'widecheck'
];
var delimiters0 = [
    'lparen', 'rparen', 'lceil', 'rceil', 'uparrow',
    'lbrack', 'rbrack', 'lfloor', 'rfloor', 'downarrow', 'updownarrow',
    'langle', 'rangle', 'lgroup', 'rgroup', 'Uparrow',
    'vert', 'ulcorner', 'urcorner', 'Downarrow',
    'Vert', 'llcorner', 'lrcorner', 'Updownarrow',
    'lvert', 'rvert', 'lVert', 'rVert', 'backslash',
    'lang', 'rang', 'lt', 'gt'
];
var delimeterSizing0 = [
    'left', 'big', 'bigl', 'bigm', 'bigr',
    'middle', 'Big', 'Bigl', 'Bigm', 'Bigr',
    'right', 'bigg', 'biggl', 'biggm', 'biggr',
    'Bigg', 'Biggl', 'Biggm', 'Biggr'
];
var greekLetters0 = [
    'Alpha', 'Beta', 'Gamma', 'Delta',
    'Epsilon', 'Zeta', 'Eta', 'Theta',
    'Iota', 'Kappa', 'Lambda', 'Mu',
    'Nu', 'Xi', 'Omicron', 'Pi',
    'Sigma', 'Tau', 'Upsilon', 'Phi',
    'Chi', 'Psi', 'Omega',
    'varGamma', 'varDelta', 'varTheta', 'varLambda',
    'varXi', 'varPi', 'varSigma', 'varUpsilon',
    'varPhi', 'varPsi', 'varOmega',
    'alpha', 'beta', 'gamma', 'delta',
    'epsilon', 'zeta', 'eta', 'theta',
    'iota', 'kappa', 'lambda', 'mu',
    'nu', 'xi', 'omicron', 'pi',
    'rho', 'sigma', 'tau', 'upsilon',
    'phi', 'chi', 'psi', 'omega',
    'varepsilon', 'varkappa', 'vartheta', 'thetasym',
    'varpi', 'varrho', 'varsigma', 'varphi',
    'digamma'
];
var otherLetters0 = [
    'imath', 'nabla', 'Im', 'Reals',
    'jmath', 'partial', 'image', 'wp',
    'aleph', 'Game', 'Bbbk', 'weierp',
    'alef', 'Finv', 'N', 'Z',
    'alefsym', 'cnums', 'natnums',
    'beth', 'Complex', 'R',
    'gimel', 'ell', 'Re',
    'daleth', 'hbar', 'real',
    'eth', 'hslash', 'reals'
];
var annotation1 = [
    'cancel', 'overbrace',
    'bcancel', 'underbrace',
    'xcancel', 'not =',
    'sout', 'boxed',
    'tag', 'tag*'
];
var verticalLayout0 = ['atop'];
var verticalLayout2 = ['stackrel', 'overset', 'underset', 'raisebox'];
var overlap1 = ['mathllap', 'mathrlap', 'mathclap', 'llap', 'rlap', 'clap', 'smash'];
var spacing0 = [
    'thinspace', 'medspace', 'thickspace', 'enspace',
    'quad', 'qquad', 'negthinspace', 'negmedspace',
    'nobreakspace', 'negthickspace'
];
var spacing1 = [
    'kern', 'mkern', 'mskip', 'hskip',
    'hspace', 'hspace*', 'phantom', 'hphantom', 'vphantom'
];
var logicAndSetTheory0 = [
    'forall', 'complement', 'therefore', 'emptyset',
    'exists', 'subset', 'because', 'empty',
    'exist', 'supset', 'mapsto', 'varnothing',
    'nexists', 'mid', 'to', 'implies',
    'in', 'land', 'gets', 'impliedby',
    'isin', 'lor', 'leftrightarrow', 'iff',
    'notin', 'ni', 'notni', 'neg', 'lnot'
];
var bigOperators0 = [
    'sum', 'prod', 'bigotimes', 'bigvee',
    'int', 'coprod', 'bigoplus', 'bigwedge',
    'iint', 'intop', 'bigodot', 'bigcap',
    'iiint', 'smallint', 'biguplus', 'bigcup',
    'oint', 'oiint', 'oiiint', 'bigsqcup'
];
var binaryOperators0 = [
    'cdot', 'gtrdot', 'pmod',
    'cdotp', 'intercal', 'pod',
    'centerdot', 'land', 'rhd',
    'circ', 'leftthreetimes', 'rightthreetimes',
    'amalg', 'circledast', 'ldotp', 'rtimes',
    'And', 'circledcirc', 'lor', 'setminus',
    'ast', 'circleddash', 'lessdot', 'smallsetminus',
    'barwedge', 'Cup', 'lhd', 'sqcap',
    'bigcirc', 'cup', 'ltimes', 'sqcup',
    'bmod', 'curlyvee', 'times',
    'boxdot', 'curlywedge', 'mp', 'unlhd',
    'boxminus', 'div', 'odot', 'unrhd',
    'boxplus', 'divideontimes', 'ominus', 'uplus',
    'boxtimes', 'dotplus', 'oplus', 'vee',
    'bullet', 'doublebarwedge', 'otimes', 'veebar',
    'Cap', 'doublecap', 'oslash', 'wedge',
    'cap', 'doublecup', 'pm', 'plusmn', 'wr'
];
var fractions0 = ['over', 'above'];
var fractions2 = ['frac', 'dfrac', 'tfrac', 'cfrac', 'genfrac'];
var binomialCoefficients0 = ['choose'];
var binomialCoefficients2 = ['binom', 'dbinom', 'tbinom', 'brace', 'brack'];
var mathOperators0 = [
    'arcsin', 'cotg', 'ln', 'det',
    'arccos', 'coth', 'log', 'gcd',
    'arctan', 'csc', 'sec', 'inf',
    'arctg', 'ctg', 'sin', 'lim',
    'arcctg', 'cth', 'sinh', 'liminf',
    'arg', 'deg', 'sh', 'limsup',
    'ch', 'dim', 'tan', 'max',
    'cos', 'exp', 'tanh', 'min',
    'cosec', 'hom', 'tg', 'Pr',
    'cosh', 'ker', 'th', 'sup',
    'cot', 'lg', 'argmax',
    'argmin', 'limits'
];
var mathOperators1 = ['operatorname'];
var sqrt1 = ['sqrt'];
var relations0 = [
    'eqcirc', 'lesseqgtr', 'sqsupset',
    'eqcolon', 'lesseqqgtr', 'sqsupseteq',
    'Eqcolon', 'lessgtr', 'Subset',
    'eqqcolon', 'lesssim', 'subset',
    'approx', 'Eqqcolon', 'll', 'subseteq', 'sube',
    'approxeq', 'eqsim', 'lll', 'subseteqq',
    'asymp', 'eqslantgtr', 'llless', 'succ',
    'backepsilon', 'eqslantless', 'lt', 'succapprox',
    'backsim', 'equiv', 'mid', 'succcurlyeq',
    'backsimeq', 'fallingdotseq', 'models', 'succeq',
    'between', 'frown', 'multimap', 'succsim',
    'bowtie', 'ge', 'owns', 'Supset',
    'bumpeq', 'geq', 'parallel', 'supset',
    'Bumpeq', 'geqq', 'perp', 'supseteq',
    'circeq', 'geqslant', 'pitchfork', 'supseteqq',
    'colonapprox', 'gg', 'prec', 'thickapprox',
    'Colonapprox', 'ggg', 'precapprox', 'thicksim',
    'coloneq', 'gggtr', 'preccurlyeq', 'trianglelefteq',
    'Coloneq', 'gt', 'preceq', 'triangleq',
    'coloneqq', 'gtrapprox', 'precsim', 'trianglerighteq',
    'Coloneqq', 'gtreqless', 'propto', 'varpropto',
    'colonsim', 'gtreqqless', 'risingdotseq', 'vartriangle',
    'Colonsim', 'gtrless', 'shortmid', 'vartriangleleft',
    'cong', 'gtrsim', 'shortparallel', 'vartriangleright',
    'curlyeqprec', 'in', 'sim', 'vcentcolon',
    'curlyeqsucc', 'Join', 'simeq', 'vdash',
    'dashv', 'le', 'smallfrown', 'vDash',
    'dblcolon', 'leq', 'smallsmile', 'Vdash',
    'doteq', 'leqq', 'smile', 'Vvdash',
    'Doteq', 'leqslant', 'sqsubset',
    'doteqdot', 'lessapprox', 'sqsubseteq'
];
var negatedRelations0 = [
    'gnapprox', 'ngeqslant', 'nsubseteq', 'precneqq',
    'gneq', 'ngtr', 'nsubseteqq', 'precnsim',
    'gneqq', 'nleq', 'nsucc', 'subsetneq',
    'gnsim', 'nleqq', 'nsucceq', 'subsetneqq',
    'gvertneqq', 'nleqslant', 'nsupseteq', 'succnapprox',
    'lnapprox', 'nless', 'nsupseteqq', 'succneqq',
    'lneq', 'nmid', 'ntriangleleft', 'succnsim',
    'lneqq', 'notin', 'ntrianglelefteq', 'supsetneq',
    'lnsim', 'notni', 'ntriangleright', 'supsetneqq',
    'lvertneqq', 'nparallel', 'ntrianglerighteq', 'varsubsetneq',
    'ncong', 'nprec', 'nvdash', 'varsubsetneqq',
    'ne', 'npreceq', 'nvDash', 'varsupsetneq',
    'neq', 'nshortmid', 'nVDash', 'varsupsetneqq',
    'ngeq', 'nshortparallel', 'nVdash',
    'ngeqq', 'nsim', 'precnapprox'
];
var arrows0 = [
    'circlearrowleft', 'leftharpoonup', 'rArr',
    'circlearrowright', 'leftleftarrows', 'rarr',
    'curvearrowleft', 'leftrightarrow', 'restriction',
    'curvearrowright', 'Leftrightarrow', 'rightarrow',
    'Darr', 'leftrightarrows', 'Rightarrow',
    'dArr', 'leftrightharpoons', 'rightarrowtail',
    'darr', 'leftrightsquigarrow', 'rightharpoondown',
    'dashleftarrow', 'Lleftarrow', 'rightharpoonup',
    'dashrightarrow', 'longleftarrow', 'rightleftarrows',
    'downarrow', 'Longleftarrow', 'rightleftharpoons',
    'Downarrow', 'longleftrightarrow', 'rightrightarrows',
    'downdownarrows', 'Longleftrightarrow', 'rightsquigarrow',
    'downharpoonleft', 'longmapsto', 'Rrightarrow',
    'downharpoonright', 'longrightarrow', 'Rsh',
    'gets', 'Longrightarrow', 'searrow',
    'Harr', 'looparrowleft', 'swarrow',
    'hArr', 'looparrowright', 'to',
    'harr', 'Lrarr', 'twoheadleftarrow',
    'hookleftarrow', 'lrArr', 'twoheadrightarrow',
    'hookrightarrow', 'lrarr', 'Uarr',
    'iff', 'Lsh', 'uArr',
    'impliedby', 'mapsto', 'uarr',
    'implies', 'nearrow', 'uparrow',
    'Larr', 'nleftarrow', 'Uparrow',
    'lArr', 'nLeftarrow', 'updownarrow',
    'larr', 'nleftrightarrow', 'Updownarrow',
    'leadsto', 'nLeftrightarrow', 'upharpoonleft',
    'leftarrow', 'nrightarrow', 'upharpoonright',
    'Leftarrow', 'nRightarrow', 'upuparrows',
    'leftarrowtail', 'nwarrow', 'leftharpoondown', 'Rarr'
];
var extensibleArrows1 = [
    'xleftarrow', 'xrightarrow',
    'xLeftarrow', 'xRightarrow',
    'xleftrightarrow', 'xLeftrightarrow',
    'xhookleftarrow', 'xhookrightarrow',
    'xtwoheadleftarrow', 'xtwoheadrightarrow',
    'xleftharpoonup', 'xrightharpoonup',
    'xleftharpoondown', 'xrightharpoondown',
    'xleftrightharpoons', 'xrightleftharpoons',
    'xtofrom', 'xmapsto',
    'xlongequal'
];
var classAssignment1 = [
    'mathbin', 'mathclose', 'mathinner', 'mathop',
    'mathopen', 'mathord', 'mathpunct', 'mathrel'
];
var color2 = ['color', 'textcolor', 'colorbox'];
var font0 = ['rm', 'bf', 'it', 'sf', 'tt'];
var font1 = [
    'mathrm', 'mathbf', 'mathit',
    'mathnormal', 'textbf', 'textit',
    'textrm', 'bold', 'Bbb',
    'textnormal', 'boldsymbol', 'mathbb',
    'text', 'bm', 'frak',
    'mathsf', 'mathtt', 'mathfrak',
    'textsf', 'texttt', 'mathcal', 'mathscr'
];
var size0 = [
    'Huge', 'huge', 'LARGE', 'Large', 'large',
    'normalsize', 'small', 'footnotesize', 'scriptsize', 'tiny'
];
var style0 = [
    'displaystyle', 'textstyle', 'scriptstyle', 'scriptscriptstyle',
    'limits', 'nolimits', 'verb'
];
var symbolsAndPunctuation0 = [
    'cdots', 'LaTeX',
    'ddots', 'TeX',
    'ldots', 'nabla',
    'vdots', 'infty',
    'dotsb', 'infin',
    'dotsc', 'checkmark',
    'dotsi', 'dag',
    'dotsm', 'dagger',
    'dotso',
    'sdot', 'ddag',
    'mathellipsis', 'ddagger',
    'Box', 'Dagger',
    'lq', 'square', 'angle',
    'blacksquare', 'measuredangle',
    'rq', 'triangle', 'sphericalangle',
    'triangledown', 'top',
    'triangleleft', 'bot',
    'triangleright',
    'colon', 'bigtriangledown',
    'backprime', 'bigtriangleup', 'pounds',
    'prime', 'blacktriangle', 'mathsterling',
    'blacktriangledown',
    'blacktriangleleft', 'yen',
    'blacktriangleright', 'surd',
    'diamond', 'degree',
    'Diamond',
    'lozenge', 'mho',
    'blacklozenge', 'diagdown',
    'star', 'diagup',
    'bigstar', 'flat',
    'clubsuit', 'natural',
    'copyright', 'clubs', 'sharp',
    'circledR', 'diamondsuit', 'heartsuit',
    'diamonds', 'hearts',
    'circledS', 'spadesuit', 'spades',
    'maltese'
];
exports._c1 = Array.from(new Set(delimiters0.concat(delimeterSizing0, greekLetters0, otherLetters0, spacing0, verticalLayout0, logicAndSetTheory0, bigOperators0, binaryOperators0, binomialCoefficients0, fractions0, mathOperators0, relations0, negatedRelations0, arrows0, font0, size0, style0, symbolsAndPunctuation0)));
exports._c2 = Array.from(new Set(accents1.concat(annotation1, overlap1, spacing1, mathOperators1, sqrt1, extensibleArrows1, font1, classAssignment1)));
exports._c3 = Array.from(new Set(verticalLayout2.concat(binomialCoefficients2, fractions2, color2)));
exports._begin = ['begin', 'end'];
exports.begin_args = ['aligned', 'alignedat', 'array', 'bmatrix', 'Bmatrix', 'cases',
    'darray', 'dcases', 'gathered', 'matrix', 'pmatrix', 'vmatrix', 'Vmatrix'];
exports.all = exports._c1.concat(exports._c2, exports._c3, exports._begin).map(function (i) { return '\\' + i; });


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var formatting_1 = __webpack_require__(4);
var vscode_monaco_1 = __webpack_require__(2);
var listEditing_1 = __webpack_require__(5);
var completion_1 = __webpack_require__(12);
var tableFormatter_1 = __webpack_require__(14);
var markdown_contribution_1 = __webpack_require__(15);
var MonacoMarkdownExtension = /** @class */ (function () {
    function MonacoMarkdownExtension() {
    }
    MonacoMarkdownExtension.prototype.activate = function (editor) {
        var textEditor = new vscode_monaco_1.TextEditor(editor);
        formatting_1.activateFormatting(textEditor);
        listEditing_1.activateListEditing(textEditor);
        completion_1.activateCompletion(textEditor);
        tableFormatter_1.activateTableFormatter(textEditor);
        // Allow `*` in word pattern for quick styling
        vscode_monaco_1.setWordDefinitionFor(textEditor.languageId, /(-?\d*\.\d\w*)|([^\!\@\#\%\^\&\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s\，\。\《\》\？\；\：\‘\“\’\”\（\）\【\】\、]+)/g);
    };
    return MonacoMarkdownExtension;
}());
exports.MonacoMarkdownExtension = MonacoMarkdownExtension;
markdown_contribution_1.activateMarkdownMath();


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
// Avoid circular dependency on EventEmitter by implementing a subset of the interface.
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
        this.listeners = [];
        this.unexpectedErrorHandler = function (e) {
            setTimeout(function () {
                if (e.stack) {
                    throw new Error(e.message + '\n\n' + e.stack);
                }
                throw e;
            }, 0);
        };
    }
    ErrorHandler.prototype.addListener = function (listener) {
        var _this = this;
        this.listeners.push(listener);
        return function () {
            _this._removeListener(listener);
        };
    };
    ErrorHandler.prototype.emit = function (e) {
        this.listeners.forEach(function (listener) {
            listener(e);
        });
    };
    ErrorHandler.prototype._removeListener = function (listener) {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    };
    ErrorHandler.prototype.setUnexpectedErrorHandler = function (newUnexpectedErrorHandler) {
        this.unexpectedErrorHandler = newUnexpectedErrorHandler;
    };
    ErrorHandler.prototype.getUnexpectedErrorHandler = function () {
        return this.unexpectedErrorHandler;
    };
    ErrorHandler.prototype.onUnexpectedError = function (e) {
        this.unexpectedErrorHandler(e);
        this.emit(e);
    };
    // For external errors, we don't want the listeners to be called
    ErrorHandler.prototype.onUnexpectedExternalError = function (e) {
        this.unexpectedErrorHandler(e);
    };
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;
exports.errorHandler = new ErrorHandler();
function setUnexpectedErrorHandler(newUnexpectedErrorHandler) {
    exports.errorHandler.setUnexpectedErrorHandler(newUnexpectedErrorHandler);
}
exports.setUnexpectedErrorHandler = setUnexpectedErrorHandler;
function onUnexpectedError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        exports.errorHandler.onUnexpectedError(e);
    }
    return undefined;
}
exports.onUnexpectedError = onUnexpectedError;
function onUnexpectedExternalError(e) {
    // ignore errors from cancelled promises
    if (!isPromiseCanceledError(e)) {
        exports.errorHandler.onUnexpectedExternalError(e);
    }
    return undefined;
}
exports.onUnexpectedExternalError = onUnexpectedExternalError;
function transformErrorForSerialization(error) {
    if (error instanceof Error) {
        var name_1 = error.name, message = error.message;
        var stack = error.stacktrace || error.stack;
        return {
            $isError: true,
            name: name_1,
            message: message,
            stack: stack
        };
    }
    // return as is
    return error;
}
exports.transformErrorForSerialization = transformErrorForSerialization;
var canceledName = 'Canceled';
/**
 * Checks if the given error is a promise in canceled state
 */
function isPromiseCanceledError(error) {
    return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
exports.isPromiseCanceledError = isPromiseCanceledError;
/**
 * Returns an error that signals cancellation.
 */
function canceled() {
    var error = new Error(canceledName);
    error.name = error.message;
    return error;
}
exports.canceled = canceled;
function illegalArgument(name) {
    if (name) {
        return new Error("Illegal argument: " + name);
    }
    else {
        return new Error('Illegal argument');
    }
}
exports.illegalArgument = illegalArgument;
function illegalState(name) {
    if (name) {
        return new Error("Illegal state: " + name);
    }
    else {
        return new Error('Illegal state');
    }
}
exports.illegalState = illegalState;
function readonly(name) {
    return name
        ? new Error("readonly property '" + name + " cannot be changed'")
        : new Error('readonly property cannot be changed');
}
exports.readonly = readonly;
function disposed(what) {
    var result = new Error(what + " has been disposed");
    result.name = 'DISPOSED';
    return result;
}
exports.disposed = disposed;
function getErrorMessage(err) {
    if (!err) {
        return 'Error';
    }
    if (err.message) {
        return err.message;
    }
    if (err.stack) {
        return err.stack.split('\n')[0];
    }
    return String(err);
}
exports.getErrorMessage = getErrorMessage;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function regExpLeadsToEndlessLoop(regexp) {
    // Exit early if it's one of these special cases which are meant to match
    // against an empty string
    if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$' || regexp.source === '^\\s*$') {
        return false;
    }
    // We check against an empty string. If the regular expression doesn't advance
    // (e.g. ends in an endless loop) it will match an empty string.
    var match = regexp.exec('');
    return !!(match && regexp.lastIndex === 0);
}
exports.regExpLeadsToEndlessLoop = regExpLeadsToEndlessLoop;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
/**
 * Create a word definition regular expression based on default word separators.
 * Optionally provide allowed separators that should be included in words.
 *
 * The default would look like this:
 * /(-?\d*\.\d\w*)|([^\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
 */
function createWordRegExp(allowInWords) {
    if (allowInWords === void 0) { allowInWords = ''; }
    var source = '(-?\\d*\\.\\d\\w*)|([^';
    for (var _i = 0, USUAL_WORD_SEPARATORS_1 = exports.USUAL_WORD_SEPARATORS; _i < USUAL_WORD_SEPARATORS_1.length; _i++) {
        var sep = USUAL_WORD_SEPARATORS_1[_i];
        if (allowInWords.indexOf(sep) >= 0) {
            continue;
        }
        source += '\\' + sep;
    }
    source += '\\s]+)';
    return new RegExp(source, 'g');
}
// catches numbers (including floating numbers) in the first group, and alphanum in the second
exports.DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(wordDefinition) {
    var result = exports.DEFAULT_WORD_REGEXP;
    if (wordDefinition && (wordDefinition instanceof RegExp)) {
        if (!wordDefinition.global) {
            var flags = 'g';
            if (wordDefinition.ignoreCase) {
                flags += 'i';
            }
            if (wordDefinition.multiline) {
                flags += 'm';
            }
            if (wordDefinition.unicode) {
                flags += 'u';
            }
            result = new RegExp(wordDefinition.source, flags);
        }
        else {
            result = wordDefinition;
        }
    }
    result.lastIndex = 0;
    return result;
}
exports.ensureValidWordDefinition = ensureValidWordDefinition;
function getWordAtPosFast(column, wordDefinition, text, textOffset) {
    // find whitespace enclosed text around column and match from there
    var pos = column - 1 - textOffset;
    var start = text.lastIndexOf(' ', pos - 1) + 1;
    wordDefinition.lastIndex = start;
    var match;
    while (match = wordDefinition.exec(text)) {
        var matchIndex = match.index || 0;
        if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
            return {
                word: match[0],
                startColumn: textOffset + 1 + matchIndex,
                endColumn: textOffset + 1 + wordDefinition.lastIndex
            };
        }
    }
    return null;
}
function getWordAtPosSlow(column, wordDefinition, text, textOffset) {
    // matches all words starting at the beginning
    // of the input until it finds a match that encloses
    // the desired column. slow but correct
    var pos = column - 1 - textOffset;
    wordDefinition.lastIndex = 0;
    var match;
    while (match = wordDefinition.exec(text)) {
        var matchIndex = match.index || 0;
        if (matchIndex > pos) {
            // |nW -> matched only after the pos
            return null;
        }
        else if (wordDefinition.lastIndex >= pos) {
            // W|W -> match encloses pos
            return {
                word: match[0],
                startColumn: textOffset + 1 + matchIndex,
                endColumn: textOffset + 1 + wordDefinition.lastIndex
            };
        }
    }
    return null;
}
function getWordAtText(column, wordDefinition, text, textOffset) {
    // if `words` can contain whitespace character we have to use the slow variant
    // otherwise we use the fast variant of finding a word
    wordDefinition.lastIndex = 0;
    var match = wordDefinition.exec(text);
    if (!match) {
        return null;
    }
    // todo@joh the `match` could already be the (first) word
    var ret = match[0].indexOf(' ') >= 0
        // did match a word which contains a space character -> use slow word find
        ? getWordAtPosSlow(column, wordDefinition, text, textOffset)
        // sane word definition -> use fast word find
        : getWordAtPosFast(column, wordDefinition, text, textOffset);
    // both (getWordAtPosFast and getWordAtPosSlow) leave the wordDefinition-RegExp
    // in an undefined state and to not confuse other users of the wordDefinition
    // we reset the lastIndex
    wordDefinition.lastIndex = 0;
    return ret;
}
exports.getWordAtText = getWordAtText;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TypeConverters = __webpack_require__(3);
var monaco_editor_1 = __webpack_require__(0);
var vscode_monaco_1 = __webpack_require__(2);
var extHostTypes_1 = __webpack_require__(1);
var util_1 = __webpack_require__(6);
var toc_1 = __webpack_require__(13);
var latex = __webpack_require__(7);
var completionActivated = false;
function activateCompletion(editor) {
    if (!completionActivated) {
        //TODO: remove provider when context is disposed
        var provider = new MdCompletionItemProvider();
        monaco_editor_1.languages.registerCompletionItemProvider(editor.languageId, provider);
        completionActivated = true;
    }
}
exports.activateCompletion = activateCompletion;
function completionList(items) {
    return { suggestions: items.map(function (v, _) { return Object.assign({}, v); }) };
}
function newCompletionItem(text, kind) {
    return {
        label: text,
        kind: kind,
        additionalTextEdits: undefined,
        command: undefined,
        commitCharacters: undefined,
        detail: undefined,
        documentation: undefined,
        filterText: undefined,
        insertTextRules: undefined,
        preselect: false,
        range: undefined,
        sortText: undefined,
        insertText: undefined
    };
}
var MdCompletionItemProvider = /** @class */ (function () {
    function MdCompletionItemProvider() {
        this.triggerCharacters = ['(', '\\', '/', '[', '#'];
        // \cmd
        var c1 = latex._c1.map(function (cmd) {
            var item = newCompletionItem('\\' + cmd, monaco_editor_1.languages.CompletionItemKind.Function);
            item.insertText = cmd;
            return item;
        });
        // \cmd{$1}
        var c2 = latex._c2.map(function (cmd) {
            var item = newCompletionItem('\\' + cmd, monaco_editor_1.languages.CompletionItemKind.Function);
            item.insertText = new extHostTypes_1.SnippetString(cmd + "{$1}").value;
            item.insertTextRules = monaco_editor_1.languages.CompletionItemInsertTextRule.InsertAsSnippet;
            return item;
        });
        // \cmd{$1}{$2}
        var c3 = latex._c3.map(function (cmd) {
            var item = newCompletionItem('\\' + cmd, monaco_editor_1.languages.CompletionItemKind.Function);
            item.insertText = new extHostTypes_1.SnippetString(cmd + "{$1}{$2}").value;
            item.insertTextRules = monaco_editor_1.languages.CompletionItemInsertTextRule.InsertAsSnippet;
            return item;
        });
        var envSnippet = newCompletionItem('\\begin', monaco_editor_1.languages.CompletionItemKind.Snippet);
        envSnippet.insertText = new extHostTypes_1.SnippetString('begin{${1|aligned,alignedat,array,bmatrix,Bmatrix,cases,darray,dcases,gathered,matrix,pmatrix,vmatrix,Vmatrix|}}\n\t$2\n\\end{$1}').value;
        envSnippet.insertTextRules = monaco_editor_1.languages.CompletionItemInsertTextRule.InsertAsSnippet;
        this.mathCompletions = c1.concat(c2, c3, [envSnippet]);
        // Sort
        this.mathCompletions.forEach(function (item) {
            item.sortText = item.label.replace(/[a-zA-Z]/g, function (c) {
                if (/[a-z]/.test(c)) {
                    return "0" + c;
                }
                else {
                    return "1" + c.toLowerCase();
                }
            });
        });
    }
    MdCompletionItemProvider.prototype.provideCompletionItems = function (model, _position, _context, _token) {
        var document = new vscode_monaco_1.TextDocument(model);
        var position = TypeConverters.Position.to(_position);
        var lineTextBefore = document.lineAt(position.line).text.substring(0, position.character);
        var lineTextAfter = document.lineAt(position.line).text.substring(position.character);
        var matches;
        if ((matches = lineTextBefore.match(/\\[^$]*$/)) !== null) {
            /* ┌────────────────┐
               │ Math functions │
               └────────────────┘ */
            if (/(^|[^\$])\$(|[^ \$].*)\\\w*$/.test(lineTextBefore)
                && lineTextAfter.includes('$')) {
                // Complete math functions (inline math)
                return completionList(this.mathCompletions);
            }
            else {
                var textBefore = document.getText(new extHostTypes_1.Range(new extHostTypes_1.Position(0, 0), position));
                var textAfter = document.getText().substr(document.offsetAt(position));
                if ((matches = textBefore.match(/\$\$/g)) !== null
                    && matches.length % 2 !== 0
                    && textAfter.includes('\$\$')) {
                    // Complete math functions ($$ ... $$)
                    return completionList(this.mathCompletions);
                }
                else {
                    return completionList([]);
                }
            }
        }
        else if (/\[[^\]]*?\]\[[^\]]*$/.test(lineTextBefore)) {
            /* ┌───────────────────────┐
               │ Reference link labels │
               └───────────────────────┘ */
            var startIndex = lineTextBefore.lastIndexOf('[');
            var range_1 = new extHostTypes_1.Range(position.with({ character: startIndex + 1 }), position);
            return new Promise(function (res, _) {
                var lines = document.getText().split(/\r?\n/);
                var usageCounts = lines.reduce(function (useCounts, currentLine) {
                    var match;
                    var pattern = /\[[^\]]+\]\[([^\]]*?)\]/g;
                    while ((match = pattern.exec(currentLine)) !== null) {
                        var usedRef = match[1];
                        if (!useCounts.has(usedRef)) {
                            useCounts.set(usedRef, 0);
                        }
                        useCounts.set(usedRef, useCounts.get(usedRef) + 1);
                    }
                    return useCounts;
                }, new Map());
                var refLabels = lines.reduce(function (prev, curr) {
                    var match;
                    if ((match = /^\[([^\]]*?)\]: (\S*)( .*)?/.exec(curr)) !== null) {
                        var ref = match[1];
                        var item = newCompletionItem(ref, monaco_editor_1.languages.CompletionItemKind.Reference);
                        var usages = usageCounts.get(ref) || 0;
                        item.insertText = ref;
                        item.documentation = { value: (match[2]) };
                        item.detail = usages === 1 ? "1 usage" : usages + " usages";
                        // Prefer unused items
                        item.sortText = usages === 0 ? "0-" + ref : item.sortText = "1-" + ref;
                        item.range = TypeConverters.Range.from(range_1);
                        prev.push(item);
                    }
                    return prev;
                }, []);
                res(completionList(refLabels));
            });
        }
        else if (/\[[^\]]*\]\(#[^\)]*$/.test(lineTextBefore)) {
            /* ┌───────────────────────────┐
               │ Anchor tags from headings │
               └───────────────────────────┘ */
            var startIndex = lineTextBefore.lastIndexOf('(');
            var endPosition = position;
            var addClosingParen_1 = false;
            if (/^([^\) ]+\s*|^\s*)\)/.test(lineTextAfter)) {
                // try to detect if user wants to replace a link (i.e. matching closing paren and )
                // Either: ... <CURSOR> something <whitespace> )
                //     or: ... <CURSOR> <whitespace> )
                //     or: ... <CURSOR> )     (endPosition assignment is a no-op for this case)
                // in every case, we want to remove all characters after the cursor and before that first closing paren
                endPosition = position.with({ character: +endPosition.character + lineTextAfter.indexOf(')') });
            }
            else {
                // If no closing paren is found, replace all trailing non-white-space chars and add a closing paren
                // distance to first non-whitespace or EOL
                var toReplace = 0;
                while (toReplace < lineTextAfter.length && ' \t\n\r\v'.indexOf(lineTextAfter.charAt(toReplace)) != -1) {
                    toReplace++;
                }
                endPosition = position.with({ character: +endPosition.character + toReplace });
                addClosingParen_1 = true;
            }
            var range_2 = new extHostTypes_1.Range(position.with({ character: startIndex + 1 }), endPosition);
            return new Promise(function (res, _) {
                var toc = toc_1.buildToc(document);
                var headingCompletions = toc.reduce(function (prev, curr) {
                    var item = newCompletionItem('#' + util_1.slugify(curr.text), monaco_editor_1.languages.CompletionItemKind.Reference);
                    if (addClosingParen_1) {
                        item.insertText = item.label + ')';
                    }
                    else {
                        item.insertText = item.label;
                    }
                    item.documentation = curr.text;
                    item.range = TypeConverters.Range.from(range_2);
                    prev.push(item);
                    return prev;
                }, []);
                res(completionList(headingCompletions));
            });
        }
        else {
            return completionList([]);
        }
    };
    return MdCompletionItemProvider;
}());


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function buildToc(doc) {
    var toc;
    var lines = doc.getText()
        .replace(/^```[\W\w]+?^```/gm, '') // Remove code blocks
        .replace(/<!-- omit in (toc|TOC) -->/g, '&lt; omit in toc &gt;') // Escape magic comment
        .replace(/<!--[\W\w]+?-->/, '') // Remove comments
        .replace(/^---[\W\w]+?(\r?\n)---/, '') // Remove YAML front matter
        .split(/\r?\n/g);
    // Transform setext headings to ATX headings
    lines.forEach(function (lineText, i, arr) {
        if (i < arr.length - 1
            && lineText.match(/^ {0,3}\S.*$/)
            && arr[i + 1].match(/^ {0,3}(=+|-{2,}) *$/)) {
            arr[i] = (arr[i + 1].includes('=') ? '# ' : '## ') + lineText;
        }
    });
    toc = lines.filter(function (lineText) {
        return lineText.startsWith('#')
            && lineText.includes('# ')
            && !lineText.includes('&lt; omit in toc &gt;');
    }).map(function (lineText) {
        var matches = /^(#+) (.*)/.exec(lineText);
        return { level: matches[1].length, text: matches[2].replace(/#+$/, '').trim() };
    });
    return toc;
}
exports.buildToc = buildToc;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// https://github.github.com/gfm/#tables-extension-
var monaco_editor_1 = __webpack_require__(0);
var vscode_monaco_1 = __webpack_require__(2);
var extHostTypes_1 = __webpack_require__(1);
var TypeConverters = __webpack_require__(3);
function activateTableFormatter(editor) {
    monaco_editor_1.languages.registerDocumentFormattingEditProvider(editor.languageId, new MarkdownDocumentFormatter());
}
exports.activateTableFormatter = activateTableFormatter;
function deactivate() {
}
exports.deactivate = deactivate;
var MarkdownDocumentFormatter = /** @class */ (function () {
    function MarkdownDocumentFormatter() {
    }
    MarkdownDocumentFormatter.prototype.provideDocumentFormattingEdits = function (model, options, _) {
        var _this = this;
        var edits = [];
        var document = new vscode_monaco_1.TextDocument(model);
        var tables = this.detectTables(document.getText());
        if (tables !== null) {
            tables.forEach(function (table) {
                edits.push({ range: TypeConverters.Range.from(_this.getRange(document, table)), text: _this.formatTable(table, document, options) });
            });
            return edits;
        }
        else {
            return [];
        }
    };
    MarkdownDocumentFormatter.prototype.detectTables = function (text) {
        var lineBreak = '\\r?\\n';
        var contentLine = '\\|?.*\\|.*\\|?';
        var hyphenLine = '[ \\t]*\\|?( *:?-+:? *\\|)+( *:?-+:? *\\|?)[ \\t]*';
        var tableRegex = new RegExp(contentLine + lineBreak + hyphenLine + '(?:' + lineBreak + contentLine + ')*', 'g');
        return text.match(tableRegex);
    };
    MarkdownDocumentFormatter.prototype.getRange = function (document, text) {
        var documentText = document.getText();
        var start = document.positionAt(documentText.indexOf(text));
        var end = document.positionAt(documentText.indexOf(text) + text.length);
        return new extHostTypes_1.Range(start, end);
    };
    /**
     * Return the indentation of a table as a string of spaces by reading it from the first line.
     * In case of `markdown.extension.table.normalizeIndentation` is `enabled` it is rounded to the closest multiple of
     * the configured `tabSize`.
     */
    MarkdownDocumentFormatter.prototype.getTableIndentation = function (text, options) {
        // let doNormalize = workspace.getConfiguration('markdown.extension.tableFormatter').get<boolean>('normalizeIndentation');
        var doNormalize = true;
        var indentRegex = new RegExp(/^(\s*)\S/u);
        var match = text.match(indentRegex);
        var spacesInFirstLine = match[1].length;
        var tabStops = Math.round(spacesInFirstLine / options.tabSize);
        var spaces = doNormalize ? " ".repeat(options.tabSize * tabStops) : " ".repeat(spacesInFirstLine);
        return spaces;
    };
    MarkdownDocumentFormatter.prototype.formatTable = function (text, doc, options) {
        var _this = this;
        var indentation = this.getTableIndentation(text, options);
        var rows = [];
        var rowsNoIndentPattern = new RegExp(/^\s*(\S.*)$/gum);
        var match = null;
        while ((match = rowsNoIndentPattern.exec(text)) !== null) {
            rows.push(match[1].trim());
        }
        // Desired width of each column
        var colWidth = [];
        // Alignment of each column        
        var colAlign = [];
        // Regex to extract cell content.
        // Known issue: `\\|` is not correctly parsed as a valid delimiter
        var fieldRegExp = new RegExp(/(?:((?:\\\||`.*?`|[^\|])*)\|)/gu);
        var cjkRegex = /[\u3000-\u9fff\uff01-\uff60]/g;
        var lines = rows.map(function (row, num) {
            // Normalize
            if (row.startsWith('|')) {
                row = row.slice(1);
            }
            if (!row.endsWith('|')) {
                row = row + '|';
            }
            var field = null;
            var values = [];
            var i = 0;
            while ((field = fieldRegExp.exec(row)) !== null) {
                var cell = field[1].trim();
                values.push(cell);
                // Ignore length of dash-line to enable width reduction
                if (num != 1) {
                    // Treat CJK characters as 2 English ones because of Unicode stuff
                    var length_1 = cjkRegex.test(cell) ? cell.length + cell.match(cjkRegex).length : cell.length;
                    colWidth[i] = colWidth[i] > length_1 ? colWidth[i] : length_1;
                }
                i++;
            }
            return values;
        });
        // Normalize the num of hyphen, use Math.max to determine minimum length based on dash-line format
        lines[1] = lines[1].map(function (cell, i) {
            if (/:-+:/.test(cell)) {
                //:---:
                colWidth[i] = Math.max(colWidth[i], 5);
                colAlign[i] = 'c';
                return ':' + '-'.repeat(colWidth[i] - 2) + ':';
            }
            else if (/:-+/.test(cell)) {
                //:---
                colWidth[i] = Math.max(colWidth[i], 4);
                colAlign[i] = 'l';
                return ':' + '-'.repeat(colWidth[i] - 1);
            }
            else if (/-+:/.test(cell)) {
                //---:
                colWidth[i] = Math.max(colWidth[i], 4);
                colAlign[i] = 'r';
                return '-'.repeat(colWidth[i] - 1) + ':';
            }
            else if (/-+/.test(cell)) {
                //---
                colWidth[i] = Math.max(colWidth[i], 3);
                colAlign[i] = 'l';
                return '-'.repeat(colWidth[i]);
            }
            else {
                colAlign[i] = 'l';
            }
        });
        return lines.map(function (row) {
            var cells = row.map(function (cell, i) {
                var cellLength = colWidth[i];
                if (cjkRegex.test(cell)) {
                    cellLength -= cell.match(cjkRegex).length;
                }
                //return (cell + ' '.repeat(cellLength)).slice(0, cellLength);
                return _this.alignText(cell, colAlign[i], cellLength);
            });
            return indentation + '| ' + cells.join(' | ') + ' |';
        }).join(doc.eol === extHostTypes_1.EndOfLine.LF ? '\n' : '\r\n');
    };
    MarkdownDocumentFormatter.prototype.alignText = function (text, align, length) {
        if (align === 'c' && length > text.length) {
            return (' '.repeat(Math.floor((length - text.length) / 2)) + text + ' '.repeat(length)).slice(0, length);
        }
        else if (align === 'r') {
            return (' '.repeat(length) + text).slice(-length);
        }
        else {
            return (text + ' '.repeat(length)).slice(0, length);
        }
    };
    return MarkdownDocumentFormatter;
}());


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

Object.defineProperty(exports, "__esModule", { value: true });
var contribution_1 = __webpack_require__(16);
var markdown_1 = __webpack_require__(17);
function activateMarkdownMath() {
    contribution_1.registerLanguage({
        id: 'markdown-math',
        extensions: ['.md', '.markdown', '.mdown', '.mkdn', '.mkd', '.mdwn', '.mdtxt', '.mdtext'],
        aliases: ['Markdown', 'markdown'],
        loader: function () {
            return Promise.resolve({
                conf: markdown_1.conf,
                language: markdown_1.language
            });
        }
    });
}
exports.activateMarkdownMath = activateMarkdownMath;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

Object.defineProperty(exports, "__esModule", { value: true });
var monaco_editor_1 = __webpack_require__(0);
var languageDefinitions = {};
function _loadLanguage(languageId) {
    var loader = languageDefinitions[languageId].loader;
    return loader().then(function (mod) {
        monaco_editor_1.languages.setMonarchTokensProvider(languageId, mod.language);
        monaco_editor_1.languages.setLanguageConfiguration(languageId, mod.conf);
    });
}
var languagePromises = {};
function loadLanguage(languageId) {
    if (!languagePromises[languageId]) {
        languagePromises[languageId] = _loadLanguage(languageId);
    }
    return languagePromises[languageId];
}
exports.loadLanguage = loadLanguage;
function registerLanguage(def) {
    var languageId = def.id;
    languageDefinitions[languageId] = def;
    monaco_editor_1.languages.register(def);
    monaco_editor_1.languages.onLanguage(languageId, function () {
        loadLanguage(languageId);
    });
}
exports.registerLanguage = registerLanguage;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

Object.defineProperty(exports, "__esModule", { value: true });
var latex_1 = __webpack_require__(7);
exports.conf = {
    comments: {
        blockComment: ['<!--', '-->',]
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '<', close: '>', notIn: ['string'] }
    ],
    surroundingPairs: [
        { open: '(', close: ')' },
        { open: '[', close: ']' },
        { open: '`', close: '`' },
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*<!--\\s*#?region\\b.*-->"),
            end: new RegExp("^\\s*<!--\\s*#?endregion\\b.*-->")
        }
    }
};
exports.language = {
    defaultToken: '',
    tokenPostfix: '.md',
    // escape codes
    control: /[\\`*_\[\]{}()#+\-\.!]/,
    noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
    escapes: /\\(?:@control)/,
    // escape codes for javascript/CSS strings
    jsescapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    // non matched elements
    empty: [
        'area', 'base', 'basefont', 'br', 'col', 'frame',
        'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param'
    ],
    latexKeywords: latex_1.all,
    latexBeginKeywords: latex_1.begin_args,
    tokenizer: {
        root: [
            // headers (with #)
            [/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/, ['white', 'keyword', 'keyword', 'keyword']],
            // headers (with =)
            [/^\s*(=+|\-+)\s*$/, 'keyword'],
            // headers (with ***)
            [/^\s*((\*[ ]?)+)\s*$/, 'meta.separator'],
            // quote
            [/^\s*>+/, 'comment'],
            // list (starting with * or number)
            [/^\s*([\*\-+:]|\d+\.)\s/, 'keyword'],
            // code block (4 spaces indent)
            [/^(\t|[ ]{4})[^ ].*$/, 'string'],
            // code block (3 tilde)
            [/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/, { token: 'string', next: '@codeblock' }],
            // github style code blocks (with backticks and language)
            [/^\s*```\s*((?:\w|[\/\-#])+).*$/, { token: 'string', next: '@codeblockgh', nextEmbedded: '$1' }],
            // github style code blocks (with backticks but no language)
            [/^\s*```\s*$/, { token: 'string', next: '@codeblock' }],
            //math
            [/(^\${2})/, { token: 'comment.math', next: 'math', bracket: '@open' }],
            // markup within lines
            { include: '@linecontent' },
        ],
        codeblock: [
            [/^\s*~~~\s*$/, { token: 'string', next: '@pop' }],
            [/^\s*```\s*$/, { token: 'string', next: '@pop' }],
            [/.*$/, 'variable.source'],
        ],
        // github style code blocks
        codeblockgh: [
            [/```\s*$/, { token: 'variable.source', next: '@pop', nextEmbedded: '@pop' }],
            [/[^`]+/, 'variable.source'],
        ],
        linecontent: [
            // escapes
            [/&\w+;/, 'string.escape'],
            [/@escapes/, 'escape'],
            // various markup
            [/\b__([^\\_]|@escapes|_(?!_))+__\b/, 'strong'],
            [/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/, 'strong'],
            [/\b_[^_]+_\b/, 'emphasis'],
            [/\*([^\\*]|@escapes)+\*/, 'emphasis'],
            [/`([^\\`]|@escapes)+`/, 'variable'],
            // links
            [/\{+[^}]+\}+/, 'string.target'],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/, ['string.link', '', 'string.link']],
            [/(!?\[)((?:[^\]\\]|@escapes)*)(\])/, 'string.link'],
            //inline math
            [/(\$\$)([^$]*)(\$\$)/, [{ token: 'comment.math', bracket: '@open' },
                    { token: '@rematch', next: 'mathInline', goBack: 2 },
                    { token: 'comment.math', bracket: '@close' }]],
            [/(\$)([^$]+)(\$)/, [{ token: 'comment.math', bracket: '@open' },
                    { token: '@rematch', next: 'mathInline', goBack: 1 },
                    { token: 'comment.math', bracket: '@close' }]],
            // or html
            { include: 'html' },
        ],
        // Note: it is tempting to rather switch to the real HTML mode instead of building our own here
        // but currently there is a limitation in Monarch that prevents us from doing it: The opening
        // '<' would start the HTML mode, however there is no way to jump 1 character back to let the
        // HTML mode also tokenize the opening angle bracket. Thus, even though we could jump to HTML,
        // we cannot correctly tokenize it in that mode yet.
        html: [
            // html tags
            [/<(\w+)\/>/, 'tag'],
            [/<(\w+)/, {
                    cases: {
                        '@empty': { token: 'tag', next: '@tag.$1' },
                        '@default': { token: 'tag', next: '@tag.$1' }
                    }
                }],
            [/<\/(\w+)\s*>/, { token: 'tag' }],
            [/<!--/, 'comment', '@comment']
        ],
        comment: [
            [/[^<\-]+/, 'comment.content'],
            [/-->/, 'comment', '@pop'],
            [/<!--/, 'comment.content.invalid'],
            [/[<\-]/, 'comment.content']
        ],
        // Almost full HTML tag matching, complete with embedded scripts & styles
        tag: [
            [/[ \t\r\n]+/, 'white'],
            [/(type)(\s*=\s*)(")([^"]+)(")/, ['attribute.name.html', 'delimiter.html', 'string.html',
                    { token: 'string.html', switchTo: '@tag.$S2.$4' },
                    'string.html']],
            [/(type)(\s*=\s*)(')([^']+)(')/, ['attribute.name.html', 'delimiter.html', 'string.html',
                    { token: 'string.html', switchTo: '@tag.$S2.$4' },
                    'string.html']],
            [/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/, ['attribute.name.html', 'delimiter.html', 'string.html']],
            [/\w+/, 'attribute.name.html'],
            [/\/>/, 'tag', '@pop'],
            [/>/, {
                    cases: {
                        '$S2==style': { token: 'tag', switchTo: 'embeddedStyle', nextEmbedded: 'text/css' },
                        '$S2==script': {
                            cases: {
                                '$S3': { token: 'tag', switchTo: 'embeddedScript', nextEmbedded: '$S3' },
                                '@default': { token: 'tag', switchTo: 'embeddedScript', nextEmbedded: 'text/javascript' }
                            }
                        },
                        '@default': { token: 'tag', next: '@pop' }
                    }
                }],
        ],
        embeddedStyle: [
            [/[^<]+/, ''],
            [/<\/style\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ],
        embeddedScript: [
            [/[^<]+/, ''],
            [/<\/script\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],
            [/</, '']
        ],
        math: [
            [/(\${2})/, { token: 'comment.math', next: '@pop', bracket: '@close' }],
            { include: 'latex' },
        ],
        mathInline: [
            [/\${1,2}/, { token: 'comment.math', next: '@pop', bracket: '@close' }],
            { include: 'latex' },
        ],
        latex: [
            [/(\\begin)({)/, ['keyword', { token: '', next: 'latexBeginArg' }]],
            [/(\\end)({)/, ['keyword', { token: '', next: 'latexBeginArg' }]],
            [/\\\w+/, { cases: { '@latexKeywords': 'keyword', '@default': '' } }],
        ],
        latexBeginArg: [
            [/\w+/, { cases: { '@latexBeginKeywords': 'keyword', '@default': '' } }],
            [/}/, { token: '', next: '@pop', bracket: '@close' }]
        ]
    }
};


/***/ })
/******/ ]);
});