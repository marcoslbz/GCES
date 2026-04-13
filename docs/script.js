const yearEl = document.getElementById("year");
const lastUpdateEl = document.getElementById("last-update");

const now = new Date();
yearEl.textContent = String(now.getFullYear());
lastUpdateEl.textContent = `Ultima atualizacao local: ${now.toLocaleString("pt-BR")}`;
