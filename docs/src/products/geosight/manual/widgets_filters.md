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

# Widgets & Filters

Filters and widgets allow you to transform indicator data into interactive dashboards that help users explore trends, compare values, and focus on specific areas of interest.

Unlike indicators or context layers, widgets and filters are configured within a project. Once created, they become available to users viewing the project dashboard.

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Before configuring widgets or filters, ensure that your project already contains one or more indicators. Widgets and filters operate on the indicator data added to the project.
  </div>
</div>

<br>

The <span class="ui-page-label">Filters</span> and <span class="ui-page-label">Widgets</span> tabs allow you to:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Filters</td>
      <td>Create interactive conditions that allow dashboard users to display only features matching specific criteria.</td>
    </tr>
    <tr>
      <td>Summary Widgets</td>
      <td>Display calculated values such as totals, averages, minimums, or maximums.</td>
    </tr>
    <tr>
      <td>Time Series Widgets</td>
      <td>Visualize how indicator values change over time.</td>
    </tr>
  </tbody>
</table>

<br>

## Creating Filters

Filters allow dashboard users to display only administrative areas that satisfy one or more conditions.

<br>

For example, users could display:

- Districts with a population greater than 100,000
- Areas where vaccination coverage is below 60%
- Locations matching multiple indicator thresholds

<br>

### Step 1: Open the Project

Widgets and filters are configured from within an existing project.

1. Navigate to <span class="ui-page-label">Projects</span>.

2. Open the project you want to configure.

3. Select either the <span class="ui-page-label">Filters</span> or <span class="ui-page-label">Widgets</span> tab.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-66.png" alt="Project Tabs">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

### Step 2: Add a Filter

Filters make it easier to explore your data by showing only features that match the conditions you define.

1. Open the <span class="ui-page-label">Filters</span> tab.

2. Click <span class="ui-generic-label">Add Filter</span>.

3. Select the indicator.

4. Choose the comparison operator.

5. Enter the comparison value.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-67.png" alt="Filters Tab">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

#### Filter Operations

GeoSight supports a range of comparison operators that define how indicator values are evaluated when applying filters.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Operator</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>=</td>
      <td>Equal to a value.</td>
    </tr>
    <tr>
      <td>≠</td>
      <td>Not equal to a value.</td>
    </tr>
    <tr>
      <td>&gt;</td>
      <td>Greater than.</td>
    </tr>
    <tr>
      <td>&lt;</td>
      <td>Less than.</td>
    </tr>
    <tr>
      <td>&gt;=</td>
      <td>Greater than or equal to.</td>
    </tr>
    <tr>
      <td>&lt;=</td>
      <td>Less than or equal to.</td>
    </tr>
  </tbody>
</table>

<br>

#### Combining Filters

Multiple filters can be combined using logical operators.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Operator</th>
      <th>Behaviour</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>AND</td>
      <td>All conditions must be true.</td>
    </tr>
    <tr>
      <td>OR</td>
      <td>At least one condition must be true.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="alert alert-note">
  <div class="alert-icon">📝</div>
  <div class="alert-text">
    Combining filters allows users to create more advanced queries, such as displaying districts where rainfall is below average <strong>AND</strong> food insecurity is high.
  </div>
</div>

<br>

## Creating Widgets

Widgets display indicator information outside of the map, allowing users to summarize, compare, and visualize data. GeoSight supports several widget types.

<br>

### Step 3: Summary Widget

Summary widgets display calculated values for an indicator.

Examples include:

- Sum
- Average
- Count
- Minimum

<br>

To create a summary widget:

1. Open the <span class="ui-page-label">Widgets</span> tab.

2. Click <span class="ui-generic-label">Add Widget</span>.

3. Select an indicator.

4. Choose the summary operation.

5. Save the widget.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-68.png" alt="Summary Widget">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

### Step 4: Time Series Widgets

Time Series widgets display how indicator values change over time.

These widgets can compare:

- Multiple indicators
- Administrative areas
- Time periods

<br>

To create a Time Series widget:

1. Click <span class="ui-generic-label">Add Widget</span>.

2. Select <span class="ui-generic-label">Time Series Widget</span>.

3. Choose whether the series represents indicators or geographic areas.

4. Select the data to display.

5. Configure colours if required.

6. Click <span class="ui-generic-label">Apply</span>.

7. Save the project.

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-69.png" alt="Time Series Widget">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>

<div class="alert alert-warning">
  <div class="alert-icon">⚠️</div>
  <div class="alert-text">
    Time Series widgets require multiple observations for the same indicator across different dates. If only a single date has been imported, the widget will not display a trend.
  </div>
</div>

<br>

## Dashboard Interaction

After saving the project, dashboard users can interact with widgets and filters to:

- Explore trends over time
- Display only areas matching specific conditions
- Compare indicators
- View summary statistics without relying solely on the map

<br>

<div class="image-with-caption">
  <img src="../../img/geosight-img-70.png" alt="Dashboard">
  <div class="caption">
    Image credit: <a href="https://geosight.unicef.org/" target="_blank">GeoSight</a>
  </div>
</div>

<br>
