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

# Quickstart: 5-Minute Tutorial

This tutorial guides you through the steps to publish a layer using GeoServer.

## Adding data to your File Browser

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

## Creating a New Workspace

The next step is to create a workspace for your layers. A workspace is essentially a container used to organize and group related layers within GeoServer.

> **Note** This step is optional if you prefer to use an existing workspace. Typically, a new workspace is created for each project, allowing you to group related stores and layers together.

<br>

1. Open a web browser and navigate to:

     ```bash
     http://<application_name>.sta.do.kartoza.com/geoserver
     ```

     <br>

2. Log in to GeoServer using your credentials.

      <br>

3. In the left-hand menu, go to **Data → Workspaces**.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-14.png" alt="Workspace" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

4. Click the **Add new workspace** button to open the **New Workspace** page.

      <br>

5. Complete the form with the following details:

     | Field             | Value                                                               |
     |-------------------|---------------------------------------------------------------------|
     | Name              | `tutorial`                                                          |
     | Namespace URI     | `http://<application_name>.sta.do.kartoza.com/geoserver/tutorial`   |

     <br>

     > **Note:** The workspace name should describe your project. It must be 10 characters or fewer and cannot contain spaces.
     The Namespace URI can be any URL-like string tied to your project. It typically includes a trailing identifier that reflects the workspace. This URI does not need to resolve to a real web address.

     <br>

6. Click the **Save** button.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-15.png" alt="Save" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

7. The `tutorial` workspace should now appear in the **Workspaces** list.

     <br>

     <div style="text-align: center;">
       <img src="../../img/geoserver-img-16.png" alt="Update Workspace list" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

<br>

## Creating a Store

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


## Creating a Layer

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

## Previewing the layer

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
