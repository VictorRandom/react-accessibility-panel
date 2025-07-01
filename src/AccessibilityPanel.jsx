import React, { useEffect, useState } from 'react';
import './AccessibilityPanel.css';

// Filtros de correção para daltonismo
const COLORBLIND_CORRECTION_FILTERS = {
  normal: 'none',
  protanomaly: 'contrast(120%) brightness(110%) saturate(120%) hue-rotate(-10deg)',
  deuteranomaly: 'contrast(120%) brightness(110%) saturate(120%) hue-rotate(10deg)',
  tritanomaly: 'contrast(120%) brightness(110%) saturate(120%) hue-rotate(60deg)',
  protanopia: 'contrast(130%) brightness(115%) saturate(130%) hue-rotate(-25deg)',
  deuteranopia: 'contrast(130%) brightness(115%) saturate(130%) hue-rotate(25deg)',
  tritanopia: 'contrast(130%) brightness(115%) saturate(130%) hue-rotate(90deg)',
  achromatopsia: 'grayscale(100%) contrast(140%) brightness(115%)',
  'blue-cone-monochromacy': 'grayscale(90%) contrast(120%) brightness(110%) hue-rotate(180deg)',
};

// Função para leitura de texto selecionado
function speakText() {
  const selectedText = window.getSelection().toString();
  if (!selectedText) return;
  const speech = new window.SpeechSynthesisUtterance(selectedText);
  speech.lang = 'pt-BR';
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}

// Painel principal de acessibilidade
export function AccessibilityPanel({
  defaultFilter = 'normal',
  defaultSize = 1,
  defaultSpacing = 1.5,
  showColorFilter = true,
  showFontAdjust = true,
  showSpacingAdjust = true,
  showSpeechSwitch = true,
}) {
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const [filter, setFilter] = useState(defaultFilter);
  const [size, setSize] = useState(defaultSize);
  const [spacing, setSpacing] = useState(defaultSpacing);

  useEffect(() => {
    document.documentElement.style.filter = COLORBLIND_CORRECTION_FILTERS[filter] || 'none';
    document.documentElement.style.fontSize = `${size}em`;
    document.documentElement.style.lineHeight = `${spacing}`;

    document.body.style.filter = COLORBLIND_CORRECTION_FILTERS[filter] || 'none';
    document.body.style.fontSize = `${size}em`;
    document.body.style.lineHeight = `${spacing}`;
  }, [filter, size, spacing]);

  useEffect(() => {
    const handleMouseUp = () => {
      if (speechEnabled) {
        speakText();
      }
    };
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [speechEnabled]);

  // Se todos vierem false, não renderiza nada
  if (!showColorFilter && !showFontAdjust && !showSpacingAdjust && !showSpeechSwitch) {
    return null;
  }

  return (
    <div className="accessibility-panel">
      <h2 className="panel-title">Ajustes de Acessibilidade</h2>

      {showColorFilter && (
        <div className="panel-section">
          <h3 className="panel-subtitle">Filtro de Cores</h3>
          <select className="panel-select" onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="normal">Visão Normal</option>
            <option value="protanomaly">🔴 Protanomalia (Fraqueza ao Vermelho)</option>
            <option value="deuteranomaly">🟢 Deuteranomalia (Fraqueza ao Verde)</option>
            <option value="tritanomaly">🔵 Tritanomalia (Fraqueza ao Azul)</option>
            <option value="protanopia">🔴 Protanopia (Cegueira ao Vermelho)</option>
            <option value="deuteranopia">🟢 Deuteranopia (Cegueira ao Verde)</option>
            <option value="tritanopia">🔵 Tritanopia (Cegueira ao Azul)</option>
            <option value="achromatopsia">⚫ Monocromacia (Ausência total de cores)</option>
            <option value="blue-cone-monochromacy">🔵 Blue Cone Monochromacy (Somente Azul)</option>
          </select>
        </div>
      )}

      {showFontAdjust && (
        <div className="panel-section">
          <h3 className="panel-subtitle">Ajustes de Fonte</h3>
          <button aria-label="Aumentar tamanho da fonte" className="panel-button" type="button" onClick={() => setSize(size + 0.1)}>Aumentar Fonte</button>
          <button aria-label="Diminuir tamanho da fonte" className="panel-button" type="button" onClick={() => setSize(size > 0.8 ? size - 0.1 : size)}>Diminuir Fonte</button>
        </div>
      )}

      {showSpacingAdjust && (
        <div className="panel-section">
          <h3 className="panel-subtitle">Ajustes de Espaçamento</h3>
          <button aria-label="Aumentar espaçamento" className="panel-button" type="button" onClick={() => setSpacing(spacing + 0.1)}>Aumentar Espaçamento</button>
          <button aria-label="Diminuir espaçamento" className="panel-button" type="button" onClick={() => setSpacing(spacing > 1 ? spacing - 0.1 : spacing)}>Diminuir Espaçamento</button>
        </div>
      )}

      {showSpeechSwitch && (
        <div className="panel-section">
          <h3 className="panel-subtitle">Leitura de Texto</h3>
          <label className="switch" htmlFor="speech-toggle">
            <input
              id="speech-toggle"
              type="checkbox"
              checked={speechEnabled}
              onChange={() => setSpeechEnabled(!speechEnabled)}
              aria-checked={speechEnabled}
              aria-label={speechEnabled ? 'Desativar leitura de texto' : 'Ativar leitura de texto'}
            />
            <span className="slider" />
            <span className="switch-label">{speechEnabled ? 'Leitura ativada' : 'Leitura desativada'}</span>
          </label>
        </div>
      )}
    </div>
  );
}