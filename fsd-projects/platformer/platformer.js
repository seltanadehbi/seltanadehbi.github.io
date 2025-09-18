$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(150, 650, 50, 20, "purple");
    createPlatform(250, 550, 50, 20, "purple");
    createPlatform(350, 650, 50, 20, "purple");
    createPlatform(500, 550, 50, 20, "pink");
    createPlatform(650, 600, 50, 20, "green");
    createPlatform(750, 600, 50, 20, "green");
    createPlatform(750, 600, 50, 20, "green");
    createPlatform(850, 550, 50, 20, "blue");
    createPlatform(950, 500, 50, 20, "lime");
    createPlatform(1000, 450, 50, 20, "lime");
    createPlatform(1100, 400, 50, 20, "lime");
    createPlatform(1200, 350, 50, 20, "lime");
    createPlatform(1250, 350, 50, 20, "lime");
    createPlatform(1350, 300, 50, 20, "yellow");
    createPlatform(450, 600, 50, 20, "purple");

  
     
    

  
   
    






    // TODO 3 - Create Collectables
    createCollectable("diamond",1350,270 )
    createCollectable("steve",550,500 )
    createCollectable("max",900,500 )






    
    // TODO 4 - Create Cannons
    createCannon("right", 400, 3000);
    createCannon("bottom", 610, 3000);
    createCannon("top", 900, 3500);

    
   



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
