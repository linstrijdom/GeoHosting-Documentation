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

# Creating Projects / Dashboards

Projects are interactive dashboards within GeoSight that combine indicators, reference datasets, layers, basemaps, widgets, and filters into a single map-based workspace.

<br>

In GeoSight, the terms **Project** and **Dashboard** are often used interchangeably. A project acts as the main environment where users visualize, explore, and analyse spatial indicator data.

<br>

The <span class="ui-page-label">Projects</span> page allows users to:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create Projects</td>
      <td>Build new dashboards using indicators, layers, and basemaps.</td>
    </tr>
    <tr>
      <td>Configure Map Views</td>
      <td>Select reference datasets, extents, and administrative levels.</td>
    </tr>
    <tr>
      <td>Manage Indicator Layers</td>
      <td>Add and organize indicator visualizations within the dashboard.</td>
    </tr>
    <tr>
      <td>Add Context Layers</td>
      <td>Include supporting geospatial datasets and overlays.</td>
    </tr>
    <tr>
      <td>Manage Basemaps</td>
      <td>Select background map layers available to dashboard users.</td>
    </tr>
    <tr>
      <td>Configure Widgets &amp; Filters</td>
      <td>Create interactive summaries, charts, and filtering tools.</td>
    </tr>
    <tr>
      <td>Share Dashboards</td>
      <td>Control access permissions for users, groups, or the public.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Before creating a dashboard, ensure that your Reference Dataset, Indicator Data, and Basemaps have already been configured.
  </div>
</div>

<br>

## Step 1: Open the Projects Page

The Projects page is the central location for creating and managing GeoSight dashboards.

1. In the left-side navigation panel, click <span class="ui-page-label">Projects</span>.

2. Use the available search and filter tools to locate existing dashboards.

3. Click <span class="ui-generic-label">Create New Project</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-49.png" alt="Projects Page">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 2: General Project Settings

The <span class="ui-page-label">General</span> tab defines the core dashboard settings, including the reference dataset and default map behaviour.

1. Enter a project name (e.g. <span class="ui-filename">First Project</span>).

2. Select the appropriate reference dataset or <span class="ui-page-label">View</span>.

3. Configure optional settings such as extent, levels, and repository type if required.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-50.png" alt="General Project Settings">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    The selected View controls which administrative boundaries and geographic levels are available within the dashboard.
  </div>
</div>

<br>

## Step 3: Add Indicators

Indicators connect the dashboard to the data stored within GeoSight.

1. Open the <span class="ui-page-label">Indicators</span> tab.

2. Click <span class="ui-generic-label">Add Indicator</span>.

3. Select <span class="ui-filename">Sample Indicator A</span>.

4. Click <span class="ui-generic-label">Update Selection</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-51.png" alt="Indicators Tab">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

The <span class="ui-page-label">Indicators</span> tab allows dashboards to access data for:

- Widgets
- Filters
- Charts
- Indicator layers
- Analytical tools

<br>

## Step 4: Configure Indicator Layers

Indicator Layers control how indicator data is visualized on the map.

1. Open the <span class="ui-page-label">Indicator Layers</span> tab.

2. Click <span class="ui-generic-label">Add Indicator Layer</span>.

3. Choose <span class="ui-generic-label">Single Indicator Layer</span>.

4. Select <span class="ui-filename">Sample Indicator A</span>.

5. Click <span class="ui-generic-label">Apply Selection</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-52.png" alt="Indicator Layers Tab">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

GeoSight supports several indicator layer types:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Layer Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Single Indicator Layer</td>
      <td>Displays one indicator dataset on the map.</td>
    </tr>
    <tr>
      <td>Multi-Indicator Layer</td>
      <td>Combines multiple indicators using charts such as pie or bar graphs.</td>
    </tr>
    <tr>
      <td>Dynamic Layer</td>
      <td>Uses custom expressions and filtering logic for advanced visualization.</td>
    </tr>
    <tr>
      <td>Related Table Layer</td>
      <td>Displays summarized data from related tables.</td>
    </tr>
  </tbody>
</table>

<br>

## Step 5: Add Basemaps

Basemaps provide the geographic background displayed beneath your indicator layers.

1. Open the <span class="ui-page-label">Basemaps</span> tab.

2. Click <span class="ui-generic-label">Add Basemap</span>.

3. Select <span class="ui-filename">Open Street Map</span>.

4. Click <span class="ui-generic-label">Apply Selection</span>.

5. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-53.png" alt="Basemaps Tab">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 6: Preview the Dashboard

Once saved, the dashboard can be opened and explored interactively within GeoSight.

1. Click <span class="ui-generic-label">Preview</span>.

    <br>

    <div class="image-with-caption">
      <img src="../../img/geosight-img-54.png" alt="Dashboard Preview">
      <div class="caption">
        Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
      </div>
    </div>

    <br>

2. Explore the map interface, layers, filters, and indicator tools.

3. Verify that your indicators, basemaps, and administrative boundaries display correctly.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-55.png" alt="Dashboard Preview 2">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Additional Project Components

GeoSight dashboards support several additional configuration sections.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Context Layers</td>
      <td>Add external geospatial overlays and supporting datasets.</td>
    </tr>
    <tr>
      <td>Filters</td>
      <td>Create interactive filtering tools for indicator data.</td>
    </tr>
    <tr>
      <td>Widgets</td>
      <td>Display charts, summaries, and statistical outputs.</td>
    </tr>
    <tr>
      <td>Related Tables</td>
      <td>Connect related datasets for advanced analysis.</td>
    </tr>
    <tr>
      <td>Share</td>
      <td>Control dashboard access permissions.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Indicator data will only display correctly if the dashboard View matches the Reference Dataset used during data import.
  </div>
</div>

<br>

---

**Next up:** Learn how to create and configure Styles in GeoSight to control colours, classifications, labels, and map visualization behaviour.

<br>
