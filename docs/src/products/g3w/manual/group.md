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

# Creating Groups

To further organize your project's individual map layers within a Cartographic Macro Group, you’ll use **Cartographic Groups**. These are subcategories inside a Macro Group that hold individual WebGIS services (i.e., your published QGIS projects). This is the final setup step before publishing your project live on the WebGIS platform.
<br>

## Step 1: Access Creation Page

1. Navigate to the <span class="ui-page-label">Administration Panel</span> left-hand menu.

2. Click <span class="ui-generic-label">Cartographic Groups</span>.

3. Select <span class="ui-generic-label">Add Group</span> from the dropdown.

4. The <span class="ui-page-label">Group Creation</span> page will open.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-36.png" alt="Add Group">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 2: Create Group

1. On the <span class="ui-page-label">Group Creation</span> page, enter the following:

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
            <td>Name</td>
            <td>Berlin City Center</td>
            <td>Internal identifier used by administrators</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>Berlin City Center</td>
            <td>Display name shown to WebGIS users</td>
          </tr>
          <tr>
            <td>Macro Groups</td>
            <td>G3W Tutorial</td>
            <td>Select the relevant Macro Group container</td>
          </tr>
          <tr>
            <td>GEO Data</td>
            <td>EPSG:4326</td>
            <td>Coordinate Reference System (CRS) of the project</td>
          </tr>
          <tr>
            <td>Baselayers</td>
            <td>OSM (OpenStreetMap)</td>
            <td>Default background map for the WebGIS interface</td>
          </tr>
        </tbody>
      </table>

      <br>

2. Click the <span class="ui-generic-label">+</span> icon in the ACL Users section to configure permissions.

3. Assign **Editor**, **Viewer**, and **Group** roles as needed.

4. Under **Logo Image**, click <span class="ui-generic-label">Choose File</span>.

5. Upload the <span class="ui-filename">image_group.png</span> file from the <span class="ui-filename">Tutorial_Data_G3WSUITE</span> folder.

6. Click <span class="ui-generic-label">Save</span> to create the group.

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Need to check your project's CRS? In QGIS, go to <strong>Project → Properties → General</strong> and confirm the EPSG code.
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-37.png" alt="Create Group">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 3: View Groups List

1. In the left-hand menu, click <span class="ui-generic-label">Cartographic Groups</span>.

2. Select <span class="ui-generic-label">Groups List</span>.

3. From the <span class="ui-page-label">Cartographic Groups List</span>, you can:

      - Add projects to the group
      - View existing projects
      - Display group information
      - Edit group settings
      - Delete the group

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-38.png" alt="View Group">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

---

**Next up:** Discover how to publish your customized QGIS project as a live WebGIS service.

<br>
