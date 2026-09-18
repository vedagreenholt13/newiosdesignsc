
        const premiumcrd = document.getElementById('premiumcrd');
        const overlay = document.getElementById('overlay');
        const applePaySheet = document.getElementById('applePaySheet');
        const statusBox = document.getElementById('statusBox');
        const processingRow = document.getElementById('processingRow');
        const topNotif = document.getElementById('topNotif');
        const lockedModal = document.getElementById('lockedModal');
        const lstModal = document.getElementById('lstModal');

       function startSimulation() {

    // Step 1: Show Premium Card
    setTimeout(() => {
        premiumcrd.classList.add('show');
    }, 500);


    // Step 2: Show Overlay
    setTimeout(() => {
        overlay.classList.add('show');
    }, 1500);


    // Step 3: Show Apple Pay Sheet
    setTimeout(() => {
        applePaySheet.classList.add('show');
    }, 1800);


    // Step 4: Face ID Done
    setTimeout(() => {

        statusBox.innerHTML = `
            <div class="success-icon-circle"></div>
            <div class="done-title">Done</div>
            <div class="done-amount">$399.99</div>
        `;

        processingRow.style.display = 'none';


        // Step 5: Hide Apple Pay and show locked modal
        setTimeout(() => {

            premiumcrd.classList.remove('show');
            applePaySheet.classList.remove('show');
            overlay.classList.remove('show');


            // Show locked modal
            lockedModal.classList.add('show');


            showNotificationLoop();

            setInterval(showNotificationLoop, 6000);


            // Step 6: Show lstModal after lockedModal
            setTimeout(() => {

                lstModal.classList.add('show');

            }, 800); // lockedModal visible for 5 seconds


        }, 1500);


    }, 3500);

}


// Notification function outside
function showNotificationLoop() {

    topNotif.classList.add('show');

    applePayAudio.currentTime = 0;

    applePayAudio.play().catch(error => {
        console.log("Notification sound error:", error);
    });


    setTimeout(() => {
        topNotif.classList.remove('show');
    }, 4000);
}


// Auto start
window.addEventListener('load', () => {
    setTimeout(startSimulation, 300);
});