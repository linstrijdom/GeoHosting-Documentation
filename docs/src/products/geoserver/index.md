---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# GeoServer

## What is GeoServer?

**GeoServer** is a powerful, Java-based server application that enables users to publish, edit, and share geospatial data. Built on open standards set by the [Open Geospatial Consortium (OGC)](http://www.opengeospatial.org/), it promotes interoperability and flexibility in map creation and spatial data management.

<br>

<div class="image-with-caption">
  <img src="./img/geoserver-img-1.png" alt="GeoServer Logo" style="width: 50%;">
  <div class="caption">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Publish and Share Spatial Data

GeoServer enables you to publish spatial data on the web using open standards like the **Web Map Service (WMS)**. It can generate maps in a variety of output formats and works seamlessly with OpenLayers, a widely-used open-source web mapping library.

<br>

In addition to WMS, GeoServer supports several other OGC services:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Service</th>
      <th>Abbreviation</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Web Map Service</td>
      <td>WMS</td>
      <td>Serves dynamic map images rendered from spatial data.</td>
    </tr>
    <tr>
      <td>Web Feature Service</td>
      <td>WFS</td>
      <td>Provides access to and editing of vector (feature) data.</td>
    </tr>
    <tr>
      <td>Web Coverage Service</td>
      <td>WCS</td>
      <td>Shares raster data (coverages) such as satellite imagery or elevation grids.</td>
    </tr>
    <tr>
      <td>Web Map Tile Service</td>
      <td>WMTS</td>
      <td>Delivers pre-rendered map tiles for fast performance in web and mobile applications.</td>
    </tr>
    <tr>
      <td>Web Processing Service</td>
      <td>WPS</td>
      <td>Enables server-side geospatial processing and analysis of data.</td>
    </tr>
  </tbody>
</table>

<br>

GeoServer’s modular architecture allows you to expand its capabilities through extensions. The WPS extension, for example, unlocks powerful on-the-fly geoprocessing. You can also create your own custom plugins to suit specific workflows.

By publishing data through GeoServer, you empower others to access and embed your spatial content in websites, applications, and platforms — promoting open access, collaboration, and transparency.

<br>

## Built on Free and Open Source Software

GeoServer is fully open source and free to use, significantly lowering the cost of entry compared to proprietary GIS platforms. Its open development model invites contributions from the global community, ensuring ongoing improvements, quick bug fixes, and steady evolution.

With no vendor lock-in and full access to the source code, GeoServer empowers users with flexibility, long-term sustainability, and independence from restrictive licensing.

<br>

<div class="image-with-caption">
  <img src="./img/geoserver-img-2.png" alt="Open Source vs Proprietary GIS" style="width: 50%;">
</div>

<br>

## Seamless Integration With Mapping APIs

GeoServer works beautifully with leading open-source mapping libraries like [OpenLayers](https://openlayers.org) and [Leaflet](https://leafletjs.com), allowing you to build rich, interactive web maps using open tools.

<br>

It can also serve spatial data to a wide range of platforms and tools, including:

- [Google Maps](http://maps.google.com/)
- [Google Earth](http://earth.google.com/)
- [Microsoft Bing Maps](https://www.bing.com/maps)
- [MapBox](http://mapbox.com)
- [ESRI ArcGIS](http://mapbox.com)

<br>

This makes GeoServer a highly interoperable solution for modern GIS and web mapping workflows.

<br>

<div class="image-with-caption">
  <img src="./img/geoserver-img-3.png" alt="OpenLayers & Leaflet Logo" style="width: 50%;">
  <div class="caption">
    Image credit: <a href="https://openlayers.org//" target="_blank">OpenLayers</a>
    , <a href="https://leafletjs.com/" target="_blank">Leaflet</a>
  </div>
</div>

<br>

## Join the Global GeoServer Community

GeoServer is supported by a passionate global community of developers, users, and service providers. Whether you're just getting started or you're an experienced GIS professional, there are many ways to engage, get help, and contribute:

<br>

<div class="cards-grid">
  <div class="card">
    <div class="card-header">
      📬 <a href="https://discourse.osgeo.org/c/geoserver/user/51" target="_blank">GeoServer User Forum</a>
    </div>
    <div class="card-body">
      Ask questions, share experiences, and learn from other GeoServer users around the world.
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      🛠️ <a href="https://geoserver.org/issues/" target="_blank">Issue Tracker</a>
    </div>
    <div class="card-body">
      Report bugs, suggest features, or follow progress on upcoming improvements.
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      📦 <a href="https://github.com/geoserver/geoserver" target="_blank">GitHub Repository</a>
    </div>
    <div class="card-body">
      Contribute to the codebase, submit pull requests, or explore the inner workings of GeoServer.
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      🗓️ <a href="https://geoserver.org/roadmap/" target="_blank">Release Roadmap</a>
    </div>
    <div class="card-body">
      Stay up to date with new versions, planned features, and release timelines.
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      📚 <a href="https://docs.geoserver.org/" target="_blank">Official Documentation</a>
    </div>
    <div class="card-body">
      Access comprehensive guides, tutorials, and reference material for installing, configuring, and using GeoServer.
    </div>
  </div>
</div>

<br>
