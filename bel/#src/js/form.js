$(".switch-check input[type=\"checkbox\"]").on("click", function () {
	if ($(this).is(":checked")) {
		console.log("Физ. лицо");
		$("#form-1").hide();
		$("#form-2").show();
	} else {
		console.log("Юр. лицо");
		$("#form-2").hide();
		$("#form-1").show();
	}
});