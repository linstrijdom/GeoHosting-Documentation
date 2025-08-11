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

# Glossary of Terms

Unsure what a *workspace*, *store*, or *GetCapabilities* request means? This glossary explains key GeoServer concepts to help you navigate the platform confidently.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Term</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>📁 Workspace</td>
      <td>A container in GeoServer used to group related stores and layers, often named for a specific project or data theme.</td>
    </tr>
    <tr>
      <td>🗄️ Store</td>
      <td>Defines how GeoServer connects to your data source (e.g., shapefiles, PostGIS, GeoTIFF). Each store belongs to a workspace.</td>
    </tr>
    <tr>
      <td>🗺️ Layer</td>
      <td>A published dataset in GeoServer, made available through OGC services like WMS, WFS, or WCS.</td>
    </tr>
    <tr>
      <td>📚 Layer Group</td>
      <td>A collection of layers combined into a single map view with a specified drawing order and shared styles.</td>
    </tr>
    <tr>
      <td>🎨 Style</td>
      <td>An SLD or CSS document that defines how data is visually rendered—colors, symbols, line thickness, and opacity.</td>
    </tr>
    <tr>
      <td>🌐 SRS / CRS</td>
      <td>Spatial Reference System (or Coordinate Reference System) that defines how coordinates map to real-world locations (e.g., EPSG:4326).</td>
    </tr>
    <tr>
      <td>🖼️ Web Map Service (WMS)</td>
      <td>An OGC service that delivers map images of spatial data on demand.</td>
    </tr>
    <tr>
      <td>📂 Web Feature Service (WFS)</td>
      <td>An OGC service that returns vector data in formats like GeoJSON, GML, or Shapefile.</td>
    </tr>
    <tr>
      <td>🖨️ Web Coverage Service (WCS)</td>
      <td>An OGC service for retrieving raster data as coverages for further analysis.</td>
    </tr>
    <tr>
      <td>📝 GetCapabilities</td>
      <td>A request returning an XML document describing a service’s available layers, operations, and parameters.</td>
    </tr>
    <tr>
      <td>🗺️ GetMap</td>
      <td>A WMS request that returns a map image based on specified layers, bounding box, style, and output format.</td>
    </tr>
    <tr>
      <td>🔄 Reprojection</td>
      <td>The process of transforming spatial data from one coordinate reference system to another.</td>
    </tr>
    <tr>
      <td>⚙️ GeoWebCache</td>
      <td>A tile caching server integrated with GeoServer that speeds up map delivery by serving pre-rendered tiles.</td>
    </tr>
    <tr>
      <td>📦 Feature Type</td>
      <td>A schema definition for vector data in GeoServer, describing geometry type and attribute structure.</td>
    </tr>
    <tr>
      <td>🗜️ Coverage</td>
      <td>A term used for raster data in GeoServer, representing continuous data such as satellite imagery or elevation models.</td>
    </tr>
  </tbody>
</table>

<br>
