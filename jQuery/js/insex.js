// syntax for jQuery
//  $('selecter').action()

$(document).ready(function () {
    // your jQuery code starts here
    console.log("i am using jquery");

    // $("p").click(function () {
    // console.log("You clicked the p");

    // // $("p").hide(); //this is used to hide the content
    // // $(this).hide(); //this is used to make chnges to particuler clicked para

    // // $("#myid").hide();
    // // $(".class").hide();
    // });

    
    // there are three main selectors in jQuery
    // 1) element selector 
    // 2) class selector 
    // 3) id selector 


    // 1) element selector
    // $("p").click(()=>{
    //     console.log("Hello")
    // });

    
    // 2) class selector
    // $(".4rtclass").click(function () {
    //     console.log("YOu clicked class para4");
    // });

    // 3) id selector
    // $("#myid").click(function () {
    //     console.log("You clicked class para4");
    // });

    
    // other selector 
    // $("*").click() to select all the element in the document


    //EVENTS IN JQUERY

    // MouseEvent : click,dbclick, moueseenter,mouseleave
    // Keyevent  : keypress,keydown,MediaKeyStatusMap
    // form events : SubmitEvent,change,focus,blur
    // doucument/window events : load,resize,scroll,unload ..etc

    // $("#myid").dblclick(function(){
    // console.log("You double clicked on the heading");
    // });

        // $("p").mouseenter(function(){
    //     console.log("You double clicked on the heading");
    // });

    // $("p").hover(function(){
    // console.log("You hovered on the heading");
    // },function(){
    //     console.log("thanks");
    // });

    
    // $("p").on(
    //     {
    //         click:function(){
    //             console.log("this is new one",this);
    //         },
    //         dblclick:function(){
    //             console.log("u leaved the mouse",this);
    //         }
    //     }
    // )


    // $("#wiki").hide(3000,function(){
    // console.log("this is para is hidden");
    // })
    // $("#wiki").show(1000,function(){
    //     console.log("this is para is shown");
    // })

    
    $("#mybutton").click(function(){

        // All these takes two parameters one is time and another one is callback function
        
        $("#wiki").toggle()
        $("#wiki").fadeOut(5000)
        // $("#wiki").fadeIn(5000)
        // $("#wiki").fadeToggle(5000)
        
        // $("#wiki").slideUp(1000)
        // $("#wiki").slideDown(1000)
        // $("#wiki").slideToggle(1000) 
        
    })


});








 







    //animate function in jQuery

    // $("#wiki").animate({
    //     opacity:0.3,
    //     height:'150px',
    //     width:'160px'
    // },1000)

    // $("#wiki").animate({opacity:0.3},4000);
    // $("#wiki").animate({opacity:0.9},4000);
    // $("#wiki").animate({width:'100px'},4000);
    