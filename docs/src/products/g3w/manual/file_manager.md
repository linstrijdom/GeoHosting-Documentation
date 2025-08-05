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

# Uploading to the File Manager

To ensure your project layers display correctly in G3W-SUITE, you need to upload your database. G3W-SUITE must have access to the actual data source used in your QGIS project — otherwise, your layers may fail to load.

<br>

## Step 1: Access the File Manager

1. Go to the G3W-SUITE <span class="ui-page-label">Administration Panel</span>.

2. Click the <span class="ui-generic-label">Gear</span> icon in the top navigation bar.

3. Under **File Manager**, select <span class="ui-generic-label">Files</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-14-2.png" alt="File Manager">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 2: Create a Spatialite Folder

1. In the left-hand menu of the <span class="ui-page-label">File Manager</span>, navigate to the <span class="ui-filename">project_data</span> folder.

2. Click <span class="ui-generic-label">New Folder</span> in the top navigation bar.

3. Name the folder <span class="ui-filename">spatialite</span> and click <span class="ui-generic-label">Create Folder</span>.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Ensure the file path exactly matches what is defined in your QGIS project.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-14-3.png" alt="Create Folder">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 3: Upload the Database

1. Open the newly created <span class="ui-filename">spatialite</span> folder.

2. Click <span class="ui-generic-label">Upload</span> in the top navigation bar.

3. Select and upload the file named <span class="ui-filename">g3w_tutorial.sqlite</span>.

<br>

Once uploaded, your SpatiaLite database is ready to support your WebGIS services within G3W-SUITE.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-14-4.png" alt="Upload Database">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to group and structure your map layers using Cartographic Macro Groups for a clearer WebGIS experience.

<br>
