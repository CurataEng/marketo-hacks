# Blog Subscription Popup with Marketo Integration

## What is this?
A blog popup that shows up for visitors that prompts them to fill out a Marketo form.

## Requirements
This code requires the following libraries on a page to run:
* jquery
* jquery-cookie
* jquery-colorbox
* Marketo Forms 2.0

These libraries (with the exception of Marketo Forms 2.0) can be installed using hosted versions at:
```
  <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.6.4/jquery.colorbox-min.js"></script>
```

## Installation
After including all of the above dependencies in the `<head>` tag, also include (popup.js)[popup.js] in a `<script>` tag.

You will also want to include the [styles.css](styles.css) stylesheet to style the pop-up in a `<link>` tag in the `<head>` section of the page.

Lastly include all code within the "form-wrapper" class in the div element in [sample.html](sample.html) (including the div element itself).

## Sample
An example implementation is available [here](sample.html).

## CONFIGURATION
At the top of [popup.js](popup.js), there are a number of variables to configure. to customize the form, the creative, the offer and the appearance of the popup.
