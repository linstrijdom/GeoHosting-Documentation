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

# Uploading to the File Browser

Before your data can be used within the GeoServer Web Administration Interface, it must first be uploaded to the File Browser. The File Browser acts as your primary file management tool within the GeoServer Hosted environment, enabling you to organize and manage datasets that GeoServer will access and serve.

<br>

## Step 1: Access File Browser

To begin uploading your data, you first need to log in to the File Browser using your credentials provided in the GSH Dashboard.

1. From the GSH Dashboard, go to the <span class="ui-page-label">Service Details</span> page.

2. Under Product Information, locate **Filebrowser** and click <span class="ui-generic-label">Get Password</span> to copy your login credentials to the clipboard.

3. Click the <span class="ui-generic-label">Filebrowser</span> link and paste the copied credentials.

4. Click <span class="ui-generic-label">Login</span> to access your File Browser workspace.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-24.png" alt="Filebrowser" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Step 2: Upload Data

Now that you’re logged into the File Browser, the next step is to upload your spatial data so it can be accessed and managed by GeoServer.

1. From the <span class="ui-page-label">Home</span> folder, double-click the <span class="ui-filename">geoserver_user_data</span> folder to open it.

2. Click the <span class="ui-generic-label">Upload</span> button located at the top-right corner of the screen.

3. When prompted, choose <span class="ui-generic-label">Folder</span> as the upload type.

4. Select the <span class="ui-filename">Manual_Data_GeoServer</span> folder and click <span class="ui-generic-label">Upload</span>.

<br>

Once uploaded, your data will be immediately available within the GeoServer Web Administration Interface for publishing and further configuration.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-25.png" alt="Upload Data" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to create Workspaces to organize and group related layers within GeoServer.

<br>
