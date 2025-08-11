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

# Managing Users & Permissions

GeoServer’s security framework gives you fine-grained control over who can access your spatial data and services. It uses a flexible, **role-based access control** model, ensuring that only authorized users can view, edit, or administer resources. Whether you’re running a small setup or a large multi-user environment, this system keeps your security policies organized and easy to manage.

By assigning roles to individual users or entire groups, you can control access to specific layers, services, and functions. This approach makes it straightforward to maintain consistent permissions while reducing administrative overhead.

<br>

You can manage all users, groups, and roles from the <span class="ui-page-label">Users, Groups, Roles</span> page under the **Security** section in the left-hand menu. Each component has its own tab for streamlined management.

<br>

## Defining Roles & Assigning Permissions

Roles bundle together permission sets that define what a user can access or modify — covering services, layers, and other resources.

To create a role, open the <span class="ui-page-label">Roles</span> tab and select <span class="ui-generic-label">Add New Role</span>. Give it a name that reflects its purpose, such as LAYER_EDITOR or READ_ONLY_USER, then click <span class="ui-generic-label">Save</span>.

Navigate to the <span class="ui-page-label">Data</span> page under **Security** to assign permissions. Here, you can specify exactly which services, layers, or workspaces the role can access, and whether it has read or write capabilities. <span class="ui-generic-label">Save</span> your changes to activate the role.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-8-1.png" alt="Role Tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Managing Groups

Groups make it easier to manage permissions for multiple users at once.

From the <span class="ui-page-label">Users/Groups</span> tab, select <span class="ui-generic-label">Add New Group</span>. Give it a descriptive name and assign the relevant roles, then click <span class="ui-generic-label">Save</span>.

Your group is now ready to streamline your permission management by applying role-based access to all members at once.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-8-2.png" alt="Groups" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

## Creating & Editing Users

Individual user accounts are managed from the <span class="ui-page-label">Users/Groups</span> tab. To create one, select <span class="ui-generic-label">Add New User</span>. Enter a unique username and set a secure password. You can assign the user to any necessary groups or roles, then <span class="ui-generic-label">Save</span>.

To update an existing account, select the user, adjust their details or access rights, and save your changes. Deleting users is also done from this same interface.

<br>

<div style="text-align: center;">
  <img src="../../img/geoserver-img-8-3.png" alt="User Tab" width="auto">
  <div style="font-size: 0.8em; color: gray; margin-top: 4px;">
    Image credit: <a href="https://geoserver.org/" target="_blank">GeoServer</a>
  </div>
</div>

<br>

---

**Next up:** Learn how to extend GeoServer’s capabilities with OGC services.

<br>
