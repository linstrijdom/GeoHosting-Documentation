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

# Publishing a Layer

Now that we've connected to the store, we can proceed to publish a layer.

<br>

1. In the New Layer page, click Publish next to the `ne_110_coastline` layer name.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-20.png" alt="New Layer Page" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

2. The Edit Layer page defines the data and publishing parameters for the layer.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-21.png" alt="Edit Layer Page" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

3. Three key sections on the Data tab must be completed before saving:

     - **Basic Resource Info** – defines how the layer is presented
     - **Coordinate Reference System** – determines how spatial data is interpreted
     - **Bounding Boxes** – establishes the dataset's geographic extent

     <br>

4. In the Basic Resource Info section, enter the following:

     | Field     | Value             |
     |-----------|-------------------|
     | Name      | `Coastline`       |
     | Title     | `Coastline`       |

     <br>

     > **Note:** While GeoServer allows flexible naming, many external protocols require simple, standard layer names.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-22.png" alt="Basic Resource Info Section" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

5. Verify that the Coordinate Reference System (CRS) information is accurate:

     | Field            | Value             |
     |------------------|-------------------|
     | Native SRS       | EPSG:4326         |
     | Declaired SRS    | EPSG:4326         |
     | SRS Handling     | Force declared    |

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-23.png" alt="Coordinate Reference System Section" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

6. In the Bounding Boxes section, click **Compute from data**, then **Compute from native bounds** to auto-fill the bounding box fields.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-24.png" alt="Bounding Boxes Section" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

7. Click Apply to save your progress without closing the page.

     > **Hint:** This is useful to confirm that all required fields are correctly filled; GeoServer will show a warning if anything is missing.

     <br>

8. Scroll to the top and go to the Publishing tab.

      <br>

9. Under WMS Settings, set the Default Style to `line`.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-25.png" alt="WMS Settings" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

10. Click **Save** to finalize the layer configuration and publish the layer.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-26.png" alt="Published Layer" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

<br>

> **Note:** For more information, see the full [Layers](https://docs.geoserver.org/latest/en/user/data/webadmin/layers.html#data-webadmin-layers) documentation.

---

#### Previewing the layer

To confirm that the `tutorial:Coastline` layer has been published successfully, we can preview it in GeoServer.

<br>

1. Go to **Data → Layer Preview** and locate the `tutorial:Coastline` layer.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-27.png" alt="Layer Preview" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

      > **Note:** To filter results and make it easier to find, type `tutorial` in the search field.

      <br>

2. Click the **OpenLayers** link in the Common Formats column.

      <br>

3. An OpenLayers map will open in a new tab, displaying the shapefile data with the default line style.

      <br>

4. You can interact with the preview map by zooming, panning, and clicking on features to view their attribute data.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-28.png" alt="OpenLayers Map" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

<br>
