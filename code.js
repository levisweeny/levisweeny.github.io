var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5ad6de89-8876-439f-90a9-8bb30d34069f","ec21a06b-cfde-4110-8cca-71a3b63d03a0","36df4d87-f4e1-4861-8cc3-6a3ac1bdcac4","9cac5613-bb4e-4275-9e2a-308e9bb42794","e6cb5bec-72c4-4489-b3d7-f9fdb79b14c6","988d3991-2770-40d3-a99d-e3d83229998e","4152901a-54fa-4f7c-9612-e35a713c7283","1c775d0e-70db-4cf5-a1e1-a42024bea6bb","110adb50-9a8f-4946-b8fe-595b917857a9","76ccc8c7-5561-42dc-b681-bd57fa319fe4","e9b5e881-a255-4e29-9b39-2a9c3655b10f","917ca1af-870f-4043-8d38-e44c55b513d3","c11cfe6b-7725-4765-890d-82cd9b8ff683","7f1f1842-415f-402e-a50f-3f07a6caa6e5","5d06e661-a9a8-4d65-9aca-f0bd3b37766e","25251f7d-49a1-44d9-b19b-6f8a6b7873ff","181f073c-07c1-4c24-8f56-19afcc1b0710","c412d208-56ea-4054-9567-624732360a81","3f2cfada-9b3d-4d47-86bc-a4d8678c3c8c","0b4ab748-adc6-4b18-b04f-1beb3defba27","6ac7e652-a996-4928-8625-f47959e5d54a","c69cfe46-aa12-4e32-b5c7-a5515f29657c","45c8b7e8-74ad-4d0c-8564-d1e2977f6cac","c44fec84-93ee-40f6-bf5b-d8e6693ab4c0","440ea2f3-999c-4e66-aaf3-2c8ea59067b0","abaf6c62-1c7f-4a0b-ad01-b095c68812bd","84b238aa-f904-4a12-990e-e9c75a618a98","57f3839e-6f8a-41bb-8f68-a5d8976e4e1b"],"propsByKey":{"5ad6de89-8876-439f-90a9-8bb30d34069f":{"name":"startbac","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/5ad6de89-8876-439f-90a9-8bb30d34069f.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"vssc09rCcGRIPW1QEVX7WNFRQEcEtUAj","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/5ad6de89-8876-439f-90a9-8bb30d34069f.png"},"ec21a06b-cfde-4110-8cca-71a3b63d03a0":{"name":"startButton","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MyQea.Uo_DcgwN0vmM2ZONVS9P7oQfZA","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ec21a06b-cfde-4110-8cca-71a3b63d03a0.png"},"36df4d87-f4e1-4861-8cc3-6a3ac1bdcac4":{"name":"startButton_copy_1","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"N6Hnh2bVIBtCENCVZrY0dJ45PpTEIyo4","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/36df4d87-f4e1-4861-8cc3-6a3ac1bdcac4.png"},"9cac5613-bb4e-4275-9e2a-308e9bb42794":{"name":"fan","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/9cac5613-bb4e-4275-9e2a-308e9bb42794.png","frameSize":{"x":544,"y":544},"frameCount":1,"looping":true,"frameDelay":4,"version":"GbJtdIghgL07.RfzDz9Lb6y9TtXBhJ5r","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":544,"y":544},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/9cac5613-bb4e-4275-9e2a-308e9bb42794.png"},"e6cb5bec-72c4-4489-b3d7-f9fdb79b14c6":{"name":"box1","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/e6cb5bec-72c4-4489-b3d7-f9fdb79b14c6.png","frameSize":{"x":256,"y":256},"frameCount":1,"looping":true,"frameDelay":4,"version":"swN_L6RGoHcsmaxXTilTlGiPqUQ7c.mR","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":256},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/e6cb5bec-72c4-4489-b3d7-f9fdb79b14c6.png"},"988d3991-2770-40d3-a99d-e3d83229998e":{"name":"spawnPlatform","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/988d3991-2770-40d3-a99d-e3d83229998e.png","frameSize":{"x":700,"y":700},"frameCount":1,"looping":true,"frameDelay":4,"version":"vatyRTkN.cJ.N2eNEkU1yeRhqyU5gPbu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":700},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/988d3991-2770-40d3-a99d-e3d83229998e.png"},"4152901a-54fa-4f7c-9612-e35a713c7283":{"name":"platformAfterFan","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/4152901a-54fa-4f7c-9612-e35a713c7283.png","frameSize":{"x":520,"y":520},"frameCount":1,"looping":true,"frameDelay":4,"version":"_WnaM0sHV7JK2waXQX.BkrkpGyE3eswd","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":520,"y":520},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/4152901a-54fa-4f7c-9612-e35a713c7283.png"},"1c775d0e-70db-4cf5-a1e1-a42024bea6bb":{"name":"Boxes","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/1c775d0e-70db-4cf5-a1e1-a42024bea6bb.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"ljCqN.nWjG6dG1Ji1e4xiTK6xizjPMHQ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/1c775d0e-70db-4cf5-a1e1-a42024bea6bb.png"},"110adb50-9a8f-4946-b8fe-595b917857a9":{"name":"arrowdirection","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/110adb50-9a8f-4946-b8fe-595b917857a9.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"vuv4LgbyK25D9FOart7rtP33HqsfjG70","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/110adb50-9a8f-4946-b8fe-595b917857a9.png"},"76ccc8c7-5561-42dc-b681-bd57fa319fe4":{"name":"arrowdirection2","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/76ccc8c7-5561-42dc-b681-bd57fa319fe4.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"AOGCA4WmImC.LCkiWnfZ3zRoxqK_z6wJ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/76ccc8c7-5561-42dc-b681-bd57fa319fe4.png"},"e9b5e881-a255-4e29-9b39-2a9c3655b10f":{"name":"title!","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/e9b5e881-a255-4e29-9b39-2a9c3655b10f.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":4,"version":"d0q7f7aMxTfr9eUEriynBztM6EemYjwy","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/e9b5e881-a255-4e29-9b39-2a9c3655b10f.png"},"917ca1af-870f-4043-8d38-e44c55b513d3":{"name":"backround","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/917ca1af-870f-4043-8d38-e44c55b513d3.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"3O0PDUvqTHq9Loji2XxJG6KKHsLyCWzZ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/917ca1af-870f-4043-8d38-e44c55b513d3.png"},"c11cfe6b-7725-4765-890d-82cd9b8ff683":{"name":"clear","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"7f1f1842-415f-402e-a50f-3f07a6caa6e5":{"name":"wasd","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":7,"looping":true,"frameDelay":12,"version":"t4HnybDRaLSnDkUZEanCU5S7_j7OttDG","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1536,"y":1536},"rootRelativePath":"assets/7f1f1842-415f-402e-a50f-3f07a6caa6e5.png"},"5d06e661-a9a8-4d65-9aca-f0bd3b37766e":{"name":"playerright","sourceUrl":null,"frameSize":{"x":704,"y":704},"frameCount":2,"looping":true,"frameDelay":20,"version":"k_HzhsCmXilrH2QueSzRwRLWL.iU3ikg","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":704,"y":1408},"rootRelativePath":"assets/5d06e661-a9a8-4d65-9aca-f0bd3b37766e.png"},"25251f7d-49a1-44d9-b19b-6f8a6b7873ff":{"name":"welcome","sourceUrl":null,"frameSize":{"x":180,"y":180},"frameCount":1,"looping":true,"frameDelay":12,"version":"UDTjtYQsRl59DyoC3LJpHgAzlEmEDGBW","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/25251f7d-49a1-44d9-b19b-6f8a6b7873ff.png"},"181f073c-07c1-4c24-8f56-19afcc1b0710":{"name":"animation_1!","sourceUrl":null,"frameSize":{"x":180,"y":180},"frameCount":1,"looping":true,"frameDelay":12,"version":"0m8kHPqaIFciKDmMZXobuAc6dv23MS6i","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":180},"rootRelativePath":"assets/181f073c-07c1-4c24-8f56-19afcc1b0710.png"},"c412d208-56ea-4054-9567-624732360a81":{"name":"pancakes2","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":2,"looping":true,"frameDelay":20,"version":"ZJq3QQv088bUzpJtS1nklPkvxHxpc1zp","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":400},"rootRelativePath":"assets/c412d208-56ea-4054-9567-624732360a81.png"},"3f2cfada-9b3d-4d47-86bc-a4d8678c3c8c":{"name":"GoodJob","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"C2b7QCMGKRnsiyl9dOVvKAmbblHjpQzi","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3f2cfada-9b3d-4d47-86bc-a4d8678c3c8c.png"},"0b4ab748-adc6-4b18-b04f-1beb3defba27":{"name":"restart","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"vKIGoL5thUtR9HB.4e9ihcsx94ww_FWW","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/0b4ab748-adc6-4b18-b04f-1beb3defba27.png"},"6ac7e652-a996-4928-8625-f47959e5d54a":{"name":"instructions","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"EoUx74.xX0iGSEciK_lmKeDYl5qk6Qei","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/6ac7e652-a996-4928-8625-f47959e5d54a.png"},"c69cfe46-aa12-4e32-b5c7-a5515f29657c":{"name":"title","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/c69cfe46-aa12-4e32-b5c7-a5515f29657c.png","frameSize":{"x":192,"y":192},"frameCount":1,"looping":true,"frameDelay":4,"version":"8AVbpGcg2rOMyYCMPwcWdv6j0PL4CKK8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":192},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/c69cfe46-aa12-4e32-b5c7-a5515f29657c.png"},"45c8b7e8-74ad-4d0c-8564-d1e2977f6cac":{"name":"animation_1","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/45c8b7e8-74ad-4d0c-8564-d1e2977f6cac.png","frameSize":{"x":192,"y":192},"frameCount":1,"looping":true,"frameDelay":4,"version":"JMm0rp9KbIDPX7F7vSdW44wsBi1naN6t","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":192},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/45c8b7e8-74ad-4d0c-8564-d1e2977f6cac.png"},"c44fec84-93ee-40f6-bf5b-d8e6693ab4c0":{"name":"thisWay","sourceUrl":null,"frameSize":{"x":640,"y":640},"frameCount":1,"looping":true,"frameDelay":12,"version":"XennaiFXJee2XjgDqFMgfyVlEFzmKkJU","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":640},"rootRelativePath":"assets/c44fec84-93ee-40f6-bf5b-d8e6693ab4c0.png"},"440ea2f3-999c-4e66-aaf3-2c8ea59067b0":{"name":"newWalls","sourceUrl":null,"frameSize":{"x":640,"y":640},"frameCount":1,"looping":true,"frameDelay":12,"version":"E2_DCwo7f_79Oxs5jzsiPLXCXaaoVl4l","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":640},"rootRelativePath":"assets/440ea2f3-999c-4e66-aaf3-2c8ea59067b0.png"},"abaf6c62-1c7f-4a0b-ad01-b095c68812bd":{"name":"afan!","sourceUrl":null,"frameSize":{"x":640,"y":640},"frameCount":1,"looping":true,"frameDelay":12,"version":"5v1_yBkjUqU3XVlCZwbGq.COjeFI.2kh","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":640},"rootRelativePath":"assets/abaf6c62-1c7f-4a0b-ad01-b095c68812bd.png"},"84b238aa-f904-4a12-990e-e9c75a618a98":{"name":"afan","sourceUrl":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/84b238aa-f904-4a12-990e-e9c75a618a98.png","frameSize":{"x":640,"y":640},"frameCount":1,"looping":true,"frameDelay":4,"version":"HuYgn2D_ew1WXM._glyZIXcpzGcYoJ7Y","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":640},"rootRelativePath":"assets/v3/animations/42Xi3IX5OOR1HfD1zpv-oMzVmHwfq6mUrg1k60F8-2Y/84b238aa-f904-4a12-990e-e9c75a618a98.png"},"57f3839e-6f8a-41bb-8f68-a5d8976e4e1b":{"name":"next","sourceUrl":null,"frameSize":{"x":544,"y":544},"frameCount":1,"looping":true,"frameDelay":12,"version":"TECPSYEmWhtmRJkbdjUcdZGSejuf6b2T","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":544,"y":544},"rootRelativePath":"assets/57f3839e-6f8a-41bb-8f68-a5d8976e4e1b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// playSound("assets/category_loops/vibrant_game_musical_harping_movement_loop_1.mp3");

var restart = null;
var bac = null;
var goodJob = null;
var next1 = null;

var fanSoundDetector = createSprite(1000, 300);
fanSoundDetector.setAnimation("clear");
fanSoundDetector.scale = 8;
fanSoundDetector.debug = false;

var checkHigh = 0;

var endCheck = 0;

var highYes = 0;

var fanSoundDetectorCheck = 1;

var start = 1;

var fanCheck = 0;

var jumps = 0;

var bestScore = 0;



var fan1 = createSprite(1000, 300);
fan1.setCollider("rectangle", 0, 0, 290, 1800, 0);
fan1.scale = 2;
fan1.setAnimation("fan");
fan1.scale = 0.5;
fan1.debug = false;



var bacround = createSprite(200, 200);
bacround.setAnimation("backround");
bacround.scale = 100;

var w = createSprite(200, 200);
w.setAnimation("wasd");
w.scale = 0.3;

var arrow1 = createSprite(1470, -500);
arrow1.scale = 1.2;
arrow1.rotation = 10;
arrow1.setAnimation("arrowdirection");

var arrow2 = createSprite(1470, -580);
arrow2.scale = 1.2;
arrow2.rotation = -25;
arrow2.setAnimation("arrowdirection2");

var welcome = createSprite(550, 247);
welcome.setAnimation("welcome");

var thisWay = createSprite(350, 340);
thisWay.setAnimation("thisWay");
thisWay.scale = 0.26;

var newWalls = createSprite(1280, -470);
newWalls.setAnimation("newWalls");
newWalls.scale = 0.26;

var afan = createSprite(800, 279);
afan.setAnimation("afan");
afan.scale = 0.26;

var player = createSprite(200, 200);
player.setAnimation("clear");
player.setAnimation("playerright");
player.scale = 0.15;
player.setCollider("rectangle", 0, 0, 250, 360, 0);
player.debug = false;

var spawnplat = createSprite(200, 400);
spawnplat.setAnimation("spawnPlatform");
spawnplat.setCollider("rectangle", 0, 0, 500, 45, 0);
spawnplat.scale = 1.1;
spawnplat.debug = false;

var spawnplatablejump = createSprite(200, 370);
spawnplatablejump.setAnimation("clear");
spawnplatablejump.scale = 6;
spawnplatablejump.setCollider("rectangle", 0, 0, 89, 1, 0);
spawnplatablejump.debug = false;

var spawnplatbackwallcollider = createSprite(-38, 200);
spawnplatbackwallcollider.setAnimation("clear");
spawnplatbackwallcollider.setCollider("rectangle", 0, 0, 20, 1000, 0);
spawnplatbackwallcollider.debug = false;



var firstJump = createSprite(600, 380);
firstJump.setAnimation("box1");
firstJump.scale = 0.7;
firstJump.setCollider("rectangle", 0, 0, 150, 70, 0);
firstJump.debug = false;

var firstJumpabletojump = createSprite(600, 380);
firstJumpabletojump.setAnimation("clear");
firstJumpabletojump.setCollider("rectangle", 0, 0, 147, 75, 0);
firstJumpabletojump.scale = 0.7;
firstJumpabletojump.debug = false;

var secondJump = createSprite(800, 340);
secondJump.setAnimation("box1");
secondJump.scale = 0.7;
secondJump.setCollider("rectangle", 0, 0, 150, 70, 0);
secondJump.debug = false;

var secondJumpabletojump = createSprite(800, 340);
secondJumpabletojump.setAnimation("clear");
secondJumpabletojump.setCollider("rectangle",0, 0, 95, 55, 0);
secondJumpabletojump.debug = false;

var platformAfterFan1 = createSprite(1350, -400);
platformAfterFan1.setAnimation("platformAfterFan");
platformAfterFan1.setCollider("rectangle", 0, 0, 390, 52, 0);
platformAfterFan1.debug = false;

var platformAfterFan1able = createSprite(1350, -400);
platformAfterFan1able.setAnimation("clear");
platformAfterFan1able.setCollider("rectangle", 0, 0, 385, 55, 0);
platformAfterFan1able.debug = false;

var firstwallsrightwall = createSprite(1520, -480);
firstwallsrightwall.setAnimation("clear");
firstwallsrightwall.setCollider("rectangle", 0, 0, 50, 355, 0);
firstwallsrightwall.debug = false;

var firstwallsrightwalljump = createSprite(1520, -480);
firstwallsrightwalljump.setAnimation("clear");
firstwallsrightwalljump.setCollider("rectangle", 0, 0, 55, 360, 0);
firstwallsrightwalljump.debug = false;

var box1 = createSprite(1350, -550);
box1.setAnimation("Boxes");
box1.setCollider("rectangle", 0, 0, 95, 79, 0);
box1.debug = false;

var box1able = createSprite(1350, -550);
box1able.setAnimation("Boxes");
box1able.setCollider("rectangle", 0, -5, 95, 79, 0);
box1able.debug = false;

var box2 = createSprite(1700, -680);
box2.setAnimation("Boxes");
box2.setCollider("rectangle", 0, 0, 95, 79, 0);
box2.debug = false;

var box2able = createSprite(1700, -680);
box2able.setAnimation("Boxes");
box2able.setCollider("rectangle", 0, -5, 95, 79, 0);
box2able.debug = false;

var pancakes = createSprite(1700, -740);
pancakes.setAnimation("pancakes2");
pancakes.setCollider("circle", 0, 0, 50);
pancakes.debug = false;
pancakes.scale = 0.5;

//startscreen
var startscreenBac = createSprite(200, 200);
startscreenBac.setAnimation("startbac");
startscreenBac.scale = 250;

var startscreenButton = createSprite(200, 200);
startscreenButton.setAnimation("startButton");
startscreenButton.setCollider("rectangle", 0, 0, 100, 50, 0);
startscreenButton.debug = false;

var title = createSprite(200, 120);
title.setAnimation("title");
title.scale = 1.5;

var instructions = createSprite(200, 280);
instructions.setAnimation("instructions");
instructions.scale = 0.7;

var byme = createSprite(200, 350);
byme.setAnimation("animation_1");

function draw() {
  background("white");
  
  if (player.isTouching(pancakes) || keyWentDown("l")){
  createEndScreen();
  endCheck = 1;
  }
  if (endCheck == 1) {
  player.x = 200;
  player.y = 200;
  restartButtonChecks();
  }
  
  //fans
  if (player.isTouching(fan1)){
  player.velocityY = player.velocityY -4.2;
    if (fanCheck == 0){
    fanCheck = 1;
    }
  } else {
  fanCheck = 0;
  }

  if (fanCheck == 1) {
  // playSound("assets/category_whoosh/animation_whoosh11.mp3", false);
  fanCheck = 2;
  }

  //fansmove
  fan1.x = randomNumber(999, 1001);
  fan1.y = randomNumber(299, 301);
 
  //fans sound for when close
  if (player.isTouching(fanSoundDetector)){
    if (fanSoundDetectorCheck == 1) {
    // playSound("assets/category_background/large_fan.mp3", true);
    fanSoundDetectorCheck = 2;
    }
  } else {
    if (fanSoundDetectorCheck ==2){
    // stopSound("assets/category_background/large_fan.mp3");
    fanSoundDetectorCheck = 1;
    }
  }

  //
  //
  //colliders
  colliders();
  
  //forstart
  
  startscreenButton.x = camera.x;
  
  startscreenButton.y = camera.y;
  
  if (startscreenButton.isTouching(startscreenBac)){
  player.x = 200;
  player.y = 200;
  }
  
  
  if (mouseIsOver(startscreenButton)){
  startscreenButton.scale = 1.1;
  } else {
  startscreenButton.scale = 1;
  }
  
  if (mousePressedOver(startscreenButton)){
    if (start == 1){
    startscreenBac.destroy();
    startscreenButton.destroy();
    title.destroy();
    byme.destroy();
    instructions.destroy();
    player.velocityY = 0;
    // playSound("assets/category_bell/hollow_bell_notification.mp3");
    }
  start = 2;
  }
  //
  //
  //
  
  //
  player.velocityY = player.velocityY + 2;
  
  //functions
  wasdCamera();
  wasd();
  voidCheck();
  abletojumpcheck();
  
  
  //

  drawSprites();
  
  if (endCheck == 1) {
  drawScores();
  }
}





function colliders(){
  player.collide(spawnplat);
  player.collide(spawnplatbackwallcollider);
  player.collide(firstJump);
  player.collide(secondJump);
  player.collide(platformAfterFan1);
  player.collide(firstwallsrightwall);
  player.collide(box1);
  player.collide(box2);
}


function wasdCamera(){
  camera.x = player.x;
  
  camera.y = player.y;
  
  if (keyDown("a")){
  camera.x = player.x;
  } else {
    if (player.velocityX < 0){
    camera.x = player.x;
    }
  }
  
  if (keyDown("d")){
  camera.x = player.x;
  } else {
    if (player.velocityX > 0){
    camera.x = player.x;
    }
  } 
}


function wasd(){
  if (player.isTouching(spawnplatablejump)){
  canJump();
  }

  
  if (keyDown("d")){
  player.setAnimation("playerright");
    if (player.velocityX < 9){
    player.velocityX = player.velocityX + 4.5;
    }
  } else {
    if (player.velocityX > 0){
    player.velocityX = player.velocityX - 1.5;
    }
  }
  
  if (keyDown("a")){
    //player.setAnimation("player left")
    if (player.velocityX > -9){
    player.velocityX = player.velocityX - 4.5;
    }
  } else {
    if (player.velocityX < 0){
    player.velocityX = player.velocityX + 1.5;
    }
  } 
}

function voidCheck(){
  if (player.y > 5000){
  player.y = 200;
  player.x = 200;
  player.velocityY = 0;
  player.velocityX = 0;
  // playSound("assets/category_alerts/retro_game_health_pickup_6.mp3");
  // stopSound("assets/category_loops/vibrant_game_musical_harping_movement_loop_1.mp3");
  // playSound("assets/category_loops/vibrant_game_musical_harping_movement_loop_1.mp3");
  // stopSound("assets/category_loops/vibrant_game_musical_harping_movement_loop_1.mp3");
  // playSound("assets/category_loops/vibrant_game_musical_harping_movement_loop_1.mp3");
  }
  
}




function abletojumpcheck(){
  if (player.isTouching(firstJumpabletojump)){
  canJump();
  }
  if (player.isTouching(secondJumpabletojump)){
  canJump();
  }
  if (player.isTouching(platformAfterFan1able)){
  canJump();
  }
  if (player.isTouching(firstwallsrightwalljump)){
  if (keyWentDown("w")){
  player.velocityY = -20;
  }
  }
  if (player.isTouching(box1able)){
  canJump();
  }
  if (player.isTouching(box2able)){
  canJump();
  }
}


function canJump(){
 if (keyDown("w")){
  player.velocityY = -20;
  jumps = jumps + 1;
  }
}

function drawScores(){
  
  if (bestScore == 0 || bestScore > jumps){
  bestScore = jumps;
  checkHigh = 1;
  }
  
  fill("black");
  textSize(25);
  
  text("Jumps: " + jumps, player.x - 44, player.y + 30);
  text("Best Score: " + bestScore, 138, 190);
  if (highYes == 1){
  text("New Best Score!", player.x - 82, player.y + 72);
  }
  if (checkHigh == 1){
  console.log("yes");
  highYes = 1;
  
  checkHigh = 0;
  }
}

function restartButtonChecks(){
  if (mouseIsOver(restart)){
  restart.scale = 0.7;
  } else {
  restart.scale = 0.6;
  }
  
  if (mouseIsOver(next1)){
  next1.scale = 0.38;
  } else {
  next1.scale = 0.32;
  }
  
  if (mousePressedOver(restart)){
  endCheck = 0;
  bac.visible = false;
  bac = null;
  restart.visible = false;
  restart = null;
  next1.visible = false;
  next1 = null;
  // stopSound("assets/category_loops/vibrant_game_musical_harping_movement_loop_1.mp3");
  // playSound("assets/category_loops/vibrant_game_musical_harping_movement_loop_1.mp3");
  // stopSound("assets/category_loops/vibrant_game_musical_harping_movement_loop_1.mp3");
  // playSound("assets/category_loops/vibrant_game_musical_harping_movement_loop_1.mp3");
  goodJob.visible = false;
  goodJob = null;
  jumps = 0;
  player.velocityY = 0;
  // playSound("assets/category_bell/vibrant_game_bell_twinkle_positive_touch_1.mp3");
  checkHigh = 0;
  highYes = 0;
  }
}

function createEndScreen(){
  bac = createSprite(200, 200);
  bac.setAnimation("startbac");
  bac.scale = 200;
  goodJob = createSprite(200, 100);
  goodJob.setAnimation("GoodJob");
  goodJob.scale = 1.5;
  restart = createSprite(210, 310);
  restart.setAnimation("restart");
  restart.setCollider("rectangle", 0, 0, 165, 70, 0);
  restart.dubug = false;
  restart.scale = 0.6;
  next1 = createSprite(212, 368);
  next1.setAnimation("next");
  next1.scale = 0.32;
  next1.setCollider("rectangle", 0, 0, 320, 120, 0);
  next1.debug = false;
  
  player.x = 200;
  player.y = 200;
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
