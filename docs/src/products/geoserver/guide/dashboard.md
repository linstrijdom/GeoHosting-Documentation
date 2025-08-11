---
title: Documentation
summary: GeoHosting Controller
  - Irwan Fathurrahman
  - Ketan Bamniya
  - Jeff Osundwa
date: 2024-06-19
some_url: https://github.com/kartoza/GeoHosting-Controller.git
copyright: Copyright 2024, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
context_id: nDU6LLGiXPTLADXY
---

# Navigating the Dashboard

## Welcome Page

When you first launch GeoServer, you’ll land on the <span class="ui-page-label">Welcome</span> page. Here, you’ll see a list of the web services currently published by GeoServer — including mapping, data access, and processing endpoints.

If you’re logged in with administrative credentials, you’ll also see a configuration overview, plus any important information or warning notifications that might require your attention.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-7-1.png" alt="Welcome Page" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Web Administration Interface

The Web Administration Interface lets you configure every aspect of the platform — from uploading new datasets to customizing service behavior.

Once logged in as an administrator, the left-hand navigation menu expands to reveal the full range of configuration sections. Each section groups related tools and settings, making it easier to find exactly what you need.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-7-2.png" alt="Logged In" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

### About & Status

This section offers tools for monitoring and diagnosing your GeoServer setup.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Server Status</td>
      <td>Displays a summary of server configuration and runtime status.</td>
    </tr>
    <tr>
      <td>GeoServer Logs</td>
      <td>Shows server logs to help diagnose errors directly within the browser.</td>
    </tr>
    <tr>
      <td>Contact Information</td>
      <td>Allows you to set public contact details shown in service metadata.</td>
    </tr>
    <tr>
      <td>About GeoServer</td>
      <td>Provides links to official documentation, homepage, and issue tracker.</td>
    </tr>
    <tr>
      <td>Process Status</td>
      <td>Lists active and recently completed geospatial processing tasks.</td>
    </tr>
  </tbody>
</table>

<br>

### Data

Manage your spatial data sources and layers here, including how they are grouped and styled.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Layer Preview</td>
      <td>View your layers in various formats to verify their configuration visually.</td>
    </tr>
    <tr>
      <td>Workspaces</td>
      <td>Organize related data layers into workspaces; add, edit, or delete workspaces.</td>
    </tr>
    <tr>
      <td>Stores</td>
      <td>Manage data stores that connect GeoServer to your spatial datasets.</td>
    </tr>
    <tr>
      <td>Layers</td>
      <td>Add, edit, or remove individual map layers and configure their properties.</td>
    </tr>
    <tr>
      <td>Layer Groups</td>
      <td>Group multiple layers for easier management and publishing.</td>
    </tr>
    <tr>
      <td>Styles</td>
      <td>Define and manage map styles used to control layer appearance.</td>
    </tr>
  </tbody>
</table>

<br>

### Services

Configure the various OGC and related services GeoServer offers for data sharing and processing.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Service</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Web Map Service (WMS)</td>
      <td>Serve dynamically rendered map images from your data.</td>
    </tr>
    <tr>
      <td>Web Map Tile Service (WMTS)</td>
      <td>Deliver cached map tiles optimized for fast web display.</td>
    </tr>
    <tr>
      <td>Web Coverage Service (WCS)</td>
      <td>Provide access to raster and imagery data.</td>
    </tr>
    <tr>
      <td>Web Feature Service (WFS)</td>
      <td>Enable requests for vector feature data with geometry and attributes.</td>
    </tr>
    <tr>
      <td>Catalog Services for the Web (CSW)</td>
      <td>Discover geospatial resources using metadata catalogs.</td>
    </tr>
    <tr>
      <td>Web Processing Service (WPS)</td>
      <td>Run spatial data processing and analysis workflows on the server.</td>
    </tr>
  </tbody>
</table>

<br>

### Settings

Configure global options affecting the entire GeoServer instance.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Global Settings</td>
      <td>Control messaging, logging, proxy, and character encoding options.</td>
    </tr>
    <tr>
      <td>Image Processing</td>
      <td>Adjust Java Advanced Imaging (JAI) parameters used by map and coverage services.</td>
    </tr>
    <tr>
      <td>Coverage Access</td>
      <td>Manage settings for loading and publishing raster coverages.</td>
    </tr>
  </tbody>
</table>

<br>

### Tile Caching

Manage GeoServer’s integrated tile caching system, GeoWebCache.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tile Layers</td>
      <td>View and manage which layers are served as cached tiles.</td>
    </tr>
    <tr>
      <td>Caching Defaults</td>
      <td>Set global parameters for tile caching behavior.</td>
    </tr>
    <tr>
      <td>Gridsets</td>
      <td>Manage coordinate grid systems used for tile caching.</td>
    </tr>
    <tr>
      <td>Disk Quota</td>
      <td>Configure storage limits and cache size reduction strategies.</td>
    </tr>
    <tr>
      <td>BlobStores</td>
      <td>Administer tile cache storage backends.</td>
    </tr>
  </tbody>
</table>

<br>

### Security

Control authentication, authorization, and security policies across GeoServer.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Settings</td>
      <td>Manage high-level security system options.</td>
    </tr>
    <tr>
      <td>Authentication</td>
      <td>Configure authentication filters and providers.</td>
    </tr>
    <tr>
      <td>Passwords</td>
      <td>Define password policies for user accounts.</td>
    </tr>
    <tr>
      <td>Users, Groups, Roles</td>
      <td>Manage user accounts, group memberships, and roles.</td>
    </tr>
    <tr>
      <td>Data</td>
      <td>Set data-level access restrictions by workspace or layer.</td>
    </tr>
    <tr>
      <td>URL Checks</td>
      <td>Configure allowed external server URLs.</td>
    </tr>
    <tr>
      <td>Services</td>
      <td>Control access to services and operations.</td>
    </tr>
    <tr>
      <td>WPS Security</td>
      <td>Set security for the processing service.</td>
    </tr>
  </tbody>
</table>

<br>

### Monitor

Keep track of server activity and health with monitoring tools.

<table class="my-table-style">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Activity</td>
      <td>Review recent server events and actions.</td>
    </tr>
    <tr>
      <td>Reports</td>
      <td>Access monitoring reports and analytics.</td>
    </tr>
  </tbody>
</table>

<br>

### Demos

This section provides convenient access to sample requests for WMS, WCS, and WFS services, allowing you to explore and test GeoServer’s capabilities firsthand. It also includes a comprehensive list of all Spatial Reference Systems (SRS) recognized by GeoServer.

Additionally, you’ll find a reprojection console to easily convert coordinates between different spatial reference systems, along with an interactive request builder designed specifically for creating and testing WCS requests.

<br>

### Tools

Access additional administrative tools to assist with GeoServer management.

<br>

---

**Next up:** Learn how to manage users, assign roles, and configure permissions to control access effectively across your GeoServer platform.

<br>
