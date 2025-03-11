//Download m3u file from some VOD services w/o encryption.


//For http live streaming service (This script is generally compatible with smartphones and similar devices.)
const video = document.querySelector('video'); 
video && video.src ? console.log("Extracted m3u8 link:", video.src) : console.log("m3u8 link not found.");


//For some video services (Generally for PC.)
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
