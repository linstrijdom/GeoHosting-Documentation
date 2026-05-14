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

# Creating Basemaps

Basemaps provide the geographic background used throughout GeoSight dashboards and map visualizations. They help users understand spatial context by displaying roads, terrain, satellite imagery, or other geographic reference layers beneath your indicator data.

<br>

Common basemaps include:

- OpenStreetMap
- Satellite imagery
- Terrain maps
- Light or dark cartographic styles
- Custom XYZ tile services

<br>

The <span class="ui-page-label">Basemaps</span> page allows users to:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create Basemaps</td>
      <td>Add new XYZ tile or map service basemaps to GeoSight.</td>
    </tr>
    <tr>
      <td>Search &amp; Filter</td>
      <td>Search, sort, and filter available basemaps.</td>
    </tr>
    <tr>
      <td>Edit Basemaps</td>
      <td>Update basemap settings, URLs, categories, or sharing permissions.</td>
    </tr>
    <tr>
      <td>Delete Basemaps</td>
      <td>Remove unused or outdated basemap entries.</td>
    </tr>
    <tr>
      <td>Share Access</td>
      <td>Control which users or groups can access the basemap.</td>
    </tr>
  </tbody>
</table>

<br>

## Step 1: Open the Basemaps Page

The Basemaps page is used to manage all background map layers available within GeoSight.

1. In the left-side navigation panel, click <span class="ui-page-label">Basemaps</span>.

2. Use the <span class="ui-generic-label">Search Basemap</span> field to locate existing basemaps.

3. Select a basemap checkbox to enable editing or deletion tools.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-47.png" alt="Basemap Page">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 2: Create a New Basemap

Creating a basemap allows you to connect GeoSight to an external tile service such as OpenStreetMap or a custom XYZ provider.

1. Click <span class="ui-generic-label">Create New Basemap</span>.

2. Complete the required fields in the <span class="ui-page-label">General</span> tab.

3. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-48.png" alt="Create Basemap">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

Use the following sample settings:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Field</th>
      <th>Example Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>OpenStreetMap</td>
      <td>The display name of the basemap inside GeoSight.</td>
    </tr>
    <tr>
      <td>URL</td>
      <td><code>https://a.tile.openstreetmap.org/{z}/{x}/{y}.png?noWrap=true</code></td>
      <td>The XYZ tile service URL used to retrieve map tiles.</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>XYZ Tile</td>
      <td>The tile service type used by the basemap.</td>
    </tr>
    <tr>
      <td>Category</td>
      <td>Road Maps</td>
      <td>A grouping category used to organize basemaps.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    XYZ tile services commonly use placeholders such as <code>{z}</code>, <code>{x}</code>, and <code>{y}</code> to dynamically load map tiles at different zoom levels.
  </div>
</div>

<br>

## Step 3: Verify the Basemap

After saving the basemap, GeoSight will register the tile service and make it available within dashboards and projects.

<br>

---

**Next up:** Learn how to combine your reference datasets, indicators, indicator data, and basemaps into a complete GeoSight Project Dashboard.

<br>
