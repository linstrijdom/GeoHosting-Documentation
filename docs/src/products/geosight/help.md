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

# GeoSight Help

## Troubleshooting Common Issues

<details class="faq-item">
  <summary>My indicator doesn't appear in the project.</summary>
  <div class="faq-answer">
    Indicators must first be added to the project before they can be displayed on the dashboard.
    <br><br>
    <strong>Fix:</strong> Open the project, go to the <strong>Indicators</strong> tab, add the indicator, then save the project.
  </div>
</details>

<details class="faq-item">
  <summary>My imported data isn't showing on the map.</summary>
  <div class="faq-answer">
    This usually happens when the <strong>GeographyCode</strong> values in your data do not match the <strong>ucode</strong> values in your reference dataset.
    <br><br>
    <strong>Fix:</strong> Verify that all geography codes match exactly, including capitalization and spacing.
  </div>
</details>

<details class="faq-item">
  <summary>I can't create a context layer from my API.</summary>
  <div class="faq-answer">
    The layer URL may be incorrect or the selected layer type doesn't match the service.
    <br><br>
    <strong>Fix:</strong> Verify the API URL, select the correct layer type (ArcGIS, GeoJSON, Raster Tile, etc.), and provide authentication details if required.
  </div>
</details>

<details class="faq-item">
  <summary>My context layer preview is blank.</summary>
  <div class="faq-answer">
    A blank preview usually indicates that GeoSight cannot access or interpret the data source.
    <br><br>
    <strong>Fix:</strong> Check the API URL, confirm the service is publicly accessible or that the correct authentication credentials have been provided.
  </div>
</details>

<details class="faq-item">
  <summary>My filter isn't changing the map.</summary>
  <div class="faq-answer">
    Filters only work with indicators that are available in the project and contain matching data.
    <br><br>
    <strong>Fix:</strong> Confirm the correct indicator is selected and that the comparison value matches the available data.
  </div>
</details>

<details class="faq-item">
  <summary>My widget is empty.</summary>
  <div class="faq-answer">
    Widgets require indicator data before they can display summaries or charts.
    <br><br>
    <strong>Fix:</strong> Ensure the selected indicator contains imported data and that the widget configuration references the correct indicator.
  </div>
</details>

<details class="faq-item">
  <summary>My Time Series Widget only shows one point.</summary>
  <div class="faq-answer">
    Time Series Widgets require multiple observations across different dates.
    <br><br>
    <strong>Fix:</strong> Import additional data for the same indicator using different dates so GeoSight can display trends over time.
  </div>
</details>

<details class="faq-item">
  <summary>I can't edit a project, indicator, or context layer.</summary>
  <div class="faq-answer">
    You may not have editing permissions, or the item hasn't been selected.
    <br><br>
    <strong>Fix:</strong> Select the item's checkbox before clicking <strong>Edit</strong>. If editing is still unavailable, verify that you have the necessary permissions.
  </div>
</details>

<details class="faq-item">
  <summary>My labels aren't appearing on the map.</summary>
  <div class="faq-answer">
    Labels must be configured and enabled for the layer or indicator.
    <br><br>
    <strong>Fix:</strong> Open the <strong>Label</strong> tab, configure the label settings, save the changes, and refresh the dashboard.
  </div>
</details>

<details class="faq-item">
  <summary>Other users can't see my project or data.</summary>
  <div class="faq-answer">
    By default, newly created resources are only accessible to their owner.
    <br><br>
    <strong>Fix:</strong> Open the <strong>Share</strong> tab and grant access to the required users, groups, or make the resource public if appropriate.
  </div>
</details>

<br>

## Frequently Asked Questions (FAQ)

<details class="faq-item">
  <summary>What is the difference between an Indicator Layer and a Context Layer?</summary>
  <div class="faq-answer">
    Indicator Layers display statistical data linked to administrative boundaries, while Context Layers provide additional geographic information such as roads, health facilities, rivers, or satellite imagery.
  </div>
</details>

<details class="faq-item">
  <summary>Which data formats can I import into GeoSight?</summary>
  <div class="faq-answer">
    GeoSight supports Excel files (LONG and WIDE formats), JSON APIs, SharePoint Excel files, SDMX Data Warehouse connections, and several context layer API types including ArcGIS, GeoJSON, Raster Tiles, Raster COGs, Vector Tiles, and Cloud Native GIS layers.
  </div>
</details>

<details class="faq-item">
  <summary>Can I use multiple indicators in the same dashboard?</summary>
  <div class="faq-answer">
    Yes. Projects are designed to combine multiple indicators, context layers, filters, widgets, and basemaps into a single interactive dashboard.
  </div>
</details>

<details class="faq-item">
  <summary>Can I edit an indicator after importing data?</summary>
  <div class="faq-answer">
    Yes. You can edit an indicator's metadata, styling, labels, aggregation settings, and sharing permissions. Existing imported data will remain unless you explicitly remove it.
  </div>
</details>

<details class="faq-item">
  <summary>What is the difference between LONG and WIDE Excel formats?</summary>
  <div class="faq-answer">
    LONG format stores each observation as a separate row and is ideal for multiple dates and indicators. WIDE format stores multiple indicators in separate columns and is best suited for a single reporting period.
  </div>
</details>

<details class="faq-item">
  <summary>Can I share dashboards with other users?</summary>
  <div class="faq-answer">
    Yes. Projects, indicators, context layers, and other resources include a <strong>Share</strong> tab where you can grant access to specific users, groups, or the public.
  </div>
</details>

<details class="faq-item">
  <summary>Can I connect GeoSight to ArcGIS Online or ArcGIS Enterprise?</summary>
  <div class="faq-answer">
    Yes. GeoSight supports ArcGIS Online and ArcGIS Enterprise services when creating Context Layers. Authentication can be managed using ArcGIS configurations or manual credentials.
  </div>
</details>

<details class="faq-item">
  <summary>How do Time Series Widgets work?</summary>
  <div class="faq-answer">
    Time Series Widgets visualize how indicator values change over time. They require multiple observations for the same indicator with different dates to generate charts and timeline controls.
  </div>
</details>

<details class="faq-item">
  <summary>Can I use multiple filters at the same time?</summary>
  <div class="faq-answer">
    Yes. Multiple filters can be combined using logical <strong>AND</strong> and <strong>OR</strong> operators, allowing you to create more advanced filtering conditions.
  </div>
</details>

<details class="faq-item">
  <summary>Can I change the appearance of my dashboard later?</summary>
  <div class="faq-answer">
    Yes. You can update basemaps, indicator styles, context layers, widgets, filters, labels, and project settings at any time. Simply save the project after making your changes.
  </div>
</details>

<br>

## Getting Support

If you run into an issue or need assistance, the best place to start is the **[Support Center](https://kartoza.github.io/GeoHosting-Documentation/users/support_center/)** page in the **Users** section.

There, you’ll find clear instructions on how to log a support ticket, including what information to provide so the team can assist you efficiently.

By using the official support system, your request will be properly tracked and routed to the right people, helping you get a faster and more accurate response.

<br>
