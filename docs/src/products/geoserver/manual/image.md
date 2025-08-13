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

# Publishing an Image

Now that you’ve learned how to publish vector data, it’s time to explore publishing raster datasets using GeoServer. Raster data, such as satellite imagery or shaded relief maps, provide continuous spatial information and can greatly enhance your geospatial projects.

<br>

## Step 1: Create Store

This step involves adding a new data store to connect GeoServer with your raster dataset. Make sure your workspace (e.g., <span class="ui-filename">manual</span>) is ready before proceeding.

1. In the left-hand menu, under the **Data** section, click <span class="ui-generic-label">Stores</span>.

2. Click <span class="ui-generic-label">Add New Store</span> and select <span class="ui-generic-label">WorldImage</span> from the list.

      <br>

3. On the <span class="ui-page-label">Add Raster Data Source</span> page, fill in the required details:

     <table class="my-table-style">
     <thead>
     <tr>
          <th>Field</th>
          <th>Value</th>
     </tr>
     </thead>
     <tbody>
     <tr>
          <td>Workspace</td>
          <td>manual</td>
     </tr>
     <tr>
          <td>Data Source Name</td>
          <td>ne_shaded_relief</td>
     </tr>
     <tr>
          <td>Description</td>
          <td>Grayscale shaded relief of land areas</td>
     </tr>
     </tbody>
     </table>

     <br>

4. Under **URL**, browse to <span class="ui-filename">Manual_Data_GeoServer/shaded_relief/</span>.

5. Select the <span class="ui-filename">SR_50M.tif</span> file.

6. Click <span class="ui-generic-label">Save</span>.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-33.png" alt="Image Store" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 2: Publish Image

With your image store created, the next step is to publish the raster dataset as a layer in GeoServer.

1. On the <span class="ui-page-label">New Layer</span> page, locate the <span class="ui-filename">SR_50M</span> layer.

2. Under Actions, click <span class="ui-generic-label">Publish</span>.

      <br>

3. On the <span class="ui-page-label">Edit Layer</span> page, complete the required fields:

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
          <td>SR_50M</td>
     </tr>
     <tr>
          <td>Title</td>
          <td>SR_50M</td>
     </tr>
     </tbody>
     </table>

     <br>

4. In the Bounding Boxes section, click:

     - <span class="ui-generic-label">Compute from data</span>
     - <span class="ui-generic-label">Compute from native bounds</span>

     <br>

5. Click <span class="ui-generic-label">Apply</span> to save your changes without leaving the page.

6. Navigate to the <span class="ui-page-label">Publishing</span> tab at the top of the page.

7. Under WMS Settings, set the **Default Style** to <span class="ui-filename">raster</span>.

8. Click <span class="ui-generic-label">Save</span> to finalize and publish your image layer.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Although GeoServer allows flexible naming, using simple, standard layer names helps maintain compatibility with external systems.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-34.png" alt="Publish Image" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 3: Preview Image

Once your image layer is published, it’s important to verify that it displays correctly. GeoServer makes this easy with its built-in preview tools.

1. In the left-hand menu, under the **Data** section, click <span class="ui-generic-label">Layer Preview</span>.

2. Locate the <span class="ui-filename">SR_50M</span> layer in the list.

3. Under the Common Formats column, click <span class="ui-generic-label">OpenLayers</span>.

<br>

A new browser tab will open displaying your shaded relief raster layer on an interactive OpenLayers map.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-35.png" alt="Preview Image" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

---

**Next up:** Discover how to combine multiple layers into a single, cohesive map view using a Layer Group.

<br>
