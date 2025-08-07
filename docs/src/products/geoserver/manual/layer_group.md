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

# Publishing a Layer Group

Before we can publish a layer group, we need to ensure the required data is available.

<br>

Complete the following previous tutorials to prepare the necessary layers:

1. [Publishing a Layer](https://kartoza.github.io/GeoHosting/products/geoserver/guide/#publishing-a-layer) — defines the `tutorial:Coastline` layer.

2. [Publishing an Image](https://kartoza.github.io/GeoHosting/products/geoserver/guide/#publishing-an-image) — defines the `tutorial_image:shaded` layer.

---

## Creating a layer group

Now that we have the necessary layers published, we can group them together into a single map view using a layer group.

<br>

1. Navigate to the **Data → Layer Groups** page.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-43.png" alt="Layer Groups" width=auto>
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
       <img src="../../img/geoserver-img-44.png" alt="Layer Group editor" width=auto>
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
       <img src="../../img/geoserver-img-45.png" alt="Basic Resource Info section" width=auto>
       <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
       Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
       </div>
     </div>

      <br>

6. Scroll down to the Layers list, which will initially be empty.

      <br>

      <div style="text-align: center;">
       <img src="../../img/geoserver-img-46.png" alt="Layers list" width=auto>
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

      [Add Image]

      <br>

10. Scroll to Coordinate Reference System, and click Generate Bounds. Now that the layers are listed, GeoServer can determine the spatial extent and reference system automatically.

      <br>

      [Add Image]

      <br>

11. Click **Save** to finish creating your layer group.

      <br>

      [Add Image]

<br>
