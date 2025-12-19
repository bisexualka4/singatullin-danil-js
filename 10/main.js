class Transport {
      constructor(color, material, manufacturer, maxSpeed) {
        this.color = color;
        this.material = material;
        this.manufacturer = manufacturer;
        this.maxSpeed = maxSpeed;
      }

      startEngine() {
        console.log('engine starting...');
      }

      showCharacteristics() {
        for (var prop in this) {
          if (Object.prototype.hasOwnProperty.call(this, prop)) {
            console.log(`${prop}: ${this[prop]}`);
          }
        }
      }
    }

    console.log('ЛОДКА');
    class Boat {
      constructor(color, material, maxSpeed) {
        this.color = color;
        this.material = material;
        this.maxSpeed = maxSpeed;
      }

      sail() {
        console.log('плывём по волнам!');
      }

      showCharacteristics() {
        for (var prop in this) {
          if (Object.prototype.hasOwnProperty.call(this, prop)) {
            console.log(`${prop}: ${this[prop]}`);
          }
        }
      }
    }

    const boat = new Boat('желтый', 'пластик', 59);
    boat.sail();
    boat.showCharacteristics();

    console.log('///');

    console.log('АВТОБУС');
    class Bus extends Transport {
      constructor(color, material, manufacturer, maxSpeed, passengerCount) {
        super(color, material, manufacturer, maxSpeed);
        this.passengerCount = passengerCount;
      }

      drive() {
        console.log(`едем по маршруту с ${this.passengerCount} пассажирами`);
      }
    }

    const bus = new Bus('красный', 'металл', 'хз', 80, 37);
    bus.showCharacteristics();
    bus.drive();

    console.log('///');

    console.log('САМОЛЁТ');
    class Plane extends Transport {
      constructor(color, material, manufacturer, maxSpeed, maxHeight) {
        super(color, material, manufacturer, maxSpeed);
        this.maxHeight = maxHeight;
      }

      startEngine() {
        console.log('турбины запускаются...');
      }

      fly() {
        console.log('flying...');
      }
    }

    const plane = new Plane('белый', 'алюминий', 'победа', 80, 45);
    plane.startEngine();
    plane.fly();
    plane.showCharacteristics();