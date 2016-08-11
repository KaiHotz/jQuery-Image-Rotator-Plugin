#jQuery Image Rotator Plugin

 jQuery Age Gate v1.0.0

Very configuralable Image Rotator plugin with preview on Next and Prev button.
Simply set your Image folder and an Array of your images in the config options. 
[Image Rotator](https://github.com/SpecialKcl/jQuery-Image-Rotator-Plugin)

by Kai Hotz AKA [SpecialKcl](https://github.com/SpecialKcl) 

## Useage

```javascript
jQuery(document).ready(function($)
{
   $('#yourcontainer').ageGate({
    	'speed'       : 500, 		//Speed of animation
        'imageFolder': 'images', 	// Image Folder
        'images'     : ['img1.jpg','img2.jpg','img3.jpg','img4.jpg'], // Array of Images
        'prevButton' : 'Previous', 	// Prev Button Text
        'nextButton' : 'Next',		// Next Button Text
   });
});
```