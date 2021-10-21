function inserirData(data = new Date()){

    const ano = data.getFullYear();
    var mes = data.getMonth()  ;
    var dia = data.getDate();

    var hora = data.getHours();
   var min = data.getMinutes();
    const sec  = data.getSeconds();

    if(dia.toString().length == 1) dia = '0'+dia;
    if(hora.toString().length == 1) hora = '0'+hora;
    if(min.toString().length == 1) min = '0'+min;


    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    return dia+" de "+meses[mes]+" de "+ano+" - "+hora+":"+min+":"+sec;

} 
export default inserirData();