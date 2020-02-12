function calculaMedia(n1, n2, sch, final){
    var media;
    if(n1 != null && n2 != null)
        media =  (n1+n2)/2;
    else if(n1 != null && sch != null)
        media = (n1+sch)/2;
    else if(n2!=null && sch!=null)
        media = (n2+sch)/2;
    else if(n1==null && n2 == null && sch != null && final == null)
        media = sch/2;
    if(media >= 3 && media < 7 && n1!= null && n2 != null && final != null && sch == null)
        media += (final/2);
    return media;
}

function verificarAptidao(n1,n2,sch,final){
    if(n1 == null && n2 == null && sch == null && final == null)
        return 0;
}

module.exports.calculaMedia = calculaMedia;
module.exports.verificarAptidao = verificarAptidao;