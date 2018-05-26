#jQuery Image Rotator Plugin

 Query Image Rotator v1.0.0

Very configuralable Image Rotator plugin with preview on Next and Prev button.
Simply set your Image folder and an Array of your images in the config options.
[Image Rotator](https://github.com/KaiHotz/jQuery-Image-Rotator-Plugin)

by Kai Hotz [Kai Hotz](https://github.com/KaiHotz)

## How to Use:

### 1. Load jQuery and include Image Rotator Plugin files

To use Image Rotator Plugin, you’ll need to make sure both the Image Rotator Plugin and jQuery 1.9 or higher scripts are included.

```html
<!-- Important Image Rotator Plugin stylesheet -->
<link rel="stylesheet" href="css/jquery_imageRotator.css">

<!--  jQuery 1.9+  -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<!-- Include js plugin -->
<script src="js/jquery_imageRotator.js"></script>
```


### 2. Call the plugin

Now call the Image Rotator initializer function on the desiered element and your Image Rotator is ready.

```javascript
jQuery(document).ready(function($){

   $('#yourcontainer').ageGate();

});
```

## Customizing

### 1. Options

All of the options below are available to customize Image Rotator Plugin.

| Variable      | Default                                       | Type   | Description                            |
| --------------|:---------------------------------------------:|:------:| ---------------------------------------|
| `speed`       | 500                                           | int    | Speed for animation on on Image Change |
| `imageFolder` | 'images'                                      | string | Image Folder         				  |
| `images`      | ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'] | Array  | Array with the names of your images 	  |
| `prevButton`  | 'Previous'                                    | string | Prev Button Text            			  |
| `nextButton`  | 'Next'                                        | string | Next Button Text                       |


### 2. Defaults

Image Rotator Plugin default settings

```javascript
$('#yourcontainer').ageGate({
	'speed'       : 500,
    'imageFolder': 'images',
    'images'     : ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'],
    'prevButton' : 'Previous',
    'nextButton' : 'Next',
});
```
