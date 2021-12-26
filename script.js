$(function() {
  var INDEX = 0; 
  var msgNum = -1;
  $("#chat-submit").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input").val(); 
    if(msg.trim() == ''){
      return false;
    }
    generate_message(msg, 'self');
    var buttons = [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ];
    setTimeout(function() {   
      
      getMsgResponse(msg).then(covidData => {
        console.log("index.html 16 | covid data", covidData);
        // document.getElementById("total-cases").innerText =
        //   covidData.confirmed.value;

        generate_message(covidData.confirmed.detail, 'user'); 
      });
      
    }, 1000)
    
  })
  
  function generate_message(msg, type) {
    INDEX++;
    console.log(INDEX);
    ticketData = [];
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"avatar.png\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    if (msg.length > 35){
      for (var i = 0; i < msg.length; i+=35) {
        str+= msg.slice(i, i+35);
        str+= "<br>";
        
      }
    }else{
      str += msg;
    }
    
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    if(type == 'self'){
     $("#chat-input").val(''); 
    }    
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
  }  
  
  function generate_button_message(msg, buttons){    
  
    INDEX++;
    var btn_obj = buttons.map(function(button) {
       return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
    }).join('');
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"avatar.png \">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "          <div class=\"cm-msg-button\">";
    str += "            <ul>";   
    str += btn_obj;
    str += "            <\/ul>";
    str += "          <\/div>";
    str += "        <\/div>";

    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);   
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
    $("#chat-input").attr("disabled", true);
  }
  
  $(document).delegate(".chat-btn", "click", function() {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, 'self');
  })

  // $("#chat-circle").toggle('scale');
  // $("#chat-circle3").toggle('scale');
  // $("#chat-circle4").toggle('scale');

  $("#chat-circle2").click(function() {    
    $("#chat-circle").toggle('scale');
    $("#chat-circle3").toggle('scale');
    $("#chat-circle4").toggle('scale');
    // $(".chat-box").toggle('scale');
  })
  
  $("#chat-circle").click(function() {    
    $("#chat-circle").toggle('scale');
    $("#chat-circle2").toggle('scale');
    $("#chat-circle3").toggle('scale');
    $("#chat-circle4").toggle('scale');
    $(".chat-box").toggle('scale');
  })

  $("#chat-circle3").click(function() {    
    $("#chat-circle").toggle('scale');
    $("#chat-circle2").toggle('scale');
    $("#chat-circle3").toggle('scale');
    $("#chat-circle4").toggle('scale');
    $(".nav-box").toggle('scale');
  })

  $("#chat-circle4").click(function() {    
    $("#chat-circle").toggle('scale');
    $("#chat-circle2").toggle('scale');
    $("#chat-circle3").toggle('scale');
    $("#chat-circle4").toggle('scale');
    $(".ticket-box").toggle('scale');
  })
  
  $(".chat-box-toggle").click(function() {
    
    $("#chat-circle2").toggle();
    // $("#chat-circle3").toggle('scale');
    // $("#chat-circle4").toggle('scale');
    $(".chat-box").toggle('scale');
  })

  $(".ticket-box-toggle").click(function() {
    
    $("#chat-circle2").toggle();
    // $("#chat-circle3").toggle('scale');
    // $("#chat-circle4").toggle('scale');
    $(".ticket-box").toggle('scale');
  })


  $(".nav-box-toggle").click(function() {
    
    $("#chat-circle2").toggle();
    // $("#chat-circle3").toggle('scale');
    // $("#chat-circle4").toggle('scale');
    $(".nav-box").toggle('scale');
  })









$("#ticket-submit").click(function(e) {
  e.preventDefault();
  var msg = $("#ticket-input").val(); 
  if(msg.trim() == ''){
    return false;
  }
  
  generate_ticket(msg, 'self');
 
  msgs = ["Hi, can we please get your name?", "Thank you, what is your email?", "What would you like help with?", "Hang on tight! You ticket has been submitted. Team Nustac has received your message and will get back to you anytime soon."]
  
  
    setTimeout(function() {      
      generate_ticket(msgs[msgNum], 'user');  
    }, 1000)
    console.log(msgNum)
    msgNum = msgNum + 1;
  

  if (msgNum == 3){
    $("#ticket-input").attr("disabled", true);
    $("#ticket-input").toggle('scale');
    
  }
 
  
})

function generate_ticket(msg, type) {
  INDEX++;
  console.log(INDEX);
  var str="";
  str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
  str += "          <span class=\"msg-avatar\">";
  str += "            <img src=\"avatar.png\">";
  str += "          <\/span>";
  str += "          <div class=\"cm-msg-text\">";
  if (msg.length > 35){
    for (var i = 0; i < msg.length; i+=35) {
      str+= msg.slice(i, i+35);
      str+= "<br>";
      
    }
  }else{
    str += msg;
  }
  
  str += "          <\/div>";
  str += "        <\/div>";
  $(".t-chat-logs").append(str);
  $("#cm-msg-"+INDEX).hide().fadeIn(300);
  if(type == 'self'){
   $("#ticket-input").val(''); 
  }    
  $(".t-chat-logs").stop().animate({ scrollTop: $(".t-chat-logs")[0].scrollHeight}, 1000);    
}  










$("#nav-submit").click(function(e) {
  e.preventDefault();
  var msg = $("#nav-input").val(); 
  if(msg.trim() == ''){
    return false;
  }
  
  generate_nav(msg, 'self');
  
    setTimeout(function() {      
      generate_nav(msg, 'user');  
    }, 1000)
    
 
  
})

function generate_nav(msg, type) {
  INDEX ++;
  console.log(INDEX);
  var str="";
  str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
  str += "          <span class=\"msg-avatar\">";
  str += "            <img src=\"avatar.png\">";
  str += "          <\/span>";
  str += "          <div class=\"cm-msg-text\">";
  if (type == "user"){
    if (isValidHttpUrl(msg)){
      window.open(msg, '_blank');
      str += "Opening "
      if (msg.length > 35){

        for (var i = 0; i < msg.length; i+=35) {
          str+= msg.slice(i, i+35);
          str+= "<br>";
          
        }
      }else{
        str += msg;
      }
    }else{
      str += "Enter a valid URL !";

    }
    
  }
  if (type == "self"){
    if (msg.length > 35){

      for (var i = 0; i < msg.length; i+=35) {
        str+= msg.slice(i, i+35);
        str+= "<br>";
        
      }
    }else{
      str += msg;
    }
  }
  
  
  str += "          <\/div>";
  str += "        <\/div>";
  $(".n-chat-logs").append(str);
  $("#cm-msg-"+INDEX).hide().fadeIn(300);
  if(type == 'self'){
   $("#nav-input").val(''); 
  }    
  $(".n-chat-logs").stop().animate({ scrollTop: $(".n-chat-logs")[0].scrollHeight}, 1000);   
  
  
}  
  
  
}



)

//Make the DIV element draggagle:
dragElement(document.getElementById("chat-circle2"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id ).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }



  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



const getMsgResponse = async (msg) => {
  console.log("index.html 10 | Processing...");
  url = "https://1cb0-35-247-76-214.ngrok.io/product/" + msg.toString()
  console.log(url);
  const request = await fetch(url);
  const data = await request.json();
  return data;
};


function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}