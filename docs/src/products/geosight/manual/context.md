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

# Context Layers

Context Layers are additional spatial datasets that provide geographic context alongside your indicators. Unlike indicators, context layers are not tied to administrative boundaries or statistical values. Instead, they provide supporting information that helps users better understand what is happening on the map.

<br>

Common examples of context layers include:

- Roads and transport networks
- Schools and health facilities
- Weather and early warning data
- Satellite imagery services
- Environmental monitoring layers

<br>

Context layers can be sourced from external APIs and map services, allowing GeoSight to display live or regularly updated spatial information alongside indicator data.

<br>

The <span class="ui-page-label">Context Layers</span> page allows users to:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create Context Layers</td>
      <td>Add new spatial layers from supported web services and datasets.</td>
    </tr>
    <tr>
      <td>Search &amp; Filter</td>
      <td>Locate context layers using search, sorting, and filtering tools.</td>
    </tr>
    <tr>
      <td>Edit Context Layers</td>
      <td>Modify layer settings, URLs, labels, fields, and permissions.</td>
    </tr>
    <tr>
      <td>Preview Layers</td>
      <td>Validate connections and view layer content before saving.</td>
    </tr>
    <tr>
      <td>Configure Display</td>
      <td>Manage fields, labels, and styling options.</td>
    </tr>
    <tr>
      <td>Share Access</td>
      <td>Control which users or groups can access the layer.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Context Layers are designed to provide additional geographic context and are typically sourced from external APIs, map services, or cloud-hosted datasets.
  </div>
</div>

<br>

## Supported Context Layer Types

GeoSight supports several different context layer sources.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Layer Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ArcGIS</td>
      <td>Feature services hosted in ArcGIS Online or ArcGIS Enterprise.</td>
    </tr>
    <tr>
      <td>GeoJSON</td>
      <td>Vector data provided through a GeoJSON URL.</td>
    </tr>
    <tr>
      <td>Raster Tile</td>
      <td>XYZ tile services used for map visualization.</td>
    </tr>
    <tr>
      <td>Raster COG</td>
      <td>Cloud Optimized GeoTIFF datasets.</td>
    </tr>
    <tr>
      <td>Vector Tile</td>
      <td>Vector tile services delivered through XYZ endpoints.</td>
    </tr>
    <tr>
      <td>Related Table</td>
      <td>Existing related tables managed within GeoSight.</td>
    </tr>
    <tr>
      <td>Cloud Native GIS Layer</td>
      <td>Layers available from configured cloud-native GIS services.</td>
    </tr>
  </tbody>
</table>

<br>

## Step 1: Open the Context Layers Page

The **Context Layers** page is the central location for managing all context layers available within GeoSight.

1. In the left-side navigation panel, click <span class="ui-page-label">Context Layers</span>.

2. Use the <span class="ui-generic-label">Search Context Layer</span> field to locate existing layers.

3. Select a layer checkbox to enable editing or deletion options.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-61.png" alt="Context Layers Page">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 2: Create a New Context Layer

Creating a context layer connects GeoSight to an external spatial data source.

1. Click <span class="ui-generic-label">Create New Context Layer</span>.

2. Complete the required fields in the <span class="ui-page-label">General</span> tab.

3. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-62.png" alt="Create Context Layer">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

The <span class="ui-page-label">General</span> tab contains the connection settings required to access the layer.

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
      <td>The display name of the context layer.</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Optional information describing the layer.</td>
    </tr>
    <tr>
      <td>Category</td>
      <td>The category used to organize context layers.</td>
    </tr>
    <tr>
      <td>URL</td>
      <td>The service URL used to access the layer.</td>
    </tr>
    <tr>
      <td>Layer Type</td>
      <td>Defines the type of service or dataset being connected.</td>
    </tr>
    <tr>
      <td>ArcGIS Config</td>
      <td>Optional ArcGIS authentication profile.</td>
    </tr>
    <tr>
      <td>Token / Username / Password</td>
      <td>Optional credentials required to access secured services.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    ArcGIS Enterprise services often require authentication. You can either configure an ArcGIS connection profile or provide credentials directly when creating the layer.
  </div>
</div>

<br>

## Step 3: Preview the Layer

Before saving, GeoSight can preview the layer and validate the connection.

1. Open the <span class="ui-page-label">Preview</span> tab.

2. Verify that the layer loads successfully.

3. Review the map display for any errors or missing data.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-63.png" alt="Preview Layer">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

If the connection is unsuccessful, verify:

- The service URL is correct
- Authentication credentials are valid
- The service is publicly accessible or properly secured
- The selected layer type matches the service

<br>

## Step 4: Review Fields

The <span class="ui-page-label">Fields</span> tab allows users to review the attributes available within the layer. This step is useful for validating the structure of the dataset before it is used within projects and dashboards.

1. Open the <span class="ui-page-label">Fields</span> tab.

2. Verify that the expected fields are present.

3. Review field names and attribute values.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-64.png" alt="Fields Tab">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 5: Configure Labels

Labels control how information is displayed directly on the map.

1. Open the <span class="ui-page-label">Label</span> tab.

2. Configure the label field and display settings.

3. Preview the labels.

4. Save your changes.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-65.png" alt="Label Configuration">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Managing Existing Layers

The Context Layers table provides several tools for managing existing layers.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Action</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Edit</td>
      <td>Modify layer settings, fields, labels, or permissions.</td>
    </tr>
    <tr>
      <td>Delete</td>
      <td>Remove a context layer from GeoSight.</td>
    </tr>
    <tr>
      <td>Share</td>
      <td>Manage access permissions.</td>
    </tr>
    <tr>
      <td>Search</td>
      <td>Find layers using keywords.</td>
    </tr>
    <tr>
      <td>Sort</td>
      <td>Arrange records in ascending or descending order.</td>
    </tr>
    <tr>
      <td>Filter</td>
      <td>Display layers matching specific criteria.</td>
    </tr>
  </tbody>
</table>

<br>

---

**Next up:** Learn how to configure Filters and Widgets to create interactive dashboards and improve user-driven exploration of your GeoSight data.

<br>
