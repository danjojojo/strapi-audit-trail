# @danjojojo/strapi-audit-trail

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
   yalc add @danjojojo/strapi-audit-trail
   yalc link @danjojojo/strapi-audit-trail
   npm install
   ```

6. Rebuild the project and start the server:

```bash
npm run build
npm run develop
```

## Changelog

### 1.0.4
- Added plugin config

### 1.0.5
- Memoized component fields
- Record audit log from _system process_ for document event caused by APIs

### 1.0.7
- Deduped bulkDelete documentIds for older Strapi versions

### 1.0.8
- Removed fallback value for text fields if data is null
- Memoized all input fields
- Added `Copy Link` to Media field
- Fixed boolean field value display
- Fixed display of null and undefined values

### 1.0.9
- Updated pagination component to clamp page numbers