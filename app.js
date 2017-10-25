// IIFE
(function(){

  window.onload = function() {
    alert("Init ----- Hello world!");

    var pagesModules = [];
    var header = document.getElementById('main_header');
    var section1 = document.getElementById('section_one');
    var section2 = document.getElementById('section_two');
    var section3 = document.getElementById('section_three');
    var footer = document.getElementById('main_footer');

    // Récupérer les modules dans html
    function getPageModules() {
      pagesModules.push(header, section1, section2, section3, footer);
      for (var i = 0; i < pagesModules.length; i++) {
        console.log("#" + pagesModules[i].id + " est un module ");
      };
      console.log(pagesModules);
      // console.log(pagesModules.length);
    }
    getPageModules();

    // Retourne le module stylisé
    function styliserModule(num, color, bg) {
    // console.log(pagesModules[num].style.color = color);
    // console.log(pagesModules[num].style.background = bg);
      pagesModules[num].style.color = color;
      pagesModules[num].style.background = bg;
    }
    styliserModule(0, "red", "pink");
    styliserModule(4, "red", "pink");

    // Retourne un objet avec ses attributs tagName, className ou ID & ses dimensions
    function getModulesInfos(num) {
      // console.log(`Module: ${pagesModules[num].tagName}, ID du module: ${pagesModules[num].id}`);
      // console.log(`Classe du module: ${pagesModules[num].className}`);
      // console.log(pagesModules[num].getBoundingClientRect());
      console.log(obj = {
        module: pagesModules[num].tagName,
        id: pagesModules[num].id,
        classe: pagesModules[num].className,
        dimensions: pagesModules[num].getBoundingClientRect()
      });
    }
    getModulesInfos(0);
    getModulesInfos(1);
    getModulesInfos(2);
    getModulesInfos(3);
    getModulesInfos(4);
  };
}());
