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

# Reference Datasets

Reference Datasets define the administrative boundaries used throughout GeoSight for mapping, filtering, and visualizing indicator data. These datasets form the geographic foundation of your dashboards and are typically made up of countries, provinces, districts, or other administrative boundaries.

<br>

Before uploading your dataset, ensure that:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Requirement</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Geometry</td>
      <td>Polygon geometries representing administrative boundaries.</td>
    </tr>
    <tr>
      <td>Format</td>
      <td><span class="ui-filename">.zip</span> Shapefile, <span class="ui-filename">.geojson</span>, <span class="ui-filename">.json</span>, or <span class="ui-filename">.gpkg</span>.</td>
    </tr>
    <tr>
      <td>Unique Code</td>
      <td>Each feature must contain a unique identifier field such as <span class="ui-filename">ucode</span>.</td>
    </tr>
    <tr>
      <td>Name Field</td>
      <td>Each feature should contain a readable boundary name field such as <span class="ui-filename">name</span>.</td>
    </tr>
    <tr>
      <td>Parent Codes</td>
      <td>Sub-level administrative layers should contain parent administrative codes to preserve hierarchy relationships.</td>
    </tr>
  </tbody>
</table>

<br>

## Recommended Reference Dataset Structure

GeoSight uses administrative hierarchy relationships to link boundaries across multiple levels.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Administrative Level</th>
      <th>Required Fields</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Level 0</td>
      <td><span class="ui-filename">ucode</span>, <span class="ui-filename">name</span></td>
      <td>Country boundaries</td>
    </tr>
    <tr>
      <td>Level 1</td>
      <td><span class="ui-filename">ucode</span>, <span class="ui-filename">name</span>, <span class="ui-filename">adm0_ucode</span></td>
      <td>Province or state boundaries</td>
    </tr>
    <tr>
      <td>Level 2</td>
      <td><span class="ui-filename">ucode</span>, <span class="ui-filename">name</span>, <span class="ui-filename">adm1_ucode</span></td>
      <td>District or municipal boundaries</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Parent administrative code fields link lower administrative levels to their parent boundaries and are important for filtering and drill-down functionality.
  </div>
</div>

<br>

## Step 1: Create a New Reference Dataset

Start by creating the reference dataset container that will store your administrative boundaries.

1. Navigate to <span class="ui-page-label">Reference Datasets</span>.

2. Click <span class="ui-generic-label">Create New Reference Dataset</span>.

3. Enter a descriptive dataset name such as <span class="ui-filename">Somalia Districts</span>.

4. Click <span class="ui-generic-label">Add New Level</span>.

5. Define the administrative level name (e.g. <span class="ui-filename">District</span>).

6. Click <span class="ui-generic-label">Submit</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-32.png" alt="New Reference Dataset">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 2: Import Boundary Data

Once the dataset structure is created, you can upload your administrative boundary file.

1. In the upper-right corner, click <span class="ui-generic-label">Import Data</span>.

2. Drag and drop your dataset file, or click to browse.

3. Upload one of the supported formats:

    - <span class="ui-filename">.zip</span> Shapefile
    - <span class="ui-filename">.geojson</span>
    - <span class="ui-filename">.json</span>
    - <span class="ui-filename">.gpkg</span>

4. Select the field containing the boundary names.

5. Select the field containing the unique geographic codes.

6. Click <span class="ui-generic-label">Submit</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-33.png" alt="Import Boundary Data">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 3: Verify Imported Boundaries

After the upload completes, GeoSight will process and register the uploaded administrative boundaries.

<br>

Verify that:

- All polygons appear correctly
- Boundary names are readable
- Unique codes are assigned correctly
- Parent administrative relationships are preserved
- No missing or duplicate geographic codes exist

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Consistent and clean geographic codes are essential for successfully linking indicator data to your boundaries during data imports.
  </div>
</div>

<br>

---

**Next up:** Learn how to create Indicators in GeoSight.

<br>
