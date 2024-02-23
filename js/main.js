
document.addEventListener('DOMContentLoaded', () => {


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

    let browserLayers = browser.querySelectorAll('.browser-component');

    browserLayers.forEach(layer => {

        // Create a layer in the editor when clicked
        layer.addEventListener('click', () => {
            let newLayer = document.createElement('div');
            newLayer.classList.add('nn-layer');
            newLayer.classList.add('draggable');
            newLayer.setAttribute("draggable", "true");
            newLayer.style.backgroundColor = window.getComputedStyle(layer).getPropertyValue("color");
            newLayer.innerHTML = layer.innerHTML;

            // Give the layer a unique ID upon being sent to the editor
            newLayer.id = Math.floor(Math.random() * 2 ** 64).toString(16);
            modelSheet.appendChild(newLayer);

            // Refresh sheet event listeners
            refreshSheetEventListeners();
        })

    });

    function refreshSheetEventListeners() {
        // Drag and drop anywhere on editor
        let sheetLayers = document.querySelectorAll("#model-sheet .nn-layer");

        sheetLayers.forEach(layer => {

            let offsetX, offsetY;
            let isDragging = false;

            layer.addEventListener('mousedown', (e) => {
                e.preventDefault();

                // Tower over other elements 🗿
                // Layer z-Indices must be between 140 and 150, with recently clicked elements indexed higher.
                sheetLayers.forEach(l => {
                    l.style.zIndex = 140;
                })
                layer.style.zIndex = 150;

                isDragging = true;
                const rect = layer.getBoundingClientRect();
                offsetX = e.clientX - rect.left;
                offsetY = e.clientY - rect.top;
            });

            document.addEventListener('mousemove', (e) => {
                if (isDragging) {
                    e.preventDefault();
                    const x = e.clientX - offsetX;
                    const y = e.clientY - offsetY;
                    layer.style.left = x + 'px';
                    layer.style.top = y + 'px';
                }
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });

        })
    }

    

})