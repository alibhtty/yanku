const alergenosIcons = {
    frutosSecos: "../../assets/icons/alergenos/frutos-secos.svg",
    gluten: "../../assets/icons/alergenos/gluten.svg",
    lacteos: "../../assets/icons/alergenos/lacteos.svg",
    alcohol: "../../assets/icons/alergenos/alcohol.svg",
    huevo: "../../assets/icons/alergenos/huevo.svg",
  };
  
const menuItems = {
    entradas: [
      {
        img: '../../assets/img/carta/nachos.png',
        nombre: 'Wantan Frito',
        descripcion: 'Crujientes totopos de maíz con frijoles negros, queso fundido y guacamole por encima.',
        precio: '12.00€',
        alergenos: ["gluten", "lacteos"],
      },
      {
        img: '../../assets/img/carta/guacamole.png',
        nombre: 'Rollitos de Primavera',
        descripcion: 'Crujientes totopos de maíz con frijoles negros, queso fundido y guacamole por encima.',
        precio: '8.00€',
      },
      {
        img: '../../assets/img/carta/sincronizada.png',
        nombre: 'Nabo incurtido',
        descripcion: 'Tortillas de trigo con jamón York, queso fundido y pico de gallo.',
        precio: '12.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/ensalada-de-nopales.png',
        nombre: 'Empanaditas Chinas',
        descripcion: 'Nopalitos frescos con cebolla, jitomate, cilantro, queso fresco y aceite de oliva.',
        precio: '8.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/sincronizada.png',
        nombre: 'Sopa Wantan',
        descripcion: 'Tortillas de trigo con jamón York, queso fundido y pico de gallo.',
        precio: '12.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/ensalada-de-nopales.png',
        nombre: 'Caldo con Verduras',
        descripcion: 'Nopalitos frescos con cebolla, jitomate, cilantro, queso fresco y aceite de oliva.',
        precio: '8.00€',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/ensalada-de-nopales.png',
        nombre: 'Caldo con Kion',
        descripcion: 'Nopalitos frescos con cebolla, jitomate, cilantro, queso fresco y aceite de oliva.',
        precio: '8.00€',
        alergenos: ["lacteos"]
      },
    ],
    segundos: [
      {
        img: '../../assets/img/carta/taco-de-tinga-de-pollo.png',
        nombre: 'Segundo de Pollo',
        descripcion: 'Pechuga de pollo desmenuzada en salsa de casa.',
        precio: '2.50€',
      },
      {
        img: '../../assets/img/carta/taco-de-cochinita-pibil.png',
        nombre: 'Taco de Cochinita Pibil',
        descripcion: 'Carne de cerdo en salsa pibil con cebolla morada encurtida en limón por encima.',
        precio: '2.50€',
      },
      {
        img: '../../assets/img/carta/taco-al-pastor.png',
        nombre: 'Taco al Pastor',
        descripcion: 'Cerdo adobado en salsa pastor, a la plancha y servido con cebollita, cilantro y limón.',
        precio: '2.50€',
      },
      {
        img: '../../assets/img/carta/taco-de-mole-verde.png',
        nombre: 'Taco de Mole Verde',
        descripcion: 'Pechuga de pollo desmenuzada en una salsa prehispánica de hierbas mexicanas.',
        precio: '2.50€',
        alergenos: ["lacteos"]
      },
      {
        img: '../../assets/img/carta/taco-de-carne.png',
        nombre: 'Taco de Carne',
        descripcion: 'Ternera desmenuzada en salsa de jitomate y cebolla.',
        precio: '2.50€',
      },
      {
        img: '../../assets/img/carta/taco-de-papa-con-chorizo.png',
        nombre: 'Taco de Papa con Chorizo',
        descripcion: 'Patata con chorizo.',
        precio: '2.50€',
      },
    ],
    postres: [
      {
        img: '../../assets/img/carta/tres-leches.png',
        nombre: 'Tartita Tres Leches',
        descripcion: 'Bañada con tres leches.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../../assets/img/carta/chocoflan.png',
        nombre: 'Chocoflán',
        descripcion: 'Esponjoso y cremoso.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
      {
        img: '../../assets/img/carta/chocoflan.png',
        nombre: 'Borrachito Catalán',
        descripcion: 'Bizcocho bañado en almíbar, brandy y relleno de crema catalana.',
        precio: '4.00€',
        alergenos: ["huevo", "lacteos"]
      },
    ],
    bebidas: [
      {
        img: '../../assets/img/carta/aguas-frescas.png',
        nombre: 'Zumo de frutas natural',
        descripcion: 'Zumo natural de naranja, papaya o fresa.',
        precio: '4.00€',
      },
      {
        img: '../../assets/img/carta/agua.png',
        nombre: 'Agua',
        descripcion: 'Agua 33cl, 50cl.',
        precio: '2.50€',
      },
      {
        img: '../../assets/img/carta/coca-cola.png',
        nombre: 'Coca-Cola',
        descripcion: 'Coca-Cola.',
        precio: '2.50€',
      },
      {
        img: '../../assets/img/carta/coca-cola-zero.png',
        nombre: 'Coca-Cola Zero',
        descripcion: 'Coca-Cola Zero.',
        precio: '2.50€',
      },
      {
        img: '../../assets/img/carta/nestea.png',
        nombre: 'Nestea',
        descripcion: 'Nestea.',
        precio: '3.00€',
      },
      {
        img: '../../assets/img/carta/aquarius.png',
        nombre: 'Aquarius',
        descripcion: 'Aquarius.',
        precio: '3.00€',
      },
      {
        img: '../../assets/img/carta/fanta-naranja.png',
        nombre: 'Fanta Naranja',
        descripcion: 'Fanta Naranja.',
        precio: '2.50€',
      },
      {
        img: '../../assets/img/carta/agua-con-gas.png',
        nombre: 'Agua con Gas',
        descripcion: 'Agua con Gas Malavella.',
        precio: '3.00€',
      },
    ],
  };