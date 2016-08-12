#jQuery Image Rotator Plugin

 Query Image Rotator v1.0.0

Very configuralable Image Rotator plugin with preview on Next and Prev button.
Simply set your Image folder and an Array of your images in the config options. 
[Image Rotator](https://github.com/SpecialKcl/jQuery-Image-Rotator-Plugin)

by Kai Hotz AKA [SpecialKcl](https://github.com/SpecialKcl) 

## How to Use:

### 1. Load jQuery and include Image Rotator Plugin files

To use Image Rotator Plugin, you’ll need to make sure both the Image Rotator Plugin and jQuery 1.7 or higher scripts are included.

```javascript
<!-- Important Image Rotator Plugin stylesheet -->
<link rel="stylesheet" href="css/jquery_imageRotator.css">

<!--  jQuery 1.7+  -->
<script src="jquery-1.9.1.min.js"></script>
 
<!-- Include js plugin -->
<script src="js/jquery_imageRotator.js"></script>
```


### 2. Call the plugin

Now call the Image Rotator initializer function on the desiered element and your Image Rotator is ready.

```javascript
jQuery(document).ready(function($)
{
   $('#yourcontainer').ageGate({
    	'speed'       : 500, 		//Speed of animation
        'imageFolder': 'images', 	// Image Folder
        'images'     : ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'], // Array with the names of your Images
        'prevButton' : 'Previous', 	// Prev Button Text
        'nextButton' : 'Next',		// Next Button Text
   });
});
```