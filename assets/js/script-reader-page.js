document.querySelector("#read-button").addEventListener('click', function() {
	if(document.querySelector("#file-input").files.length == 0) {
		alert('Error : No file selected');
		return;
	}

	// first file selected by user
	var file = document.querySelector("#file-input").files[0];
	// perform validation on file type & size if required

	// read the file
	var reader = new FileReader();

	// file reading started
	reader.addEventListener('loadstart', function() {
	    console.log('File reading started');
	});

    // file reading finished successfully
    let readerBook = document.getElementById("reader-book");
	reader.addEventListener('load', function(e) {
	   // contents of file in variable     
	    var text = e.target.result;
        readerBook.innerHTML = text;
	});

	// file reading failed
	reader.addEventListener('error', function() {
	    alert('Error : Failed to read file');
	});

	// file read progress 
	reader.addEventListener('progress', function(e) {
	    if(e.lengthComputable == true) {
	    	var percent_read = Math.floor((e.loaded/e.total)*100);
	    	console.log(percent_read + '% read');
	    }
	});

	// read as text file
	reader.readAsText(file);
});


//open pop-ups 
(() => {
	const block = document.querySelector('#additionally');
	const button = document.querySelector('#open-additionally');
	
	function toggle() {
	  block.classList.toggle('reader-header--visible');
	}
	function remove() {
	  block.classList.remove('reader-header--visible');
	}
	
	document.addEventListener('click', e => {
	  const target = e.target;
	  
	  target === button ? toggle() : target !== block ? remove() : false;
	});
  })();

  (() => {
	const block = document.querySelector('#settings');
	const button = document.querySelector('#open-settings');
	
	function toggle() {
	  block.classList.toggle('reader-header--visible');
	}
	function remove() {
	  block.classList.remove('reader-header--visible');
	}
	
	document.addEventListener('click', e => {
	  const target = e.target;
	  
	  target === button ? toggle() : target !== block ? remove() : false;
	});
  })();

  (() => {
	const block = document.querySelector('#quote');
	const button = document.querySelector('#open-quote');
	
	function toggle() {
	  block.classList.toggle('reader-header--visible');
	}
	function remove() {
	  block.classList.remove('reader-header--visible');
	}
	
	document.addEventListener('click', e => {
	  const target = e.target;
	  
	  target === button ? toggle() : target !== block ? remove() : false;
	});
  })();