# Narvio — Sitio web

Sitio bilingüe (ES/EN) de Narvio, consultoría de IA. React + Vite + Tailwind. Sin dependencias de plataformas: el código es 100% tuyo.

## Correr localmente

```bash
npm install
npm run dev
```

## Paso 1 — Formulario de contacto (5 min, gratis)

El formulario envía las solicitudes por **Formspree** (te llegan por correo + dashboard):

1. Crea una cuenta gratis en [formspree.io](https://formspree.io) con tu correo.
2. Crea un formulario nuevo ("New form") y copia su ID (algo como `mqkrzvbe`).
3. En `src/components/narvio/InquiryForm.jsx`, reemplaza `YOUR_FORM_ID` en la línea `FORM_ENDPOINT`.
4. Guarda, haz commit y push — listo.

Plan gratis: 50 solicitudes/mes. Alternativas si prefieres: Web3Forms, Getform.

## Paso 2 — Subir a GitHub

```bash
cd narvio-site
git init
git add .
git commit -m "Narvio website"
```

Crea un repositorio vacío en [github.com/new](https://github.com/new) (nombre: `narvio-site`, privado o público), luego:

```bash
git remote add origin https://github.com/TU_USUARIO/narvio-site.git
git branch -M main
git push -u origin main
```

## Paso 3 — Publicar en Render (gratis)

1. Entra a [render.com](https://render.com) → **New** → **Static Site**.
2. Conecta tu cuenta de GitHub y elige el repo `narvio-site`.
3. Configuración:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. **Create Static Site**. En ~2 minutos tendrás una URL tipo `narvio.onrender.com`.

Cada `git push` a `main` redespliega el sitio automáticamente.

## Dominio propio (opcional, recomendado)

Para una URL 100% limpia (ej. `narvio.com`):

1. Compra el dominio (~$10–15/año) en Namecheap o Cloudflare Registrar.
2. En Render: tu sitio → **Settings** → **Custom Domains** → agrega el dominio.
3. Copia los registros DNS que Render te indica (un `A` y/o `CNAME`) en tu registrador.
4. Render emite el certificado SSL solo. Listo en minutos.

## Estructura

- `src/lib/i18n.jsx` — todos los textos del sitio en ES y EN (edita aquí el contenido y precios)
- `src/components/narvio/` — secciones del sitio
- `public/` — imágenes y favicon
