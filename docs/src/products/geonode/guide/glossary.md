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

- **Bounding Box**  
  The minimum rectangle (min X, min Y, max X, max Y) that fully encloses a dataset’s spatial extent.

- **Dashboard**  
  A MapStore workspace that combines widgets (charts, tables, counters, maps, text) for interactive data exploration.

- **Dataset**  
  A single spatial layer (vector or raster) uploaded to GeoNode. Datasets are served via OGC services (WMS, WFS, WCS) and described by metadata.

- **Document**  
  A non-spatial file (reports, images, PDFs, spreadsheets, SLDs, etc.) stored in GeoNode and linked to projects or datasets.

- **GeoStory**  
  A MapStore storytelling tool that mixes text, multimedia, and interactive maps into a scrollable narrative.

- **Group**  
  A collection of users. Groups can be granted view/edit/manage permissions on resources.

- **Layer**  
  The renderable representation of a dataset inside GeoServer (raster or vector). In the GeoNode UI, “dataset” and “layer” are often used interchangeably.

- **Map**  
  A saved composition of one or more datasets displayed together in the Map Viewer. Maps can have their own metadata, sharing settings, and embed codes.

- **Map Viewer**  
  The interactive interface where users add layers, configure styles, and save maps.

- **OGC Services**  
  Standards used by GeoServer to publish data: **WMS** (maps), **WFS** (features), **WCS** (coverages), and **CSW** (catalog metadata).

- **Permission Levels**  
  `View`, `Download`, `Edit`, and `Manage`—define what actions users or groups can perform on a resource.

- **Resource**  
  Generic term for any item managed by GeoNode—datasets, maps, documents, dashboards, or geostories.

- **SLD (Styled Layer Descriptor)**  
  XML standard for describing layer styling; used by GeoServer and editable within GeoNode.

- **Style**  
  An SLD or CSS definition that controls how a layer is drawn (colors, symbols, line width, opacity, etc.).