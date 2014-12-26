// enable tab in textarea
$(document).delegate('#Inputfield_file_content', 'keydown', function(e) { 
  var keyCode = e.keyCode || e.which; 

  if (keyCode == 9) { 
	e.preventDefault(); 
	var start = $(this).get(0).selectionStart;
	//var end = $(this).get(0).selectionEnd; <-- To prevent lost code because of selection

	// set textarea value to: text before caret + tab + text after caret
	$(this).val($(this).val().substring(0, start)
				+ "\t"
				+ $(this).val().substring(start));

	// put caret at right position again
	$(this).get(0).selectionStart = $(this).get(0).selectionEnd = start + 1;
  } 
});


