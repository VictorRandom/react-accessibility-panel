# React Accessibility Panel

[![npm version](https://img.shields.io/npm/v/react-accessibility-panel.svg)](https://www.npmjs.com/package/react-accessibility-panel)

🎯 Um painel acessível e personalizável para aplicações React com suporte a:

- ✅ Filtros de correção para daltonismo
- 🔠 Ajuste de tamanho da fonte
- 📏 Ajuste de espaçamento entre linhas
- 🗣️ Leitura em voz alta do conteúdo selecionado (text-to-speech)

---

## 📦 Instalação

```
npm install react-accessibility-panel
```

---

## 🚀 Como usar

### 1. Importe o componente e o CSS:

```
import { AccessibilityPanel } from "react-accessibility-panel";
import "react-accessibility-panel/src/tcc.css";
```

### 2. Renderize o painel no seu aplicativo:

```
<AccessibilityPanel
  showColorFilter={true}
  showFontAdjust={true}
  showSpacingAdjust={true}
  showSpeechSwitch={true}
/>
```

---

## ⚙️ Props disponíveis

| Propriedade              | Tipo     | Padrão     | Descrição |
|--------------------------|----------|------------|-----------|
| `defaultFilter`          | `string` | `"normal"` | Filtro de visão a ser aplicado inicialmente |
| `defaultSize`            | `number` | `1`        | Tamanho da fonte inicial (em `em`) |
| `defaultSpacing`         | `number` | `1.5`      | Espaçamento entre linhas inicial |
| `onSpeechEnabledChange`  | `func`   | `() => {}` | Função chamada quando a leitura for ativada/desativada |
| `showColorFilter`        | `bool`   | `true`     | Exibe o seletor de filtros de daltonismo |
| `showFontAdjust`         | `bool`   | `true`     | Exibe os botões para ajuste de fonte |
| `showSpacingAdjust`      | `bool`   | `true`     | Exibe os botões para ajuste de espaçamento |
| `showSpeechSwitch`       | `bool`   | `true`     | Exibe o botão para ativar/desativar leitura de texto |

---

## 🧠 Funcionalidades

- Leitura de texto selecionado com a API `SpeechSynthesis` (navegadores compatíveis).
- Aplicação de filtros CSS para simulação e adaptação de deficiências visuais.
- Ajustes dinâmicos de acessibilidade que afetam `body` e `html`.

---

## 🔧 Requisitos

- React 17 ou superior

---

## 📜 Licença

MIT

---

Feito por [Victor Balduino](https://github.com/VictorRandom)
