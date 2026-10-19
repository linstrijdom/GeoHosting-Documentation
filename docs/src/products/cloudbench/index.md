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

# CloudBench

## What is CloudBench?

**CloudBench** is a geospatial data management and conversion platform that connects to services such as GeoServer, PostgreSQL/PostGIS, GeoNode, and S3-compatible storage.

It provides a central interface for managing these connections, uploading datasets, converting geospatial files into cloud-native formats, and previewing the resulting layers directly in a browser.

CloudBench helps simplify geospatial workflows by bringing data storage, format conversion, and visualisation together in one place. Instead of requiring a separate server for every dataset or format, supported cloud-native formats can be accessed directly from object storage.

<br>

<div class="image-with-caption">
  <img src="./img/cloudbench-img-1.png" alt="CloudBench Logo" style="width: 85%;">
</div>

<br>

## Key Capabilities

- **Multiple Service Connections**

    Connect to GeoServer, PostgreSQL/PostGIS, GeoNode, and S3-compatible storage services through a single interface.

    <br>

- **Geospatial Data Uploads**

    Upload supported vector, raster, and point cloud datasets to connected storage locations and geospatial services.

    <br>

- **Cloud-Native Format Conversion**

    Convert supported datasets into formats optimised for cloud-based access, including COGs, PMTiles, GeoParquet, and Cloud Optimized Point Cloud (COPC).

    <br>

- **Browser-Based Layer Preview**

    Preview supported geospatial datasets directly in CloudBench without requiring a separate map server for cloud-native outputs.

    <br>

- **Raster Data Processing**

    Convert GeoTIFF files into COGs and create mosaics from multiple raster tiles for streamlined access.

    <br>

- **Vector Data Processing**

    Generate PMTiles for map visualisation and GeoParquet for accessing vector features and their associated attributes.

    <br>

- **LiDAR Point Cloud Support**

    Convert LAS and LAZ point cloud files into COPC for efficient streaming and 3D visualisation.

    <br>

- **GeoNode Integration**

    Upload supported datasets to a connected GeoNode site, with options to specify titles and descriptive abstracts.

    <br>

- **Cloud Storage Integration**

    Work with S3-compatible object storage platforms, including AWS S3, MinIO, and DigitalOcean Spaces.

<br>

## How CloudBench Works

CloudBench uses saved **connections** to communicate with external geospatial services and storage locations.

Users configure or select a connection, upload or access data, and perform supported operations through the interface. When a dataset is converted into a cloud-native format, CloudBench uses CloudNativeGIS to process the data and publishes the resulting files to the connected storage location.

The resulting datasets can then be previewed in CloudBench or accessed by compatible GIS tools and applications.

<br>

<div class="image-with-caption">
  <img src="./img/cloudbench-img-2.png" alt="CloudBench Workflow" style="width: 85%;">
</div>

<br>

## Supported Cloud-Native Formats

CloudBench supports several cloud-native formats designed for efficient access to different types of geospatial data.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Format</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cloud Optimized GeoTIFF</td>
      <td>For storing raster data, including satellite imagery and digital elevation models.</td>
    </tr>
    <tr>
      <td>PMTiles</td>
      <td>For storing and serving vector tiles from a single file without a separate tile server.</td>
    </tr>
    <tr>
      <td>GeoParquet</td>
      <td>For storing vector features and attributes in a columnar format for efficient data querying.</td>
    </tr>
    <tr>
      <td>Cloud Optimized Point Cloud</td>
      <td>For storing, streaming, and visualising LiDAR point cloud datasets.</td>
    </tr>
  </tbody>
</table>

<br>

The available conversion depends on the input data type. Vector uploads can produce both PMTiles and GeoParquet, while raster and point cloud uploads use their corresponding formats.

<br>

## Typical Workflows

CloudBench can support a range of geospatial data workflows, including:

- Connecting to existing geospatial services and databases.
- Uploading datasets to S3-compatible object storage.
- Converting raster data into cloud-optimised formats.
- Preparing vector datasets for map visualisation and data analysis.
- Converting LiDAR point clouds for browser-based 3D viewing.
- Uploading datasets to GeoNode.
- Previewing converted datasets without deploying a separate server for each output.

<br>

CloudBench is particularly useful when organisations need to prepare and access geospatial data efficiently, especially when working with large datasets or cloud-based mapping applications.

<br>

## Getting Started & Resources

To begin using CloudBench, start by adding or selecting a connection to the service or storage location you want to work with.

From there, you can upload supported datasets, perform available conversions, and preview the resulting layers.

<br>

Use the guides and resources below to get started:

<div class="cards-grid">
  <div class="card">
    <div class="card-header">
      🔗 <a href="./guide/connections/">Managing Connections</a>
    </div>
    <div class="card-body">
      Connect CloudBench to GeoServer, PostgreSQL/PostGIS, GeoNode, and S3-compatible storage services.
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      🗺️ <a href="./guide/quickstart/">Quickstart: 5-Minute Tutorial</a>
    </div>
    <div class="card-body">
      Connect to a data source, upload a dataset, and explore CloudBench's geospatial data workflows.
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      🎫 <a href="https://geospatialhosting.com/#/dashboard/support">Create a Support Ticket</a>
    </div>
    <div class="card-body">
      Create a support ticket from the GeoSpatialHosting dashboard.
    </div>
  </div>
</div>

<br>
