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

# Publishing an Image

This tutorial outlines the process of publishing a World File and its accompanying image using GeoServer.

> **Note:** This tutorial assumes GeoServer is accessible at `http://<application_name>.sta.do.kartoza.com/geoserver`.

<br>

## Data Preparation

Begin by gathering the data we'll publish. For this tutorial, we’ll use the [Natural Earth](https://www.naturalearthdata.com/) 1:50m Shaded Relief raster.

<br>

1. **Download Datasets**

Click the link below to download the .zip archive containing the raster files:

- [Natural Earth Data - 50m Shaded Relief](https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/50m/raster/SR_50M.zip)

<br>

The download includes small-scale 1:50m raster data consisting of:

- `SR_50M.prj`
- `SR_50M.README.html`
- `SR_50M.tfw`
- `SR_50M.tif`
- `SR_50M.VERSION.txt`

<br>

> **Note:** These files together represent a world file (`.tfw`) and its associated image (`.tif`).

<br>

2. **Organize Files**

      After downloading, unzip the file and move the extracted files into a new folder called: `NaturalEarth_Raster`

      <br>

3. **Add Files to File Browser**

      Upload the `NaturalEarth_Raster` folder into the `geoserver_user_data` folder within the File Browser.

      <br>

      > **Hint:** Not sure how to add files to your File Browser? See the section: [Adding data to your File Browser](https://kartoza.github.io/GeoHosting/products/geoserver/guide/#adding-data-to-your-file-browser)

---

### Creating a New Workspace

The next step is to create a workspace for your layers. A workspace is essentially a container used to organize and group related layers within GeoServer.

> **Note:** This step is optional if you prefer to use an existing workspace. Typically, a new workspace is created for each project, allowing you to group related stores and layers together.

<br>

1. Open a web browser and navigate to:

      http://<application_name>.sta.do.kartoza.com/geoserver

      <br>

2. Log in to GeoServer using your credentials.

      <br>

3. In the left-hand menu, go to **Data → Workspaces**.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-29.png" alt="Workspaces" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

4. Click the Add new workspace button to open the New Workspace page.

      <br>

5. Complete the form with the following details:

      | Field             | Value                                                                   |
      |-------------------|-------------------------------------------------------------------------|
      | Name              | `tutorial_image`                                                        |
      | Namespace URI     | `http://<application_name>.sta.do.kartoza.com/geoserver/tutorial_image` |

      <br>

      > **Note:** The Namespace URI can be any URL-like string tied to your project. It typically includes a trailing identifier that reflects the workspace. This URI does not need to resolve to a real web address.

      <br>

6. Click the **Save** button.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-30.png" alt="New Workspaces Page" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

7. The `tutorial_image` workspace will now appear in the Workspaces list.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-31.png" alt="New Workspaces List" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

<br>

> **Note:** For more information, see the full [Workspaces](https://docs.geoserver.org/latest/en/user/data/webadmin/workspaces.html#data-webadmin-workspaces) documentation.

---

### Creating a Store

Once the workspace is set up, the next step is to add a new store. A store tells GeoServer how to connect to the data.

<br>

1. Go to **Data → Stores**.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-32.png" alt="Stores Page" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

2. To add the image, click the **Add new Store** button. This will take you to a list of data sources supported by GeoServer.

      > **Note:** Your list may vary depending on installed extensions.

      <br>

3. From the **Raster Data Sources**, click the **WorldImage** option.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-33.png" alt="Raster Data Sources" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

4. Fill in the Basic Store Info section:

      | Field              | Value                                      |
      |--------------------|--------------------------------------------|
      | Workspace          | tutorial_image                             |
      | Data Source Name   | ShadedRelief                               |
      | Description        | Grayscale shaded relief of land areas.     |

      <br>

      > **Note:** This information is used internally in GeoServer. Keep the name simple, as it will form part of folder names in the data directory and should comply with your operating system’s character restrictions.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-34.png" alt="Basic Store Info Section" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

5. Under **URL**, specify the location of your image:

      file:///files/geoserver_user_data/NaturalEarth_Raster/SR_50M/SR_50M.tif

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-35.png" alt="Connection Parameters" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

6. Press **Save**. You will be redirected to the **New Layer** page to begin publishing your image as a layer.

<br>

> **Note:** For more information, see the full [Stores](https://docs.geoserver.org/latest/en/user/data/webadmin/stores.html#data-webadmin-stores) documentation.

---

### Creating a Layer

With the image store created, the next step is to publish it as a layer.

<br>

1. In the New Layer page, click Publish next to the `SR_50M` layer name.

      <br>

      [Add Image]

      <br>

2. The Edit Layer page will open, allowing you to define both data and publishing parameters.

      <br>

      [Add Image]

      <br>

3. Three key sections on the Data tab must be completed before saving:

      - **Basic Resource Info** - Describes how the layer appears to users.
      - **Coordinate Reference System (CRS)** - Defines how spatial data aligns with the Earth.
      - **Bounding Boxes** - Determines the spatial extent of the data.

      <br>

4. In the Basic Resource Info section, enter the following:

      | Field    | Value                                  |
      |----------|----------------------------------------|
      | Name     | shaded                                 |
      | Title    | Shaded Relief                          |
      | Abstract | Grayscale shaded relief of land areas. |

      <br>

      > **Note:** While GeoServer allows flexible naming, many external protocols require simple, standard layer names.

      <br>

      [Add Image]

      <br>

5. Verify that the Coordinate Reference System (CRS) information is accurate:

| Field            | Value             |
|------------------|-------------------|
| Native SRS       | EPSG:4326         |
| Declaired SRS    | EPSG:4326         |
| SRS Handling     | Force declared    |

<br>

[Add Image]

<br>

6. In the Bounding Boxes section, click **Compute from data**, then **Compute from native bounds** to auto-fill the bounding box fields.

      <br>

      [Add Image]

      <br>

7. Click Apply to save your progress without closing the page.

      > **Note:** This is useful to confirm that all required fields are correctly filled; GeoServer will show a warning if anything is missing.

      <br>

8. Scroll to the top and go to the Publishing tab.

      <br>

9. Under WMS Settings, set the Default Style to `raster`.

      <br>

      [Add Image]

      <br>

10. Click **Save** to finalize the layer configuration and publish the layer.

      <br>

      [Add Image]

<br>
