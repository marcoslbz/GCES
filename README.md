# GCES-MEPA-GH_PAGES-2026-1

Repositorio do grupo MEPA para documentar seu desenvolvimento durante a disciplina de GCES-2026/1, agora com publicacao automatica via GitHub Pages.

## Estrutura do projeto

```text
.
|- .github/
|  |- workflows/
|  |  |- deploy-pages.yml
|- docs/
|  |- index.html
|  |- script.js
|  |- styles.css
|- README.md
```

## Como rodar localmente

1. Clone o repositorio:

```bash
git clone https://github.com/matheusperillo03/GCES-MEPA-GH_PAGES-2026-1.git
cd GCES-MEPA-GH_PAGES-2026-1
```

2. Suba um servidor local na pasta `docs`:

```bash
python3 -m http.server 8000 --directory docs
```

3. Abra no navegador:

```text
http://localhost:8000
```

## Como publicar no GitHub Pages

1. Faca push da branch `main` com esses arquivos.
2. No GitHub, abra `Settings > Pages`.
3. Em **Build and deployment**, selecione **Source: GitHub Actions**.
4. Aguarde o workflow `Deploy GitHub Pages` concluir na aba **Actions**.
5. O site ficara disponivel em:

```text
https://matheusperillo03.github.io/GCES-MEPA-GH_PAGES-2026-1/
```

## Fluxo para atualizar o site

1. Edite os arquivos dentro de `docs/`.
2. Commit e push na branch `main`.
3. O deploy no GitHub Pages sera executado automaticamente.

## Troubleshooting rapido

- Se o site nao atualizar, verifique o status do workflow em **Actions**.
- Se der erro de permissao no deploy, confira se o Pages esta com **GitHub Actions** como source.
- Se receber 404 na URL, confirme se o repositorio esta publico (ou se sua conta/plano permite Pages privado).
