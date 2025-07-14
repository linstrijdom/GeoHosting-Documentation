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

# GeoNode Overview

## Why Choose this Product?

GeoNode is a turnkey Spatial Data Infrastructure that empowers organizations to share, visualize, and collaborate on geospatial data without building custom systems from scratch. Key benefits include:

- **Seamless Data Publishing**  
  Upload vector and raster datasets (Shapefile, GeoJSON, GeoTIFF) through the browser and instantly expose them as OGC services (WMS/WFS/WCS).

- **Built-in Metadata Catalog**  
  Every upload is captured with ISO-style metadata (title, abstract, tags, bounding box), making content discoverable and interoperable.

- **Interactive Map Builder**  
  Combine uploaded layers into custom maps, style them on-the-fly, and generate embeddable viewers—no client application required.

- **Fine-grained Access Control**  
  Define roles and permissions per user or group, controlling who can view, edit, download, or publish datasets and maps.

- **Rich Search & Discovery**  
  Full-text and faceted search across datasets, maps, documents, and users, with live map previews in results.

- **Extensible Architecture**  
  Leverages Django, GeoServer, PostGIS, Celery, and optionally Elasticsearch—plug in additional modules or services as your needs grow.

## What Size Should I Buy?

GeoNode is open-source (no licensing fees), but you can tailor your deployment to match your scale and performance requirements:

1. **Small / Development**  
   - **All-in-One** on a single VM or container: Django + GeoServer + PostGIS + Celery.  
   - Ideal for proof-of-concept, small teams, or local testing.

2. **Medium / Production**  
   - **Two-Tier**: Separate database and GeoServer instances from the web application.  
   - Add a dedicated Celery worker, enable Elasticsearch for faceted search.  
   - Suitable for departmental portals and moderate user loads.

3. **Large / Enterprise**  
   - **High-Availability Cluster**: Multiple web nodes behind a load balancer, clustered GeoServer, redundant database, and Celery autoscaling.  
   - Integrate CDN, authentication federation (LDAP/SAML), and monitoring.  
   - Recommended for national-scale SDIs or mission-critical deployments.

Choose the deployment size that aligns with your user base, data volume, and performance requirements—all within the free, community-driven GeoNode ecosystem.
