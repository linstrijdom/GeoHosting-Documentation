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

# Importing Indicator Data

Once an indicator has been created, data can be imported into GeoSight for visualization and analysis. GeoSight supports multiple import methods, including Excel files, APIs, SharePoint, SDMX, and related tables.

<br>

This guide focuses specifically on importing indicator data using the Excel Long Format, which is the most flexible and commonly used approach.

<br>

GeoSight uses indicators as centralized data containers, meaning a single indicator can store:

- Multiple dates
- Multiple geographies
- Multiple uploads over time

<br>

This structure helps prevent duplicated indicators and keeps data organized across projects and dashboards.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Before importing data, ensure that both your <strong>Reference Dataset</strong> and <strong>Indicator</strong> have already been created.
  </div>
</div>

<br>

## Excel Import Formats

GeoSight supports two Excel-based import structures.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Format</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Excel LONG Format</td>
      <td>Supports multiple indicators, dates, and geographies within a single spreadsheet.</td>
    </tr>
    <tr>
      <td>Excel WIDE Format</td>
      <td>Supports multiple indicators for a single date only, with indicators stored as columns.</td>
    </tr>
  </tbody>
</table>

<br>

For this tutorial, we will use the **Excel LONG Format**.

<br>

## Recommended Excel LONG Structure

Your Excel file should contain the following required columns:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Column</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GeographyCode</td>
      <td>Unique geographic code matching the reference dataset boundary codes.</td>
    </tr>
    <tr>
      <td>IndicatorCode</td>
      <td>The indicator shortcode defined in GeoSight.</td>
    </tr>
    <tr>
      <td>DateTime</td>
      <td>Date value for the observation (e.g. <span class="ui-filename">2024-01-01</span>).</td>
    </tr>
    <tr>
      <td>Value</td>
      <td>The numeric or categorical observation value.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-text">
    Geography codes in your Excel file must exactly match the geographic codes stored in your Reference Dataset. Mismatched codes will prevent records from linking correctly.
  </div>
</div>

<br>

## Step 1: Import Data Page

Before importing any data, you first need to open the target indicator and access its data import interface.

1. Navigate to <span class="ui-page-label">Indicators</span>.

2. Locate your indicator (e.g. <span class="ui-filename">Sample Indicator A</span>).

3. Click the <span class="ui-generic-label">Import Data</span> icon.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-41.png" alt="Indicator Page">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 2: General Settings

The <span class="ui-page-label">General</span> tab defines the type and format of the data being imported.

<br>

Use the following settings:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Import Type</td>
      <td>Indicator Value</td>
    </tr>
    <tr>
      <td>Input Format</td>
      <td>Excel Long Format</td>
    </tr>
  </tbody>
</table>
<br>

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-42.png" alt="General Tab">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 3: Upload the Excel File

The <span class="ui-page-label">Attributes</span> tab connects GeoSight to your Excel dataset.

1. Open the <span class="ui-page-label">Attributes</span> tab.

2. Click <span class="ui-generic-label">Choose File</span>.

3. Select your prepared Excel spreadsheet.

4. Verify that the correct geography and indicator fields are detected.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-43.png" alt="Attributes Tab">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 4: Reference Layer & Time Settings

The <span class="ui-page-label">Reference Layer & Time</span> tab links the uploaded records to your administrative boundaries and time settings.

1. Open the <span class="ui-page-label">Reference Layer & Time</span> tab.

2. Select your reference dataset from the <span class="ui-generic-label">Reference Layer</span> dropdown.

3. Under **Date Time Setting**, select <span class="ui-generic-label">Data-Driven Date</span>

4. Choose the correct date field and format

5. Click <span class="ui-generic-label">Submit</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-44.png" alt="Reference Layer & Time Tab">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 5: Preview Imported Records

After the upload is processed successfully:

1. Click <span class="ui-generic-label">See the data</span>.

2. Review the imported records.

3. Verify that:

    - Geography codes linked correctly
    - Dates appear correctly
    - Values imported successfully
    - No records are missing

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-45.png" alt="Preview Imported Data">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 6: Save Imported Data

The final step is to save the validated records into GeoSight, making the data available for dashboards, maps, and analysis tools.

1. Click <span class="ui-generic-label">Select All Data</span>.

2. Click <span class="ui-generic-label">Save</span>.

3. GeoSight will finalize the import and store the records within the indicator.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-46.png" alt="Save Imported Data">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Additional Import Sources

Although Excel imports are the most common workflow, GeoSight also supports several other import methods.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Import Source</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>API</td>
      <td>Connect to REST or GeoJSON services for automated imports.</td>
    </tr>
    <tr>
      <td>SharePoint</td>
      <td>Import and synchronize cloud-hosted Excel files.</td>
    </tr>
    <tr>
      <td>SDMX</td>
      <td>Connect to statistical data warehouse services using SDMX standards.</td>
    </tr>
    <tr>
      <td>Related Tables</td>
      <td>Import large disaggregated datasets linked to indicators.</td>
    </tr>
    <tr>
      <td>Vector Context Layers</td>
      <td>Generate indicators from vector spatial datasets.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    GeoSight also supports scheduled imports for APIs and SharePoint sources, allowing indicator data to update automatically at regular intervals.
  </div>
</div>

<br>

---

**Next up:** Learn how to create and configure Basemaps in GeoSight to provide background mapping for your dashboards and projects.

<br>
