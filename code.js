/* 
 *
 * This file containes functions that validate and then update the values the user entered.  
 *
 * Created by Caner Uguz. www.caneruguz.com
 *
 *
 */

var reg = RegExp(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)  // Regular Expression for color

function box_width_update() {
	var box_width_var = '200px';
	if(document.getElementById('box_width').value.length !== 0){
				box_width_var = document.getElementById("box_width").value; //Change the value to what user entered.

	} 
	document.getElementById('box_width_text').innerHTML = 'width: ' + box_width_var + ';'; //Update the text
	document.getElementById('box').style.width = box_width_var;
}

function box_height_update() {
	var box_height_var = '200px';
	if(document.getElementById('box_height').value.length !== 0){
				box_height_var = document.getElementById("box_height").value; //Change the value to what user entered.

	} 
	document.getElementById('box_height_text').innerHTML = 'height: ' + box_height_var + ';'; //Update the text
	document.getElementById('box').style.height = box_height_var;
}

function box_bg_color_update() {
	var box_bg_color_var = '#ddd';
	if(document.getElementById('box_bg_color').value.length !== 0){
				box_bg_color_var = document.getElementById("box_bg_color").value; //Change the value to what user entered.
				
	} 

	if (reg.test(box_bg_color_var) == false) { 
		document.getElementById('error_color').style.display = 'block';
		document.getElementById('error_color').innerHTML = 'Box background color value is not a real color code, please check your input.';
		document.getElementById('box_bg_color').style.borderColor = 'red';
	} else {
		document.getElementById('error_color').style.display = 'none';
		document.getElementById('box_bg_color').style.borderColor = '#cccccc';


	document.getElementById('box_bg_color_text').innerHTML = 'background-color: ' + box_bg_color_var + ';'; //Update the text
	document.getElementById('box').style.backgroundColor = box_bg_color_var;
	
	} 
}

function border_color_update() {
	var border_color_var = '#eee';
	if(document.getElementById('border_color').value.length !== 0){
				border_color_var = document.getElementById("border_color").value; //Change the value to what user entered.

	} 
	
	if (reg.test(border_color_var) == false) { 
		document.getElementById('error_border_color').style.display = 'block';
		document.getElementById('error_border_color').innerHTML = 'Border background color value is not a real color code, please check your input.';
		document.getElementById('border_color').style.borderColor = 'red';
	} else {
		document.getElementById('error_border_color').style.display = 'none';
		document.getElementById('border_color').style.borderColor = '#cccccc';

	document.getElementById('border_color_text').innerHTML = 'border-color: ' + border_color_var + ';'; //Update the text
	document.getElementById('box').style.borderColor = border_color_var;
	
	}
}

function border_size_update() {
	var border_size_var = '2px';
	if(document.getElementById('border_size').value.length !== 0){
				border_size_var = document.getElementById("border_size").value; //Change the value to what user entered.

	} 
	document.getElementById('border_size_text').innerHTML = 'border-width: ' + border_size_var + ';'; //Update the text
	document.getElementById('box').style.borderWidth = border_size_var;
}

function border_style_update() {
	var border_style_var = 'solid';
	if(document.getElementById('border_style').value.length !== 0){
				border_style_var = document.getElementById("border_style").value; //Change the value to what user entered.

	} 
	
	function checkBorder(border_style_var){
		switch(border_style_var)
			{
			case 'solid':
			  return true;
			  break;
			case 'dashed':
			  return true;
			  break;
			case 'dotted':
			  return true;
			  break;
			case 'double':
			  return true;
			  break;
			case 'groove':
			  return true;
			  break;
			case 'hidden':
			  return true;
			  break;
			case 'inherit':
			  return true;
			  break;
			case 'inset':
			  return true;
			  break;
			case 'none':
			  return true;
			  break;
			default:
			  return false;
			}
	
	}
	
	if (checkBorder(border_style_var) == false ) {
		document.getElementById('error_border_style').style.display = 'block';
			document.getElementById('error_border_style').innerHTML = 'Border style is not a valid option, Click the options help text for information.';
			document.getElementById('border_style').style.borderColor = 'red';
	
	
	} else {
	document.getElementById('error_border_style').style.display = 'none';
		document.getElementById('border_style').style.borderColor = '#cccccc';
	
	
	
	document.getElementById('border_style_text').innerHTML = 'border-style: ' + border_style_var + ';'; //Update the text
	document.getElementById('box').style.borderStyle = border_style_var;
	
	}
}


function border_radius_update() {
	var border_radius_var = '5px';
	if(document.getElementById('border_radius').value.length !== 0){
				border_radius_var = document.getElementById("border_radius").value; //Change the value to what user entered.

	} 
	document.getElementById('border_radius_text').innerHTML = 'border-radius: ' + border_radius_var + ';'; //Update the text
	document.getElementById('border_radius_text_webkit').innerHTML = '-webkit-border-radius: ' + border_radius_var + ';'; 
	document.getElementById('border_radius_text_moz').innerHTML = '-moz-border-radius: ' + border_radius_var + ';'; 
	var box = document.getElementById('box').style;
	box.borderRadius = border_radius_var;
	box.MozBorderRadius = border_radius_var;
	box.WebkitBorderRadius = border_radius_var;
}

function border_shadow_update() {
		//Set original values
		var horizontal_offset = '0'; 
		var vertical_offset = '0'; 
		var blur_radius = '5px'; 
		var spread_radius = '0'; 
		var shadow_color = '#666'; 
		
	//Set new values if they are set	
	if(document.getElementById('horizontal_offset').value.length !== 0){
				horizontal_offset = document.getElementById("horizontal_offset").value; //Change the value to what user entered.
	} 
	if(document.getElementById('vertical_offset').value.length !== 0){
				vertical_offset = document.getElementById("vertical_offset").value; //Change the value to what user entered.
	} 
	if(document.getElementById('blur_radius').value.length !== 0){
				blur_radius = document.getElementById("blur_radius").value; //Change the value to what user entered.
	} 
	if(document.getElementById('spread_radius').value.length !== 0){
				spread_radius = document.getElementById("spread_radius").value; //Change the value to what user entered.
	} 	
	if(document.getElementById('shadow_color').value.length !== 0){
				shadow_color = document.getElementById("shadow_color").value; //Change the value to what user entered.
	} 	
	
	
		if (reg.test(shadow_color) == false) { 
		document.getElementById('error_shadow_color').style.display = 'block';
		document.getElementById('error_shadow_color').innerHTML = 'Box Shadow color value is not a real color code, please check your input.';
		document.getElementById('shadow_color').style.borderColor = 'red';
	} else {
		document.getElementById('error_shadow_color').style.display = 'none';
		document.getElementById('shadow_color').style.borderColor = '#cccccc';
	
	var markup = horizontal_offset + ' '  +  vertical_offset + ' ' + blur_radius + ' ' + spread_radius + ' ' + shadow_color;	
	document.getElementById('box_shadow_text').innerHTML = 'box-shadow: ' + markup + ';'; //Update the text
	document.getElementById('box_shadow_text_webkit').innerHTML = '-webkit-box-shadow: ' + markup + ';';
	document.getElementById('box_shadow_text_moz').innerHTML = '-moz-box-shadow: ' + markup + ';';
	
	var box = document.getElementById('box').style;
	box.boxShadow = markup;
	box.MozBoxShadow = markup;
	box.WebkitBoxShadow = markup;
	
	}
}


