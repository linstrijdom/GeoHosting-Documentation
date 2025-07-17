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

# GeoServer Guide

## Creating Your Instance

> **Note:** For installation instructions, refer to [GeoServer Installation Guide](https://docs.geoserver.org/latest/en/user/installation/index.html#installation).

### Using the Kartoza GeoSpatialHosting Dashboard

After your service has finished setting up, you will be redirected to the Hosted Services page of the GeoSpatial Hosting Dashboard. Here, you can view all your purchased services.

<br>

<div style="text-align: center;">
  <img src="../img/geoserver-img-4.png" alt="GeoSpatialHosting Dashboard" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geohosting.sta.do.kartoza.com/" target="_blank">Kartoza GeoSpatialHosting</a>
  </div>
</div>

<br>

**To access your login credentials:**

1. Click the Get Credentials button under your hosted service.
2. Your credentials will be copied to your clipboard.
   > **Hint:** Paste and save your credentials in a secure location.
3. Click the application name you selected for your GeoServer instance to open it.

<br>

<div style="text-align: center;">
  <img src="../img/geoserver-img-5.png" alt="Hosted Services" width=auto>
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geohosting.sta.do.kartoza.com/" target="_blank">Kartoza GeoSpatialHosting</a>
  </div>
</div>

<br>

## First Log In & Setting Your Password

### Logging In

To modify server settings or configure spatial data in GeoServer, you must first log in using the administrator credentials.

1. Navigate to the top-right corner of the web interface.
2. Click the **Login** button.
3. Enter the credentials you generated earlier from the GeoSpatialHosting Dashboard:
   - **Username:** `admin`
   - **Password:** `GeoServer_Admin_Password`

<br>

<div style="text-align: center;">
  <img src="../img/geoserver-img-7.png" alt="Login" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

> **Hint:** Need help finding your credentials? See the section: [Using the Kartoza GeoSpatialHosting Dashboard](https://kartoza.github.io/GeoHosting/products/geoserver/guide/#using-the-kartoza-geospatialhosting-dashboard)
> **Note:** You can change login details later under the [Security](https://docs.geoserver.org/latest/en/user/security/index.html#security) section of the GeoServer documentation.

Once logged in, the Welcome screen expands to show administrative functions — primarily accessible through the navigation menu on the left.

<br>

<div style="text-align: center;">
  <img src="../img/geoserver-img-8.png" alt="Additional options when logged in" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Quickstart: 5-Minute Tutorial

### Publishing a Layer

This tutorial guides you through the steps to publish a layer using GeoServer.

> **Note:** This tutorial assumes GeoServer is running at `http://<application_name>.sta.do.kartoza.com/geoserver`.

<br>

#### Data Preparation

Before publishing data in GeoServer, we need to gather and prepare a few shapefiles. In this tutorial, we’ll use four small-scale 1:110m datasets from [Natural Earth](https://www.naturalearthdata.com/).

<br>

1. **Download Datasets**

     Click the links below to download the .zip archives containing the shapefiles:

     - [Coastlines](https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/110m/physical/ne_110m_coastline.zip)
     - [Countries](https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/110m/cultural/ne_110m_admin_0_countries.zip)

     <!-- - [Boundary lines](https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/110m/cultural/ne_110m_admin_0_boundary_lines_land.zip)
      - [Populated places](https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/110m/cultural/ne_110m_populated_places_simple.zip)-->

     <br>

2. **Organize Files**

     After downloading, unzip each file and move the extracted files into a single folder called: `NaturalEarth`

     <br>

     > **Hint:** Keep your folder structure tidy — it’ll help later when uploading or referencing your data in GeoServer.

     <br>

---

#### Adding data to your File Browser

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
       <img src="../img/geoserver-img-12.png" alt="File Browser Login" width=auto>
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
       <img src="../img/geoserver-img-13.png" alt="File Browser Upload" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

5. Locate and upload the `NaturalEarth` folder you previously prepared.

The data will now be accessible in the Web Administration Interface.

---

#### Creating a New Workspace

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
       <img src="../img/geoserver-img-14.png" alt="Workspace" width=auto>
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
       <img src="../img/geoserver-img-15.png" alt="Save" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

7. The `tutorial` workspace should now appear in the **Workspaces** list.

     <br>

     <div style="text-align: center;">
       <img src="../img/geoserver-img-16.png" alt="Update Workspace list" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

<br>

> **Note:** For more information, see the full [Workspaces](https://docs.geoserver.org/latest/en/user/data/webadmin/workspaces.html#data-webadmin-workspaces) documentation.

---

#### Creating a Store

Once the workspace is set up, the next step is to add a new store. A store tells GeoServer how to connect to the data.

<br>

1. Navigate to **Data → Stores**.

     <br>

     <div style="text-align: center;">
       <img src="../img/geoserver-img-17.png" alt="Store" width=auto>
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
       <img src="../img/geoserver-img-18.png" alt="Vector Data Sources" width=auto>
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
       <img src="../img/geoserver-img-19.png" alt="New Vector Data Source" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

6. Press **Save**. You will be redirected to the **New Layer** page.

<br>

> **Note:** For more information, see the full [Stores](https://docs.geoserver.org/latest/en/user/data/webadmin/stores.html#data-webadmin-stores) documentation.

---

#### Creating a Layer

Now that we've connected to the store, we can proceed to publish a layer.

<br>

1. In the New Layer page, click Publish next to the `ne_110_coastline` layer name.

     <br>

     <div style="text-align: center;">
       <img src="../img/geoserver-img-20.png" alt="New Layer Page" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

2. The Edit Layer page defines the data and publishing parameters for the layer.

     <br>

     <div style="text-align: center;">
       <img src="../img/geoserver-img-21.png" alt="Edit Layer Page" width=auto>
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
       <img src="../img/geoserver-img-22.png" alt="Basic Resource Info Section" width=auto>
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
       <img src="../img/geoserver-img-23.png" alt="Coordinate Reference System Section" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

6. In the Bounding Boxes section, click **Compute from data**, then **Compute from native bounds** to auto-fill the bounding box fields.

     <br>

     <div style="text-align: center;">
       <img src="../img/geoserver-img-24.png" alt="Bounding Boxes Section" width=auto>
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
       <img src="../img/geoserver-img-25.png" alt="WMS Settings" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

     <br>

10. Click **Save** to finalize the layer configuration and publish the layer.

     <br>

     <div style="text-align: center;">
       <img src="../img/geoserver-img-26.png" alt="Published Layer" width=auto>
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
       <img src="../img/geoserver-img-27.png" alt="Layer Preview" width=auto>
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
       <img src="../img/geoserver-img-28.png" alt="OpenLayers Map" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

<br>

> **Note:** For more information, see the full [Layer Preview](https://docs.geoserver.org/latest/en/user/data/webadmin/layerpreview.html#layerpreview) documentation.

---

#### Try it Yourself

Now that you've published a layer, try doing the same with the `Countries` layer.

You've already added it to your File Browser and created the `tutorial` workspace, so you can skip those steps. All that's left is to:

1. Set up a new data store for the `Countries` Shapefile.
2. Publish the `Countries` layer.
3. Preview your published layer

---

### Publishing a Layer Group

> **Note:** This tutorial assumes GeoServer is accessible at `http://<application_name>.sta.do.kartoza.com/geoserver.`

<br>

#### Data preparation

Before we can publish a layer group, we need to ensure the required data is available.

<br>

Complete the following previous tutorials to prepare the necessary layers:

1. [Publishing a Layer](https://kartoza.github.io/GeoHosting/products/geoserver/guide/#publishing-a-layer) — defines the `tutorial:Coastline` layer.

2. [Publishing an Image](https://kartoza.github.io/GeoHosting/products/geoserver/guide/#publishing-an-image) — defines the `tutorial_image:shaded` layer.

---

#### Creating a layer group

Now that we have the necessary layers published, we can group them together into a single map view using a layer group.

<br>

1. Navigate to the **Data → Layer Groups** page.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-43.png" alt="Layer Groups" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

2. This page displays a list of existing layer groups along with the workspace each belongs to.

      > **Note:** Layer groups can be *global*, allowing you to combine layers from multiple workspaces into one visual representation.

      <br>

3. At the top of the Layer Groups list, click Add new layer group to open the Layer Group editor.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-44.png" alt="Layer Group editor" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

4. The Layer Group editor includes the following sections:

      - **Basic Resource Info** – defines how the layer group is presented externally
      - **Coordinate Reference System** – determines how the data is geospatially projected
      - **Bounding Boxes** – indicates the spatial extent of the group
      - **Layers** – lists the individual layers included, in the order they are drawn

      <br>

5. In the Basic Resource Info section, enter the following:

      | Field       | Value                                                          |
      |-------------|----------------------------------------------------------------|
      | Name        | `basemap`                                                      |
      | Title       | `Basemap`                                                      |
      | Abstract    | `Plain basemap suitable as a backdrop for geospatial data.`    |
      | Workspace   | `tutorial`                                                     |

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-45.png" alt="Basic Resource Info section" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

6. Scroll down to the Layers list, which will initially be empty.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-46.png" alt="Layers list" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

7. Click Add Layer, and select the `tutorial_image:shaded` layer first. The raster should be drawn first, as other content will be shown over top of it.

      <br>

8. Click Add Layer again, and select the `tutorial:Coastline` layer. This polygon layer will be rendered on top of the shaded relief.

      <br>

9. In the layer list, find the `tutorial:Coastline` entry, and click on its *Style* field. Make sure its set to `line`. This ensures only the outlines are drawn, allowing the shaded relief underneath to remain visible.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-47.png" alt="Layer group layers in drawing order" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

10. Scroll to Coordinate Reference System, and click Generate Bounds. Now that the layers are listed, GeoServer can determine the spatial extent and reference system automatically.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-48.png" alt="Coordinate Reference Systems" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

11. Click **Save** to finish creating your layer group.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-49.png" alt="New Layer Group" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

<br>

> **Note:** For more information, see the full [Layer Groups](https://docs.geoserver.org/latest/en/user/data/webadmin/layergroups.html#data-webadmin-layergroups) documentation.

---

### Publishing a style

This tutorial walks through the steps of defining a style and associating it with a layer for use.

> **Note:** This tutorial assumes GeoServer is accessible at `http://<application_name>.sta.do.kartoza.com/geoserver`.

<br>

#### Data Preparation For Style

Before we can create a style, we need to ensure the required data is available.

<br>

Complete the following previous section to prepare the necessary layer:

- [Publishing a Layer: Try it Yourself](https://kartoza.github.io/GeoHosting/products/geoserver/guide/#try-it-yourself) — defines the `tutorial:Countries` layer.

---

#### Creating a style

1. Navigate to **Data → Style** page.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-50.png" alt="Styles" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

2. This page lists existing styles, along with their associated workspaces.

      > **Note:** Styles can be *global*, which means they can be defined once and applied to layers across different workspaces.

      <br>

3. At the top of the Styles list, click the Add a new style link.

      <br>

4. Under Style Data, complete the form with the following details:

      | Field      | Value          |
      |------------|----------------|
      | Name       | `background`   |
      | Workspace  | `tutorial`     |
      | Format     | `SLD`          |

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-51.png" alt="Style Data" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

5. Next, locate Style Content and under Generate a default style, select `Polygon`.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-52.png" alt="Style Content" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

6. Click the Generate link to automatically populate the style editor with a basic polygon style outline.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-53.png" alt="Generate" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

7. Press Apply to save and define this style. Once saved, additional interactive editing options will become available.

      <br>

8. Scroll to the top and go to the Publishing tab.

      <br>

9. Use the search field to filter by `tutorial` and locate the `tutorial:countries` layer.

      <br>

10. Check the **Default** checkbox next to `tutorial:countries` to set the `tutorial:background` style as the default for this layer.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-54.png" alt="Default Style" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

11. Go to the Layer Preview tab. Under Preview on layer, click the link for `tutorial:countries` to use this dataset while editing the style.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-55.png" alt="Layer Preview" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

12. Edit your style by inserting a `fill-opacity` value of `0.25` to make the fill semi-transparent.

      ```xml
      <?xml version="1.0" encoding="ISO-8859-1"?>
      <StyledLayerDescriptor version="1.0.0"
        xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
        xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
        xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

        <NamedLayer>
          <Name>background</Name>
          <UserStyle>
            <Title>Background</Title>
            <FeatureTypeStyle>
              <Rule>
                <Title>Background</Title>
                <PolygonSymbolizer>
                  <Fill>
                    <CssParameter name="fill">#444433</CssParameter>
                    <CssParameter name="fill-opacity">0.25</CssParameter>
                  </Fill>
                  <Stroke>
                    <CssParameter name="stroke">#000000</CssParameter>
                    <CssParameter name="stroke-width">0.25</CssParameter>
                  </Stroke>
                </PolygonSymbolizer>
              </Rule>
            </FeatureTypeStyle>
          </UserStyle>
        </NamedLayer>
      </StyledLayerDescriptor>
      ```

      <br>

13. Press **Apply** to update the style and observe the visual change in the layer preview.

      <br>

      <div style="text-align: center;">
       <img src="../img/geoserver-img-56.png" alt="Changed Layer Preview" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

You have now succesfully defined a style and associating it with a layer.

> **Note:** For more information, see the full [Styles](https://docs.geoserver.org/latest/en/user/styling/webadmin/index.html#styling-webadmin) documentation.

---

## Navigating the Dashboard

### Hosted Services Page

After your service has finished setting up, you will be redirected to the Hosted Services page of the GeoSpatial Hosting Dashboard. Here, you can view all your purchased services.

<br>

<div style="text-align: center;">
  <img src="../img/geoserver-img-4.png" alt="GeoSpatialHosting Dashboard" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geohosting.sta.do.kartoza.com/" target="_blank">Kartoza GeoSpatialHosting</a>
  </div>
</div>

<br>

### Accessing Your Credentials

**To access your login credentials:**

1. Click the **Get Credentials** button under your hosted service.
2. Your credentials will be copied to your clipboard.
   > **Hint:** Paste and save your credentials in a secure location.
3. Click the application name you selected for your GeoServer instance to open it.

<br>

<div style="text-align: center;">
  <img src="../img/geoserver-img-5.png" alt="Hosted Services" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geohosting.sta.do.kartoza.com/" target="_blank">Kartoza GeoSpatialHosting</a>
  </div>
</div>

<br>

### Deleting a Hosted Service

**To delete a hosted service:**

1. Click the 3 dots in the corner of the hosted service pane.
2. From the dropdown menu, select **Delete**.

<br>

<div style="text-align: center;">
  <img src="../img/geoserver-img-5.png" alt="Delete Hosted Service" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geohosting.sta.do.kartoza.com/" target="_blank">Kartoza GeoSpatialHosting</a>
  </div>
</div>

<br>

> **⚠️ IMPORTANT**
> Deleting a hosted service is **permanent**. All associated data will be irreversibly removed with **no option for recovery**.

## Managing Users & Permissions

## Integrating With Other Tools

GeoServer’s OGC services (WMS, WFS, WCS) can be consumed by desktop GIS clients, web mapping libraries, and other applications. Below are two common examples.

### Consuming GeoServer WMS in QGIS

1. **Open QGIS** and go to **Layer → Add Layer → Add WMS/WMTS Layer…**
2. Click **New**, then enter:
   - **Name:** `GeoServer WMS`
   - **URL:**

     ```bash
     http://<application_name>.sta.do.kartoza.com/geoserver/ows?service=WMS&version=1.3.0&request=GetCapabilities
     ```

3. Click **OK**, then **Connect**.
4. From the list, select `tutorial:Coastline` (and any others), then click **Add**.
5. Your GeoServer layer will appear in the QGIS map canvas.

<div style="text-align: center;">
  <img src="../img/geoserver-img-61.png" alt="QGIS Add WMS Layer" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: User’s GeoServer instance
  </div>
</div>

### Embedding GeoServer WMS in a Leaflet Map

1. Include Leaflet’s CSS and JS in your HTML `<head>`:

   ```html
   <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
   <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
   ```

2. In your `<body>`, add a `<div id="map" style="height: 400px;"></div>`

3. Initialize the map and add the WMS layer:

   ```html
   <script>
     const map = L.map('map').setView([0, 0], 2);
     L.tileLayer.wms('http://<application_name>.sta.do.kartoza.com/geoserver/ows', {
       layers: 'tutorial:Coastline',
       format: 'image/png',
       transparent: true,
       attribution: '© GeoServer'
     }).addTo(map);
   </script>
   ```

4. Open your HTML file in a browser to see the GeoServer layer displayed via Leaflet.

      ```html
      <div style="text-align: center;">
      <img src="../img/geoserver-img-62.png" alt="Leaflet WMS Example" width="auto">
      <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
      Image credit: User’s web application
      </div>
      </div>
      ```

## Glossary of Terms

- **Workspace**
  A container in GeoServer used to group related stores and layers. Often named for a project.

- **Store**
  Defines how GeoServer connects to your data (shapefiles, PostGIS, GeoTIFF, etc.).

- **Layer**
  A published dataset in GeoServer, exposed via OGC services (WMS/WFS/WCS).

- **Layer Group**
  A set of layers combined into a single map view, with a defined drawing order and styles.

- **Style**
  An SLD or CSS file that defines how features are rendered (colors, symbols, opacity).

- **SRS / CRS**
  Spatial Reference System (Coordinate Reference System) that defines how coordinates map to locations on Earth (e.g., EPSG:4326).

- **WMS (Web Map Service)**
  An OGC service for rendering map images from layers.

- **WFS (Web Feature Service)**
  An OGC service for retrieving vector features (e.g., GeoJSON, GML).

- **WCS (Web Coverage Service)**
  An OGC service for retrieving raster data as coverages.

- **GetCapabilities**
  A request that returns an XML document describing available services, layers, and operations.

- **GetMap**
  A WMS request that returns a map image for specified layers, bounding box, and format.

> **Note:** For installation instructions, refer to [GeoServer Installation Guide](https://docs.geoserver.org/latest/en/user/installation/index.html#installation).

For more information you can visit [Geoserver Official Docs](https://docs.geoserver.org/latest/en/user/)
