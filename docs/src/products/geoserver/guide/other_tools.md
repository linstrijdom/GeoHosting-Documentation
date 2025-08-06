---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
  - Jeff Osundwa
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# Integrating With Other Tools

## Integrating With Other Tools

GeoServer’s OGC services (WMS, WFS, WCS) can be consumed by desktop GIS clients, web mapping libraries, and other applications. Below are two common examples.

### Consuming GeoServer WMS in QGIS

1. **Open QGIS** and go to **Layer → Add Layer → Add WMS/WMTS Layer…**
2. Click **New**, then enter:
   - **Name:** `GeoServer WMS`
   - **URL:**

     ```bash
     http://<application_name>.sta.do.kartoza.com/geoserver/ows?service=WMS&version=1.3.0&request=GetCapabilities
     ```

3. Click **OK**, then **Connect**.
4. From the list, select `tutorial:Coastline` (and any others), then click **Add**.
5. Your GeoServer layer will appear in the QGIS map canvas.

[Add Image]

### Embedding GeoServer WMS in a Leaflet Map

1. Include Leaflet’s CSS and JS in your HTML `<head>`:

   ```html
   <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
   <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
   ```

2. In your `<body>`, add a `<div id="map" style="height: 400px;"></div>`

3. Initialize the map and add the WMS layer:

   ```html
   <script>
     const map = L.map('map').setView([0, 0], 2);
     L.tileLayer.wms('http://<application_name>.sta.do.kartoza.com/geoserver/ows', {
       layers: 'tutorial:Coastline',
       format: 'image/png',
       transparent: true,
       attribution: '© GeoServer'
     }).addTo(map);
   </script>
   ```

4. Open your HTML file in a browser to see the GeoServer layer displayed via Leaflet.

[Add Image]
