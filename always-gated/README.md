# Always ensuring your content is gated.

To implement this, on every landing page for a form with a gated asset, you will need to:

## Register your asset and landing page
First, register your asset and landing page here: http://assets.curata.me/create

After completing that link, you will receive a link of the following form:
```
http://assets.curata.me/?id=0730d334e740cf8c650deccd3a0e020c
```

## Replace links to the PDF
Next, replace any links to the pdf'ed asset (on thank you pages, thank you emails, or post form-submission URLs with the link above)

## Insert cookie-injection code on the landing page
On your landing page that you just registered. You should have Marketo Forms 2.0 code that looks something like this:
```html
<script>
MktoForms2.loadForm("//app-sjf.marketo.com", "334-HVK-808", 2324);
</script>
```

Change that code into something link the following
```html
<script>
var asset_id = "0730d334e740cf8c650deccd3a0e020c";
MktoForms2.loadForm("//app-sjf.marketo.com", "334-HVK-808", 2324, function(form){
form.onSuccess(function(values) {
   var tag = document.createElement("script");
   tag.src = 'http://assets.curata.me/register/?id='+asset_id;
   document.getElementsByTagName("head")[0].appendChild(tag);
   while(typeof(CONTINUE_MARKETO_FORM_SUCCESSS) == "undefined") { }
   return true;
});
});
</script>
```

A few things to note as you change the form code:

1. The parameters for the MktoForms2.loadForm( be unchanged with the exception of the last parameter which is the function(form) call.

2. Replace the value of var asset_id with the id value from the GET parameter of the URL received after registering your landing page and asset.
