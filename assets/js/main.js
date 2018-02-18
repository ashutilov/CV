var CV = (function() {

  var getCVData = function(callback) {
    $.get('assets/js/data.json', function(data) {
        callback(data);
    });
  }

  var initEvents = function() {
    $(window).scroll( function(){
    
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);  
            }
            
        });

        showToTopBtn();
    
    });

    function showToTopBtn() {
        if ($(this).scrollTop()) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    }

    $("#to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

  }

  var showPersonal = function(data) {
    var obj = data.personal;

      for (item in obj) {
          $("#personal").append('<div class="row  cv-section hideme">' +
            '<div class="col-sm-3 cv-item-title">' + 
                '<h4 class="item-title-date">' + item + '</h4>' +
            '</div>' +
            '<div class="col-sm-9 cv-item">' +
                '<p>' + obj[item] + '</p>' +
            '</div>' +
            '</div>')
        
      }

  };
  
  var showEducation = function(data) {
    var i = 0,
        len = data.education.length,
        item = data.education;

      for (; i<len; i++) {
          $("#education").append('<div class="row  cv-section hideme">' +
            '<div class="col-sm-3 cv-item-title">' + 
                '<h4 class="item-title-date">' + item[i].date + '</h4>' +
            '</div>' +
            '<div class="col-sm-9 cv-item">' +
                '<h3>UNIVERSITY & DEGREE</h3>' +
                '<p>' + item[i].school + ' - ' + item[i].description + '</p>' +
            '</div>' +
            '</div>')
        
      }

  };

  var showExperience = function(data) {
    var i = 0;
        len = data.experience.length;
        item = data.experience;
        

      for (; i<len; i++) {

        var j = 0,
        descLen = item[i].description.length,
        desc = '';

        for (; j<descLen; j++) {
            desc = desc + '<p>' + item[i].description[j] + '</p>';
        }

          $("#experience").append('<div class="row  cv-section hideme">' +
            '<div class="col-sm-3 cv-item-title">' + 
                '<h4 class="item-title-date">' + item[i].date + '</h4>' +
                '<p>' + item[i].company + '</p>' +
                '<p>' + item[i].position + '</p>' +
            '</div>' +
            '<div class="col-sm-9 cv-item">' +
                '<h3>JOB DESCRIPTION</h3>' + desc +
            '</div>' +
            '</div>')
        
      }

  };

  var showCertificates = function(data) {
    var i = 0,
        len = data.certifications.length,
        item = data.certifications;

      for (; i<len; i++) {
          $("#certifications").append('<div class="row  cv-section hideme">' +
            '<div class="col-sm-3 cv-item-title">' + 
                '<h4 class="item-title-date">' + item[i].date + '</h4>' +
            '</div>' +
            '<div class="col-sm-9 cv-item">' +
                '<h3>CERTIFICATION NAME & AUTHORITY</h3>' +
                '<p>' + item[i].name + ' - ' + item[i].authority + '</p>' +
            '</div>' +
            '</div>')
        
      }

  };

  var showAchievements = function(data) {
    var i = 0,
        len = data.achievements.length,
        item = data.achievements;

      for (; i<len; i++) {
          $("#achievements").append('<div class="row  cv-section hideme">' +
            '<div class="col-sm-12 cv-item">' +
                '<p>' + item[i] + '</p>' +
            '</div>' +
            '</div>')
        
      }

  };

  return {
    init: function() {
        getCVData(function(data) { 
            showPersonal(data);
            showExperience(data);
            showEducation(data);
            showCertificates(data);
            showAchievements(data);
            initEvents();
        })
    }
  }
})();

CV.init();