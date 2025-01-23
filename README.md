# Kerasene: Deep Learning for Everyone

![image](https://github.com/user-attachments/assets/5ea71289-6559-417b-82cc-67b410f2982d)
Screenshot from Kerasene in its current state. Right now, only the Layers API has been graphically implemented.

Visit Link: https://rofhima13.github.io/kerasene/

The terms "[MUST]", "[MUST NOT]", "[REQUIRED][MUST]", "[SHALL][MUST]", "[SHALL NOT][MUST NOT]", "[SHOULD]", "[SHOULD NOT]", "[RECOMMENDED][SHOULD]", "[MAY]", and "[OPTIONAL][MAY]" used throughout this document are to be interpreted as outlined in [RFC 2119].

[RFC 2119]: https://tools.ietf.org/html/rfc2119
[MUST]: https://tools.ietf.org/html/rfc2119#section-1
[MUST NOT]: https://tools.ietf.org/html/rfc2119#section-2
[SHOULD]: https://tools.ietf.org/html/rfc2119#section-3
[SHOULD NOT]: https://tools.ietf.org/html/rfc2119#section-4
[MAY]: https://tools.ietf.org/html/rfc2119#section-5

## Quick Links
- [Foreword](#foreword)
- [Getting Started](#getting-started)
- [Repository Overview](#repository-overview)
- [Technology Stack](#technology-stack)

## Foreword
Kerasene is designed to be the first comprehensive deep learning studio for [Keras](https://keras.io), a Python-based deep learning framework.

Sony has already introduced an impressive neural network studio, which you can explore [here](https://dl.sony.com). While Kerasene draws inspiration from this implementation, the idea for Kerasene originated independently. Further research revealed the existence of several deep learning consoles. Although technologically advanced, they are often closed-source, proprietary, restricted to specific operating systems, or lacking in workflow flexibility.

Kerasene aims to be an intuitive, graphical, open-source deep learning framework that empowers users to fully utilise Keras' capabilities without needing to write code.

## Specification

Before proceeding, it is recommended that you have a foundational understanding of deep learning concepts, as technical details will follow. This document assumes familiarity with neural network principles.

A typical deep learning workflow involves starting with a dataset and a task to be performed. The engineer selects a suitable architecture, loads the dataset into the model, and trains and tests it. However, this process can be intricate, involving:
- Tuning layer and model hyperparameters
- Selecting activation functions, optimisation algorithms, and loss functions
- Evaluating model performance

For mathematicians, coding can be overwhelming, and for programmers, learning the underlying mathematics can be daunting. Keras partially addresses this challenge, but Kerasene aims to fill the gap entirely.

### From Keras to Kerasene

Keras provides an extensive range of APIs. For now, only the Core layers will be relevant.

Due to the diversity of data structures, Kerasene **MUST** accept training and testing data in a standardised format.

### User Interface Elements

#### Top Bar
The top bar **MUST** feature the application logo and a menu bar, appearing on hover, with the following structure:
- File
  - New
  - Open
  - Save
- Edit
  - Undo
  - Redo
  - Cut
  - Copy
  - Paste
- Help
  - Documentation
  - View Licence
  - About

#### Browser
The browser **MUST** enable navigation through the Keras API library. Clicking on an API element (e.g., a layer) should add it to the editor.

#### Editor
- All editor elements **MUST** use absolute positioning.
- The editor **MUST** support scrolling in all directions and independent zooming.
- The editor **SHOULD** have infinite size.

#### Control Panel
A control panel **MUST** allow manipulation of layer parameters and be located at the bottom of the screen.

#### Layer Representation
Layers **MUST** be displayed as colour-coded, horizontally elongated blocks:
- Input layers: <span style="color: white; background-color: rgb(245, 46, 0);">red</span>
- Dense layers: <span style="color: white; background-color: rgb(240, 176, 1);">gold</span>
- Regularisation layers: <span style="color: white; background-color: rgb(36, 179, 223);">cyan</span>
- Activation layers: <span style="color: white; background-color: rgb(0, 179, 48);">green</span>
- Embedding layers: <span style="color: white; background-color: rgb(0, 54, 202);">blue</span>
- Masking layers: <span style="color: white; background-color: black">black</span>
- Lambda layers: <span style="color: white; background-color: rgb(222, 161, 222);">pink</span>

Additional layer types, including convolution and pooling layers, will be introduced in future versions.

Layer-specific functionality includes:
- Displaying tooltips with API documentation and Keras attribution when hovered over.
- Supporting drag-and-drop operations for repositioning.
- Displaying current hyperparameter settings in the control panel when clicked.

#### Model Representation
- Models **MUST** be depicted as topological graphs with layers as interlinked nodes.
- Models **MUST** support complete functionality and **SHALL NOT** rely on the Sequential API.
- Nodes (layers) **MUST** interconnect with lines showing data flow direction.

## Getting Started
The project is in its early stages. Clone the repository and run the HTML file to explore the current features (and bugs). Your suggestions for improvement are welcome!

## Repository Overview

- **js/**: Contains JavaScript files.
  - **main.js**: Core JavaScript functionality.
- **styles/**: Contains style-related files.
  - **out/**: Compiled output files.
    - **main.css**: Compiled CSS.
  - **main.scss**: Source SCSS (Sass) file for styling.
- **utils/**: Contains utility scripts.
  - **build-sass.sh**: Shell script for compiling Sass files.
- **.gitignore**: Lists files to exclude from version control.
- **LICENSE**: Details software licensing.
- **main.html**: Main HTML file.
- **README.md**: Project overview.

The key files to focus on are the HTML, CSS, Sass, and JavaScript files. The **utils/** folder contains a tool for compiling Sass files. [Install Sass here](https://sass-lang.com/install).

## Specifications

### Frontend
- HTML, CSS, and JavaScript are **REQUIRED**.
- React **MAY** be integrated in the future.
- Node.js **SHALL** be utilised if React is implemented.

### Design
- The frontend components **MUST** closely align with Keras API functionality.
- Neural network structures **MUST** be tree-like with movable nodes, curved edges, and branching.
- A control panel **MUST** allow for hyperparameter manipulation.

### Backend
- Keras **MUST** run on Python.
- The latest Keras version (as of now, Keras 3) supports TensorFlow, PyTorch, or JAX backends; Kerasene **MUST** accommodate this.
- A Python web backend using Flask or Django **MUST** be implemented.
- The Electron framework **MAY** be explored for offline functionality.

### General
- The application **MUST** operate as a web app on local machines and/or cloud platforms with GPU support.
- Kerasene **SHALL** be a single-page application; additional HTML files **MUST NOT** be created.

## Future Plans
- Develop documentation once a working prototype is ready, likely using MkDocs.
- Implement features not yet covered.

