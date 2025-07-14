function initBotpress() {
  if (window.botpress && window.botpress.init) {
      window.botpress.init({
          "botId": "d3aea06d-0f04-4701-bec3-b457caf79902",
          "clientId": "0e772c62-e321-46b5-a9fb-a88c5104e067",
          "configuration": {
              "color": "#3B82F6",
              "variant": "solid",
              "themeMode": "light",
              "fontFamily": "inter",
              "radius": 1
          }
      });

      window.botpress.on("webchat:ready", () => {
          console.log("✅ Botpress WebChat is ready!");
          
      });
  } else {
      console.warn("⚠️ Botpress WebChat not available yet. Retrying in 2 seconds...");
      setTimeout(initBotpress, 2000); // Retry after 2 seconds
  }
}

// Wait for the page to load before initializing
window.addEventListener("load", initBotpress);
