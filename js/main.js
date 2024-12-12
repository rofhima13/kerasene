document.addEventListener("DOMContentLoaded", () => {
  // Resize the control panel vertically
  const modelSheet = document.getElementById("model-sheet");
  const resizeCtrlPanelHandle = document.getElementById("resize-model-sheet");
  const ctrlPanel = document.getElementById("param-ctrl-panel");

  // The handle adjacent the control panel at the bottom should be resized when it is clicked on and the mouse moves and stops when the mouse is no longer on it.
  resizeCtrlPanelHandle.addEventListener("mousedown", (event) => {
    event.preventDefault();

    document.addEventListener("mousemove", handleMouseMoveY);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMoveY);
    });

    function handleMouseMoveY(event) {
      const sidebarHeight = window.innerHeight - event.clientY;
      modelSheet.style.flex = `0 0 ${sidebarHeight}px`;
      ctrlPanel.style.height = `${sidebarHeight}px`;
    }
  });

  // Change the control panel's content when any layer is clicked
    function changeControlPanelContent(controlElem) {
        const ctrlPanelContent = document.getElementById(
            "param-ctrl-panel-content"
        );

        switch (controlElem.innerHTML) {
            case "Input":
                ctrlPanelContent.innerHTML = `
                <div id="param-ctrl-panel-header" class="header">Input</div>
                <div id="param-ctrl-panel-main">
                    <div class="parameter">
                        Shape:
                        <div id="input-shape-dimensions"></div>
                        <button id="add-layer-dimension">Add dimension</button>
                        <button id="remove-layer-dimension">Remove last dimension</button>
                    </div>
                    <div class="parameter">
                        Batch size:
                        <input type="number" />
                    </div>
                    <div class="parameter">
                        Data type:
                        <select>
                            <option>float32</option>
                            <option>float64</option>
                            <option>int32</option>
                            <option>int64</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Sparse?
                        <input type="radio" name="input-sparse" /> Yes
                        <input type="radio" name="input-sparse" /> No
                    </div>
                    <div class="parameter">
                        Name:
                        <input type="text" />
                    </div>
                    <div class="parameter">
                        Wrapper Tensor:
                        <input type="text" />
                    </div>
                </div>`;
                // Input layer add dimension
                // Add layer dimension on click
                const addLayerDimensionButton = document.getElementById(
                    "add-layer-dimension"
                );
                var inputLayerShapeDimensions = document.getElementById(
                    "input-shape-dimensions"
                );

                addLayerDimensionButton.addEventListener("click", () => {
                    let inp = document.createElement("input");
                    inp.type = "number";
                    inp.className = "layer-dimension";
                    inputLayerShapeDimensions.appendChild(inp);
                });

                // Remove layer dimension on click
                const removeLayerDimensionButton = document.getElementById(
                    "remove-layer-dimension"
                );
                var inputLayerShapeDimensions = document.getElementById(
                    "input-shape-dimensions"
                );

                removeLayerDimensionButton.addEventListener("click", () => {
                    inputLayerShapeDimensions.lastChild.remove();
                });
                break;
            case "Dense":
                ctrlPanelContent.innerHTML = `
            <div id="param-ctrl-panel-header" class="header">Dense</div>
                <div id="param-ctrl-panel-main">
                    <div class="parameter">
                        Units:
                        <input type="number" />
                    </div>
                    <div class="parameter">
                        Bias?
                        <input type="radio" name="dense-bias" /> Yes
                        <input type="radio" name="dense-bias" /> No
                    </div>
                    <div class="parameter">
                        Kernel initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option selected>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option selected>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Kernel regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Activity regularizer:
                        <select>
                            <option>None</option>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Kernel constraints:
                        <select>
                            <option>None</option>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias constraints:
                        <select>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                    <div class="parameter">
                        LoRA rank:
                        <input type="number"/>
                    </div>
                </div>
        `;
                break;
            case "Activation":
                ctrlPanelContent.innerHTML = `
                <div id="param-ctrl-panel-header" class="header">Activation</div>
<div id="param-ctrl-panel-main">
    <div class="parameter">
        Activation:
        <select>
            <option>relu</option>
            <option>sigmoid</option>
            <option>softmax</option>
            <option>softplus</option>
            <option>softsign</option>
            <option>tanh</option>
            <option>selu</option>
            <option>elu</option>
            <option>exponential</option>
            <option>leaky_relu</option>
            <option>relu6</option>
            <option>silu</option>
            <option>hard_silu</option>
            <option>gelu</option>
            <option>hard_sigmoid</option>
            <option>linear</option>
            <option>mish</option>
            <option>log_softmax </option>
        </select>
        <div class="parameter">
            <button>Advanced options</button>
        </div>
    </div>
</div>
`;
                break;
            case "Embedding":
                ctrlPanelContent.innerHTML = `
            <div id="param-ctrl-panel-header" class="header">Embedding</div>
<div id="param-ctrl-panel-main">
    <div class="parameter">
        Input dimension:
        <input type="number"/>
    </div>
    <div class="parameter">
        Output dimension:
        <input type="number"/>
    </div>
    <div class="parameter">
        Initializer:
        <select>
            <option>RandomNormal</option>
            <option selected>RandomUniform</option>
            <option>TruncatedNormal</option>
            <option>Zeros</option>
            <option>Ones</option>
            <option>GlorotNormal</option>
            <option>GlorotUniform</option>
            <option>HeNormal</option>
            <option>HeUniform</option>
            <option>OrthogonalInitializer</option>
            <option>Constant</option>
            <option>VarianceScaling</option>
            <option>LecunNormal</option>
            <option>LecunUniform</option>
            <option>Identity </option>
        </select>
    </div>
    <div class="parameter">
        Regularizer:
        <select>
            <option>None</option>
            <option value="">Base</option>
            <option value="">L1</option>
            <option value="">L2</option>
            <option value="">L1L2</option>
            <option value="">OrthogonalRegularizer</option>
        </select>
    </div>
    <div class="parameter">
        Constraint:
        <select>
            <option>None</option>
            <option>Constraint</option>
            <option>MaxNorm</option>
            <option>MinMaxNorm</option>
            <option>NonNeg</option>
            <option>UnitNorm </option>
        </select>
    </div>
    <div class="parameter">
        Zero masking?
        <input type="radio" name="mask-zero" id=""> Yes
        <input type="radio" name="mask-zero" id=""> No
    </div>
    <div class="parameter">
        LoRA rank:
        <input type="number"/>
    </div>
</div>`;
                break;

            case "Masking":
                ctrlPanelContent.innerHTML = `
    <div id="param-ctrl-panel-header" class="header">Masking</div>
    <div id="param-ctrl-panel-main">
        <div class="parameter">
            Masking value:
            <input type="number" name="" id="" step="any"/>
        </div>
    </div>`;
                break;

            case "Lambda":
                ctrlPanelContent.innerHTML = `
            <div id="param-ctrl-panel-header" class="header">Lambda</div>
<div id="param-ctrl-panel-main">
    <div id="lambda-eq-preview" class="parameter">
        <!-- <small>Please enter an equation below using TeX syntax.</small> -->
    </div>
    <div class="parameter">
        Function:
        <input type="text" name="lambda-input-eq" id="lambda-input-eq">
    </div>
    <div class="parameter">
        Output shape:
        <input type="text" name="" id="">
    </div>
    Mask:
    <input type="hidden" name="">
</div>`;
                // Lambda layer MathJax live preview
                let lambdaEqInput = document.querySelector("#lambda-input-eq");
                let lambdaEqPreview = document.querySelector("#lambda-eq-preview");

                lambdaEqInput.addEventListener("keyup", () => {
                    lambdaEqPreview.innerHTML = lambdaEqInput.value;
                    MathJax.typeset();
                });
                break;

            case "Convolution":
                ctrlPanelContent.innerHTML = `
    <div id="param-ctrl-panel-header" class="header">Convolution</div>
                <div id="param-ctrl-panel-main">
                    <div class="parameter">
                        Dimensionality:
                        <input type="radio" name="conv-dims" id=""> 1D
                        <input type="radio" name="conv-dims" id=""> 2D
                        <input type="radio" name="conv-dims" id=""> 3D
                    </div>
                    <div class="parameter">
                        Filters:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Kernel size:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Strides:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Padding:
                        <input type="radio" name="conv-padding" id=""> Same
                        <input type="radio" name="conv-padding" id=""> Valid
                    </div>
                    <div class="parameter">
                        Data format:
                        <input type="radio" name="" id=""> Channels first
                        <input type="radio" name="" id=""> Channels last
                    </div>
                    <div class="parameter">
                        Dilation rate:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Groups:
                        <input type="number" name="" id="" min="1">
                    </div>
                    <div class="parameter">
                        Activation:
                        <select>
                            <option>relu</option>
                            <option>sigmoid</option>
                            <option>softmax</option>
                            <option>softplus</option>
                            <option>softsign</option>
                            <option>tanh</option>
                            <option>selu</option>
                            <option>elu</option>
                            <option>exponential</option>
                            <option>leaky_relu</option>
                            <option>relu6</option>
                            <option>silu</option>
                            <option>hard_silu</option>
                            <option>gelu</option>
                            <option>hard_sigmoid</option>
                            <option>linear</option>
                            <option>mish</option>
                            <option>log_softmax </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias?
                        <input type="radio" name="dense-bias" /> Yes
                        <input type="radio" name="dense-bias" /> No
                    </div>
                    <div class="parameter">
                        Kernel initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option selected>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option selected>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Kernel regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Activity regularizer:
                        <select>
                            <option>None</option>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Kernel constraints:
                        <select>
                            <option>None</option>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias constraints:
                        <select>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                </div>`;
                break;
            case "Convolution (Separable)":
                ctrlPanelContent.innerHTML = `
        <div id="param-ctrl-panel-header" class="header">Convolution (Separable)</div>
                <div id="param-ctrl-panel-main">
                    <div class="parameter">
                        Dimensionality:
                        <input type="radio" name="conv-dims" id=""> 1D
                        <input type="radio" name="conv-dims" id=""> 2D
                    </div>
                    <div class="parameter">
                        Filters:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Kernel size:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Strides:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Padding:
                        <input type="radio" name="conv-padding" id=""> Same
                        <input type="radio" name="conv-padding" id=""> Valid
                    </div>
                    <div class="parameter">
                        Data format:
                        <input type="radio" name="" id=""> Channels first
                        <input type="radio" name="" id=""> Channels last
                    </div>
                    <div class="parameter">
                        Dilation rate:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Depth multiplier:
                        <input type="number" name="" id="" min="1">
                    </div>
                    <div class="parameter">
                        Activation:
                        <select>
                            <option>relu</option>
                            <option>sigmoid</option>
                            <option>softmax</option>
                            <option>softplus</option>
                            <option>softsign</option>
                            <option>tanh</option>
                            <option>selu</option>
                            <option>elu</option>
                            <option>exponential</option>
                            <option>leaky_relu</option>
                            <option>relu6</option>
                            <option>silu</option>
                            <option>hard_silu</option>
                            <option>gelu</option>
                            <option>hard_sigmoid</option>
                            <option>linear</option>
                            <option>mish</option>
                            <option>log_softmax </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias?
                        <input type="radio" name="dense-bias" /> Yes
                        <input type="radio" name="dense-bias" /> No
                    </div>
                    <div class="parameter">
                        Depthwise initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option selected>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Pointwise initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option selected>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option selected>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Depthwise regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Pointwise regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Activity regularizer:
                        <select>
                            <option>None</option>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Depthwise constraints:
                        <select>
                            <option>None</option>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Pointwise constraints:
                        <select>
                            <option>None</option>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias constraints:
                        <select>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                </div>`;
                break;
            case "Convolution (Depthwise)":
                ctrlPanelContent.innerHTML = `
        <div id="param-ctrl-panel-header" class="header">Convolution (Depthwise)</div>
                <div id="param-ctrl-panel-main">
                    <div class="parameter">
                        Dimensionality:
                        <input type="radio" name="conv-dims" id=""> 1D
                        <input type="radio" name="conv-dims" id=""> 2D
                    </div>
                    <div class="parameter">
                        Kernel size:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Strides:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Padding:
                        <input type="radio" name="conv-padding" id=""> Same
                        <input type="radio" name="conv-padding" id=""> Valid
                    </div>
                    <div class="parameter">
                        Data format:
                        <input type="radio" name="" id=""> Channels first
                        <input type="radio" name="" id=""> Channels last
                    </div>
                    <div class="parameter">
                        Dilation rate:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Depth multiplier:
                        <input type="number" name="" id="" min="1">
                    </div>
                    <div class="parameter">
                        Activation:
                        <select>
                            <option>relu</option>
                            <option>sigmoid</option>
                            <option>softmax</option>
                            <option>softplus</option>
                            <option>softsign</option>
                            <option>tanh</option>
                            <option>selu</option>
                            <option>elu</option>
                            <option>exponential</option>
                            <option>leaky_relu</option>
                            <option>relu6</option>
                            <option>silu</option>
                            <option>hard_silu</option>
                            <option>gelu</option>
                            <option>hard_sigmoid</option>
                            <option>linear</option>
                            <option>mish</option>
                            <option>log_softmax </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias?
                        <input type="radio" name="dense-bias" /> Yes
                        <input type="radio" name="dense-bias" /> No
                    </div>
                    <div class="parameter">
                        Depthwise initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option selected>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option selected>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Depthwise regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Activity regularizer:
                        <select>
                            <option>None</option>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Depthwise constraints:
                        <select>
                            <option>None</option>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias constraints:
                        <select>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                </div>
        `;
                break;
            case "Convolution (Transposed)":
                ctrlPanelContent.innerHTML = `
                <div id="param-ctrl-panel-header" class="header">Convolution (Transposed)</div>
                <div id="param-ctrl-panel-main">
                    <div class="parameter">
                        Dimensionality:
                        <input type="radio" name="conv-dims" id=""> 1D
                        <input type="radio" name="conv-dims" id=""> 2D
                        <input type="radio" name="conv-dims" id=""> 3D
                    </div>
                    <div class="parameter">
                        Filters:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Kernel size:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Strides:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Padding:
                        <input type="radio" name="conv-padding" id=""> Same
                        <input type="radio" name="conv-padding" id=""> Valid
                    </div>
                    <div class="parameter">
                        Data format:
                        <input type="radio" name="" id=""> Channels first
                        <input type="radio" name="" id=""> Channels last
                    </div>
                    <div class="parameter">
                        Dilation rate:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Activation:
                        <select>
                            <option>relu</option>
                            <option>sigmoid</option>
                            <option>softmax</option>
                            <option>softplus</option>
                            <option>softsign</option>
                            <option>tanh</option>
                            <option>selu</option>
                            <option>elu</option>
                            <option>exponential</option>
                            <option>leaky_relu</option>
                            <option>relu6</option>
                            <option>silu</option>
                            <option>hard_silu</option>
                            <option>gelu</option>
                            <option>hard_sigmoid</option>
                            <option>linear</option>
                            <option>mish</option>
                            <option>log_softmax </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias?
                        <input type="radio" name="dense-bias" /> Yes
                        <input type="radio" name="dense-bias" /> No
                    </div>
                    <div class="parameter">
                        Kernel initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option selected>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias initializer:
                        <select>
                            <option>RandomNormal</option>
                            <option>RandomUniform</option>
                            <option>TruncatedNormal</option>
                            <option selected>Zeros</option>
                            <option>Ones</option>
                            <option>GlorotNormal</option>
                            <option>GlorotUniform</option>
                            <option>HeNormal</option>
                            <option>HeUniform</option>
                            <option>OrthogonalInitializer</option>
                            <option>Constant</option>
                            <option>VarianceScaling</option>
                            <option>LecunNormal</option>
                            <option>LecunUniform</option>
                            <option>Identity </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Kernel regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias regularizer:
                        <select>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Activity regularizer:
                        <select>
                            <option>None</option>
                            <option value="">Base</option>
                            <option value="">L1</option>
                            <option value="">L2</option>
                            <option value="">L1L2</option>
                            <option value="">OrthogonalRegularizer</option>
                        </select>
                    </div>
                    <div class="parameter">
                        Kernel constraint:
                        <select>
                            <option>None</option>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                    <div class="parameter">
                        Bias constraint:
                        <select>
                            <option>Constraint</option>
                            <option>MaxNorm</option>
                            <option>MinMaxNorm</option>
                            <option>NonNeg</option>
                            <option>UnitNorm </option>
                        </select>
                    </div>
                </div>
            `;
                break;
            case "Max Pooling":
                ctrlPanelContent.innerHTML = `
                    <div id="param-ctrl-panel-header" class="header">Max Pooling</div>
                <div id="param-ctrl-panel-main">
                    <div class="parameter">
                        Dimensionality:
                        <input type="radio" name="pool-dim" id=""> 1D
                        <input type="radio" name="pool-dim" id=""> 2D
                        <input type="radio" name="pool-dim" id=""> 3D
                    </div>
                    <div class="parameter">
                        Pool size:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Strides:
                        <input type="number" name="" id="">
                    </div>
                    <div class="parameter">
                        Padding:
                        <input type="radio" name="pool-padding" id=""> Same
                        <input type="radio" name="pool-padding" id=""> Valid
                    </div>
                    <div class="parameter">
                        Data format:
                        <input type="radio" name="" id=""> Channels first
                        <input type="radio" name="" id=""> Channels last
                    </div>
                </div>
                `;
                break;
            case "Average Pooling":
                ctrlPanelContent.innerHTML = `
                <div id="param-ctrl-panel-header" class="header">Average Pooling</div>
<div id="param-ctrl-panel-main">
    <div class="parameter">
        Dimensionality:
        <input type="radio" name="pool-dim" id=""> 1D
        <input type="radio" name="pool-dim" id=""> 2D
        <input type="radio" name="pool-dim" id=""> 3D
    </div>
    <div class="parameter">
        Pool size:
        <input type="number" name="" id="">
    </div>
    <div class="parameter">
        Strides:
        <input type="number" name="" id="">
    </div>
    <div class="parameter">
        Padding:
        <input type="radio" name="pool-padding" id=""> Same
        <input type="radio" name="pool-padding" id=""> Valid
    </div>
    <div class="parameter">
        Data format:
        <input type="radio" name="" id=""> Channels first
        <input type="radio" name="" id=""> Channels last
    </div>
</div>
            `;
                break;
            case "Max Pooling (Global)":
                ctrlPanelContent.innerHTML = `
            <div id="param-ctrl-panel-header" class="header">Max Pooling (Global)</div>
            <div id="param-ctrl-panel-main">
                <div class="parameter">
                    Dimensionality:
                    <input type="radio" name="pool-dim" id=""> 1D
                    <input type="radio" name="pool-dim" id=""> 2D
                    <input type="radio" name="pool-dim" id=""> 3D
                </div>
                <div class="parameter">
                    Data format:
                    <input type="radio" name="" id=""> Channels first
                    <input type="radio" name="" id=""> Channels last
                </div>
                <div class="parameter">
                    Keep temporal dimension?
                    <input type="radio" name="gpool-keepdims" id=""> Yes
                    <input type="radio" name="gpool-keepdims" id=""> No
                </div>
            </div>
        `;
                break;
            case "Average Pooling (Global)":
                ctrlPanelContent.innerHTML = `
        <div id="param-ctrl-panel-header" class="header">Average Pooling (Global)</div>
<div id="param-ctrl-panel-main">
    <div class="parameter">
        Dimensionality:
        <input type="radio" name="pool-dim" id=""> 1D
        <input type="radio" name="pool-dim" id=""> 2D
        <input type="radio" name="pool-dim" id=""> 3D
    </div>
    <div class="parameter">
        Data format:
        <input type="radio" name="" id=""> Channels first
        <input type="radio" name="" id=""> Channels last
    </div>
    <div class="parameter">
        Keep temporal dimension?
        <input type="radio" name="gpool-keepdims" id=""> Yes
        <input type="radio" name="gpool-keepdims" id=""> No
    </div>
</div>
        `;
                break;
            default:
                ctrlPanelContent.innerHTML = ""; // Clear the panel for unhandled cases
                break;
        }
    }

  let browserLayers = browser.querySelectorAll(".browser-component");

  browserLayers.forEach((layer) => {
    // Create a layer in the editor when clicked
    layer.addEventListener("click", () => {
      let newLayer = document.createElement("div");
      newLayer.classList.add("nn-layer");
      newLayer.classList.add("draggable");
      newLayer.setAttribute("draggable", "true");
      newLayer.style.backgroundColor = window
        .getComputedStyle(layer)
        .getPropertyValue("color");
      newLayer.innerHTML = layer.innerHTML;

      changeControlPanelContent(newLayer);

      // Give the layer a unique ID upon being sent to the editor
      newLayer.id = Math.floor(Math.random() * 2 ** 64).toString(16);
      modelSheet.appendChild(newLayer);

      // Refresh sheet event listeners
      refreshSheetEventListeners();
    });
  });

  function refreshSheetEventListeners() {
    // Drag and drop anywhere on editor
    let sheetLayers = document.querySelectorAll("#model-sheet .nn-layer");

    sheetLayers.forEach((layer) => {
      let offsetX, offsetY;
      let isDragging = false;

      layer.addEventListener("mousedown", (e) => {
        e.preventDefault();

        // Tower over other elements 🗿
        // Layer z-Indices must be between 140 and 150, with recently clicked elements indexed higher.
        sheetLayers.forEach((l) => {
          l.style.zIndex = 140;
        });
        layer.style.zIndex = 150;

        isDragging = true;
        const rect = layer.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
      });

      document.addEventListener("mousemove", (e) => {
        if (isDragging) {
          e.preventDefault();
          const x = e.clientX - offsetX;
          const y = e.clientY - offsetY;
          layer.style.left = x + "px";
          layer.style.top = y + "px";
        }
      });

      document.addEventListener("mouseup", () => {
        isDragging = false;
      });

      layer.addEventListener('click', (e) => {
        changeControlPanelContent(layer);
      })
    });
  }
});
