const boton = document.getElementById("unBoton");
const text = document.getElementById("text");
const noPude = document.getElementById("noPude");
const img = document.getElementById("imgRandom");

function Excuse(){
    let seltSit = noPude.value;
    switch(seltSit){
        case "No podré ir porque...":
            function ExcuseLate() {
                const whoLate = ['Un pingüino psicópata','Un payaso deprimente','Un cirujano ebrio','Una vaca intolerante a la lactosa','Un indigente maniático','Un cura satánico','Un mapache cocainómano','Un duende cleptómano','El mismísimo Pedro Sanchez','Un mono de la mafia','El gobernador de Andaluz'];  
                const didLate = [' se orinó sobre',' mordió y masticó',' lamió por completo',' escondió en su ropa interior',' robó',' le prendió fuego a',' sumergió en acido a',' le pintó un montón de penes a',' usó como papel de baño a',' intentó tragarse entero a'];   
                const whatLate = [' las llaves se mi moto.',' mi almuerzo del día.',' mi taza favorita de la oficina.',' mi anillo de compromiso.',' mi zapato derecho de la suerte.', ' la cerradura de mi puerta.',' mi unico pantalón.',' mi tarjeta del abono transporte.',' mi telefono.'];
                const howLate = [' Según era para cumplir una profesía que vio en internet, ',' Era una apuesta y necesitaba financiar su adiccion al juego, ',' Estaba totalmente seguro de que yo era un agente de la CIA, ',' Lo hizo mirandome fijamente a los ojos, sin parpadear, ',' Estaba gritando que el fin del mundo seria este jueves por la noche, ',' Obviamente era un intento desesperado por llamar mi atención, ',' Queria fumar sus pedazos para lograr no se que efecto, ',' No dejaba de gritar "¡Que viva España!" mientras lo hacía, ',' Simplemente queria ver el mundo arder, ',' Estaba bajo los efectos de un jarabe para la tos caducado, '];
                const nowLate = ['ahora estoy solicitado por agresión y estoy huyendo de la policia.','tengo que limpiar mi sala porque quedó repleta de sangre y otros fluidos.','en fin, pasé la noche en urgencias y creo que estaré aquí unos días más.','después de lo que pasó, pasaré el día limpiando todo con un cepillo de dientes.','juró que volvería por mi mañana a la misma hora, tengo miedo, estoy escondido.','por lo que le hice estaré unas tres horas declarando en un tribunal.','me desquicié por completo y ahora pasaré la noche en una celda.','eso me causó un brote psicótico bastante severo y aún estoy encerrado en mi baño.','no me dejará salir hasta que firme un sospechoso contrato de confidencialidad.']
                let randomWhoLate = whoLate[Math.floor(Math.random()*whoLate.length)];
                let randomDidLate = didLate[Math.floor(Math.random()*didLate.length)];
                let randomWhatLate = whatLate[Math.floor(Math.random()*whatLate.length)]
                let randomHowLate = howLate[Math.floor(Math.random()*howLate.length)];
                let randomNowLate = nowLate[Math.floor(Math.random()*nowLate.length)];
                // let randomImg = ;
                let randomText = randomWhoLate+randomDidLate+randomWhatLate+randomHowLate+randomNowLate;
                text.innerText= randomText;                
            }
            ExcuseLate();
        break;
        case "Me debo ir porque...":
           function ExcuseGone() {
                const whoGone = ['Un hacker norcoreano','Un brujo espiritista','Mi abogado borracho','Un policia corrupto','El lider de una secta terraplanista','Un panadero paranóico','Mi casero apareció con un vestido puesto y','Un arquitecto aficionado a los legos','Un detective con deficit de atención','Un adolescente de dudosa procedencia'];
                const didGone = [' se cagó por accidente en',' comenzó a escupir frenéticamente en', ' jura que vio un fantasma tomar',' usó superGlue y pegó su miembro a',' derramó su cerveza en',' se tragó el unico repuesto de',' se esta llevando',' quiere explotar',' anda en ropa interior gritando que quiere de vuelta'];
                const whatGone = [' mi casino ilegal para enanos.',' mi olla de oro robado.',' mi cargamento totalmente legal de "Los Pollos Hermanos".',' Mi impresora industrial de documentos falsos.',' mi colección privada de dientes humanos.',' el certificado de titularidad de mi alma.',' la bóbeda en la que guardo mi dinero lavado.',' mi planta carnívora mutante.',' el dinero en me gané en las peleas de gallos.'];
                const howGone = [' Es que descubrió mi historial de busquedas ',' Dijo que era por razones de seguridad nacional ',' Encima de eso lo hizo en un live de TikTok ',' Dijo que era el cobro por una deuda del año pasado ',' Estaba bajo el efecto de tres litros de redbull ',' No dejaba de gritar que los aliens ya estan aquí ',' Todo gracias a un vacío legal en mi contrato de alquiler ',' Estaba fumando algo que encontró en la deep web a 4€ el kilo ',' Estaba fúrico, gritando que hacienda solo funde a los autónomos ',' Dejó una nota de rescate '];
                const nowGone = ['¡Tengo que irme rapido a destruir las pruebas antes de que llegue el FBI!','¡Debo ir a denunciar este abuso de inmediato!','¡Mi casa esta a punto de explotar!','¡Si no llego en diez minutos perdere todo mi patrimonio!','¡Tengo que huir del pais antes de que cierren la frontera!','¡Me urge ir a rescatar lo poco que quedará!','¡Así que voy a necesitar cambiar mi identidad esta misma noche!','¡Me veo obligado a ejecutar mi plan de fuga inmediata!','¡Necesito ir a dar la cara antes de que sea demasiado tarde!'];
                let randomWhoGone = whoGone[Math.floor(Math.random()*whoGone.length)];
                let randomDidGone = didGone[Math.floor(Math.random()*didGone.length)];
                let randomWhatGone = whatGone[Math.floor(Math.random()*whatGone.length)];
                let randomHowGone = howGone[Math.floor(Math.random()*howGone.length)];
                let randomNowGone = nowGone[Math.floor(Math.random()*nowGone.length)];
                let randomText = randomWhoGone+randomDidGone+randomWhatGone+randomHowGone+randomNowGone;
                text.innerText= randomText;
                
            }
            ExcuseGone();
        break;
        case "No te he pagado porque...":
            function ExcusePay() {
                const whoPay = ['Un coach de trading adicto al crack ','Un agente bancario buscado por fraude ','Un gestor de hacienda corrupto ','Chayane ','El gurú del amor ','Nicolás Maduro ','Un falcificador de software ','Un prestamista mafioso ','Mi entrenador personal ','Mi novia virtual '];
                const didPay = ['malversó ','confiscó ','blanqueó ','apostó ','expropió ','clonó ','congeló ','hackeó ','extravió ','vació '];
                const whatPay = ['mi inversión secreta en fotos de pies con IA. ','mi cuenta del Banco de Venezuela. ','mi inversion en una fábrica de dildos. ','el préstamo para mi operación de alargamiento de miembro. ','el capital que tenía para mi chiringuito en el retiro. ','mi fondo de emergencia para un riñón de repuesto. ','el efectivo que guardaba dentro de mi colchón de agua. ','mi coleccion de billetes falsos firmados por criminales. ','mis ahorros en una crypto basada en memes de cabras. ','mi presupuesto mensual para batidos de proteina contrabandeada. '];
                const whyPay = ['Lo hizo despues de perder un duelo en un casido en Las Vegas, ','Estaba diciendo que ese dinero estaba maldito por una bruja de internet, ','Me entere porque descaradamente lo subió a instagram, ','Estaba bajo el efecto de una monster ilegal con hormonas de caballo, ','Queria financiar su propio parque temático clandestino, ','Usó un tutorial de YouTube con intro de Skrillex y voz de loquendo, ','Dice que tenía que pagar el rescate a unos extraterrestres que lo tenían amenazado, ','Repetia a cada rato que los recursos financieros deben ir en manos del estado, ','Simplemente para joderme la semana, ','Me juró que en realidad estaba intentando robar al Vaticano. '];
                const nowPay = ['ahora tengo que vender un riñón en el mercado negro para compensarlo.','ahora hacienda me congelo hasta la cuenta de Steam.','le tuve que pedir asilo politico a mi mamá.','mi inuca opcion ahora es fingir mi muerte en un accidente de avión.','la Interpol me ha recomendado cambiar de identidad y mudarme a Andorra.','ahora estoy encerrado en mi búnker viviendo a base de latas de atún.','pero bueno, estoy en la quiebra y mi culo le pertenece al estado.','he tenido que empezar a pagar el pan con favores sexuales al panadero.','ahora mi plan de jubilación es rezar para ganarme la lotería.','mis abogados me han prohibido terminantemente hablar con cualquier ser humano.'];
                let randomWhoPay = whoPay[Math.floor(Math.random()*whoPay.length)];
                let randomDidPay = didPay[Math.floor(Math.random()*didPay.length)];
                let randomWhatPay = whatPay[Math.floor(Math.random()*whatPay.length)];
                let randomWhyPay = whyPay[Math.floor(Math.random()*whyPay.length)];
                let randomNowPay = nowPay[Math.floor(Math.random()*nowPay.length)];
                let randomText = randomWhoPay+randomDidPay+randomWhatPay+randomWhyPay+randomNowPay;
                text.innerText = randomText;
            }
            ExcusePay();
        break;
        case "Me quiero matar porque...":
            let notYet = "En desarrollo...";
            text.innerText= notYet;
        break;
        case "Debemos terminar porque...":
            let notYetEven = "En desarrollo...";
            text.innerText= notYetEven;
        break;   
        case "Selección":
            let randomText = "Tienes que seleccionar tu situación, bro.";
            text.innerText= randomText;
        break;       
    }
    text.style.color= "#000000";
}

boton.addEventListener("click",Excuse);





