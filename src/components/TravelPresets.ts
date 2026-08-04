import { TravelDestination } from './LiveAgentTypes';

export const TRAVEL_PRESETS: TravelDestination[] = [
  {
    id: 'diner',
    name: "Diner Americano",
    category: "Restaurante",
    description: "Un clásico diner americano para practicar pedir comida.",
    location: "Main Street, USA"
  },
  {
    id: 'supermarket',
    name: "Supermercado",
    category: "Compras",
    description: "Supermercado local para practicar hacer compras.",
    location: "Broadway Ave, USA"
  },
  {
    id: 'gas_station',
    name: "Gasolinera",
    category: "Servicio",
    description: "Estación de servicio y tienda de conveniencia.",
    location: "Highway 66, USA"
  },
  {
    id: 'hotel',
    name: "Recepción de Hotel",
    category: "Alojamiento",
    description: "Recepción para practicar registro y peticiones.",
    location: "Park Avenue, USA"
  }
];
