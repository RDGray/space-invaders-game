const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
  constructor() {
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.rotation = 0;

    //js api to create image
    const image = new Image();
    image.src = "./dist/assets/img/hero.png";

    //Only after loads its declared
    image.onload = () => {
      const scale = 0.15;
      this.image = image;
      this.width = image.width * scale; // make the width of the image the same as the canvas
      this.height = image.height * scale;

      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 20,
      };
    };
  }

  draw() {
    // c.fillRect(0, 0, canvas.width, canvas.height); //
    c.save();
    c.translate(
      player.position.x + player.width / 2,
      player.position.y + player.height / 2
    );

    c.rotate(this.rotation);

    c.translate(
      -player.position.x - player.width / 2,
      -player.position.y - player.height / 2
    );

    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    c.restore();
  }
  update() {
    // add only if image is loaded
    if (this.image) {
      this.position.x += this.velocity.x;

      this.draw();
    }
  }
}

class Projectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = this.velocity;
  }
}

const player = new Player();
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  ArrowDown: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);

  //black color background

  c.fillStyle = `black`;
  c.fillRect(0, 0, canvas.width, canvas.height);

  player.update();
  const speed = 10;
  //left
  if (keys.a.pressed && player.position.x >= 0) {
    player.velocity.x = -speed;
    player.rotation = -0.15;
    //right
  } else if (
    keys.d.pressed &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.x = speed;
    player.rotation = 0.15;
    //Left
  } else if (keys.ArrowLeft.pressed && player.position.x >= 0) {
    player.velocity.x = -speed;
    player.rotation = -0.15;
    //Right
  } else if (
    keys.ArrowRight.pressed &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.x = speed;
    player.rotation = 0.15;
    //Stand By
  } else {
    player.velocity.x = 0;
    player.rotation = 0;
  }
}
animate();

addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "a":
      keys.a.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;

      break;
    case "w":
      keys.w.pressed = true;
      break;
    case "s":
      keys.s.pressed = true;
      break;

    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;

      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;

      break;
    case "ArrowUp":
      keys.ArrowUp.pressed = true;
      break;
    case "ArrowDown":
      keys.ArrowDown.pressed = true;
      break;

    case " ":
      break;
  }
  console.log(key);
});

addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "a":
      console.log(`left`);
      keys.a.pressed = false;
      break;
    case "d":
      console.log(`right`);
      keys.d.pressed = false;

      break;
    case "w":
      console.log(`up`);
      keys.w.pressed = false;
      break;
    case "s":
      console.log(`down`);
      keys.s.pressed = false;
      break;

    case "ArrowLeft":
      console.log(`left`);
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowRight":
      console.log(`right`);
      keys.ArrowRight.pressed = false;

      break;
    case "ArrowUp":
      console.log(`up`);
      keys.ArrowUp.pressed = false;
      break;
    case "ArrowDown":
      console.log(`down`);
      keys.ArrowDown.pressed = false;
      break;

    case " ":
      console.log(`shoot`);
      break;
  }
  console.log(key);
});
