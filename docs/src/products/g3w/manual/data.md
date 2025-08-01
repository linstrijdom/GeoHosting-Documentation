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

# Data & Preparation

Before you start working with G3W-SUITE, it’s important to prepare both your QGIS project and its underlying data. This section walks you through the setup process — customizing the project, exploring the dataset, and getting everything ready for a smooth WebGIS deployment.

<br>

By the end of this tutorial, you will have practical experience in:

1. **Customizing** the visual and functional components of a QGIS project
2. **Publishing** the project as a WebGIS service using G3W-SUITE
3. **Creating** custom search tools for fast, focused data queries
4. **Integrating** interactive charts with the DataPlotly plugin
5. **Enabling** online editing capabilities

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-14.png" alt="Practical Experience" style="width: 30%;">
</div>

## Data

We’ll be working with a modified dataset of central Berlin, extracted via the BBBike OSM Extract Service. The pre-configured QGIS project and database are bundled for convenience:

- [<span class="ui-filename">Tutorial_Data_G3WSUITE.zip</span>](https://github.com/kartoza/GeoHosting-Documentation/docs/src/products/manual_data/Tutorial_Data_G3WSUITE.zip)

<br>

Once extracted, the folder contains 3 images and the following structure:

- 📁 **plots** – Chart configurations for the DataPlotly plugin in <span class="ui-filename">.xml</span> format
- 📁 **project_data** – Includes the SpatiaLite database: <span class="ui-filename">g3w_tutorial.sqlite</span>
- 📁 **projects** – The QGIS project file: <span class="ui-filename">g3w_tutorial.qgs</span>

<br>

Before publishing a project to G3W-SUITE, these two steps need to be completed:

1. **Update the QGIS Project Title**

    This will be used as the WebGIS service ID. Leaving it unchanged may cause confusion or service conflicts.

2. **Upload the SpatiaLite Database to the File Manager**

    G3W-SUITE needs access to your actual data source. If the database isn't uploaded, your layers may not load correctly.

<br>

<div class="alert alert-hint">
  <div class="alert-icon">💡</div>
  <div class="alert-text">
    Want to use your own data? Use the <a href="https://extract.bbbike.org/" target="_blank">BBBike Extract Service</a> to download a custom dataset for your area.
  </div>
</div>

<br>

## Data Preperation

To update your QGIS project title:

1. Navigate to the <span class="ui-page-label">Project Properties</span> of your QGIS project. 

2. Under the <span class="ui-page-label">General</span> tab, and find the <span class="ui-filename">Project Title</span> field. 

3. Enter a unique and descriptive title for your project.

4. Click <span class="ui-generic-label">OK</span> to apply the changes.

<br>

Make sure your title:

- Clearly describes the content or purpose of the project
- Avoids special characters or long whitespace
- Is short, but specific enough to identify in G3W

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-14-1.png" alt="Project Title">
  <div class="caption">
    Image credit: <a href="https://qgis.org/" target="_blank">QGIS</a>
  </div>
</div>

<br>

---

**Next up:** Now that your project title is updated, we'll walk you through how to upload your SpatiaLite database to G3W-SUITE so your project layers display correctly.

<br>
