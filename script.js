function RobloxTopbarUnibarController(unibar) {
    if (unibar) {
        function isOpened() {
            const color = window.getComputedStyle(unibar).backgroundColor;

            console.log(color);


            unibar.addEventListener('mouseover', function(){
                if (unibar.getAttribute('toggled') === 'true') {
                    unibar.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;
                };
            });

            unibar.addEventListener('mouseleave', function() {
                if (unibar.getAttribute('toggled') === 'true') {
                    unibar.style.backgroundColor = `transparent`;
                };
            });



            function handleOverflow(containerId) {
                const container = document.querySelector(containerId);
            
                if (container) {
                    // Check if content overflows horizontally
                    const isOverflowingX = container.scrollWidth > container.clientWidth;
            
                    if (isOverflowingX) {
                        container.style.overflowX = 'auto'; // Add horizontal scrollbar if needed
                    } else {
                        container.style.overflowX = 'hidden'; // Hide scrollbar if no overflow
                    }

                    container.style.overflowY = 'hidden';
                }
            }



            function applyCustomScrollerStylesAgian() {
                const container = document.querySelector('.RobloxTopbarAPP-Unibar');


                if (container) {
                    // Force a repaint/reflow
                    container.style.display = 'none';
                    container.offsetHeight; // Trigger reflow
                    container.style.display = '';

                    // Reapply custom scrollbar styles
                }
            }



            function reapplyScrollbarStyles() {
                const container = document.getElementById('buttons');

                // Trigger a reflow
                container.style.display = 'none';
                container.offsetHeight; // Trigger reflow
                container.style.display = '';

                // Force redraw (optional, if needed)
                container.style.setProperty('--scrollbar-width', container.scrollWidth + 'px');
            }



            const toggleButton = document.getElementById('RobloxTopbarAPP-Unibar-Open-Close-Button');
            const buttonsContainer = document.getElementById('buttons');
            const topbarAPP = document.getElementById('RobloxTopbarAPP-Unibar');


            window.addEventListener('resize', function() {
                handleOverflow('.RobloxTopbarAPP-Sorter .RobloxTopbarAPP-Unibar');
            });

            document.addEventListener('DOMContentLoaded', function() {
                handleOverflow('.RobloxTopbarAPP-Sorter .RobloxTopbarAPP-Unibar');
            });







            if (unibar.getAttribute('toggled') === 'false') {
                unibar.setAttribute('toggled', 'true');
                topbarAPP.style.width = '44px';

                buttonsContainer.classList.remove('show');
                buttonsContainer.style.maxHeight = '0';  // Collapse height

                unibar.style.backgroundColor = `transparent`;
                unibar.innerHTML = '<svg width="33" height="33" viewBox="0 0 33 33"><circle cx="8.5" cy="16.5" r="2.5" fill="white" /><circle cx="16.5" cy="16.5" r="2.5" fill="white" /><circle cx="24.5" cy="16.5" r="2.5" fill="white" /></svg>';
            } else {
                unibar.setAttribute('toggled', 'false');



                buttonsContainer.classList.add('show');
                // Ensure container expands to fit its content
                setTimeout(() => {
                    buttonsContainer.style.maxHeight = buttonsContainer.scrollHeight + 'px';
                }, 10); // Short delay for transition


                topbarAPP.style.width = 'auto';
                unibar.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;
                unibar.innerHTML = '<svg width="33" height="33" viewBox="0 0 33 33"><rect x="8.5" y="15.5" width="16" height="2" fill="white" rx="1" ry="1" transform="rotate(45 16.5 16.5)" /><rect x="8.5" y="15.5" width="16" height="2" fill="white" rx="1" ry="1" transform="rotate(-45 16.5 16.5)" /></svg>'
            }


            console.log(unibar.getAttribute('toggled'))
        }

        unibar.addEventListener('click', function() {
            isOpened();
        })
    }
}




function onloaded() {
    const unibar = document.getElementById('RobloxTopbarAPP-Unibar-Open-Close-Button');

    RobloxTopbarUnibarController(unibar);
}


document.addEventListener('DOMContentLoaded', function() {
    onloaded();
});