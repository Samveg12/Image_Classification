Dropzone.autoDiscover = false;

const myDropzone = new Dropzone("#my-dropzone",{
	url : "bulk/",
	maxFiles : 128,
	acceptedFiles : '.jpg',
})