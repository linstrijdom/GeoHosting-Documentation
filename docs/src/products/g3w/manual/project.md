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

# Publishing a QGIS Project

After creating both a Macro Cartographic Group and a Cartographic Group to organize your content, you're ready to publish your QGIS project as a **WebGIS Service** using G3W-SUITE.

<br>

As part of the publishing process, you can configure several important settings that define how your WebGIS functions at runtime:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tab's TOC active as default</td>
      <td>Automatically opens the Table of Contents (Layers, Base Layers, etc.) on load.</td>
    </tr>
    <tr>
      <td>Tab's TOC layer initial status</td>
      <td>Set whether TOC layers start collapsed or expanded.</td>
    </tr>
    <tr>
      <td>Map themes list initial status</td>
      <td>Choose whether the map theme list is initially collapsed or expanded.</td>
    </tr>
    <tr>
      <td>Legend position rendering</td>
      <td>Display the legend in a separate tab or directly within the TOC panel.</td>
    </tr>
    <tr>
      <td>WMS GetMap image format</td>
      <td>Set the preferred image format for WMS GetMap requests.</td>
    </tr>
    <tr>
      <td>Max feature to get for query</td>
      <td>Define the maximum number of features returned in a single query.</td>
    </tr>
    <tr>
      <td>Query control mode</td>
      <td>Specify whether users can select a single or multiple features during queries.</td>
    </tr>
    <tr>
      <td>Query by bbox control mode</td>
      <td>Choose single or multiple selection for bounding box-based queries.</td>
    </tr>
    <tr>
      <td>Query by polygon control mode</td>
      <td>Choose single or multiple selection for polygon-based queries.</td>
    </tr>
    <tr>
      <td>Geocoding providers</td>
      <td>Enable specific services for address-based searches.</td>
    </tr>
  </tbody>
</table>

<br>

## Step 1: Open Project Publishing Page

1. Go to the <span class="ui-page-label">Cartographic Groups</span> page.

2. Under the **Berlin City Center** group, click <span class="ui-generic-label">Add New Project</span>.

3. This opens the <span class="ui-page-label">New QGIS Project</span> page.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-15-1.png" alt="New Project">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 2: Publish QGIS Project

1. On the <span class="ui-page-label">New QGIS Project</span> page, fill in the following details:

      <br>

      <table class="my-table-style">
      <thead>
      <tr>
            <th>Field</th>
            <th>Field Input</th>
            <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
            <td>QGIS Project</td>
            <td>g3w_tutorial.qgz</td>
            <td>The <code>.qgz</code> or <code>.qgs</code> file for your QGIS project.</td>
      </tr>
      <tr>
            <td>Public Title</td>
            <td>Berlin - BBBike Service</td>
            <td>The name that will appear in the WebGIS interface.</td>
      </tr>
      <tr>
            <td>Thumbnail</td>
            <td>image_project.png</td>
            <td>A representative image shown in the project list.</td>
      </tr>
      <tr>
            <td>Base Layer</td>
            <td>OSM (OpenStreetMap)</td>
            <td>The default base map when the WebGIS loads.</td>
      </tr>
      </tbody>
      </table>

      <br>

2. In the **ACL Users** section, click <span class="ui-generic-label">+</span> to assign roles as needed.

3. Under **Options and Actions**, leave the default settings unchanged.

4. Click <span class="ui-generic-label">Save</span> to publish the project.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-15-2.png" alt="New Project Page">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 3: Launch WebGIS Service

1. Return to the <span class="ui-page-label">Cartographic Groups</span> page.

2. Under **Berlin City Center** group, click <span class="ui-generic-label">Group Projects</span>.

3. This opens the <span class="ui-page-label">Project List</span> page.

4. Click <span class="ui-generic-label">Show Map</span> under the **Actions** column to open the live WebGIS.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-15-3.png" alt="View Map">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

## Step 4: Enable the Overview Map

1. On the <span class="ui-page-label">Project List</span> page, find the <span class="ui-filename">Berlin - BBBike Service</span> entry.

2. Check the box under the **Panoramic** column.

3. An **Overview Map** will appear in the WebGIS interface, providing spatial context as you navigate.

<br>

<div class="image-with-caption">
  <img src="../../img/g3w-img-15-4.png" alt="Overview Map">
  <div class="caption">
    Image credit: <a href="https://g3wsuite.it/en/g3w-suite-publish-qgis-projects/" target="_blank">G3W-SUITE</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to improve your WebGIS by enabling helpful widgets and interactive tools that enhance user experience.

<br>
