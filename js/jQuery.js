/* JQuery CODE */
$(document).ready(function() {
  var isTouchDevice = "ontouchstart" in window || "onmsgesturechange" in window;

  // Initialize introduction panels for hover
  $("#about-panel").hide();
  $("#education-panel").hide();
  $("#technical-panel").hide();

  // Initialize main menu options
  $("#Resume").hide();
  $("#Portfolio").hide();
  $("#Introduction").hide();
  $("#showResume").hide();

  /** Information Control panel
   *  Actions performed when information
   *  menu is chosen
   */
  $("#InformationC").click(function() {
    if (!isTouchDevice) {
      $("#about-panel").show();
      $("#education-panel").show();
      $("#technical-panel").show();
    }

    $("#ResumeActivate").show();
    $("#showResume").hide();

    $("#about-panel").hide();
    $("#education-panel").hide();
    $("#technical-panel").hide();

    $("#Resume").fadeOut();
    $("#Portfolio").fadeOut();
    $("#About").fadeOut();

    $("#Information").fadeIn();
  });

  /** Resume Control panel
   *  Actions performed when resume
   *  menu is chosen
   */
  $("#ResumeC").click(function() {
    if (!isTouchDevice) {
      $("#about-panel").show();
      $("#education-panel").show();
      $("#technical-panel").show();
    }

    $("#ResumeActivate").show();
    $("#showResume").hide();

    $("#about-panel").hide();
    $("#education-panel").hide();
    $("#technical-panel").hide();

    $("#Information").fadeOut();
    $("#Portfolio").fadeOut();
    $("#About").fadeOut();

    $("#Resume").fadeIn();
  });

  /** Portfolio Control panel
   *  Actions performed when portfolio
   *  menu is chosen
   */
  $("#PortfolioC").click(function() {
    if (!isTouchDevice) {
      $("#about-panel").show();
      $("#education-panel").show();
      $("#technical-panel").show();
    }

    $("#ResumeActivate").show();
    $("#showResume").hide();

    $("#about-panel").hide();
    $("#education-panel").hide();
    $("#technical-panel").hide();

    $("#Resume").fadeOut();
    $("#Information").fadeOut();
    $("#About").fadeOut();

    $("#Portfolio").fadeIn();
  });

  /** About Control panel
   *  Actions performed when about
   *  menu is chosen
   */
  $("#AboutC").click(function() {
    if (!isTouchDevice) {
      $("#about-panel").show();
      $("#education-panel").show();
      $("#technical-panel").show();
    }

    $("#ResumeActivate").show();
    $("#showResume").hide();

    $("#about-panel").hide();
    $("#education-panel").hide();
    $("#technical-panel").hide();

    $("#Resume").fadeOut();
    $("#Portfolio").fadeOut();
    $("#Information").fadeOut();

    $("#About").fadeIn();
  });

  /** Resume Button
   *  Displays Resume when the "display resume" button
   *  is clicked
   */
  $("#ResumeActivate").click(function() {
    $("#ResumeActivate").fadeOut();
    $("#showResume").fadeIn();
  });

  /*NOTE: This if statement  applies to if the device is not a touchscreen*/
  if (!isTouchDevice) {
      
    /** aboutl
     *  if the mouse is hovered, information contained in the
     *  about information sections is displayed
     */

    $("#aboutl").hover(
      function() {
        //$("#about-panel").show();
        $("#about-panel").fadeIn("slow");
        $("#education-panel").hide();
        $("#technical-panel").hide();
        $("#aboutl").css("background", "rgba(255, 255, 255, 0.0)");
        $("#aboutl").css("color", "#D86C6F");
      },
      function() {
        $("#about-panel").hide();
        $("#aboutl").css("background-color", "#D86C6F");
        $("#aboutl").css("color", "white");
      }
    );

    /** educationl
     *  if the mouse is hovered, information contained in the
     *  education information sections is displayed
     */

    $("#educationl").hover(
      function() {
        $("#education-panel").fadeIn("slow");
        $("#about-panel").hide();
        $("#technical-panel").hide();
        $("#educationl").css("background", "rgba(255, 255, 255, 0.0)");
        $("#educationl").css("color", "#5DB158");
      },
      function() {
        $("#education-panel").hide();
        $("#educationl").css("background-color", "#5DB158");
        $("#educationl").css("color", "white");
      }
    );

    /** technicall
     *  if the mouse is hovered, information contained in the
     *  technical information sections is displayed
     */

    $("#technicall").hover(
      function() {
        $("#technical-panel").fadeIn("slow");
        $("#technicall").css("background", "rgba(255, 255, 255, 0.0)");
        $("#technicall").css("color", "#4C6E8D");
      },
      function() {
        $("#technical-panel").hide();
        $("#technicall").css("background-color", "#4C6E8D");
        $("#technicall").css("color", "white");
      }
    );
  } else {
    $("#about-panel").show();
    $("#education-panel").show();
    $("#technical-panel").show();
  }

/* PROJECTS MENU */

  // Initialize portfolio navigation
  $("#bEnd").hide();
  $("#algEnd").hide();
  $("#testEnd").hide();

  /** frontSwitch
   *  Displays Front End projects when
   *  front-end navigation option is selected.
   */
  $("#frontSwitch").click(function() {
    $("#fEnd").show();
    $("#bEnd").hide();
    $("#algEnd").hide();
    $("#testEnd").hide();
  });

  /** backSwitch
   *  Displays Back End projects when
   *  front-end navigation option is selected.
   */
  $("#backSwitch").click(function() {
    $("#bEnd").show();
    $("#fEnd").hide();
    $("#algEnd").hide();
    $("#testEnd").hide();
  });

  /** algSwitch
   *  Displays algorthms when
   *  front-end navigation option is selected.
   */
  $("#algSwitch").click(function() {
    $("#algEnd").show();
    $("#fEnd").hide();
    $("#bEnd").hide();
    $("#testEnd").hide();
  });

  /** testSwitch
   *  Displays unit test projects when
   *  front-end navigation option is selected.
   */
  $("#testSwitch").click(function() {
    $("#testEnd").show();
    $("#algEnd").hide();
    $("#fEnd").hide();
    $("#bEnd").hide();
  });
});
