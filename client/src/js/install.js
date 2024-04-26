const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {

    // Store triggered event(s)
    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    // if promptevent is empty return
    if (!promptEvent) {
        return;
    }

    // Show prompt
    promptEvent.prompt();

    // clear prompt
    window.deferredPrompt = null;
});

window.addEventListener('appinstalled', (event) => {
    // clears prompt
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});
