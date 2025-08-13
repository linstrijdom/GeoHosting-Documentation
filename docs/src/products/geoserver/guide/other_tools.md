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

GeoServer makes cross-platform work straightforward by publishing all datasets through standard **OGC** services — such as **WMS**, **WFS**, and **WCS**. These open standards mean your data can be accessed by desktop GIS software, web mapping libraries, and other applications without special configuration.

Below are two common integration examples.

<br>

## Consuming GeoServer WMS in QGIS

QGIS can connect directly to your GeoServer layers via the **WMS (Web Map Service)** protocol, allowing you to view and interact with published maps without downloading data.

<br>

To set up a WMS connection in QGIS, go to: <span class="ui-generic-label">Layer → Add Layer → Add WMS/WMTS Layer…</span>. Click <span class="ui-generic-label">New</span> and enter the following connection details:

<table class="my-table-style">
<thead>
   <tr>
      <th>Field</th>
      <th>Value</th>
   </tr>
</thead>
<tbody>
   <tr>
      <td>Name</td>
      <td>GeoServer WMS</td>
   </tr>
   <tr>
      <td>URL</td>
      <td>http://<geoserver_application_name>.sta.do.kartoza.com/geoserver/ows?service=WMS&version=1.3.0&request=GetCapabilities</td>
   </tr>
</tbody>
</table>

<br>

Click <span class="ui-generic-label">OK</span>, then <span class="ui-generic-label">Connect</span> to retrieve the available layers. Select your desired layer (for example, <span class="ui-filename">quickstart:ne_110m_coastline</span>), click <span class="ui-generic-label">Add</span>, and it will load into your QGIS map canvas — ready for styling, analysis, or overlay with other datasets.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-22.png" alt="Connect WMS" width="auto">
</div>

<br>

## Embedding GeoServer WMS in a Leaflet Map

You can also embed GeoServer layers in an interactive web map using **Leaflet** with just a few lines of code.

<br>

### Step 1: Include Leaflet’s CSS and JS

In your HTML **`<head>`**, add:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
```

<br>

### Step 2: Add a Map Container

In your **`<body>`**, create:

```html
<div id="map" style="height: 400px;"></div>
```

<br>

### Step 3: Initialise the Map and Add the WMS Layer

Still within the **`<body>`**, add:

```html
<script>
const map = L.map('map').setView([0, 0], 2);
L.tileLayer.wms('http://<geoserver_application_name>.sta.do.kartoza.com/geoserver/ows', {
   layers: 'tutorial:Coastline',
   format: 'image/png',
   transparent: true,
   attribution: '© GeoServer'
}).addTo(map);
</script>
```

<br>

### Step 4: View the Map

Save the file and open it in your browser. Your GeoServer layer will appear in the Leaflet map.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Update the hostname and layer name to match your GeoServer instance.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-23.png" alt="Leaflet Map" width="auto">
</div>

<br>

---

**Next up:** A quick glossary of key terms used in this guide.

<br>
