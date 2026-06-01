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

# Creating Styles

Styles control how indicator data is visualized throughout GeoSight dashboards and maps. They define the colours, classifications, labels, and visual rules used to represent values geographically.

<br>

Styles are responsible for transforming data into meaningful visualizations by controlling:

- Colour palettes
- Value classifications
- Category mappings
- No-data handling
- etc.

<br>

Styles can be created independently in the <span class="ui-page-label">Styles</span> library or configured directly inside Indicator Layers within a project.

<br>

The <span class="ui-page-label">Styles</span> page allows users to:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create Styles</td>
      <td>Create reusable map styling templates for indicators and projects.</td>
    </tr>
    <tr>
      <td>Configure Colour Rules</td>
      <td>Define colours, value ranges, categories, and legends.</td>
    </tr>
    <tr>
      <td>Create Dynamic Styles</td>
      <td>Automatically classify data using statistical methods and colour ramps.</td>
    </tr>
    <tr>
      <td>Edit Styles</td>
      <td>Update existing style rules, colours, or classifications.</td>
    </tr>
    <tr>
      <td>Search &amp; Filter</td>
      <td>Search, sort, and filter available styles.</td>
    </tr>
    <tr>
      <td>Share Access</td>
      <td>Control which users or groups can access the style.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Styles can be reused across multiple indicators and projects, helping maintain consistent visual standards throughout GeoSight dashboards.
  </div>
</div>

<br>

## Understanding Style Types

GeoSight supports several different style approaches depending on the type of data being visualized.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Style Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Predefined Style</td>
      <td>Manually configured colour rules and classifications.</td>
    </tr>
    <tr>
      <td>Dynamic Quantitative</td>
      <td>Automatically classifies numeric data using statistical methods.</td>
    </tr>
    <tr>
      <td>Dynamic Qualitative</td>
      <td>Automatically applies colours to category or text-based values.</td>
    </tr>
  </tbody>
</table>

<br>

Common classification methods for Dynamic Quantitative styles include:

- Jenks Natural Breaks
- Quantile
- Standard Deviation
- Equal Interval
- Geometric Progression
- Arithmetic Progression

<br>

## Step 1: Open the Styles Page

The Styles page is used to manage reusable style configurations and colour rules throughout GeoSight.

1. In the left-side navigation panel, click <span class="ui-page-label">Styles</span>.

2. Use the <span class="ui-generic-label">Search Style</span> field to locate existing styles.

3. Select a style checkbox to enable editing or deletion tools.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-56.png" alt="Styles Page">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

## Step 2: Create a New Style

Creating a style allows you to define reusable visual rules for indicators and projects.

1. Click <span class="ui-generic-label">Create New Style</span>.

2. Complete the required fields in the <span class="ui-page-label">General</span> tab.

3. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-57.png" alt="Create New Style">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

Use the following sample settings:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Field</th>
      <th>Example Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>Population Density Style</td>
      <td>The display name of the style.</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Population density visualization</td>
      <td>Optional description explaining the purpose.</td>
    </tr>
    <tr>
      <td>Category</td>
      <td>Population</td>
      <td>Optional grouping category for organizing styles.</td>
    </tr>
    <tr>
      <td>Value Type</td>
      <td>Float</td>
      <td>Defines if the style supports numeric or category values.</td>
    </tr>
  </tbody>
</table>

<br>

## Step 3: Configure Style Rules

The <span class="ui-page-label">Style Config</span> tab controls how values are classified and visualized on the map.

1. Open the <span class="ui-page-label">Style Config</span> tab.

2. Under <span class="ui-generic-label">Style Type</span>, select **Predefined Style**.

3. Configure colour rules, classifications, or palettes.

4. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-58.png" alt="Style Configuration">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

### Predefined Style Rules

Predefined styles allow users to manually define custom colour rules and legends.

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
      <td>The label shown in the map legend.</td>
    </tr>
    <tr>
      <td>Rule</td>
      <td>The value or range assigned to the rule.</td>
    </tr>
    <tr>
      <td>Colour</td>
      <td>The polygon fill colour.</td>
    </tr>
    <tr>
      <td>Outline Colour</td>
      <td>The border colour for polygons.</td>
    </tr>
    <tr>
      <td>Outline Width</td>
      <td>The thickness of polygon borders.</td>
    </tr>
  </tbody>
</table>

<br>

Example numeric ranges:

- <span class="ui-filename">0 - 10</span>
- <span class="ui-filename">10 - 25</span>
- <span class="ui-filename">25 - 50</span>

<br>

Example category mappings:

- <span class="ui-filename">Male (m)</span>
- <span class="ui-filename">Female (f)</span>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Category styles rely on predefined codelists. Contact your GeoSight administrator if additional categories or codes need to be added.
  </div>
</div>

<br>

## Step 4: Configure Dynamic Styles

Dynamic styles automatically generate classifications and colour ranges from your data.

1. Under <span class="ui-generic-label">Style Type</span>, select **Dynamic Quantitative** or **Dynamic Qualitative**.

2. Select a colour palette.

3. Choose a classification method.

4. Define the number of classes.

5. Configure optional outline and filter settings.

6. Click <span class="ui-generic-label">Save</span>.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-59.png" alt="Dynamic Style">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

The following options are commonly available for Dynamic Quantitative styles:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Palette</td>
      <td>Select the colour ramp used for the visualization.</td>
    </tr>
    <tr>
      <td>Reverse Palette</td>
      <td>Reverse the order of colours in the palette.</td>
    </tr>
    <tr>
      <td>Classification</td>
      <td>Select the statistical classification method.</td>
    </tr>
    <tr>
      <td>Number of Classes</td>
      <td>Define how many value classes should be generated.</td>
    </tr>
    <tr>
      <td>Sync Fill &amp; Outline</td>
      <td>Use the same colour for polygon fills and outlines.</td>
    </tr>
    <tr>
      <td>Apply When Filtering</td>
      <td>Allow styles to update dynamically when filters are applied.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-60.png" alt="Style Preview">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

<div class="alert alert-warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-text">
    Dynamic classifications are recalculated using the currently available dataset values. Different filters or time selections may change class breaks and colour distributions.
  </div>
</div>

<br>

## Additional Style Concepts

GeoSight styles can exist in multiple locations throughout the platform.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Style Location</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Style Library</td>
      <td>Reusable styles stored globally within the GeoSight admin panel.</td>
    </tr>
    <tr>
      <td>Indicator Style</td>
      <td>Default styles assigned directly to indicators.</td>
    </tr>
    <tr>
      <td>Override Style</td>
      <td>Project-specific style overrides configured inside Indicator Layers.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Styles configured directly within Indicator Layers only affect the current project and do not modify the original Style Library configuration.
  </div>
</div>

<br>

---

**Next up:** Learn how to create and manage Context Layers in GeoSight to add additional spatial datasets and overlays to your dashboards.

<br>
