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

# Publishing a Layer Group

Now that we’ve published the necessary layers (<span class="ui-filename">manual:ne_110m_coastline</span> and <span class="ui-filename">manual:SR_50M</span>), we can combine them into a Layer Group.

A layer group lets you display multiple layers together in a single, unified map view, making it easier to manage and present related datasets. This is especially useful when creating composite maps that need to be styled and served as one.

<br>

## Step 1: Access Creation Page

To begin creating your layer group, you’ll need to open the creation page in GeoServer.

1. In the left-hand menu, under the **Data** section, click <span class="ui-generic-label">Layer Groups</span>.

2. Click <span class="ui-generic-label">Add New Layer Group</span>.

3. The <span class="ui-page-label">New Layer Group</span> page will open.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-36.png" alt="Layer Group Page" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 2: Publish Layer Group

Layer groups let you combine multiple layers into a single visual map in GeoServer. In this step, we’ll set up a simple basemap by stacking a shaded relief layer with a coastline layer.

1. On the <span class="ui-page-label">New Layer Group</span> page, enter the following details:

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
          <td>basemap</td>
     </tr>
     <tr>
          <td>Title</td>
          <td>basemap</td>
     </tr>
     <tr>
          <td>Workspace</td>
          <td>manual</td>
     </tr>
     </tbody>
     </table>

     <br>

2. Under the **Layers** section, click <span class="ui-generic-label">Add Layer...</span>.

3. Select the <span class="ui-filename">SR_50M</span> layer first, then select the <span class="ui-filename">ne_110m_coastline</span> layer.

4. Adding the coastline second ensures it displays on top of the shaded relief background.

5. Under **Bounds**, click <span class="ui-generic-label">Generate Bounds</span>.

6. With the layers added, GeoServer will automatically determine the spatial extent and reference system for the group.

7. Click <span class="ui-generic-label">Save</span> to finish.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Layer groups can be global, allowing you to combine layers from different workspaces into a single map view.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-37.png" alt="Create Layer Group" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 3: Preview Image

After publishing your layer group, it’s important to confirm that it renders as intended and that all included layers align correctly. This quick check ensures your map is ready for use or further styling.

1. In the left-hand menu, under the **Data** section, click <span class="ui-generic-label">Layer Preview</span>.

2. Locate the <span class="ui-filename">basemap</span> layer group in the list.

3. Under the Common Formats column, click <span class="ui-generic-label">OpenLayers</span>.

<br>

A new browser tab will open, displaying your layer group on an interactive OpenLayers map where you can zoom, pan, and verify the results visually.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-38.png" alt="Preview Layer Group" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

---

**Next up:** Discover how to create a style and link it to your layer for display.

<br>
