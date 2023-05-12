function enlaceFacebook() {
	window.open("https://www.facebook.com/");
}

function enlaceLinkedin() {
	window.open("https://www.linkedin.com/");
}

function enviarDatos() {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var email = document.getElementById("email").value;
	var telefono = document.getElementById("telefono").value;
	var asunto = document.getElementById("asunto").value;

	if (
		nombre == "" ||
		apellido == "" ||
		email == "" ||
		telefono == "" ||
		asunto == ""
	) {
	} else {
		console.log(
			"Nombre: ",
			nombre,
			". Apellido. ",
			apellido,
			". Email: ",
			email,
			". Telefono: ",
			telefono,
			".Asunto: ",
			asunto
		);
		alert("Enviaste el formulario con éxito!");
	}
	return false;
}

$(document).ready(function () {
	$(".campo1").hide();
	$(".campo2").hide();
	$(".campo3").hide();
	$(".campo4").hide();
	$(".campo5").hide();

	$(".boton").click(function () {
		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();
		var email = $("#email").val();
		var telefono = $("#telefono").val();
		var asunto = $("#asunto").val();

		if (nombre == "") {
			$(".campo1").show();
		} else {
			$(".campo1").hide();
		}

		if (apellido == "") {
			$(".campo2").show();
		} else {
			$(".campo2").hide();
		}

		if (email == "") {
			$(".campo3").show();
		} else {
			$(".campo3").hide();
		}

		if (telefono == "") {
			$(".campo4").show();
		} else {
			$(".campo4").hide();
		}

		if (asunto == "") {
			$(".campo5").show();
		} else {
			$(".campo5").hide();
		}
		return;
	});

	$(".boton").click(function (event) {
		var formData = {
			name: $("#nombre").val(),
		};

		$.ajax({
			type: "POST",
			url: "https://reqres.in/api/users",
			data: formData,
			dataType: "json",
			encode: true,
		}).done(function (data) {
			if (data.name == "") {
			} else {
				console.log("Usuario Registrado: ", data.name);
			}
		});
		event.preventDefault();
	});
});
