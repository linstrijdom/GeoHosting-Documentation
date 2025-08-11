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

# Data & Preparation

GeoServer connects to and publishes data from a wide variety of sources, making it a highly versatile platform for developing geospatial applications

<br>

At its core, GeoServer works with two main types of spatial data:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Data</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vector</td>
      <td>Used to represent discrete geographic features such as roads, boundaries, and building footprints. Common formats include Shapefile, GeoPackage, and directories of spatial files. Vector data is made up of points, lines, and polygons — each with precise locations and attributes.</td>
    </tr>
    <tr>
      <td>Raster</td>
      <td>Represents continuous surfaces like satellite imagery, elevation models, and scanned maps. Supported formats include GeoTIFF, WorldImage, ImageMosaic, and more — ideal for layers such as terrain, land cover, or aerial photography.</td>
    </tr>
  </tbody>
</table>

<br>

In addition to these, GeoServer supports advanced and specialized data sources such as spatial databases, cascaded services, and application schemas, providing flexibility for even the most complex data workflows.

<br>

## Data Preparation

For this manual, we’ll work with a mix of small-scale vector datasets (1:110m) and a medium-scale shaded relief raster (1:50m) sourced from **Natural Earth**. You can download these ready-to-use datasets here:

- [<span class="ui-filename">Manual_Data_GeoServer.zip</span>](https://github.com/kartoza/GeoHosting-Documentation/docs/src/products/manual_data/Manual_Data_GeoServer.zip)

<br>

After downloading and extracting the ZIP file, you’ll find the following datasets:

- 📁 **boundary_lines** – `ne_110m_admin_0_boundary_lines_land` (shapefile)
- 📁 **populated_places** – `ne_110m_populated_places_simple` (shapefile)
- 📁 **coastline** – `ne_110m_coastline` (shapefile)
- 📁 **countries** – `ne_110m_admin_0_countries` (shapefile)
- 📁 **shaded_relief** – `SR_50M` (shaded relief raster)

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Want to explore more datasets? Visit <a href="https://www.naturalearthdata.com/" target="_blank">Natural Earth</a> to explore and download layers in various scales and formats.
  </div>
</div>

<br>

---

**Next up:** We’ll guide you step-by-step through uploading your data using the File Browser.

<br>
