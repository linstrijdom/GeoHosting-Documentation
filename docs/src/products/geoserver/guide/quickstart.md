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

Ready to get started with GeoServer. This tutorial guides you through the steps to publish a layer using GeoServer.

<br>

## Step 1: Add Data to File Browser

In order for the data to be accessible in the Web Administration Interface, it first needs to be added to your File Browser.

1. From the <span class="ui-page-label">Product Details</span> page in the GHS dashboard, click the <span class="ui-filename">Filebrowser</span> link. 

2. Log in using the credentails from the <span class="ui-page-label">Product Details</span> page.

3. Double-click the <span class="ui-filename">geoserver_user_data</span> folder to enter it.

4. Click the <span class="ui-generic-label">Upload</span> button at the top-right of the screen. When prompted, select <span class="ui-generic-label">Folder</span> and upload the folder containing your shapefile. 

5. The data will now be accessible in the Web Administration Interface.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-6-1.png" alt="File Browser" width="auto">
</div>

<br>

## Step 2: Create Workspace

A workspace is essentially a container used to organize and group related layers within GeoServer.

1. Navigate to the GeoServer <span class="ui-page-label">Homepage</span>.

2. Under the **Data** section in the left-hand menu, select <span class="ui-generic-label">Workspaces</span>.

3. Click the <span class="ui-generic-label">Add New workspace</span> button.

4. Complete the **Name** and **Namespace URI** fields.

5. Click <span class="ui-generic-label">Save</span> to finish creating your workspace.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    The workspace name should describe your project. It must be 10 characters or fewer and cannot contain spaces.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-6-2.png" alt="Workspace" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 3: Create Data Store

Once the workspace is set up, the next step is to add a new store. A store tells GeoServer how to connect to the data.

1. Under the **Data** section in the left-hand menu, select <span class="ui-generic-label">Store</span>.

2. Click the <span class="ui-generic-label">Add New Store</span> button.

3. From the <span class="ui-page-label">New Data Source</span> page, select <span class="ui-generic-label">Shapefile</span>

4. Fill in the **Workspace**(<span class="ui-filename">quickstart</span>) and **Data Source Name** fields.

5. Under **Shapefile location**, click <span class="ui-generic-label">Browse...</span>.

6. Navigate to the <span class="ui-filename">/files/geoserver_user_data</span> directory and select your <span class="ui-filename">.shp</span> file. 

7. Press <span class="ui-generic-label">Save</span>.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-6-3.png" alt="Store" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 4: Publish Layer

Now that we've connected to the store, we can proceed to publish a layer.

1. From the <span class="ui-page-label">New Layer</span> page, click <span class="ui-generic-label">Publish</span> next to your layer name. 

2. Fill in the **Name** and **Title** fields.

3. In the Bounding Boxes section, click <span class="ui-generic-label">Compute from data</span>, then <span class="ui-generic-label">Compute from native bounds</span>.

4. Click <span class="ui-generic-label">Apply</span> to save your progress without closing the page.

5. Navigate to the <span class="ui-page-label">Publishing</span> tab.

6. Under WMS Settings, set the **Default Style** to your shapefile feature type.

7. Click <span class="ui-generic-label">Save</span> to finalize the layer configuration and publish the layer.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    While GeoServer allows flexible naming, many external protocols require simple, standard layer names.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-6-4.png" alt="Layer" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 5: Preview Layer

To confirm that your layer has been published successfully, we can preview it in GeoServer.

1. Under the **Data** section in the left-hand menu, select <span class="ui-generic-label">Layer Preview</span>.

2. Click the <span class="ui-filename">OpenLayers</span> link in the Common Formats column.

3. An OpenLayers map will open in a new tab, displaying the shapefile data with the default style.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-6-5.png" alt="View Layer" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

---

**Next up:** Discover how to navigate and use the GeoServer Dashboard to enhance your user experience effortlessly.

<br>
