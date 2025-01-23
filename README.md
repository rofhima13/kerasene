# Kerasene: Deep Learning for people

![image](https://github.com/user-attachments/assets/5ea71289-6559-417b-82cc-67b410f2982d)


The key words "[MUST]", "[MUST NOT]", "[REQUIRED][MUST]", "[SHALL][MUST]", "[SHALL
NOT][MUST NOT]", "[SHOULD]", "[SHOULD NOT]", "[RECOMMENDED][SHOULD]",  "[MAY]", and
"[OPTIONAL][MAY]" in this document are to be interpreted as described in
[RFC 2119].

[RFC 2119]: https://tools.ietf.org/html/rfc2119
[MUST]: https://tools.ietf.org/html/rfc2119#section-1
[MUST NOT]: https://tools.ietf.org/html/rfc2119#section-2
[SHOULD]: https://tools.ietf.org/html/rfc2119#section-3
[SHOULD NOT]: https://tools.ietf.org/html/rfc2119#section-4
[MAY]: https://tools.ietf.org/html/rfc2119#section-5

## Quick links
- [Foreword](#foreword)
- [Getting started](#getting-started)
- [Navigating the repository](#navigating-the-repository)
- [Tech stack](#tech-stack)

## Foreword
Kerasene is intended to serve as the first true deep learning studio for [Keras](https://keras.io), a deep learning framework for Python.

Sony has already implememented an excellent neural network studio, that you can take a look at [here](https://dl.sony.com). Much of Kerasene's implementation aims to take inspiration from the  I had thought of this idea independently without the knowledge of Sony's implementation. Upon further research, I discovered that a few deep learning consoles already exist. Although they are all technologically impressive, they are either closed-source, proprietary, exclusive to proprietary operating systems, or simply do not possess the type of workflow that I sought for such frameworks.

Kerasene was created to be an elegant, graphical deep learning framework that is free, open-source that anyone can use and edit. The user should be able to utilise Keras and its features to the fullest extent without having to write a single line of code.

## Specification

Before you continue, I recommend that you familiarise yourself with deep learning to elucidate some technical concepts that will be discussed henceforth. From this point on, it will be assumed that you have a foundational understanding of how neural networks operate.

A typical deep learning workflow looks like this: you have a dataset and a task you would like to perform on that dataset. As an engineer, you choose an architecture that is best suited for the task. You load the dataset into the model and train, test it. Great!

However, there is a lot of complexity and nuance in this process. You must tune layer hyperparameters, model training hyperparameters, choose activation functions,
an optimisation algorithm, a loss function, evaluate model performance...it is arduous. Therefore, as a mathematician, it is daunting to learn how to write code. As a programmer, it is daunting to have to learn how to do the math. Keras only solves half the problem.

### From Keras to Kerasene

Keras contains a vast number of APIs that do different things. For now, only the Core layers will matter.

Because of the vast ways that data can be structured, Kerasene MUST accept training and testing data that follows a standard format.

### UI elements

#### Top bar

The top bar MUST contain the application's logo, as well as a menu bar that appears when the header is hovered upon that follows the following structure:
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
    - View License
    - About

#### Browser

The browser MUST be able to be used to navigate the Keras API's library. When an API element is clicked on (such as a layer), that element MUST appear in the editor.

#### Editor

- All elements in the editor MUST use absolute positioning.
- The editor MUST be able to scroll in both directions and zoom in or out independently of the rest of the user interface.
- The editor SHOULD be infinite in size .

#### Control panel
A control panel is REQUIRED to manipulate layer parameters and MUST be located at the bottom of the screen.

#### Layer behaviour
Layers MUST be represented as color-coded horizontally-long building blocks as follows:
- Input layers are represented in <span style="color: white; background-color: rgb(245, 46, 0);">red</span>.
- Dense layers are represented in <span style="color: white; background-color: rgb(240, 176, 1);">gold</span>.
- Regularisation layers are represented in <span style="color: white; background-color: rgb(36, 179, 223);">cyan</span>.
- Activation layers are represented in <span style="color: white; background-color: rgb(0, 179, 48);">green</span>.
- Embedding layers are represented in <span style="color: white; background-color: rgb(0, 54, 202);">blue</span>.
- Masking layers are represented in <span style="color: white; background-color: black">black</span>.
- Lambda layers are represented in <span style="color: white; background-color: rgb(222, 161, 222);">pink</span>.
- 
<div align="center">
    <div class="nn-layer" style="background-color: rgb(240, 176, 1);
  width: 300px;
  padding: 20px;
  color: white;
  box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-weight: bold;
  margin: 2px;">
        Dense
    </div>
    <p>Representation of a Dense layer (as of version 1.0).</p>
</div>

More types will be added over time, namely, but not limited to:
- Convolution layers
- Pooling layers
- Any other layer type that has not been covered yet.

- When a layer is hovered upon, a tooltip that elucidates the layer and explains it in the context of API documentation MUST be displayed. Attribution to Keras MUST be given.
- Layers MUST be able to be dragged and dropped to any position on the editor.
- When a layer is clicked, the control panel MUST display the current hyperparameter settings for that layer.


#### Model behaviour

- Models MUST be represented as topological graphs with layers as interlinking nodes.
- Models MUST be completely functional. The Sequential API SHALL NOT be supported.
- Layers (nodes) MUST interconnect using lines that indicate the direction of data flow.




























## Getting started
Right now, we are **very** early into development. By cloning this repository and running the HTML file, you can take a look at all the ~~bugs~~ features that Kerasene has to offer at the moment and see which direction the project is taking. Any suggestions you might have moving forward would be highly appreciated!

## Navigating the repository

- js/ : Directory containing JavaScript files.
    - main.js : JavaScript file for main functionality.

- styles/ : Directory containing style-related files.
    - out/ : Directory containing compiled output files.
        - main.css : Compiled CSS file.
    - main.scss : SCSS (Sass) file for main styling.

- utils/ : Directory containing utility scripts.
    - build-sass.sh : Shell script for building Sass files.

- .gitignore : File specifying intentionally untracked files to ignore in version control.

- LICENSE : File containing the software license information.

- main.html : HTML file for the main webpage.

- README.md : Markdown file containing information about the project.

So far, there are only a few files you need to worry about: the HTML, CSS, Sass, and JS files. The utils folder contains a tool to compile the Sass files. [Ensure that you have Sass installed.](https://sass-lang.com/install)

At the moment, within the HTML file, you will find:
- Links to the spreadsheet and JavaScript code
- Remote links to [Font Awesome](https://fontawesome.com) and [Google Fonts](https://fonts.google.com).
- Spaghetti code, lots of it. Be sure to bring a fork!

## Specifications
### Frontend
- HTML, CSS, JavaScript is REQUIRED.
- React MAY be used in future.
- Node.js SHALL be used if the above possibility is realised.

### Design
- There MUST be a near one-to-one correspondence with the frontend's components and the Keras API.
- The neural network structure MUST be a tree-like structure with movable nodes, curved edges and branching capability.
- There MUST be a control panel that can be used to manipulate layer and model hyperparameters.

### Backend
- Keras MUST run on Python in the backend.
- As of writing this line, Keras 3 is the latest version and can use TensorFlow, PyTorch, or JAX as backends. Kerasene MUST be developed with that in mind.
- Keras MUST connect to a Python web backend that MUST be either Flask or Django.
- The Electron framework MAY be used in future to run the application offline.

### General
- This application MUST be able to run on users' local machines as a web app, and/or on the cloud on a computer with GPU access.
- Kerasene SHALL be a single-page application, so you MUST NOT create any other HTML files.

## Future work
- Writing documentation once a working prototype exists, most probably with Mkdocs.
- Anything that has not already been done.
