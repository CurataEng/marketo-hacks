# Force Disabling of Adblocker on Landing Pages

## What is this?
The code in this directory warns visitors who are using adblockers that:
* The form is unable to render because of the adblocker.
* Instructs the visitor to disable the adblocker and reload to view the form.

## Installation
First, install [forms-adblock.js](forms-adblock.js) contained in this directory on your webserver.

Reference the code file in a script tag after the script tag with the Marketo Forms 2.0 code, on all pages of your site that have a Forms 2.0 form.  There is no harm in including this code on all pages of your site as well.

Here is an example script tag to include on your site: `<script src="forms-adblock.js"></script>`

## Compatibility
This code works for Marketo Forms 2.0.  It does not work for Marketo Forms 1.0

## Sample
An example implementation is available [here](sample.html).
