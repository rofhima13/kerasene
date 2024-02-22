/* Kerasene browser API
 * Author: rofhima13
 */

document.addEventListener('DOMContentLoaded', () => {

    // Browser accordion menu functionality
    function toggleBrowserItems(browserItems) {

        for (var i = 0; i < browserItems.length; i++) {
            let itemtext = browserItems[i].innerHTML;
            
            // Hide/show the child browser elements. Ensure that the target element has a browser button.
            browserItems[i].addEventListener("click", function () {
                var panel = this.nextElementSibling;
                if (!panel.classList.contains('browser-leaf')) {
                    this.classList.toggle("active"); // Mark/unmark as active
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                        this.children[0].innerHTML = "<i class=\"fa-solid fa-caret-right\"></i> ";
                    } else {
                        panel.style.display = "block";
                        this.children[0].innerHTML = "<i class=\"fa-solid fa-caret-down\"></i> " ;
                    }
                }
            });
        }
    }

    // Enable menu functionality for the Layers API
    var layersAPIList = document.getElementsByClassName("browser-item");
    toggleBrowserItems(layersAPIList);

    // Resize the browser bar horizontally
    const browser = document.getElementById('browser'); // Actual browser
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

});