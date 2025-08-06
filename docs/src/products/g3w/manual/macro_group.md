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

# Creating Macro Groups

Once you’ve updated the project title (to generate a unique WebGIS service ID) and uploaded your SpatiaLite database to the correct folder in the File Manager, you're almost ready to publish your QGIS project as a WebGIS service using G3W-SUITE.

The next step is to create a **Cartographic Macro Groups** that act as top-level thematic container and helps you organize related WebGIS services under a common category.

<br>

## Step 1: Access Creation Page

1. Navigate to the G3W-SUITE <span class="ui-page-label">Administration Panel</span>.

2. In the left-hand menu, click <span class="ui-generic-label">Macro Cartographic Groups</span>.

3. From the dropdown, select <span class="ui-generic-label">Add MACRO Group</span>.

4. The <span class="ui-page-label">MACRO Group Creation</span> page will open.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-33.png" alt="Add MACRO Group">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 2: Create Macro Group

1. On the <span class="ui-page-label">MACRO Group Creation</span> page, complete the following fields:

      <br>

      <table class="my-table-style">
        <thead>
          <tr>
            <th>Field</th>
            <th>Input</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Identification name</td>
            <td>G3W Tutorial</td>
            <td>Used internally to uniquely identify the Macro Group</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>G3W Tutorial</td>
            <td>Displayed to users in the WebGIS interface</td>
          </tr>
        </tbody>
      </table>

      <br>

2. Under **Logo Image**, click <span class="ui-generic-label">Choose File</span>.

3. Upload the <span class="ui-filename">image_macro_group.png</span> file from the <span class="ui-filename">Tutorial_Data_G3WSUITE</span> folder.

4. Click <span class="ui-generic-label">Save</span> to create the Macro Group.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-34.png" alt="Create MACRO Group">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 3: View Macro Groups

1. From the <span class="ui-page-label">Administration Panel</span>, click <span class="ui-generic-label">Macro Cartographic Groups</span> again.

2. Select <span class="ui-generic-label">MACRO Groups List</span> from the dropdown.

3. You can **View**, **Edit**, or **Delete** existing Macro Groups using the available <span class="ui-generic-label">Action</span> icons.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-35.png" alt="View MACRO Group">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to create Cartographic Groups to better organize and manage your project’s individual map layers.

<br>
