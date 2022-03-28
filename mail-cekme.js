var firmas = document.getElementsByClassName("cozum-ortaklari");
var links = [];
for(var i = 0; i<2; i++){
    var item = firmas[i];
    var a = item.querySelector("a");
    console.log(a);
    links.push(a.getAttribute("href"));
}

links.forEach(function(item){
    $.ajax({
        type: 'get',
        url: item,
        success: function(res){
            var doc = res.split('<h2 class="ed_title">');
            var firmatitle = doc[1].split('</h2>')[0];
            var mailhtml = res.split('ed_header_caption')[1].split('</div>')[0].split("<li>")[2].split('</li>')[0].split("<a")[1].split('href="')[1].split("mailto:")[1].split('"')[0];
            console.log(firmatitle+":"+mailhtml);
        }
    })

});