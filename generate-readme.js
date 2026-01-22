import fs from "fs";

// Lê o template
const template = fs.readFileSync("README.template.md", "utf-8");

// Hora local SP
const now = new Date(
  new Date().toLocaleString("en-US", {
    timeZone: "America/Sao_Paulo"
  })
);

const hour = now.getHours();
const minute = now.getMinutes();

const totalMinutes = hour * 60 + minute;
const slot = Math.floor(totalMinutes / 5) % 3;

/**
 * Rotação rápida (10 em 10 minutos)
 */
let banner;

if (slot === 0) {
  banner = "./assets/banner-day.gif";
} else if (slot === 1) {
  banner = "./assets/banner-afternoon.gif";
} else {
  banner = "./assets/banner-night.gif";
}

// Gera o README final
const output = template.replace("{{BANNER_URL}}", banner);
fs.writeFileSync("README.md", output);

console.log(`Banner selecionado: ${banner}`);
