//Download m3u file from some VOD services


//For http live streaming service (This script is generally compatible with smartphones and similar devices.)
const video = document.querySelector('video'); 
video && video.src ? console.log("Extracted m3u8 link:", video.src) : console.log("m3u8 link not found.");


//For some video services (From computer for m3u)
(async () => {
  const m3uUrls = [];
  const entries = performance.getEntries();

  for (const entry of entries) {
    if (entry.name.includes(".m3u")) {
      m3uUrls.push(entry.name);
    }
  }

  for(const url of m3uUrls){
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        console.log("M3U URL:", url);
      }
    }catch(error) {
      console.error("error fetching URL:", url, error);
    }
  }

  console.log("Found M3U URLs:", m3uUrls);

})();



//For some video services (From computer for mp4)
(async () => {
  const mp4Urls = [];
  const entries = performance.getEntries();

  for (const entry of entries) {
    if (entry.name.includes(".mp4")) {
      mp4Urls.push(entry.name);
    }
  }

  for(const url of mp4Urls){
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        console.log("mp4 URL:", url);
      }
    }catch(error) {
      console.error("error fetching URL:", url, error);
    }
  }

  console.log("Found M3U URLs:", mp4Urls);

})();
