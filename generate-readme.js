import fs from "fs";

// Lê o template
const template = fs.readFileSync("README.template.md", "utf-8");

// Hora local do fuso escolhido
const now = new Date(
  new Date().toLocaleString("en-US", {
    timeZone: "America/Sao_Paulo"
  })
);

const hour = now.getHours();

/**
 * Períodos:
 * Manhã: 05–12
 * Tarde: 13–18
 * Noite: 19–04
 */
let banner;

if (hour >= 5 && hour <= 12) {
  banner = "./assets/banner-day.gif";
} else if (hour >= 13 && hour <= 18) {
  banner = "./assets/banner-afternoon.gif";
} else {
  banner = "./assets/banner-night.gif";
}

// Gera o README final
const output = template.replace("{{BANNER_URL}}", banner);
fs.writeFileSync("README.md", output);

console.log(`Banner selecionado: ${banner}`);
