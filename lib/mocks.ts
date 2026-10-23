export type Stay = {
  id: string
  name: string
  city: string
  price: number
  rating: number
  type: string
  image: string
  description: string
  amenities: string[]
}

export const stays: Stay[] = [
  { id: '1', name: 'Departamento céntrico con balcón', city: 'Asunción', price: 280000, rating: 4.8, type: 'Departamento', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85', description: 'Departamento luminoso a pocas cuadras de la costanera, con balcón, cocina equipada y acceso con llave digital.', amenities: ['Wi-Fi', 'Aire acondicionado', 'Cocina equipada', 'Estacionamiento', 'Balcón'] },
  { id: '2', name: 'Habitación doble con desayuno', city: 'Asunción', price: 190000, rating: 4.5, type: 'Habitación', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=85', description: 'Una habitación cálida y tranquila con desayuno casero incluido.', amenities: ['Wi-Fi', 'Desayuno', 'Aire acondicionado'] },
  { id: '3', name: 'Casa con piscina', city: 'Encarnación', price: 450000, rating: 4.6, type: 'Casa', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85', description: 'Casa amplia para disfrutar en familia, con piscina y jardín privado.', amenities: ['Wi-Fi', 'Piscina', 'Estacionamiento', 'Cocina equipada'] },
  { id: '4', name: 'Loft con vista al río', city: 'Asunción', price: 360000, rating: 4.7, type: 'Departamento', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85', description: 'Loft moderno con una vista privilegiada y todo lo necesario para una estadía memorable.', amenities: ['Wi-Fi', 'Aire acondicionado', 'Balcón'] },
  { id: '5', name: 'Cabaña junto al lago', city: 'Villarrica', price: 320000, rating: 4.9, type: 'Cabaña', image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=85', description: 'Desconectá en una cabaña rodeada de naturaleza y tranquilidad.', amenities: ['Wi-Fi', 'Estacionamiento', 'Cocina equipada'] },
]

export const formatGs = (value: number) => `Gs. ${value.toLocaleString('es-PY')}`
