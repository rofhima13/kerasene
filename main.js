
document.addEventListener('DOMContentLoaded', () => {

    // Resize the browser bar horizontally
    const browser = document.getElementById('model-browser'); // Actual browser
    const resizeBrowserHandle = document.getElementById('resize-browser'); // Browser

    // The handle adjacent to the browser should be resized when it is clicked on and the mouse moves and stops when the mouse is no longer on it. 
    resizeBrowserHandle.addEventListener('mousedown', (event) => {
            event.preventDefault();
        
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMouseMove);
        });
    });
    
    // Function for handling the size when the mouse is moved horizontally.
    function handleMouseMove(event) {
        const sidebarWidth = event.clientX;
        browser.style.flex = `0 0 ${sidebarWidth}px`;
    }

    // Resize the control panel vertically
    const modelSheet = document.getElementById("model-sheet");
    const resizeCtrlPanelHandle = document.getElementById("resize-model-sheet");
    const ctrlPanel = document.getElementById("param-ctrl-panel");

    // The handle adjacent the control panel at the bottom should be resized when it is clicked on and the mouse moves and stops when the mouse is no longer on it. 
    resizeCtrlPanelHandle.addEventListener('mousedown', event => {
        event.preventDefault();
        
        document.addEventListener('mousemove', handleMouseMoveY);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMouseMoveY);
        });
        
        function handleMouseMoveY(event) {
            const sidebarHeight = window.innerHeight - event.clientY;
            modelSheet.style.flex = `0 0 ${sidebarHeight}px`;
            ctrlPanel.style.height = `${sidebarHeight}px`;
        }
        
    });

    // API browser accordion (TODO: Fix bug that prevents nested accordions from opening correctly)
    var acc = document.getElementsByClassName("browser-list-item");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // Add layer dimension on click
    const addLayerDimensionButton = document.getElementById("add-layer-dimension");
    var inputLayerShapeDimensions = document.getElementById("input-shape-dimensions");

    addLayerDimensionButton.addEventListener('click', () => {
        let inp = document.createElement('input');
        inp.type = "number"
        inp.className = "layer-dimension";
        inputLayerShapeDimensions.appendChild(inp);
    })

    // Add layer dimension on click
    const removeLayerDimensionButton = document.getElementById("remove-layer-dimension");
    var inputLayerShapeDimensions = document.getElementById("input-shape-dimensions");

    removeLayerDimensionButton.addEventListener('click', () => {
        inputLayerShapeDimensions.lastChild.remove();
    })

    let browserLayers = browser.querySelectorAll('.nn-layer');
    
    browserLayers.forEach(layer => {

        // Create a layer in the editor when clicked
        layer.addEventListener('click', () => {
            let newLayer = layer.cloneNode();
            newLayer.innerHTML = layer.innerHTML;

            // Give the layer a unique ID upon being sent to the editor
            newLayer.id = Math.floor(Math.random() * 2**64).toString(16)
            modelSheet.appendChild(newLayer);
        })

    });

    // Allow NN layers to be moved around in the editor after being clicked
    let layers = document.querySelectorAll('.nn-layer');

})