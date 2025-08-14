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

# Quickstart: 5-Minute Tutorial

Ready to start publishing data with GeoServer? This quick tutorial walks you through the entire process — from uploading your dataset to viewing it on a map.

<br>

## Step 1: Upload Data

Before GeoServer can serve your data, it needs to be available in the File Browser.

1. In the GHS Dashboard, open your <span class="ui-page-label">Product Details</span> page and click <span class="ui-filename">Filebrowser</span>.

2. Log in using the credentials provided on the <span class="ui-page-label">Product Details</span> page.

3. Double-click the <span class="ui-filename">geoserver_user_data</span> folder to open it.

4. Click <span class="ui-generic-label">Upload</span> in the top-right corner.

5. Choose <span class="ui-generic-label">Folder</span> and upload the folder containing your shapefile.

<br>

Your data will now be available in the GeoServer Web Administration Interface.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-12.png" alt="File Browser" width="auto">
</div>

<br>

## Step 2: Create Workspace

A workspace is a container that groups related layers together — perfect for keeping projects organized.

1. In the GeoServer Homepage, go to <span class="ui-generic-label">Data → Workspaces</span>.

2. Click <span class="ui-generic-label">Add New workspace</span>.

3. Enter a **Name** and a **Namespace URI**.

4. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Choose a short, descriptive name — 10 characters or fewer — without spaces.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-13.png" alt="Workspace" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 3: Add Data Store

A data store tells GeoServer how to connect to your dataset.

1. On the GeoServer Homepage, go to <span class="ui-generic-label">Data → Stores</span>.

2. Click <span class="ui-generic-label">Add New Store</span>.

3. Choose <span class="ui-generic-label">Shapefile</span> from the list of data sources.

4. Select you **Workspace** and enter a **Data Source Name**.

5. Under Shapefile location, click <span class="ui-generic-label">Browse...</span>.

6. Navigate to <span class="ui-filename">/files/geoserver_user_data</span> and select your <span class="ui-filename">.shp</span> file.

7. Click <span class="ui-generic-label">Save</span>.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-14.png" alt="Store" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 4: Publish Layer

With the store in place, it’s time to make your data available as a layer.

1. On the <span class="ui-page-label">New Layer</span> page, click <span class="ui-generic-label">Publish</span> next to your layer name.

2. Fill in the **Name** and **Title** fields.

3. In Bounding Boxes, click <span class="ui-generic-label">Compute from data</span> and then <span class="ui-generic-label">Compute from native bounds</span>.

4. Click <span class="ui-generic-label">Apply</span> to save without closing the page.

5. Open the <span class="ui-page-label">Publishing</span> tab.

6. Under WMS Settings, set the **Default Style** to your shapefile.

7. Click <span class="ui-generic-label">Save</span> to publish the layer.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    While GeoServer supports flexible naming, many external systems prefer short, simple layer names.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-15.png" alt="Layer" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 5: Preview Layer

TNow let’s confirm your layer is working.

1. In <span class="ui-generic-label">Data → Layer Preview</span>, find your layer.

2. In the Common Formats column, click <span class="ui-filename">OpenLayers</span>.

3. A new tab will open, displaying your shapefile with the default style.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-16.png" alt="View Layer" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to navigate and use the GeoServer Dashboard, unlocking tools and features that make managing your spatial data faster and easier.

<br>
