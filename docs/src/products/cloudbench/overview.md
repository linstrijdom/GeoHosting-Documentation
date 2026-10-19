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

# CloudBench Overview

## How It Works

CloudBench provides a central interface for connecting to geospatial services, managing data uploads, converting datasets, and previewing supported outputs.

Users begin by selecting a saved connection, such as an S3 storage bucket or GeoNode site. Depending on the connection type, they can upload datasets, manage available files, or perform operations supported by the connected service.

For supported file types, CloudBench can use CloudNativeGIS to convert the data into cloud-native formats. These outputs are stored in the connected bucket and registered in its catalogue, allowing supported layers to be previewed directly in CloudBench.

<br>

## CloudBench Architecture

CloudBench consists of several components that work together to manage connections, process geospatial data, and make the resulting datasets accessible.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Component</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CloudBench</td>
      <td>Provides the interface for managing connections, uploading datasets, initiating conversions, and previewing supported outputs.</td>
    </tr>
    <tr>
      <td>GeoServer</td>
      <td>Provides access to connected GeoServer instances through their configured connection details.</td>
    </tr>
    <tr>
      <td>PostgreSQL/PostGIS</td>
      <td>Provides access to connected databases for working with spatial data stored in PostgreSQL with PostGIS enabled.</td>
    </tr>
    <tr>
      <td>GeoNode</td>
      <td>Provides a destination for uploading supported datasets and managing their metadata through the connected account.</td>
    </tr>
    <tr>
      <td>S3 Storage</td>
      <td>Stores uploaded datasets and published cloud-native outputs in an object storage bucket.</td>
    </tr>
    <tr>
      <td>CloudNativeGIS</td>
      <td>Processes supported datasets and generates cloud-native formats for storage and visualisation.</td>
    </tr>
    <tr>
      <td>Layer Preview</td>
      <td>Displays supported outputs directly in CloudBench as maps, tables, or 3D point clouds, depending on the format.</td>
    </tr>
  </tbody>
</table>

<br>

<div class="image-with-caption">
  <img src="../img/cloudbench-img-3.png" alt="CloudBench Architecture and Data Workflow" style="width: 100%;">
</div>

<br>

## Connections

A **connection** is a saved configuration that allows CloudBench to communicate with a specific external service or storage location.

Each connection points to one target, such as a GeoServer instance, a PostgreSQL database service, a GeoNode site, or an S3 bucket. Multiple connections of the same type can be configured for different targets.

<br>

The available connection types are:

<table class="my-table-style">
  <thead>
    <tr>
      <th>Connection Type</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GeoServer</td>
      <td>Connects to a GeoServer instance using its URL and account credentials.</td>
    </tr>
    <tr>
      <td>PostgreSQL/PostGIS</td>
      <td>Connects to a PostgreSQL database using its host, port, database name, and credentials.</td>
    </tr>
    <tr>
      <td>GeoNode</td>
      <td>Connects to a GeoNode site for uploading datasets and updating their metadata.</td>
    </tr>
    <tr>
      <td>S3 Storage</td>
      <td>Connects to an object storage bucket using its endpoint, region, bucket name, and access credentials.</td>
    </tr>
  </tbody>
</table>

<br>

Connections can be tested before they are saved. Their details can also be edited or removed from CloudBench. Removing a connection only removes its saved configuration; it does not delete the external service or its data.

<br>

## Data Uploads and Processing

CloudBench supports different workflows depending on the selected connection.

- **S3 Storage:** Upload datasets to a connected bucket and, for supported formats, convert them into cloud-native outputs.
- **GeoNode:** Upload supported vector or raster datasets to a connected GeoNode site and provide a title and optional abstract.
- **PostgreSQL/PostGIS and GeoServer:** Connect to existing database and map-serving services through their configured connection details.

<br>

For S3 uploads, CloudBench detects supported input formats and presents the applicable conversion options. Processing is performed by CloudNativeGIS, and the resulting files are published to the bucket.

<br>

## Cloud-Native Formats

CloudBench supports four primary cloud-native output formats. Each is designed for a different type of geospatial data and use case.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Format</th>
      <th>File Extension</th>
      <th>Data Type</th>
      <th>Primary Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cloud Optimized GeoTIFF (COG)</td>
      <td><code>.tif</code></td>
      <td>Raster</td>
      <td>Efficient access to imagery, elevation models, and other raster datasets.</td>
    </tr>
    <tr>
      <td>PMTiles</td>
      <td><code>.pmtiles</code></td>
      <td>Vector tiles</td>
      <td>Displaying large vector datasets through tiled map visualisation.</td>
    </tr>
    <tr>
      <td>GeoParquet</td>
      <td><code>.parquet</code></td>
      <td>Vector features and attributes</td>
      <td>Querying, filtering, and analysing feature data.</td>
    </tr>
    <tr>
      <td>Cloud Optimized Point Cloud (COPC)</td>
      <td><code>.copc.laz</code></td>
      <td>LiDAR point cloud</td>
      <td>Streaming and visualising point cloud data in 3D.</td>
    </tr>
  </tbody>
</table>

<br>

The output format depends on the uploaded data. Raster uploads can produce COGs, vector uploads can produce PMTiles and GeoParquet, and LAS/LAZ point clouds can be converted to COPC.

<br>

## Layer Preview

CloudBench allows supported cloud-native outputs to be previewed directly in the browser.

- **COG:** Displays raster data on a map.
- **PMTiles:** Displays vector data as map tiles.
- **GeoParquet:** Provides vector features and attributes in a table, with map visualisation.
- **COPC:** Displays point cloud data in a 3D viewer.

<br>

These previews use the generated cloud-native files rather than requiring a separate backing map server for each output. The files remain standard formats that can also be accessed by compatible GIS tools and applications.

<br>

## Conversion Modes

CloudBench supports two conversion modes, depending on how the environment has been configured.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Mode</th>
      <th>How It Works</th>
      <th>Billing Behaviour</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fixed (Non-Demand)</td>
      <td>Conversion jobs run on a standing CloudNativeGIS server.</td>
      <td>No per-job server provisioning charge is applied through the on-demand workflow.</td>
    </tr>
    <tr>
      <td>On-Demand</td>
      <td>A separate cloud server is provisioned for each conversion job and deleted when the job finishes.</td>
      <td>The selected server size is billed per started hour.</td>
    </tr>
  </tbody>
</table>

<br>

In on-demand mode, users select an available server size and review the displayed cost before confirming the conversion. The server is deleted when the job completes or fails, preventing it from remaining active unnecessarily.

<br>

<div class="alert alert-note">
  <div class="alert-icon">⚠️</div>
  <div class="alert-text">
    On-demand conversion currently has limitations for GeoPackage files. GeoPackage conversion requires an inspection step before the conversion jobs can be selected, and this workflow is not available in on-demand mode. Use fixed mode or convert the relevant layers separately.
  </div>
</div>

<br>

## Pricing and Cost Considerations

Conversion costs depend on the configured conversion mode and, when using on-demand processing, the selected server size and job duration.

For on-demand conversions, the server is billed by the started hour. A short job may therefore incur a full hour of server charges. The price displayed in CloudBench is based on the underlying Hetzner price plus the configured GeoHosting margin.

<br>

To manage conversion costs:

- Select the smallest server size suitable for the dataset.
- Combine raster tiles into a mosaic where appropriate.
- Consider the billing implications before cancelling a job.
- Review the displayed price before confirming an on-demand conversion.

<br>

## Who Is CloudBench For?

CloudBench is useful for organisations and GIS professionals who need to prepare, manage, and access geospatial datasets in cloud-based environments.

Typical use cases include:

- **GIS and data teams**

    Connect to existing geospatial services and manage data across multiple platforms.

- **Web mapping projects**

    Prepare raster and vector datasets for efficient browser-based visualisation.

- **Large raster datasets**

    Convert imagery and elevation data into cloud-optimised formats for efficient access.

- **Vector data analysis**

    Produce GeoParquet datasets for working with feature attributes and data analysis.

- **LiDAR and 3D workflows**

    Convert point cloud datasets into COPC for streaming and browser-based visualisation.

- **Cloud-based geospatial infrastructure**

    Store and access standard geospatial outputs in S3-compatible object storage without requiring a separate server for every cloud-native layer.

<br>