$(document).ready(function(){
    var myImages = document.getElementsByClassName("card-img-top");
    var content = document.getElementsByClassName("BG");
    var first = document.getElementsByClassName("first-page");
    var last = document.getElementsByClassName("last-page");
    var head = document.getElementsByTagName("h3");
    var startBtn = document.getElementById("Btn");
    var finalBtn = document.getElementById("finalBtn");
    var count = 0;

    //First page
    content[0].style.display="none";
    last[0].style.display="none";

    //Start Button & Level One Dog
    startBtn.addEventListener("click", function(){
        first[0].style.display="none";
        content[0].style.display="inline-flex";
        $(".level1").on("click",function(){
            $(".BG-img").append(this);
            $(".card").css("pointer-events","none");
            if($(".BG-img img").eq(0).attr("alt")=="dog"){
                count=count+5; 
                $(".score .result").eq(0).html(count);
            }
            setTimeout(function(){
                level();
            },3000)
        });	
    });

    //Level Two Cat
    function level(){
        head[0].style.display="none";
        head[1].style.display="inline-flex";
        $(".BG-img img").eq(0).remove();
        for(var i=0;i<3;i++){
            $(".level1").eq(i).css("display","none");
            $(".level2").eq(i).css("display","inline-flex");
        }
        $(".card").css("pointer-events","auto");
        $(".level2").on("click",function(){ 
            $(".BG-img").append(this);
            $(".card").css("pointer-events","none");
            if($(".BG-img img").eq(0).attr("alt")=="cat"){
                count=count+5; 
                $(".score .result").eq(0).html(count);
            }
            setTimeout(function(){
                level2();
            },3000)
        });	
    }

    //Level Three Elephant
    function level2(){
        head[1].style.display="none";
        head[2].style.display="inline-flex";
        $(".BG-img img").eq(0).remove();
        for(var i=0;i<3;i++){
            $(".level2").eq(i).css("display","none");
            $(".level3").eq(i).css("display","inline-flex");
        }
        $(".card").css("pointer-events","auto");
        $(".level3").on("click",function(){ 
            $(".BG-img").append(this);
            $(".card").css("pointer-events","none");
            if($(".BG-img img").eq(0).attr("alt")=="elephant"){
                count=count+5; 
                $(".score .result").eq(0).html(count);
            }
            setTimeout(function(){
                level3();
            },3000)
        });	
    }

     //Level Four Rat
    function level3(){
        head[2].style.display="none";
        head[3].style.display="inline-flex";
        $(".BG-img img").eq(0).remove();
        for(var i=0;i<3;i++){
            $(".level3").eq(i).css("display","none");
            $(".level4").eq(i).css("display","inline-flex");
        }
        $(".card").css("pointer-events","auto");
        $(".level4").on("click",function(){ 
            $(".BG-img").append(this);
            $(".card").css("pointer-events","none");
            if($(".BG-img img").eq(0).attr("alt")=="rat"){
                count=count+5; 
                $(".score .result").eq(0).html(count);
            }
            setTimeout(function(){
                level4();
            },3000)
        });	
    }

    //Level Five giraffe
    function level4(){
        head[3].style.display="none";
        head[4].style.display="inline-flex";
        $(".BG-img img").eq(0).remove();
        for(var i=0;i<3;i++){
            $(".level4").eq(i).css("display","none");
            $(".level5").eq(i).css("display","inline-flex");
        }
        $(".card").css("pointer-events","auto");
        $(".level5").on("click",function(){ 
            $(".BG-img").append(this);
            $(".card").css("pointer-events","none");
            if($(".BG-img img").eq(0).attr("alt")=="giraffe"){
                count=count+5; 
                $(".score .result").eq(0).html(count);
            }
            setTimeout(function(){
                content[0].style.display="none";
                last[0].style.display="inline-flex";
                $(".final-result .score").eq(0).html(count);
            },3000)
        });	
    }
    // Final Page & Final Button
    finalBtn.addEventListener("click", function(){
        location.reload();
    });
});