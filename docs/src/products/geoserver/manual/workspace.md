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

# Creating a Workspace

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
