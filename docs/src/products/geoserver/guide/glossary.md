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

# Glossary of Terms

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
