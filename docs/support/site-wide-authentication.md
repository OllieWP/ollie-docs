---
id: 60234
title: "Site-Wide Authentication"
status: "publish"
order: 0
excerpt: "Activate Ollie Pro for every user on your site with site-wide authentication."
---

<!-- wp:block {"ref":59515,"content":{"Note Box Text":{"content":"\u003cstrong\u003eNote\u003c/strong\u003e: This is an advanced customization for Ollie Pro and generally not needed by the majority of Ollie Pro users. "}}} /-->

In order to enable the Ollie Pro pattern library on your site, you need to sign in to your Ollie Pro account via the Ollie theme dashboard (Appearance → Ollie). By default, authentication is tied to each user, and a cookie is set to ensure you can stay signed in to your Ollie Pro account.

For sites that have multiple users who need to access Ollie Pro, this can cause a problem because each user would need to be logged in to the Ollie Pro account. 

## Enable site-wide auth

To solve that, we've added a way to authenticate your entire site for all users by adding the following constants in your site's `wp-config.php` file.

```
define( 'OLLIE_EMAIL', 'supdude@olliewp.com' );
define( 'OLLIE_PASSWORD', 'yourpassword' );
```

After this change is made, users will need to visit the **Appearance → Ollie** page where they will be automatically authenticated and the Ollie Pro features will be enabled.

[Editing your site's wp-config.php file](https://developer.wordpress.org/apis/wp-config-php/) should only be done if you know the risks and are comfortable making the change. In the future, we may change the way authentication works, but this should give users flexibility in the mean time.
