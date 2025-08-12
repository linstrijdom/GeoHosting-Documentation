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

# Publishing a Layer

Now that we've successfully connected to the store, the next step is to publish a layer so that it becomes available for use within GeoServer. Publishing a layer makes your data accessible for styling, previewing, and sharing with clients or other applications.

<br>

## Step 1: Access Creation Page

To begin publishing, we first need to open the layer creation page in GeoServer.

1. On the <span class="ui-page-label">New Layer</span> page, locate the <span class="ui-filename">ne_110m_coastline</span> layer. 

2. Under Actions, click <span class="ui-generic-label">Publish</span>.

3. The <span class="ui-page-label">Edit Layer</span> page will open, where you can configure the layer’s settings.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    You can also access the New Layer page by navigating to Data → Layers → Add New Layer.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-15-1.png" alt="New Layer Page" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 2: Publish Layer

Now it’s time to make your data available as a layer in GeoServer.

1. On the <span class="ui-page-label">Edit Layer</span> page, fill in the required details:

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
          <td>ne_110m_coastline</td>
     </tr>
     <tr>
          <td>Title</td>
          <td>ne_110m_coastline</td>
     </tr>
     </tbody>
     </table>

     <br>

2. In the Bounding Boxes section, click:

     - <span class="ui-generic-label">Compute from data</span>
     - <span class="ui-generic-label">Compute from native bounds</span>

     <br>

3. Click <span class="ui-generic-label">Apply</span> to save your progress without closing the page.

4. From the top of the page, click the <span class="ui-page-label">Publishing</span> tab.

5. Under WMS Settings, set the **Default Style** to <span class="ui-filename">line</span>.

6. Click <span class="ui-generic-label">Save</span> to finalize and publish your layer.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    While GeoServer lets you choose flexible names, many external systems prefer simple, standard layer names to avoid compatibility issues.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-15-2.png" alt="Edit Layer Page" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 3: Preview Layer

Once your layer is published, you can check that everything is working correctly by previewing it in GeoServer.

1. In the left-hand menu, under the **Data** section, click <span class="ui-generic-label">Layer Preview</span>.

2. Find the <span class="ui-filename">ne_110m_coastline</span> layer.

3. In the Common Formats column, click <span class="ui-generic-label">OpenLayers</span>.

<br>

An OpenLayers map will open in a new tab, showing your shapefile data with the default line style. You can zoom, pan, and click on features to view their attributes.

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    To quickly locate the layer, type <code>manual</code> in the search field.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-15-3.png" alt="Preview Layer" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

---

**Next up:** Discover how to combine multiple layers into a single, cohesive map view using a Layer Group.

<br>
