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

# Creating a Workspace

The next step is to create a workspace for your layers. A workspace acts as a container that helps organize and group related layers within GeoServer. While this step is optional if you prefer to use an existing workspace, it’s common practice to create a new workspace for each project. This approach keeps your data organized by grouping related stores and layers together, making management simpler and more intuitive.

<br>

## Step 1: Access Creation Page

1. Log in to the GeoServer <span class="ui-page-label">Web Administration Interface</span>.

2. In the left-hand menu, under the **Data** section, click <span class="ui-generic-label">Workspaces</span>.

3. Click <span class="ui-generic-label">Add New Workspace</span>.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-26.png" alt="Workspace Page" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 2: Create Workspace

Now it’s time to fill in the required details. The workspace name should be concise — 10 characters or fewer — and cannot contain spaces.

The Namespace URI is a URL-like string connected to your project, typically ending with an identifier that reflects the workspace name. It doesn’t have to resolve to a real web address.

<br>

1. On the <span class="ui-page-label">New Workspace</span> page, fill in the required details as follows:

     <table class="my-table-style">
     <thead>
     <tr>
          <th>Field</th>
          <th>Value</th>
     </tr>
     </thead>
     <tbody>
     <tr>
          <td>Name</td>
          <td>manual</td>
     </tr>
     <tr>
          <td>Namespace URI</td>
          <td>http://&lt;application_name&gt;.sta.do.kartoza.com/geoserver/manual</td>
     </tr>
     </tbody>
     </table>

     <br>

2. Click the <span class="ui-generic-label">Save</span> button to create the workspace.

<br>

The new <span class="ui-filename">manual</span> workspace will now be listed on the <span class="ui-page-label">Workspaces</span> page.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-27.png" alt="Create Workspace" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to create a Store — a crucial step that enables GeoServer to connect to and manage your spatial data seamlessly.

<br>
