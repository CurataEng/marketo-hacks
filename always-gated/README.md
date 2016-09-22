# Always ensuring your content is gated.

To implement this, on every landing page for a form with a gated asset, you will need to:

## Register your asset and landing page
First, register your asset and landing page here: http://assets.curata.me/create

## Save the link
After completing that link, you will receive a link of the following form:
http://assets.curata.me/?id=0730d334e740cf8c650deccd3a0e020c

You should use that link instead of wherever you are linking to the original PDF asset.

## Insert cookie-injection code on the landing page
On your landing page that you just registered.  You should have Marketo Forms 2.0 code that looks something like this:
```html
<script>
MktoForms2.loadForm("//app-sjf.marketo.com", "334-HVK-808", 2324);
</script>
```


```html
<script>
MktoForms2.loadForm("//app-sjf.marketo.com", "334-HVK-808", 2324, function(form){
form.onSuccess(function(values) {
   var tag = document.createElement("script");
   tag.src = 'http://assets.curata.me/register/?id=';
   document.getElementsByTagName("head")[0].appendChild(tag);
   while(typeof(CONTINUE_MARKETO_FORM_SUCCESSS) == "undefined") { }
   return true;
});
});
</script>
```
