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

# Data & Preparation

## Publishing a Layer

This tutorial guides you through the steps to publish a layer using GeoServer.

> **Note:** This tutorial assumes GeoServer is running at `http://<application_name>.sta.do.kartoza.com/geoserver`.

<br>

## Data Preparation

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
