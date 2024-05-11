var loginStatus = sessionStorage.getItem('loginStatus');

// Adding Complaints 
$(document).ready(function() {
    
    $('#ekle').click(function() {
      
      var firmaAdi = $('#firmaAdi').val();
      var sikayetBaslik = $('#sikayetBaslik').val();
      var sikayet = $('#sikayet').val();
  
      
      var panel = {
        firmaAdi: firmaAdi,
        sikayetBaslik: sikayetBaslik,
        sikayet: sikayet
      };
  
    
      var panels = JSON.parse(sessionStorage.getItem('panels')) || [];
  
      panels.push(panel);
  
      sessionStorage.setItem('panels', JSON.stringify(panels));
  
      window.location.href = 'MyComplaints.html';
    });
  });
  
  $(document).ready(function() {

    var panels = JSON.parse(sessionStorage.getItem('panels'));
  

    for (var i = 0; i < panels.length; i++) {

      var firmaAdi = panels[i].firmaAdi;
      var sikayetBaslik = panels[i].sikayetBaslik;
      var sikayet = panels[i].sikayet;
  
      var panelHTML = '<div class="panel panel-default">';
      panelHTML += '<div class="cmp panel-heading text-center">' + firmaAdi + '</div>';
      panelHTML += '<div class="hdr panel-heading">' + sikayetBaslik + '</div>';
      panelHTML += '<div class="panel-body">' + sikayet + '</div>';
      panelHTML += '</div>';
  
      $('#sikayetlerim').append(panelHTML);
      $('.complaints').append(panelHTML);
    }
  });

// Checking Login Status

$(function(){
    $("#complaints").click(function(event){
        if (loginStatus == 2){
            event.preventDefault();
            window.location.href = "Complaints.html";
        }
        if (loginStatus == 1){
            event.preventDefault();
            alert("Şikayetler şirket kullanıcıları için tasarlanmıştır, şirket kullanıcısıysanız, lütfen şirket hesabınıza giriş yapınız.")
        }

        if (loginStatus == 0){
            event.preventDefault();
            alert("Lütfen giriş yapınız.")
            window.location.href = "Login.html";
        }

    })
})

$(function(){
    $("#add").click(function(event){
        if (loginStatus == 2){
            event.preventDefault();
            alert("Şikayet yazmak için lütfen kullanıcı hesabınızı kullanın.");
        }
        if (loginStatus == 1){
            event.preventDefault();
            window.location.href = "Add_Delete.html";
        }

        if (loginStatus == 0){
            event.preventDefault();
            alert("Lütfen giriş yapınız.")
            window.location.href = "Login.html";
        }

    })
})

$(function(){
    $("#myComplaints").click(function(event){
        if (loginStatus == 2){
            event.preventDefault();
            alert("Şikayet yazmak için lütfen kullanıcı hesabınızı kullanın.");
        }
        if (loginStatus == 1){
            event.preventDefault();
            window.location.href = "MyComplaints.html";
        }

        if (loginStatus == 0){
            event.preventDefault();
            alert("Lütfen giriş yapınız.")
            window.location.href = "Login.html";
        }

    })
})

$(function(){
    $("#Profile").click(function(event){
        if (loginStatus == 2){
            event.preventDefault();
            window.location.href = "ProfileC.html";
        }
        if (loginStatus == 1){
            event.preventDefault();
            window.location.href = "Profile.html";
        }
        
        if (loginStatus == 0){
            event.preventDefault();
            alert("Lütfen giriş yapınız.")
            window.location.href = "Login.html";
        }


    })
})



// Search
$(document).ready(function() {
    $("#search-bar").on("input", function() {
      var searchText = $(this).val().toLowerCase();
      $(".pnlskyt").each(function() {
        var panelHeading = $(this).find(".hdr").text().toLowerCase();
        if (panelHeading.indexOf(searchText) === -1) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    });
  });

  //Buttons
$(function(){
    $("#kaldir1").click(function(){
        $("#sikayet1").remove();
    })
    
    $("#kaldir2").click(function(){
        $("#sikayet2").remove();
    })
    
    $("#kaldir3").click(function(){
        $("#sikayet3").remove();
    })
    
    $("#kaldir4").click(function(){
        $("#sikayet4").remove();
    })
    
    $("#kaldir5").click(function(){
        $("#sikayet5").remove();
    })
    
    $("#kaldir6").click(function(){
        $("#sikayet6").remove();
    })
    
    $("#kaldir7").click(function(){
        $("#sikayet7").remove();
    })
    
    $("#kaldir8").click(function(){
        $("#sikayet8").remove();
    })
    
    $("#kaldir9").click(function(){
        $("#sikayet9").remove();
    })

    $("#kaldir10").click(function(){
        $("#sikayet10").remove();
    })


    $("#yanitla1").click(function(){
        if($("#inpyanit1").val() == ""){
            alert("Yanıt boş bırakılamaz.")
        }
        else{ 
            let yanit1 ="Yanıt: " + $("#inpyanit1").val();
            const Yanit1 = $("<div>").addClass("yanit panel-body").text(yanit1);
            $("#sikayet1").append(Yanit1);   
    }

       
    })

    $("#yanitla2").click(function(){
        if($("#inpyanit2").val() == ""){
            alert("Yanıt boş bırakılamaz.")
        }
        else{ 
            let yanit2 ="Yanıt: " + $("#inpyanit2").val();
            const Yanit2 = $("<div>").addClass("yanit panel-body").text(yanit2);
            $("#sikayet2").append(Yanit2);   
    }

    })    

    $("#yanitla3").click(function(){
        if($("#inpyanit3").val() == ""){
            alert("Yanıt boş bırakılamaz.")
        }
        else{ 
            let yanit3 ="Yanıt: " + $("#inpyanit3").val();
            const Yanit3 = $("<div>").addClass("yanit panel-body").text(yanit3);
            $("#sikayet3").append(Yanit3);   
    }

    })    

    $("#yanitla4").click(function(){
        if($("#inpyanit4").val() == ""){
            alert("Yanıt boş bırakılamaz.")
        }
        else{ 
            let yanit4 ="Yanıt: " + $("#inpyanit3").val();
            const Yanit4 = $("<div>").addClass("yanit panel-body").text(yanit4);
            $("#sikayet4").append(Yanit4);   
    }

    })    

    $("#yanitla5").click(function(){
        if($("#inpyanit5").val() == ""){
            alert("Yanıt boş bırakılamaz.")
        }
        else{ 
            let yanit5 ="Yanıt: " + $("#inpyanit5").val();
            const Yanit5 = $("<div>").addClass("yanit panel-body").text(yanit5);
            $("#sikayet5").append(Yanit5);   
    }

    })    

    $("#yanitla6").click(function(){
        if($("#inpyanit6").val() == ""){
            alert("Yanıt boş bırakılamaz.")
        }
        else{ 
            let yanit6 ="Yanıt: " + $("#inpyanit6").val();
            const Yanit6 = $("<div>").addClass("yanit panel-body").text(yanit6);
            $("#sikayet6").append(Yanit6);   
    }

    })

    $("#yanitla7").click(function(){
        if($("#inpyanit7").val() == ""){
            alert("Yanıt boş bırakılamaz.")
        }
        else{ 
            let yanit7 ="Yanıt: " + $("#inpyanit7").val();
            const Yanit7 = $("<div>").addClass("yanit panel-body").text(yanit7);
            $("#sikayet7").append(Yanit7);   
    }

    })

    $("#yanitla8").click(function(){
        if($("#inpyanit8").val() == ""){
            alert("Yanıt boş bırakılamaz.")
        }
        else{ 
            let yanit8 ="Yanıt: " + $("#inpyanit8").val();
            const Yanit8 = $("<div>").addClass("yanit panel-body").text(yanit8);
            $("#sikayet8").append(Yanit8);   
    }

    })

    $("#yanitla9").click(function(){
        if($("#inpyanit9").val() == ""){
            alert("Yanıt boş bırakılamaz.")
        }
        else{ 
            let yanit9 ="Yanıt: " + $("#inpyanit9").val();
            const Yanit9 = $("<div>").addClass("yanit panel-body").text(yanit9);
            $("#sikayet9").append(Yanit9);   
    }

    })

    $("#yanitla10").click(function(){
        if($("#inpyanit10").val() == ""){
            alert("Yanıt boş bırakılamaz.")
        }
        else{ 
            let yanit10 ="Yanıt: " + $("#inpyanit10").val();
            const Yanit10 = $("<div>").addClass("yanit panel-body").text(yanit10);
            $("#sikayet10").append(Yanit10);   
    }

    })
    
   $('#solved-button1').click(function() {
       
        $('#sikayet1').addClass('solved');
      });

      $('#solved-button2').click(function() {
       
        $('#sikayet2').addClass('solved');
      });

      $('#solved-button3').click(function() {
       
        $('#sikayet3').addClass('solved');
      });

      $('#solved-button4').click(function() {
       
        $('#sikayet4').addClass('solved');
      });

      $('#solved-button5').click(function() {
       
        $('#sikayet5').addClass('solved');
      });

      $('#solved-button6').click(function() {
       
        $('#sikayet6').addClass('solved');
      });

      $('#solved-button7').click(function() {
       
        $('#sikayet7').addClass('solved');
      });

      $('#solved-button8').click(function() {
       
        $('#sikayet8').addClass('solved');
      });

      $('#solved-button9').click(function() {
        
        $('#sikayet9').addClass('solved');
      });

      $('#solved-button10').click(function() {
        
        $('#sikayet10').addClass('solved');
      });


      $('#kapat1').click(function(){
        var kapatildi = "Şikayet Kapatıldı";
        var kapatildiP = '<div class="kpt panel-heading">' + kapatildi + '</div>';
        
        $('#inpyanit1').remove();
        $('#kapat1').remove();
        $("#yanitla1").remove();
        $("#solved-button1").remove();
        $("#sikayet1").append(kapatildiP);
      })

      $('#kapat2').click(function(){
        var kapatildi = "Şikayet Kapatıldı";
        var kapatildiP = '<div class="kpt panel-heading">' + kapatildi + '</div>';
        
        $('#inpyanit2').remove();
        $('#kapat2').remove();
        $("#yanitla2").remove();
        $("#solved-button2").remove();
        $("#sikayet2").append(kapatildiP);
      })

      $('#kapat3').click(function(){
        var kapatildi = "Şikayet Kapatıldı";
        var kapatildiP = '<div class="kpt panel-heading">' + kapatildi + '</div>';
        
        $('#inpyanit3').remove();
        $('#kapat3').remove();
        $("#yanitla3").remove();
        $("#solved-button3").remove();
        $("#sikayet3").append(kapatildiP);
      })

      $('#kapat4').click(function(){
        var kapatildi = "Şikayet Kapatıldı";
        var kapatildiP = '<div class="kpt panel-heading">' + kapatildi + '</div>';
        
        $('#inpyanit4').remove();
        $('#kapat4').remove();
        $("#yanitla4").remove();
        $("#solved-button4").remove();
        $("#sikayet4").append(kapatildiP);
      })

      $('#kapat5').click(function(){
        var kapatildi = "Şikayet Kapatıldı";
        var kapatildiP = '<div class="kpt panel-heading">' + kapatildi + '</div>';
        
        $('#inpyanit5').remove();
        $('#kapat5').remove();
        $("#yanitla5").remove();
        $("#solved-button5").remove();
        $("#sikayet5").append(kapatildiP);
      })

      $('#kapat6').click(function(){
        var kapatildi = "Şikayet Kapatıldı";
        var kapatildiP = '<div class="kpt panel-heading">' + kapatildi + '</div>';
        
        $('#inpyanit6').remove();
        $('#kapat6').remove();
        $("#yanitla6").remove();
        $("#solved-button6").remove();
        $("#sikayet6").append(kapatildiP);
      })

      $('#kapat7').click(function(){
        var kapatildi = "Şikayet Kapatıldı";
        var kapatildiP = '<div class="kpt panel-heading">' + kapatildi + '</div>';
        
        $('#inpyanit7').remove();
        $('#kapat7').remove();
        $("#yanitla7").remove();
        $("#solved-button7").remove();
        $("#sikayet7").append(kapatildiP);
      })

      $('#kapat8').click(function(){
        var kapatildi = "Şikayet Kapatıldı";
        var kapatildiP = '<div class="kpt panel-heading">' + kapatildi + '</div>';
        
        $('#inpyanit8').remove();
        $('#kapat8').remove();
        $("#yanitla8").remove();
        $("#solved-button8").remove();
        $("#sikayet8").append(kapatildiP);
      })

      $('#kapat9').click(function(){
        var kapatildi = "Şikayet Kapatıldı";
        var kapatildiP = '<div class="kpt panel-heading">' + kapatildi + '</div>';
        
        $('#inpyanit9').remove();
        $('#kapat9').remove();
        $("#yanitla9").remove();
        $("#solved-button9").remove();
        $("#sikayet9").append(kapatildiP);
      })

      $('#kapat10').click(function(){
        var kapatildi = "Şikayet Kapatıldı";
        var kapatildiP = '<div class="kpt panel-heading">' + kapatildi + '</div>';
        
        $('#inpyanit10').remove();
        $('#kapat10').remove();
        $("#yanitla10").remove();
        $("#solved-button10").remove();
        $("#sikayet10").append(kapatildiP);
      })

      
})

 

//Login script
    $(document).ready(function(){
        $("#btnlogin").click(function(event){
          
            var email = $("#floatingInput").val();
            var password = $("#floatingPassword").val();
            
            if(email == "" || password == "")
            {
            alert("Email veya şifre boş olamaz.")
            }

          
            loginStatus = 0;
            
            event.preventDefault(); 
            if(email == 'aliyazar@mail.com' && password == '1234'){
                loginStatus = 1;
                window.location.href = 'Profile.html';
            }

            if($("#floatingInput").val() == "egekılıc@sirket.com" && $("#floatingPassword").val() == "5678"){
                window.location.href = 'ProfileC.html';
                loginStatus = 2;
            }
            
            sessionStorage.setItem('loginStatus', loginStatus);

        })
    })



//MyComplaints script
$(function(){
    $("#sikayetEkle").click(function(){
        window.location.href ="Add_Delete.html";
    })
    
    $("#delete1").click(function(){
        $("#mySikayet1").remove();
    })

    $("#delete2").click(function(){
        $("#mySikayet2").remove();
    })

    $("#delete3").click(function(){
        $("#mySikayet3").remove();
    })

    $('#duzenle3').click(function() {
    $('#cmp3').html('<input id="input-field3" type="text" class="form-control">');
    $('#submit-button3').show();
    });
    
    $('#submit-button3').click(function() {
        var value = $('#input-field3').val();
        $('#cmp3').html(value);
        $('#submit-button3').hide();
  });

  $('#duzenle2').click(function() {
    $('#cmp2').html('<input id="input-field2" type="text" class="form-control">');
    $('#submit-button2').show();
    });
   
    $('#submit-button2').click(function() {
        var value = $('#input-field2').val();
        $('#cmp2').html(value);
        $('#submit-button2').hide();
  });

  $('#duzenle1').click(function() {
    $('#cmp1').html('<input id="input-field1" type="text" class="form-control">');
    $('#submit-button1').show();
    });
    
    $('#submit-button1').click(function() {
        var value = $('#input-field1').val();
        $('#cmp1').html(value);
        $('#submit-button1').hide();
  });
})


