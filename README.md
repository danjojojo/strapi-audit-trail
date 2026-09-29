# strapi-audit-trail

A custom Strapi plugin for recording activities within the app.

## Prerequisites

- Node version >= 22

## Setup

Follow these steps to set up a plugin development environment:

1. Clone the repository.

2. Read [the Strapi Plugin SDK documentation](https://docs.strapi.io/dev-docs/plugins/development/create-a-plugin#linking-the-plugin-to-your-project).

3. Install yalc globally, run:

```bash
npm install -g yalc
```

4. Navigate to the cloned plugin folder and install dependencies, run:

```bash
npm install
```

5. Link the plugin to your project:

   - In the plugin folder, run:

   ```bash
   yalc publish
   ```

   -  To automatically push updates on plugin changes to the Strapi project directory, go back to the plugin folder and run:
   
   ``` bash
   npm run watch:link
   ```

   - Navigate to your Strapi project directory, open terminal, and run:

   ```bash
   yalc add strapi-audit-trail
   yalc link strapi-audit-trail
   npm install
   ```

6. Rebuild the project and start the server:

```bash
npm run build
npm run develop
```