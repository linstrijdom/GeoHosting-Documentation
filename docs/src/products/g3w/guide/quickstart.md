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

# Quickstart: 5-Minute Tutorial

Follow these steps to upload your QGIS project to G3W-SUITE. 

## Step 1: Update Project Title

This title will be used as the WebGIS service ID. If not updated, your service may be misidentified or conflict with existing services.

1. In QGIS, go to the <span class="ui-page-label">Project Properties</span>.

2. Under the <span class="ui-page-label">General</span> tab, in the <span class="ui-filename">Project Title</span> field, enter a unique and descriptive title for your project.

3. Click <span class="ui-generic-label">OK</span> to apply the changes.

<br>

<div class="alert alert-warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-text">
    Make sure the title does not contain special characters or excessive spacing.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-5-5.png" alt="Change Title">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 2: Upload Database to the File Manager

This ensures that G3W-SUITE can access the data sources used in your QGIS project. Without it, layers may not display correctly.

1. From the Administration Panel, in the top navigation bar, click the <span class="ui-generic-label">Gear</span> icon.

2. Click <span class="ui-generic-label">Files</span> to open the <span class="ui-page-label">File Manager</span>.

3. From the left-hand panel, navigate to the <span class="ui-filename">project_data</span>.

4. In the top navigation bar, click the <span class="ui-generic-label">New Folder</span> button and create a new folder called <span class="ui-generic-label">spatialite</span>. 

5. Inside your new folder, click <span class="ui-generic-label">Upload</span> and select your <span class="ui-filename">project database</span>.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Make sure the file path matches the one specified in your QGIS project.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-5-6.png" alt="File Manager">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 3: Create Macro Group

1. From the Administration Panel, in the left side navigation menu, under <span class="ui-page-label">Cartographic Groups</span>, click <span class="ui-generic-label">Add Group</span>.

2. On the <span class="ui-page-label">Group Creation</span> page, fill in the following fields:

      - **Name**
      - **Title**
      - **Srid** (coordinate reference system)
      - **Baselayer**

3. Once all details are complete, click the <span class="ui-generic-label">Save</span> button to finalize your group setup.

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Not sure about your project's CRS? In QGIS, go to Project → Properties → General to confirm the EPSG code.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-5-7.png" alt="Macro Group">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 4: Add QGIS Project

1. On the <span class="ui-page-label">Cartographic Groups</span> page, click <span class="ui-generic-label">Add New Project</span>.

2. On the <span class="ui-page-label">New QGIS Project</span> page, click <span class="ui-generic-label">Choose File</span> and upload your <span class="ui-filename">.qgz</span> or <span class="ui-filename">.qgs</span> file.

3. Fill in the <span class="ui-filename">Public Title</span> fields.

4. Click the <span class="ui-generic-label">Save</span> button.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-5-8.png" alt="New Project">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 5: View Map

From the <span class="ui-page-label">Projects List</span> page, click the <span class="ui-generic-label">Show Map</span> button under the **Actions** column to launch and explore your live WebGIS.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-5-9.png" alt="View Map">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to navigate and interact with the G3W Dashboard for a seamless user experience.

<br>
