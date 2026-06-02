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

# Creating a Data Store

Once your workspace is set up, the next step is to add a Data Store. A store acts as the bridge between GeoServer and your data — it tells GeoServer where the data is located, what format it’s in, and how to access it. Without a store, GeoServer won’t be able to publish or serve your spatial data.

<br>

## Step 1: Access Creation Page

To begin creating a store, you’ll first need to navigate to the right section of the GeoServer interface:

1. Go to the GeoServer <span class="ui-page-label">Web Administration Interface</span>.

2. In the left-hand menu, under the **Data** section, click <span class="ui-generic-label">Stores</span>.

3. Click <span class="ui-generic-label">Add New Store</span>.

4. The <span class="ui-page-label">New Data Source</span> page will open.

5. From the list of **Vector Data Sources**, select <span class="ui-generic-label">Shapefile</span>.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Keep in mind that this list is extensible, so the options you see might be slightly different depending on which data source extensions are installed.
  </div>
</div>

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-28.png" alt="Store Page" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 2: Create Store

In this step, you’ll connect GeoServer to your shapefile by creating a new data store.

1. On the <span class="ui-page-label">New Vector Data Source</span> page, fill in the required details:

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
          <td>ne_coastlines</td>
     </tr>
     <tr>
          <td>Description</td>
          <td>Shapefile of Natural Earth Coastlines data</td>
     </tr>
     </tbody>
     </table>

     <br>

2. Under **Shapefile location**, click <span class="ui-generic-label">Browse...</span>.

3. Navigate to <span class="ui-filename">/files/geoserver_user_data/Manual_Data_GeoServer/coastline/</span>.

4. Select the <span class="ui-filename">ne_110m_coastline</span> shapefile.

5. Click <span class="ui-generic-label">Save</span> to create the data store.

<br>

You’ll be redirected to the <span class="ui-page-label">New Layer</span> page.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-29.png" alt="Create Store" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Video Tutorial

<div style="max-width: 400px; margin: 0 auto;">
  <div style="position: relative; padding-bottom: 177.78%; height: 0; overflow: hidden;">
    <iframe
      src="https://www.youtube.com/embed/7P4-P6JBnng"
      title="Managing Vector Data Stores"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>

---

**Next up:** Discover how to publish your layer and preview it in GeoServer.

<br>
