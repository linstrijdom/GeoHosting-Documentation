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

# Creating a Data Store

Once the workspace is set up, the next step is to add a new store. A store tells GeoServer how to connect to the data.

<br>

1. Navigate to **Data → Stores**.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-17.png" alt="Store" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

2. To add the layer, click the **Add new Store** button. This will take you to a list of data sources supported by GeoServer.

     > **Note:** Keep in mind that this list is extensible, so yours might look slightly different.

     <br>

3. From the list of **Vector Data Sources**, find and click the **Shapefile** option.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-18.png" alt="Vector Data Sources" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

4. Fill in the following fields:

     | Field             | Value                                         |
     |-------------------|-----------------------------------------------|
     | Workspace         | `tutorial`                                    |
     | Data Source Name  | `Natural Earth - Coastlines`                   |
     | Description       | `Shapefile of Natural Earth Coastlines data`  |

     <br>

5. Under **Shapefile location**, enter the following:

     ```bash
     file:///files/geoserver_user_data/NaturalEarth/ne_110m_coastline/ne_110m_coastline.shp
     ```

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-19.png" alt="New Vector Data Source" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

6. Press **Save**. You will be redirected to the **New Layer** page.

<br>
