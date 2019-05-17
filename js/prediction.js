// host = "http://localhost:8080/api/forecasts";
var currentDate = new Date();
var host = "http://sf-pyw.mosyag.in/m04/api/forecasts";

function err(){
	console.log("Что-то пошло не так");
}

function change_html(data){
	prophecies = data["prophecies"];
	$.each(prophecies, function(index, value) {
		$("#p-" + index + " p").text(value);
		console.log($("#p-" + index +" p"));
	})

}

function get_predictions() {
	$.getJSON(host,change_html,err);
}


function set_current_date(){
	sCurrendDay = "" + currentDate.getFullYear() + 
				"-" + (currentDate.getMonth() + 1)+ 
				"-" + currentDate.getDate();
	newText = "Что день " + sCurrendDay + " нам готовит."
	$("#prediction").text(newText);
}

set_current_date();
$("#prediction").click(get_predictions);