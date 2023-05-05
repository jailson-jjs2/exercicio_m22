AOS.init();/* ANIMAÇÃO */

const dataDoEvento = new Date("May 7, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();/* PEGANDO O VALOR DA DATA */

const contTime = setInterval(function() {/* EXECUTANDO A CADA SEG. */
  const now = new Date();
  const timeStampNow = now.getTime();

  const tempoAteEvento = timeStampDoEvento - timeStampNow;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const HEmMs = 1000 * 60 * 60;
  const minEmMs = 1000 * 60;
  const segEmMS = 1000;

  const diasAteEvento = Math.floor(tempoAteEvento / diaEmMs); /* CALCULADO QUANT. DIAS */

  const horasAteEvento = Math.floor((tempoAteEvento % diaEmMs) / HEmMs); /* CALCULO QUANT. HORAS */

  const minAteEvento = Math.floor((tempoAteEvento % HEmMs) / minEmMs); /* CALCULO QUANT. MIN. */

  const segAteEvento = Math.floor((tempoAteEvento % minEmMs) / segEmMS); /* CALCULO QUANT. SEG. */

  document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minAteEvento}m ${segAteEvento}s`;

  if (tempoAteEvento < 0) {
    clearInterval(contTime);
    document.getElementById('contador').innerHTML = 'Evento expirado!!';
  }

},1000);