import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "public", "images");

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Product images from Lorem Picsum (free image service with CORS support)
const images = [
  { name: "laptop.jpg", url: "https://picsum.photos/400/300?random=1" },
  { name: "mouse.jpg", url: "https://picsum.photos/400/300?random=2" },
  { name: "keyboard.jpg", url: "https://picsum.photos/400/300?random=3" },
  { name: "monitor.jpg", url: "https://picsum.photos/400/300?random=4" },
  { name: "headphones.jpg", url: "https://picsum.photos/400/300?random=5" },
  { name: "webcam.jpg", url: "https://picsum.photos/400/300?random=6" },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(fs.createWriteStream(filepath));
          response.on("end", () => {
            console.log(`Downloaded: ${filepath}`);
            resolve();
          });
        } else {
          reject(
            new Error(`Failed to download ${url}: ${response.statusCode}`),
          );
        }
      })
      .on("error", reject);
  });
}

async function downloadAllImages() {
  try {
    console.log("Starting image download...");
    for (const image of images) {
      const filepath = path.join(imagesDir, image.name);
      await downloadImage(image.url, filepath);
    }
    console.log("All images downloaded successfully!");
  } catch (error) {
    console.error("Error downloading images:", error);
    process.exit(1);
  }
}

downloadAllImages();
