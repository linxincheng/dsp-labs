// Get the canvas element from the DOM
let width,
  height,
  ctx,
  canvas,
  GLOBE_RADIUS,
  GLOBE_CENTER_Z,
  PROJECTION_CENTER_X,
  PROJECTION_CENTER_Y,
  FIELD_OF_VIEW,
  DOT_RADIUS,
  image,
  image2,
  image3,
  image2Angular = -1,
  image2Speed = 80,
  sleepImage2Fps = 30;
let rotation = 0; // Rotation of the globe
let dots = []; // Every dots in an array
const CIRCLE_BG_COLOR = "#dddddd"; // circle color
const R_SIZE = 0.5; // global size
// const R_SIZE = 1.4; // global size
const LOGO_SIZE = 0.35; // logo size;
// const LOGO_SIZE = 0.5; // logo size;

const DOTS_AMOUNT = 750; // Amount of dots on the screen

function init() {
  canvas = document.querySelector("#home-white-wrap");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  ctx = canvas.getContext("2d");

  if (window.devicePixelRatio > 1) {
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.scale(2, 2);
  }
  /* ====================== */
  /* ====== VARIABLES ===== */
  /* ====================== */
  width = canvas.clientWidth; // Width of the canvas
  height = canvas.clientHeight; // Height of the canvas

  if (width > 400) {
    //   DOT_RADIUS = 4;
    // } else if (width > 300) {
    //   DOT_RADIUS = 3;
    // } else if (width > 200) {
    DOT_RADIUS = 2;
  } else {
    DOT_RADIUS = 1;
  }
  image = document.getElementById("source");
  image2 = document.getElementById("source-huan");
  image3 = document.getElementById("source-huan2");

  GLOBE_RADIUS = width * 0.7; // Radius of the globe
  GLOBE_CENTER_Z = -GLOBE_RADIUS; // Z value of the globe center
  PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
  PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
  // FIELD_OF_VIEW = width * 0.8;
  FIELD_OF_VIEW = width * R_SIZE;
  ctx.fillStyle = CIRCLE_BG_COLOR;
}

// init();

class Dot {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.xProject = 0;
    this.yProject = 0;
    this.sizeProjection = 0;
  }
  // Do some math to project the 3D position into the 2D canvas
  project(sin, cos, before = false) {
    const rotZ =
      -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
    if (before && FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ) >= 0.4) {
      return false;
    }
    const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
    this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
    this.xProject = rotX * this.sizeProjection + PROJECTION_CENTER_X;
    this.yProject = this.y * this.sizeProjection + PROJECTION_CENTER_Y;
    return true;
  }
  // Draw the dot on the canvas
  draw(sin, cos, before) {
    let needdraw = this.project(sin, cos, before);
    if (!needdraw) return false;
    ctx.beginPath();
    ctx.arc(
      this.xProject,
      this.yProject,
      DOT_RADIUS * this.sizeProjection,
      0,
      Math.PI * 2
    );
    ctx.closePath();
    // ctx.fillStyle = CIRCLE_BG_COLOR;
    ctx.fill();
    return true;
  }
}

function createDots() {
  // Empty the array of dots
  dots.length = 0;

  // Create a new dot based on the amount needed
  for (let i = 0; i < DOTS_AMOUNT; i++) {
    const theta = Math.random() * 2 * Math.PI; // Random value between [0, 2PI]
    const phi = Math.acos(Math.random() * 2 - 1); // Random value between [-1, 1]

    // Calculate the [x, y, z] coordinates of the dot along the globe
    const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
    const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
    const z = GLOBE_RADIUS * Math.cos(phi) + GLOBE_CENTER_Z;
    dots.push(new Dot(x, y, z));
  }
}

let cancel = false;

/* ====================== */
/* ======== RENDER ====== */
/* ====================== */
function render(a) {
  // Clear the scene
  ctx.clearRect(0, 0, width, height);

  // Increase the globe rotation
  rotation = a * 0.00006;

  const sineRotation = Math.sin(rotation); // Sine of the rotation
  const cosineRotation = Math.cos(rotation); // Cosine of the rotation

  let secondRenderArr = {};
  let i = 0;
  while (i < DOTS_AMOUNT) {
    let isRender = dots[i].draw(sineRotation, cosineRotation, true);
    if (!isRender) {
      secondRenderArr[i] = true;
    }
    i++;
  }

  ctx.drawImage(
    image,
    canvas.clientWidth * ((1 - LOGO_SIZE) / 2),
    canvas.clientHeight * ((1 - LOGO_SIZE) / 2),
    canvas.clientWidth * LOGO_SIZE,
    canvas.clientHeight * LOGO_SIZE
  );

  if (image2Angular < 0.5) {
    ctx.save();
    let x = canvas.clientWidth * ((1 - LOGO_SIZE * 0.293) / 2.094);
    ctx.translate(x, 0);
    if (sleepImage2Fps > 0) {
      sleepImage2Fps--;
    } else {
      image2Angular += image2Speed / 1000;
    }
    ctx.scale(image2Angular, 1);
    ctx.translate(-x, 0);
    ctx.drawImage(
      image2,
      canvas.clientWidth * ((1 - LOGO_SIZE * 0.293) / 2.094),
      canvas.clientHeight * ((1 - LOGO_SIZE * 0.91) / 2),
      canvas.clientWidth * LOGO_SIZE * 0.295,
      canvas.clientHeight * LOGO_SIZE * 0.91
    );
    ctx.restore();
  } else if (image2Angular < 1) {
    ctx.save();
    let x = canvas.clientWidth * ((1 - LOGO_SIZE * 0.293) / 2.094);
    ctx.translate(x, 0);
    if (sleepImage2Fps > 0) {
      sleepImage2Fps--;
    } else {
      image2Angular += image2Speed / 1000;
    }
    ctx.scale(image2Angular, 1);
    ctx.translate(-x, 0);
    ctx.drawImage(
      image3,
      canvas.clientWidth * ((1 - LOGO_SIZE * 0.293) / 2.094),
      canvas.clientHeight * ((1 - LOGO_SIZE * 1) / 2),
      canvas.clientWidth * LOGO_SIZE * 0.293,
      canvas.clientHeight * LOGO_SIZE * 1
    );
    ctx.restore();
  } else {
    ctx.drawImage(
      image3,
      canvas.clientWidth * ((1 - LOGO_SIZE * 0.293) / 2.094),
      canvas.clientHeight * ((1 - LOGO_SIZE * 1) / 2),
      canvas.clientWidth * LOGO_SIZE * 0.293,
      canvas.clientHeight * LOGO_SIZE * 1
    );
  }

  i = 0;
  while (i < DOTS_AMOUNT) {
    if (secondRenderArr[i]) {
      dots[i].draw(sineRotation, cosineRotation, false);
    }
    i++;
  }

  secondRenderArr = null;
  // Load an image of intrinsic size 300x227 in CSS pixels
  if (cancel) return;

  window.requestAnimationFrame(render);
}
// Function called after the user resized its screen
function afterResize() {
  width = canvas.offsetWidth;
  height = canvas.offsetHeight;
  if (window.devicePixelRatio > 1) {
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.scale(2, 2);
  } else {
    canvas.width = width;
    canvas.height = height;
  }
  GLOBE_RADIUS = width * 0.7;
  GLOBE_CENTER_Z = -GLOBE_RADIUS;
  PROJECTION_CENTER_X = width / 2;
  PROJECTION_CENTER_Y = height / 2;
  FIELD_OF_VIEW = width * R_SIZE;
  if (width > 435) {
    DOT_RADIUS = 2;
  } else {
    DOT_RADIUS = 1;
  }
  image = document.getElementById("source");
  image2 = document.getElementById("source-huan");
  image3 = document.getElementById("source-huan2");

  createDots(); // Reset all dots

  ctx.fillStyle = CIRCLE_BG_COLOR;
}

class CanvasObj {
  constructor() {
    this.resizeTimeout = null;
    init();
    // Variable used to store a timeout when user resized its screen
    // Function called right after user resized its screen
    window.addEventListener("resize", this.onResize);

    // Populate the dots array with random dots
    createDots();
    // Render the scene
    // cancel = true;
    cancel = false;
    window.requestAnimationFrame(render);
  }

  onResize() {
    // Clear the timeout variable
    this.resizeTimeout = window.clearTimeout(this.resizeTimeout);
    // Store a new timeout to avoid calling afterResize for every resize event
    this.resizeTimeout = window.setTimeout(afterResize, 500);
  }

  destroyed() {
    this.resizeTimeout = window.clearTimeout(this.resizeTimeout);
    window.removeEventListener("resize", this.onResize);
    // window.cancelAnimationFrame(render);
    cancel = true;
  }
}

function load() {}

module.exports = CanvasObj;
