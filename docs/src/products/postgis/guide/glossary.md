---
title: Documentation
summary: GeoSpatialHosting Documentation
author: Lindie Strijdom
date: 2025-10-01
some_url: https://github.com/kartoza/GeoHosting-Documentation.git
copyright: Copyright 2025, Kartoza
contact:
license: This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.
---

# Glossary of Terms

Not sure what a *server*, *schema*, or *extension* means? This glossary explains key PostGIS and pgAdmin concepts to help you navigate and manage your hosted database with confidence.

<br>

<table class="my-table-style">
  <thead>
    <tr>
      <th>Term</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🖥️ Server</td>
      <td>A PostgreSQL instance that hosts one or more databases. In pgAdmin, you connect to a server to browse, manage, and query your data.</td>
    </tr>
    <tr>
      <td>🗃️ Database</td>
      <td>A collection of schemas, tables, views, and extensions. Each database stores a specific set of project or application data.</td>
    </tr>
    <tr>
      <td>📁 Schema</td>
      <td>A logical container inside a database used to organise tables, views, and functions (e.g., <code>public</code>, <code>admin</code>, <code>gis</code>).</td>
    </tr>
    <tr>
      <td>📄 Table</td>
      <td>A structured collection of rows and columns used to store data. In PostGIS, tables can contain both attribute and spatial geometry data.</td>
    </tr>
    <tr>
      <td>🧭 Geometry Column</td>
      <td>A special column in a table that stores spatial objects such as points, lines, or polygons.</td>
    </tr>
    <tr>
      <td>🧩 Extension</td>
      <td>Adds extra capabilities to a PostgreSQL database. PostGIS is an extension that enables spatial functionality.</td>
    </tr>
    <tr>
      <td>🌍 PostGIS</td>
      <td>A PostgreSQL extension that adds support for spatial data types, spatial indexes, and GIS functions.</td>
    </tr>
    <tr>
      <td>📊 View</td>
      <td>A virtual table based on the result of a SQL query. Views do not store data themselves but provide simplified or filtered access to data.</td>
    </tr>
    <tr>
      <td>🔍 Query Tool</td>
      <td>pgAdmin’s built-in SQL editor used to run queries, create tables, update data, and manage your spatial database.</td>
    </tr>
    <tr>
      <td>⚙️ Function</td>
      <td>A reusable block of logic written in SQL or PL/pgSQL. PostGIS provides many spatial functions such as <code>ST_Buffer</code> or <code>ST_Intersection</code>.</td>
    </tr>
    <tr>
      <td>📂 Backup</td>
      <td>A saved copy of a database or schema that can be restored later. Essential for disaster recovery and safe deployments.</td>
    </tr>
    <tr>
      <td>♻️ Restore</td>
      <td>The process of loading a previous backup into a PostgreSQL server, recreating schemas, tables, and data.</td>
    </tr>
    <tr>
      <td>🔐 Role</td>
      <td>A PostgreSQL user or group with assigned permissions for accessing or modifying database objects.</td>
    </tr>
    <tr>
      <td>🛡️ Privileges</td>
      <td>Permissions that control what a role can do—such as SELECT, INSERT, UPDATE, DELETE, or EXECUTE.</td>
    </tr>
    <tr>
      <td>🏷️ Primary Key</td>
      <td>A unique identifier for each row in a table. Often required for syncing, editing, and spatial indexing.</td>
    </tr>
    <tr>
      <td>🧱 Index</td>
      <td>A performance feature that speeds up searching and filtering of table data. Spatial indexes (GiST) are essential for PostGIS layers.</td>
    </tr>
    <tr>
      <td>🛰️ SRID</td>
      <td>Spatial Reference Identifier that defines the coordinate system for geometry data (e.g., EPSG:4326, EPSG:3857).</td>
    </tr>
    <tr>
      <td>🧮 Spatial Function</td>
      <td>Any PostGIS function used for geometry operations—buffering, clipping, measuring distances, intersecting, etc.</td>
    </tr>
    <tr>
      <td>📡 Connection</td>
      <td>The configuration pgAdmin uses to access your hosted PostgreSQL server, including host, port, username, and SSL details.</td>
    </tr>
  </tbody>
</table>

<br>
