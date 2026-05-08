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

# Data Preparation

Before uploading data to GeoSight, it’s important to ensure that both your spatial datasets and indicator data are correctly structured. Proper data preparation ensures smooth imports, accurate mapping, and reliable dashboard performance.

<br>

## Reference (Spatial) Data

Reference datasets define the geographic boundaries used to display your indicator data (e.g. countries, provinces, districts). These are typically uploaded as shapefiles (<span class="ui-filename">.shp</span> zipped) or other supported formats.

<br>

Each administrative level must include specific required fields:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Level</th>
      <th>Required Fields</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Level 0</td>
      <td><span class="ui-filename">ucode</span>, <span class="ui-filename">name</span></td>
      <td>Unique code and name for each feature (e.g. Country)</td>
    </tr>
    <tr>
      <td>Level 1</td>
      <td><span class="ui-filename">ucode</span>, <span class="ui-filename">name</span>, <span class="ui-filename">level_0_ucode</span></td>
      <td>Includes a reference to the parent, Level 0 (e.g. Province)</td>
    </tr>
    <tr>
      <td>Level 2</td>
      <td><span class="ui-filename">ucode</span>, <span class="ui-filename">name</span>, <span class="ui-filename">level_1_ucode</span></td>
      <td>Includes a reference to the parent, Level 1 (e.g. District)</td>
    </tr>
  </tbody>
</table>

<br>

**Important notes:**

- The <span class="ui-filename">ucode</span> must be **unique** for each feature.
- Parent codes (e.g. <span class="ui-filename">level_1_ucode</span>) must match existing codes in the higher level dataset.
- Field names should match exactly to avoid import issues.

<br>

## Indicator Data

GeoSight supports multiple data sources, including:

- APIs (JSON)
- Excel files
- SharePoint Excel
- SDMX Data Warehouse

<br>

The easiest method is importing data via Excel. Two formats are supported:

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-30.png" alt="Excel Format">
</div>

<br>

### Excel LONG Format

Best for handling multiple indicators, locations, and time periods in a single file.

<br>

Required columns:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Column</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="ui-filename">GeographyCode</span></td>
      <td>Links to the <span class="ui-filename">ucode</span> in your reference dataset.</td>
    </tr>
    <tr>
      <td><span class="ui-filename">IndicatorShortCode</span></td>
      <td>Must match the indicator shortcode in GeoSight.</td>
    </tr>
    <tr>
      <td><span class="ui-filename">Date</span></td>
      <td>A valid date (e.g. 01-01-2022).</td>
    </tr>
    <tr>
      <td><span class="ui-filename">Value</span></td>
      <td>The recorded value.</td>
    </tr>
  </tbody>
</table>

<br>

### Excel WIDE Format

Best for multiple indicators at a single point in time.

<br>

Required columns:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Column</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="ui-filename">GeographyCode</span></td>
      <td>Links to the <span class="ui-filename">ucode</span>.</td>
    </tr>
    <tr>
      <td>Indicator columns</td>
      <td>Column names must match indicator shortcodes (e.g. ABC123).</td>
    </tr>
    <tr>
      <td><span class="ui-filename">Value</span></td>
      <td>The observation values.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    All records in a dataset must correspond to a single administrative level (e.g. districts only).
  </div>
</div>

<br>

## Data Preparation Workflow

Preparing your data follows a simple process:

1. **Prepare your reference dataset** (boundaries with correct fields)
2. **Define your indicators** (what you want to measure)
3. **Format your data** (Excel LONG or WIDE)
4. **Ensure alignment** between GeographyCode and ucode
5. **Validate your data** before importing into GeoSight

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-31.png" alt="Workflow">
</div>

<br>

---

**Next up:** Learn how to prepare and upload Reference Datasets in GeoSight.

<br>
