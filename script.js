document.addEventListener('DOMcontentLoaded', function(){
 const aumetaFonteBotao=Document. getElementById('aumentar-fonte')

 let tamanhoAtualFonte=1;
 aumetaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize=`${tamanhoAtualFonte}rem`
 })
 diminuirFonteBotao. addEventListener('click', function(){
      tamanhoAtualFonte .=0.1;
    document.body.style.fontSize='${tamanhoAtualFonte}rem'
 })
})
    


