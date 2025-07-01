"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessibilityPanel = AccessibilityPanel;
var _react = _interopRequireWildcard(require("react"));
require("./AccessibilityPanel.css");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Filtros de correção para daltonismo
var COLORBLIND_CORRECTION_FILTERS = {
  normal: 'none',
  protanomaly: 'contrast(120%) brightness(110%) saturate(120%) hue-rotate(-10deg)',
  deuteranomaly: 'contrast(120%) brightness(110%) saturate(120%) hue-rotate(10deg)',
  tritanomaly: 'contrast(120%) brightness(110%) saturate(120%) hue-rotate(60deg)',
  protanopia: 'contrast(130%) brightness(115%) saturate(130%) hue-rotate(-25deg)',
  deuteranopia: 'contrast(130%) brightness(115%) saturate(130%) hue-rotate(25deg)',
  tritanopia: 'contrast(130%) brightness(115%) saturate(130%) hue-rotate(90deg)',
  achromatopsia: 'grayscale(100%) contrast(140%) brightness(115%)',
  'blue-cone-monochromacy': 'grayscale(90%) contrast(120%) brightness(110%) hue-rotate(180deg)'
};

// Função para leitura de texto selecionado
function speakText() {
  var selectedText = window.getSelection().toString();
  if (!selectedText) return;
  var speech = new window.SpeechSynthesisUtterance(selectedText);
  speech.lang = 'pt-BR';
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}

// Painel principal de acessibilidade
function AccessibilityPanel(_ref) {
  var _ref$defaultFilter = _ref.defaultFilter,
    defaultFilter = _ref$defaultFilter === void 0 ? 'normal' : _ref$defaultFilter,
    _ref$defaultSize = _ref.defaultSize,
    defaultSize = _ref$defaultSize === void 0 ? 1 : _ref$defaultSize,
    _ref$defaultSpacing = _ref.defaultSpacing,
    defaultSpacing = _ref$defaultSpacing === void 0 ? 1.5 : _ref$defaultSpacing,
    _ref$showColorFilter = _ref.showColorFilter,
    showColorFilter = _ref$showColorFilter === void 0 ? true : _ref$showColorFilter,
    _ref$showFontAdjust = _ref.showFontAdjust,
    showFontAdjust = _ref$showFontAdjust === void 0 ? true : _ref$showFontAdjust,
    _ref$showSpacingAdjus = _ref.showSpacingAdjust,
    showSpacingAdjust = _ref$showSpacingAdjus === void 0 ? true : _ref$showSpacingAdjus,
    _ref$showSpeechSwitch = _ref.showSpeechSwitch,
    showSpeechSwitch = _ref$showSpeechSwitch === void 0 ? true : _ref$showSpeechSwitch;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    speechEnabled = _useState2[0],
    setSpeechEnabled = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultFilter),
    _useState4 = _slicedToArray(_useState3, 2),
    filter = _useState4[0],
    setFilter = _useState4[1];
  var _useState5 = (0, _react.useState)(defaultSize),
    _useState6 = _slicedToArray(_useState5, 2),
    size = _useState6[0],
    setSize = _useState6[1];
  var _useState7 = (0, _react.useState)(defaultSpacing),
    _useState8 = _slicedToArray(_useState7, 2),
    spacing = _useState8[0],
    setSpacing = _useState8[1];
  (0, _react.useEffect)(function () {
    document.documentElement.style.filter = COLORBLIND_CORRECTION_FILTERS[filter] || 'none';
    document.documentElement.style.fontSize = "".concat(size, "em");
    document.documentElement.style.lineHeight = "".concat(spacing);
    document.body.style.filter = COLORBLIND_CORRECTION_FILTERS[filter] || 'none';
    document.body.style.fontSize = "".concat(size, "em");
    document.body.style.lineHeight = "".concat(spacing);
  }, [filter, size, spacing]);
  (0, _react.useEffect)(function () {
    var handleMouseUp = function handleMouseUp() {
      if (speechEnabled) {
        speakText();
      }
    };
    document.addEventListener('mouseup', handleMouseUp);
    return function () {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [speechEnabled]);

  // Se todos vierem false, não renderiza nada
  if (!showColorFilter && !showFontAdjust && !showSpacingAdjust && !showSpeechSwitch) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "accessibility-panel"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "panel-title"
  }, "Ajustes de Acessibilidade"), showColorFilter && /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-section"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "panel-subtitle"
  }, "Filtro de Cores"), /*#__PURE__*/_react["default"].createElement("select", {
    className: "panel-select",
    onChange: function onChange(e) {
      return setFilter(e.target.value);
    },
    value: filter
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "normal"
  }, "Vis\xE3o Normal"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "protanomaly"
  }, "\uD83D\uDD34 Protanomalia (Fraqueza ao Vermelho)"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "deuteranomaly"
  }, "\uD83D\uDFE2 Deuteranomalia (Fraqueza ao Verde)"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "tritanomaly"
  }, "\uD83D\uDD35 Tritanomalia (Fraqueza ao Azul)"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "protanopia"
  }, "\uD83D\uDD34 Protanopia (Cegueira ao Vermelho)"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "deuteranopia"
  }, "\uD83D\uDFE2 Deuteranopia (Cegueira ao Verde)"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "tritanopia"
  }, "\uD83D\uDD35 Tritanopia (Cegueira ao Azul)"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "achromatopsia"
  }, "\u26AB Monocromacia (Aus\xEAncia total de cores)"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "blue-cone-monochromacy"
  }, "\uD83D\uDD35 Blue Cone Monochromacy (Somente Azul)"))), showFontAdjust && /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-section"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "panel-subtitle"
  }, "Ajustes de Fonte"), /*#__PURE__*/_react["default"].createElement("button", {
    "aria-label": "Aumentar tamanho da fonte",
    className: "panel-button",
    type: "button",
    onClick: function onClick() {
      return setSize(size + 0.1);
    }
  }, "Aumentar Fonte"), /*#__PURE__*/_react["default"].createElement("button", {
    "aria-label": "Diminuir tamanho da fonte",
    className: "panel-button",
    type: "button",
    onClick: function onClick() {
      return setSize(size > 0.8 ? size - 0.1 : size);
    }
  }, "Diminuir Fonte")), showSpacingAdjust && /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-section"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "panel-subtitle"
  }, "Ajustes de Espa\xE7amento"), /*#__PURE__*/_react["default"].createElement("button", {
    "aria-label": "Aumentar espa\xE7amento",
    className: "panel-button",
    type: "button",
    onClick: function onClick() {
      return setSpacing(spacing + 0.1);
    }
  }, "Aumentar Espa\xE7amento"), /*#__PURE__*/_react["default"].createElement("button", {
    "aria-label": "Diminuir espa\xE7amento",
    className: "panel-button",
    type: "button",
    onClick: function onClick() {
      return setSpacing(spacing > 1 ? spacing - 0.1 : spacing);
    }
  }, "Diminuir Espa\xE7amento")), showSpeechSwitch && /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-section"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "panel-subtitle"
  }, "Leitura de Texto"), /*#__PURE__*/_react["default"].createElement("label", {
    className: "switch",
    htmlFor: "speech-toggle"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    id: "speech-toggle",
    type: "checkbox",
    checked: speechEnabled,
    onChange: function onChange() {
      return setSpeechEnabled(!speechEnabled);
    },
    "aria-checked": speechEnabled,
    "aria-label": speechEnabled ? 'Desativar leitura de texto' : 'Ativar leitura de texto'
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "slider"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "switch-label"
  }, speechEnabled ? 'Leitura ativada' : 'Leitura desativada'))));
}