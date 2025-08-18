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

# GeoServer Help

## Troubleshooting Common Issues

<details class="faq-item">
  <summary>Why won’t my data upload to GeoServer?</summary>
  <div class="faq-answer">
    This can happen if the file format isn’t supported or the file is too large.  
    <br><br>
    <strong>Fix:</strong> Use supported formats like Shapefile, GeoPackage, or GeoTIFF. For Shapefiles, ensure all related files (.shp, .shx, .dbf, .prj) are zipped together.
  </div>
</details>

<details class="faq-item">
  <summary>My layer appears but it’s blank — why?</summary>
  <div class="faq-answer">
    Your data’s projection (CRS) may not match your map settings.  
    <br><br>
    <strong>Fix:</strong> Check the layer’s CRS in QGIS or another GIS tool, and set the correct SRS in GeoServer when publishing.
  </div>
</details>

<details class="faq-item">
  <summary>I get an error when trying to save a style (SLD).</summary>
  <div class="faq-answer">
    Errors often come from invalid XML or unsupported style parameters.  
    <br><br>
    <strong>Fix:</strong> Validate your SLD using an XML validator or copy a working example and modify it carefully.
  </div>
</details>

<details class="faq-item">
  <summary>Why is my raster layer loading slowly?</summary>
  <div class="faq-answer">
    Large raster files can take time to render.  
    <br><br>
    <strong>Fix:</strong> Use overviews or pyramids, and ensure the file is in an efficient format like GeoTIFF with internal tiling.
  </div>
</details>

<details class="faq-item">
  <summary>I published my layer but can’t preview it.</summary>
  <div class="faq-answer">
    The preview may fail if no style is assigned or if the layer is in a different workspace.  
    <br><br>
    <strong>Fix:</strong> Assign a default style and check the workspace and store settings.
  </div>
</details>

<details class="faq-item">
  <summary>Why do I see a “Store not found” error?</summary>
  <div class="faq-answer">
    This happens if the data store was deleted or its connection settings changed.  
    <br><br>
    <strong>Fix:</strong> Recreate the store and republish the layer with the correct settings.
  </div>
</details>

<details class="faq-item">
  <summary>The colors in my map look wrong.</summary>
  <div class="faq-answer">
    This can be caused by incorrect SLD values or mismatched color encoding.  
    <br><br>
    <strong>Fix:</strong> Double-check your SLD code and ensure the correct hex color codes are used.
  </div>
</details>

<details class="faq-item">
  <summary>Why do some features not appear on the map?</summary>
  <div class="faq-answer">
    Features outside the map extent or with geometry errors may not render.  
    <br><br>
    <strong>Fix:</strong> Repair geometries in QGIS and verify the bounding box settings in GeoServer.
  </div>
</details>

<details class="faq-item">
  <summary>I can’t delete a layer from GeoServer.</summary>
  <div class="faq-answer">
    Layers must be removed from both the Layer list and their Data Store.  
    <br><br>
    <strong>Fix:</strong> First delete the layer, then remove its store and associated files.
  </div>
</details>

<details class="faq-item">
  <summary>GeoServer says “Out of Memory” when rendering.</summary>
  <div class="faq-answer">
    Large datasets can exceed the Java heap memory allocation.  
    <br><br>
    <strong>Fix:</strong> Increase the Java heap size in the GeoServer startup settings or optimize your dataset.
  </div>
</details>

<br>

## Frequently Asked Questions (FAQ)

<details class="faq-item">
  <summary>Can I upload multiple layers at once?</summary>
  <div class="faq-answer">
    Yes. You can zip multiple Shapefiles or upload multi-layer GeoPackages, and publish them individually in GeoServer.
  </div>
</details>

<details class="faq-item">
  <summary>What file formats does GeoServer support?</summary>
  <div class="faq-answer">
    Common formats include Shapefile, GeoPackage, PostGIS, GeoTIFF, and CSV. Additional formats may be available through plugins.
  </div>
</details>

<details class="faq-item">
  <summary>Can I edit a layer directly in GeoServer?</summary>
  <div class="faq-answer">
    No. GeoServer serves data but does not allow direct editing. Edit your data in QGIS or another GIS tool, then re-upload or update the store.
  </div>
</details>

<details class="faq-item">
  <summary>How do I change the default style of a layer?</summary>
  <div class="faq-answer">
    Go to the layer’s <strong>Publishing</strong> tab, select your preferred style, and set it as default.
  </div>
</details>

<details class="faq-item">
  <summary>Can I password-protect certain layers?</summary>
  <div class="faq-answer">
    Yes. Use GeoServer’s security settings to assign roles and restrict layer access.
  </div>
</details>

<details class="faq-item">
  <summary>Does GeoServer support WMS, WFS, and WCS?</summary>
  <div class="faq-answer">
    Yes. GeoServer supports OGC standards including WMS (maps), WFS (features), and WCS (coverages).
  </div>
</details>

<details class="faq-item">
  <summary>How can I speed up layer loading?</summary>
  <div class="faq-answer">
    Use caching with GeoWebCache, simplify geometries, and optimize file formats.
  </div>
</details>

<details class="faq-item">
  <summary>Can I host my data in the cloud?</summary>
  <div class="faq-answer">
    Yes. You can connect GeoServer to cloud storage or cloud-hosted databases like AWS S3, Google Cloud Storage, or remote PostGIS.
  </div>
</details>

<details class="faq-item">
  <summary>Can I host raster data in GeoServer?</summary>
  <div class="faq-answer">
    Yes, GeoServer supports raster formats such as GeoTIFF, JPEG2000, and others.
  </div>
</details>

<details class="faq-item">
  <summary>What’s the maximum file size I can upload?</summary>
  <div class="faq-answer">
    This depends on your hosting plan and server configuration.  
    <br><br>
    <strong>Tip:</strong> If you encounter upload limits, compress your dataset (e.g., using a zipped Shapefile or GeoPackage) or contact your administrator to increase the limit.
  </div>
</details>

<br>

## Getting Support

If you run into an issue or need assistance, the best place to start is the **[Support Center](https://kartoza.github.io/GeoHosting-Documentation/users/support_center/)** page in the **Users** section.

There, you’ll find clear instructions on how to log a support ticket, including what information to provide so the team can assist you efficiently.

By using the official support system, your request will be properly tracked and routed to the right people, helping you get a faster and more accurate response.

<br>
