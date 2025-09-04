export interface Product {
    name: string;
    stock: number;
    brand: string;
    price: number;
}

export const seedData: Product[] = [
  {
    name: "Guitarra Acústica",
    stock: 15,
    brand: "Yamaha",
    price: 199.99
  },
  {
    name: "Batería Acústica",
    stock: 5,
    brand: "Pearl",
    price: 899.50
  },
  {
    name: "Teclado Eléctrico",
    stock: 12,
    brand: "Casio",
    price: 350.00
  },
  {
    name: "Violín Clásico",
    stock: 8,
    brand: "Stradella",
    price: 420.75
  },
  {
    name: "Bajo Eléctrico",
    stock: 10,
    brand: "Fender",
    price: 650.00
  },
  {
    name: "Flauta Traversa",
    stock: 20,
    brand: "Yamaha",
    price: 120.99
  },
  {
    name: "Saxofón Alto",
    stock: 6,
    brand: "Selmer",
    price: 1100.00
  },
  {
    name: "Trompeta",
    stock: 14,
    brand: "Bach",
    price: 499.90
  },
  {
    name: "Ukelele",
    stock: 25,
    brand: "Kala",
    price: 89.99
  },
  {
    name: "Cajón Peruano",
    stock: 9,
    brand: "Meinl",
    price: 150.00
  }
]