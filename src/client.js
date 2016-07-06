const PIXI = require('pixi.js')
// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer = new PIXI.WebGLRenderer(800, 600)

// The renderer will create a canvas element for you that you can then insert into the DOM.
document.body.appendChild(renderer.view)

// You need to create a root container that will hold the scene you want to draw.
var stage = global.stage = new PIXI.Container()

// Declare a global variable for our sprite so that the animate function can access it.
const bunny = global.bunny = PIXI.Sprite.fromImage('bunny.gif')
bunny.position.x = 400
bunny.position.y = 300

bunny.anchor.x = 0.5
bunny.anchor.y = 0.5

bunny.scale.x = 2
bunny.scale.y = 2

stage.addChild(bunny)

const hat = global.hat = PIXI.Sprite.fromImage('hat.png')
hat.position = {x: 0, y: -25}
hat.scale = {x: 0.1, y: 0.1}
hat.anchor = {x: 0.5, y: 0.5}
bunny.addChild(hat)

hat.interactive = true
hat.on('mouseover', (e) => {
  console.log('hat is bae', e.target, e.target === hat, e.target.position)
})

function animate() {
  // start the timer for the next animation loop
  requestAnimationFrame(animate)

  // each frame we spin the bunny around a bit
  // bunny.rotation += 0.01

  // this is the main render call that makes pixi draw your container and its children.
  renderer.render(stage)
}
animate()
