$(document).ready(function(){

	// Slider
	if(window.location.href.indexOf('index') > -1){
	  
	  $('.galeria').bxSlider({
	    auto: true,
  		//autoControls: true,
  		//stopAutoOnClick: true,
  		pager: true,
  		slideWidth: 600,
		responsive: true,  
		/*
		mode: 'fade',
	    captions: false,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true*/
	  });

	}


	// Posts
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Actividades de reconocimiento de sistemas.',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Estas actividades directamente relacionadas con los ataques informáticos, si bien no se consideran ataques como tales ya que no provocan ningún daño, persiguen obtener información previa sobre las organizaciones y sus redes y sistemas informáticos, realizando para ello un escaneo de puertos para determinar qué servicios se encuentran activos o bien un reconocimiento de versiones de sistemas operativos y aplicaciones, por citar dos de las técnicas más conocidas.'
			},
			{
				title: 'Detección de vulnerabilidades en los sistemas.',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Este tipo de ataques tratan de detectar y documentación las posibles vulnerabilidades de un sistema informático, para a continuación desarrollar alguna herramienta que permita explotarlas fácilmente (herramientas conocidas popularmente como “exploits”).<p>Metasploit es el framework más utilizado (www.metasploit.com) permite explorar las vulnerabilidades más conocidas en forma accesible para los usuarios que desean ingresar a nuestro sistema por un ingreso no convencional. Metasploit es mantenido por una la comunidad GNU con fines de descubrir nuevos ataques y posibles vulnerabilidades a los sistemas.</p>'
			},
			{
				title: 'Robo de información mediante la interceptación de mensajes.',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Ataques que tratan de interceptar los mensajes de correo o los documentos que se envían a través de redes de ordenadores como Internet, vulnerando de este modo la confidencialidad del sistema informático y la privacidad de sus usuarios.\n Acceso a la información por parte de personas no autorizadas. Uso de privilegios no adquiridos. Su detección es difícil, a veces no deja huellas. Ejemplos: Copias ilícitas de programas, escucha en línea de datos.'
			},
			{
				title: 'Modificación del contenido y secuencia de los mensajes transmitidos',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'En estos ataques los intrusos tratan de reenviar mensajes y documentos que ya habían sido previamente transmitidos en el sistema informático, tras haberlos modificado de forma maliciosa (por ejemplo, para generar una nueva transferencia bancaria contra la cuenta de la víctima del ataque). También se conocen como “ataques de repetición” (“replay attacks”).\n Ejemplos: Modificación de bases de datos, modificación de elementos del Hardware.'
			},
			{
				title: 'Análisis del tráfico',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Estos ataques persiguen observar los datos y el tipo de tráfico transmitido a través de redes informáticas, utilizando para ello herramientas como los “sniffers”. Así, se conoce como “eavesdropping” a la interceptación del tráfico que circula por una red de forma pasiva, sin modificar su contenido.<p>Los analizadores de paquetes tienen diversos usos, como monitorear redes para detectar y analizar fallos, o para realizar ingeniería inversa en protocolos de red. También es habitual su uso para fines maliciosos, como robar contraseñas, interceptar correos electrónicos, espiar conversaciones de chat, etc.</p><p>Una organización podría protegerse frente a los “sniffers” recurriendo a la utilización de redes conmutadas (“switches” en lugar de “hubs”) y de redes locales virtuales (VLAN).</p><p>No obstante, en redes locales que utilizan “switches” (es decir, en redes conmutadas), un atacante podría llevar a cabo un ataque conocido como “MAC flooding” para provocar un desbordamiento de las tablas de memoria de unswitch (tablas denominadas CAM por los fabricantes, “Content Addresable Memory”) para conseguir que pase a funcionar como un simple “hub” y retransmita todo el tráfico que recibe a través de sus puertos (al no poder “recordar” qué equipos se encuentran conectados a sus distintas bocas o puertos por haber sido borradassus tablas de memoria).</p><p> Por otra parte, en las redes VLAN (redes locales virtuales) un atacante podría aprovechar el protocolo DTP (Dynamic Trunk Protocol), utilizado para poder crear una VLAN que atraviese varios switches, para intentar saltar de una VLAN a otra, rompiendo de este modo el aislamiento físico impuesto por la organización para separar sus distintas redes locales.</p>'
			},
			{
				title: 'Ataques de suplantación de la identidad.',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: '<h3>IP Spoofing</h3><p>Los ataques de suplantación de la identidad presentan varias posibilidades, siendo una de las más conocidas la denominada <strong>IP Spoofing</strong> (enmascaramiento de la dirección IP), mediante la cual un atacante consigue modificar la cabecera de los paquetes enviados a un determinado sistema informático para simular que proceden de un equipo distinto al que verdaderamente los ha originado. Así, por ejemplo, el atacante trataría de seleccionar una dirección IP correspondiente a la de un equipo legítimamente autorizado para acceder al sistema que pretende ser engañado. </p><p>Los propietarios de las redes y operadores de telecomunicaciones podrían evitar en gran medida el <strong>IP Spoofing</strong> implantando filtros para que todo el tráfico saliente de sus redes llevara asociado una dirección IP de la propia red desde la que se origina el tráfico. Otro posible ataque sería el secuestro de sesiones ya establecidas (hijacking, en el ámbito informático hace referencia a toda técnica ilegal que lleve consigo el adueñarse o robar algo por parte de un atacante.), donde el atacante trata de suplantar la dirección IP de la víctima y el número de secuencia del próximo paquete de datos que va a transmitir. Con el secuestro de sesiones se podrían llevar a cabo determinadas operaciones en nombre de un usuario que mantiene una sesión activa en un sistema informático como, por ejemplo, transferencias desde sus propias cuentas corrientes si en ese momento se encuentra conectado al servidor de una entidad financiera.</p><p><h3>DNS Spoofing.</h3></p><p>Los ataques de falsificación de DNS pretenden provocar un direccionamiento erróneo en los equipos afectados, debido a una traducción errónea de los nombres de dominio a direcciones IP, facilitando de este modo la redirección de los usuarios de los sistemas afectados hacia páginas Web falsas o bien la interceptación de sus mensajes de correo electrónico.</p><p>Para ello, en este tipo de ataque los intrusos consiguen que un servidor DNS legítimo acepte y utilice información incorrecta obtenida de un ordenador que no posee autoridad para ofrecerla. De este modo, se persigue “inyectar” información falsa en el base de datos del servidor de nombres, procedimiento conocido como “envenenamiento de la caché del servidor DNS”, ocasionando con ello serios problemas de seguridad, como los que se describen de forma más detallada a continuación:</p><p><ul><p><li><p>Redirección de los usuarios del servidor DNS atacado a Websites erróneos en Internet, que simulan ser los Websites reales. De este modo, los atacantes podrían provocar que los usuarios descargasen de Internet software modificado en lugar del legítimo (descarga de código dañino, como virus o troyanos, desde Websites maliciosos).</p></li><li><p>La manipulación de los servidores DNS también podría estar detrás de algunos casos de <strong>phishing</strong>, mediante la redirección de los usuarios hacia páginas Web falsas creadas con la intención de obtener datos confidenciales, como sus claves de acceso a servicios de banca electrónica.</p></li><li><p>Otra posible consecuencia de la manipulación de los servidores DNS serían los ataques de Denegación de Servicio (DoS), al provocar la redirección permanente hacia otros servidores en lugar de hacia el verdadero, que de este modo no podrá ser localizado y, en consecuencia, visitado por sus legítimos usuarios.</p></li><li><p>Los mensajes de correo podrían ser redirigidos hacia servidores de correo no autorizados, donde podrían ser leídos, modificados o eliminados. Para ello, basta con modificar el registro MX (<strong>Mail Exchanger</strong>) de la tabla de datos del servidor DNS atacado. Por otra parte, un servidor DNS afectado por este tipo de ataque podría provocar falsas respuestas en los restantes servidores DNS que confíen en él para resolver un nombre de dominio, siguiendo el modelo jerárquico del servicio.</p></li><p>DNS, extendiendo de este modo el alcance del ataque de <strong>DNS Spoofing</strong>.</p></ul></p>'
			},
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="./docsPDF.html" class="button-more">Leer más</a>
				</article>
			`;

			$("#posts").append(post);
		});
	}


	// Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});
	
	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});
	
	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	
	// Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	// Login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});

	}


	// Acordeon

	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}


	// Reloj
	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
		}, 1000);
		
	
	}

	// Validación
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}

	

});