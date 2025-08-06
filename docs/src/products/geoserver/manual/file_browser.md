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

In order for the data to be accessible in the Web Administration Interface, it first needs to be added to your File Browser.

<br>

**To add data:**

1. Open the file browser at:

     ```bash
     http://<application_name>.sta.do.kartoza.com/file
     ```

     <br>

2. Log in using the credentials you retrieved from the GeoSpatialHosting Dashboard:

     - **Username:** `admin`
     - **Password:** `FB_Password_Unhashed`

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-12.png" alt="File Browser Login" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

      > **Hint:** Need help finding your credentials? See the section: [Using the Kartoza GeoSpatialHosting Dashboard](https://kartoza.github.io/GeoHosting/products/geoserver/guide/#using-the-kartoza-geospatialhosting-dashboard)

      <br>

3. Double-click the `geoserver_user_data` folder to enter it.

      <br>

4. Click the **Upload** button at the top-right of the screen. When prompted, select Folder.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-13.png" alt="File Browser Upload" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

5. Locate and upload the `NaturalEarth` folder you previously prepared.

The data will now be accessible in the Web Administration Interface.
