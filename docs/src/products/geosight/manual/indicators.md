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

# Creating Indicators

Indicators are the core data containers within GeoSight. They store and organize statistical or thematic information across multiple geographies and time periods, allowing data to be visualized consistently across dashboards and maps.

Unlike traditional systems that require separate datasets for different countries or years, GeoSight stores all related observations inside a single indicator using dimensions such as:

- Geography
- Time
- Value
- Category

<br>

This approach simplifies data management, improves consistency, and reduces duplicate datasets across projects.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-34.png" alt="Indicator Logic">
</div>

<br>

The <span class="ui-page-label">Indicators</span> page allows users to:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create Indicators</td>
      <td>Create new indicators and configure metadata, styles, labels, and aggregation.</td>
    </tr>
    <tr>
      <td>Search &amp; Filter</td>
      <td>Find indicators quickly using search tools, sorting, and filters.</td>
    </tr>
    <tr>
      <td>Edit Indicators</td>
      <td>Update existing indicator settings, styles, labels, or metadata.</td>
    </tr>
    <tr>
      <td>Import Data</td>
      <td>Upload Excel or API-based indicator data into an existing indicator.</td>
    </tr>
    <tr>
      <td>Browse Data</td>
      <td>View, validate, and manage imported indicator records.</td>
    </tr>
    <tr>
      <td>Share Access</td>
      <td>Control which users or groups can access or manage the indicator.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Before creating a new indicator, first search existing indicators to avoid creating duplicates. A single indicator can store values across multiple countries, dates, and administrative levels.
  </div>
</div>

<br>

## Step 1: Open the Indicators Page

The Indicators page is the central hub for managing all indicators you have access to.

1. In the left-side navigation panel, click <span class="ui-page-label">Indicators</span>.

2. Use the <span class="ui-generic-label">Search</span> field to locate existing indicators.

3. Select an indicator checkbox to enable editing or deletion options.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-35.png" alt="Indicator Page">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 2: Create a New Indicator

Creating an indicator defines the structure, metadata, and visualization settings before any data is imported.

1. Click <span class="ui-generic-label">Create New Indicator</span>.

2. Complete the required fields in the <span class="ui-page-label">General</span> tab.

3. Configure optional settings such as aggregation, styling, and labels.

4. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-36.png" alt="New Indicator">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

The <span class="ui-page-label">General</span> tab contains the core metadata and configuration for the indicator.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>The display name of the indicator.</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Optional metadata describing methodology, context, or calculation details.</td>
    </tr>
    <tr>
      <td>Source</td>
      <td>Optional information about the source of the data.</td>
    </tr>
    <tr>
      <td>Shortcode</td>
      <td>A globally unique identifier used during imports and integrations.</td>
    </tr>
    <tr>
      <td>Category</td>
      <td>The thematic category assigned to the indicator.</td>
    </tr>
    <tr>
      <td>Unit</td>
      <td>The measurement unit for the indicator (e.g. %, people, hectares).</td>
    </tr>
    <tr>
      <td>Indicator Type</td>
      <td>Defines whether the indicator stores Integer, Float, or Category values.</td>
    </tr>
    <tr>
      <td>Min / Max Value</td>
      <td>Optional value range limits used for validation or styling.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-text">
    Indicator shortcodes must be unique across the entire GeoSight platform. Avoid using spaces or special characters.
  </div>
</div>

<br>

## Step 3: Configure Aggregation

Aggregation settings control how lower administrative data is summarized into higher administrative levels.

1. Open the <span class="ui-page-label">Aggregation</span> tab.

2. Enable <span class="ui-generic-label">Allow aggregation upper level</span> if required.

3. Select the preferred aggregation method.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Aggregation Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>COUNT</td>
      <td>Counts the number of available records or sub-districts.</td>
    </tr>
    <tr>
      <td>SUM</td>
      <td>Calculates the total combined value.</td>
    </tr>
    <tr>
      <td>AVG</td>
      <td>Calculates the average value.</td>
    </tr>
    <tr>
      <td>MAX</td>
      <td>Returns the highest value.</td>
    </tr>
    <tr>
      <td>MIN</td>
      <td>Returns the lowest value.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-37.png" alt="Aggregation Settings">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 4: Configure Indicator Styles

Styles determine how the indicator is visualized on the map.

1. Open the <span class="ui-page-label">Style</span> tab.

2. Select a style type or predefined style.

3. Choose a colour palette.

4. Configure classifications and class counts.

5. Save the style settings.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Style Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Palette</td>
      <td>Select a predefined colour palette.</td>
    </tr>
    <tr>
      <td>Reverse Palette</td>
      <td>Reverse the order of colours.</td>
    </tr>
    <tr>
      <td>Classification</td>
      <td>Define how values are grouped into classes.</td>
    </tr>
    <tr>
      <td>Number of Classes</td>
      <td>Set the number of map classes.</td>
    </tr>
    <tr>
      <td>Outline Styling</td>
      <td>Configure polygon outlines and border colours.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-38.png" alt="Indicator Styles">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 5: Configure Labels

Labels allow values and metadata to appear directly on administrative boundaries in the map view.

1. Open the <span class="ui-page-label">Label</span> tab.

2. Configure the label text format.

3. Adjust font styling, size, colour, and halo settings.

4. Save the label configuration.

<br>

Available label variables include:

- <span class="ui-filename">{name}</span> — Geography name
- <span class="ui-filename">{value}</span> — Indicator value
- <span class="ui-filename">{date}</span> — Observation date
- <span class="ui-filename">{code}</span> — Geography code
- <span class="ui-filename">{label}</span> — Classification label

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-39.png" alt="Indicator Labels">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Additional Indicator Operations

GeoSight provides several additional tools directly from the Indicators table.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Operation</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Browse Data</td>
      <td>View and manage imported indicator records.</td>
    </tr>
    <tr>
      <td>Import Data</td>
      <td>Upload new indicator observations.</td>
    </tr>
    <tr>
      <td>Management Form</td>
      <td>Configure forms and attribute settings.</td>
    </tr>
    <tr>
      <td>Management Map</td>
      <td>Configure map-related management tools.</td>
    </tr>
    <tr>
      <td>Change Share Configuration</td>
      <td>Manage access permissions for indicator data.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-40.png" alt="Additional Operations" style="width: 35%;">
</div>

<br>

---

**Next up:** Learn how to import Indicator Data into GeoSight using Excel files, reference datasets, and time-enabled data configurations.

<br>
