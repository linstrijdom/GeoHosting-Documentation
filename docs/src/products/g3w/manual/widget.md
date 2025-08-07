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

# Widgets & Additional Functions

Once your project is published, you can further enrich your WebGIS service by enabling a variety of widgets and additional interactive features.

<br>

From the <span class="ui-page-label">Project List</span> page, each project includes a set of **Tools** that let you manage and configure advanced functionalities:

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-43.png" alt="Tools">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

Click the <span class="ui-generic-label">Layers</span> icon to access the <span class="ui-page-label">QGIS Project Layers</span> page. Here, the **Actions** column allows you to set up a range of layer-specific functions:

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-44.png" alt="Functional Options" style="width: 80%;">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 1: Create a Search Widget

Search widgets allow users to filter data based on attribute fields from vector layers. Each widget is saved using the layer’s internal identifiers.

1. From the <span class="ui-page-label">Project List</span> page, click the <span class="ui-generic-label">Layers</span> icon.

2. In the row for the <span class="ui-filename">landuse</span> layer, click the <span class="ui-generic-label">Widgets List</span> icon.

3. Click <span class="ui-generic-label">Add New Widget</span> to create a new one.

4. In the <span class="ui-page-label">Widget Creation Form</span>, fill out the fields:

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
            <td>Type</td>
            <td>Search</td>
            <td>Widget type</td>
      </tr>
      <tr>
            <td>Name</td>
            <td>Land Use Search</td>
            <td>Label that appears to end users</td>
      </tr>
      <tr>
            <td>Search Title</td>
            <td>Land Use Search</td>
            <td>Internal name of the widget</td>
      </tr>
      <tr>
            <td>Field</td>
            <td>type</td>
            <td>Field used for querying</td>
      </tr>
      <tr>
            <td>Widget</td>
            <td>SelectBox</td>
            <td>UI element used for the search input</td>
      </tr>
      <tr>
            <td>Alias</td>
            <td>Land Use Type</td>
            <td>Display name shown in the interface</td>
      </tr>
      <tr>
            <td>Operator</td>
            <td>= (equal)</td>
            <td>Query operator applied to the field</td>
      </tr>
      </tbody>
      </table>

      <br>

5. Click <span class="ui-generic-label">OK</span> to save.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-45.png" alt="Search Widget">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 2: Create a Plots Widget

The QPlotly widget lets users view interactive charts created in QGIS using the DataPlotly plugin. These plots are saved as <span class="ui-filename">.xml</span> files and integrated into your WebGIS project.

1. From the <span class="ui-page-label">Project List</span> page, click the <span class="ui-generic-label">Layers</span> icon.

2. In the row for the <span class="ui-filename">natural</span> layer, click the <span class="ui-generic-label">QPlotly Widget</span> icon.

3. Click <span class="ui-generic-label">New QPlotly Widget</span> to upload a new chart.

4. Upload the file: <span class="ui-filename">qplotly_natural-type-distribution.xml</span>.

5. Click <span class="ui-generic-label">OK</span> to save.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-46.png" alt="Plots Widget">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

---

**Next up:** We’ll walk you through enabling editing tools so users can update data directly within your WebGIS service.

<br>
