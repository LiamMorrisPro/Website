
async function loadPage(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
        const html = await res.text();
        document.getElementById("content-area").innerHTML = html;
    } catch (err) {
        console.error("Failed to load page:", err);
        document.getElementById("content-area").innerHTML = "<p style='color:white;'>Error loading content.</p>";
    }
}