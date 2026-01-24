import fs from "fs";

const template = fs.readFileSync("README.template.md", "utf-8");

const now = new Date(
  new Date().toLocaleString("en-US", {
    timeZone: "America/Sao_Paulo"
  })
);

const hour = now.getHours();

let banner;

if (hour >= 5 && hour <= 12) {
  banner = "./assets/banner-day.gif";
} else if (hour >= 13 && hour <= 18) {
  banner = "./assets/banner-afternoon.gif";
} else {
  banner = "./assets/banner-night.gif";
}

const output = template.replace("{{BANNER_URL}}", banner);
fs.writeFileSync("README.md", output);

console.log(`Banner selecionado: ${banner}`);
