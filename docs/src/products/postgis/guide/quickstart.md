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

# Quickstart: 5-Minute Tutorial

This short tutorial shows you how to access your hosted PostGIS database, create your first spatial table, connect it to QGIS, and start editing features, all in just a few steps.

<br>

## Step 1: Access Your Database

pgAdmin is the web interface included with every hosted PostGIS instance. It lets you explore your database, create spatial tables, and run SQL queries.

1. From the **GSH Dashboard**, open your instance’s <span class="ui-page-label">Product Details</span> page.

2. Under **pgAdmin**, click <span class="ui-generic-label">Get Password</span> to copy your login credentials.

    - *Username:* Your account email address.
    - *Password:* Copied from page.

    <br>

3. Click the <span class="ui-generic-label">pgAdmin</span> link to open the interface.

4. Paste your credentials and click <span class="ui-generic-label">Login</span>.

5. After logging in, you’ll see the Object Explorer tree in the left-hand panel.

6. Expand <span class="ui-filename">Geospatialhosting Databases → your-server → Databases</span>.

7. Select <span class="ui-filename">kartoza_postgis</span>.

<br>

This is your preconfigured database for adding tables, geometry fields, and managing spatial data.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-11.png" alt="pgAdmin tree" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 2: Create Your Spatial Table

Now you’ll create a simple table called *places* and define its geometry and SRID.

1. In pgAdmin, navigate to <span class="ui-filename">kartoza_postgis → Schemas → public → Tables</span>.

2. Right-click <span class="ui-filename">Tables</span>, and select <span class="ui-generic-label">Create → Table</span>.

3. On the **General** tab fill in the following:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>places</td>
        </tr>
        <tr>
          <td>Owner</td>
          <td>kartoza_postgis</td>
        </tr>
        <tr>
          <td>Schema</td>
          <td>public</td>
        </tr>
        <tr>
          <td>Tablespace</td>
          <td>pg_default</td>
        </tr>
      </tbody>
    </table>

    <br>

4. Open the **Columns** tab and add:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Name</th>
          <th>Data Type</th>
          <th>Length</th>
          <th>Not Null?</th>
          <th>Primary Key?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td>integer</td>
          <td>—</td>
          <td>x</td>
          <td>x</td>
        </tr>
        <tr>
          <td>name</td>
          <td>character</td>
          <td>256</td>
          <td>x</td>
          <td></td>
        </tr>
        <tr>
          <td>geometry</td>
          <td>geometry</td>
          <td>—</td>
          <td>x</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <br>

5. Click <span class="ui-generic-label">Save</span>.

6. Click the <span class="ui-generic-label">Query Tool</span> from the top toolbar.

7. Run the following command into the **SQL Editor**:

    <br>

    ```sql
    ALTER TABLE places
    ALTER COLUMN geometry TYPE geometry(Point, 4326)
    USING ST_SetSRID(geometry, 4326);
    ```

    <br>

You’ve now created a spatial table in your database that can store point-based geographic features.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-12.png" alt="Create Table" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 3: Connect to QGIS

Once your spatial tables are created in pgAdmin, you can connect your hosted PostGIS database to QGIS.

1. In **QGIS**, click the <span class="ui-generic-label">Open Data Source Manager</span>.

2. Select <span class="ui-page-label">PostgreSQL</span> and click <span class="ui-generic-label">New</span>.

3. Fill in the connection details:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>my-postgis</td>
        </tr>
        <tr>
          <td>Host</td>
          <td>your-product-name.sta.geospatialhosting.com</td>
        </tr>
        <tr>
          <td>Port</td>
          <td>5432</td>
        </tr>
        <tr>
          <td>Database</td>
          <td>kartoza_postgis</td>
        </tr>
        <tr>
          <td>SSL Mode</td>
          <td>Require</td>
        </tr>
      </tbody>
    </table>

    <br>

4. Under **Authentication**, click the <span class="ui-generic-label">+</span> button and fill in the following:

    <br>

    <table class="my-table-style">
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>my-postgis</td>
        </tr>
        <tr>
          <td>Username</td>
          <td>kartoza_postgis</td>
        </tr>
        <tr>
          <td>Password</td>
          <td>Copy from the Product Details page</td>
        </tr>
      </tbody>
    </table>

    <br>

5. Click <span class="ui-generic-label">Test Connection</span> and <span class="ui-generic-label">OK</span>.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-13.png" alt="New Connection" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 4: Load Your Layer in QGIS

Now that your connection is configured, you can add spatial layers from your PostGIS database into QGIS.

1. In the PostgreSQL panel, select your <span class="ui-filename">my-postgis</span> connection.

2. Click <span class="ui-generic-label">Connect</span>.

3. Expand the <span class="ui-filename">public</span> schema.

4. Select the <span class="ui-filename">places</span> layer and click <span class="ui-generic-label">Add</span>.

<br>

Your PostGIS layer now appears in the QGIS Layers Panel and can be styled, queried, or edited like any other layer.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-14.png" alt="Load Layer" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 5: Add Your First Feature

You can now start adding and editing features directly from your map.

1. Select the <span class="ui-filename">places</span> layer.

2. Click the <span class="ui-generic-label">Toggle Editing</span> button (pencil icon).

3. Click the <span class="ui-generic-label">Add Point Feature</span> tool (map marker icon).

4. Click anywhere on the map to place a point.

5. Fill in the **Attribute Form** and click <span class="ui-generic-label">OK</span>.

6. Click <span class="ui-generic-label">Toggle Editing</span> again and <span class="ui-generic-label">Save</span>.

<br>

Your new point is now safely stored in your hosted PostGIS database.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-15.png" alt="Attribute Form" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

## Step 6: Verify Your Data

You can now confirm that your new features have been successfully added to your database.

1. Return to **pgAdmin**.

2. Expand <span class="ui-filename">kartoza_postgis → Schemas → public → Tables → places</span>.

3. Right-click <span class="ui-filename">places</span> and select <span class="ui-generic-label">View/Edit Data → All Rows</span>.

<br>

You’ll see the features you added from QGIS.

<br>

<div style="text-align: center;">
  <img src="../../img/postgis-img-16.png" alt="Update Table" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://www.pgadmin.org/" target="_blank">pgAdmin</a>
  </div>
</div>

<br>

---

**Next up:** Discover how to navigate and use the pgAdmin interface to enhance your user experience.

<br>
