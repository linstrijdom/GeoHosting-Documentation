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

# Editing Online

G3W-SUITE allows for multi-user editing through a feature-locking system that prevents conflicts during simultaneous edits. When a user activates editing within the WebGIS interface, all features visible in their current map view are locked for that session. These features remain unavailable for editing by other users until the original editor exits edit mode.

<br>

## Step 1: Enable Editing

1. Go to the <span class="ui-page-label">Project Layers List</span>.

2. In the row for the <span class="ui-filename">buildings</span> layer, click the <span class="ui-generic-label">Editing Layer</span> icon.

3. In the pop-up dialog, tick the checkbox next to <span class="ui-filename">Active</span>.

4. Complete the following fields:

      <br>

      <table class="my-table-style">
      <thead>
      <tr>
            <th>Field</th>
            <th>Field Input</th>
            <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
            <td>Scale</td>
            <td>2500</td>
            <td>The map scale used to define the initial zoom level.</td>
      </tr>
      <tr>
            <td>User Viewer Groups</td>
            <td>Viewer Group</td>
            <td>The group assigned viewer-level access to the project.</td>
      </tr>
      </tbody>
      </table>

      <br>

5. Click <span class="ui-generic-label">OK</span> to apply the changes.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-47.png" alt="Enable Editing">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 2: Edit WebGIS

1. On the <span class="ui-page-label">Project Layers List</span> page, click <span class="ui-generic-label">Show Map</span>.

2. In the left-hand panel, expand <span class="ui-generic-label">Editing Layers</span>.

3. Click the <span class="ui-generic-label">Edit Layer</span> icon next to the <span class="ui-filename">buildings</span> layer.

4. Zoom in to an open area on the map where no buildings currently exist.

5. In the left-hand panel, click <span class="ui-generic-label">Add Feature</span> and draw a new shape directly on the basemap.

6. In the <span class="ui-page-label">Editing Attributes</span> panel, fill in the relevant attribute fields.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-48.png" alt="Edit WebGIS">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 3: Save Edits

1. At the bottom of the attribute form, click <span class="ui-generic-label">Insert/Edit</span> to commit your input.

2. In the left-hand panel, click the <span class="ui-generic-label">Save</span> or <span class="ui-generic-label">Checkmark</span> icon to finalize your changes.

<br>

Your new <span class="ui-filename">buildings</span> feature is now saved and visible in the WebGIS environment.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-49.png" alt="Save Edits">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>
