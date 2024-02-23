document.addEventListener('DOMContentLoaded', () => {
    // Lambda layer MathJax live preview
    let lambdaEqInput = document.querySelector("#lambda-input-eq");
    let lambdaEqPreview = document.querySelector("#lambda-eq-preview");

    lambdaEqInput.addEventListener('keyup', () => {
        lambdaEqPreview.innerHTML = lambdaEqInput.value;
        MathJax.typeset();
    })

// // Input layer add dimension
// // Add layer dimension on click
    // const addLayerDimensionButton = document.getElementById("add-layer-dimension");
    // var inputLayerShapeDimensions = document.getElementById("input-shape-dimensions");

    // addLayerDimensionButton.addEventListener('click', () => {
    //     let inp = document.createElement('input');
    //     inp.type = "number"
    //     inp.className = "layer-dimension";
    //     inputLayerShapeDimensions.appendChild(inp);
    // })

    // // Remove layer dimension on click
    // const removeLayerDimensionButton = document.getElementById("remove-layer-dimension");
    // var inputLayerShapeDimensions = document.getElementById("input-shape-dimensions");

    // removeLayerDimensionButton.addEventListener('click', () => {
    //     inputLayerShapeDimensions.lastChild.remove();
    // })
})