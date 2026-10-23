import { stays } from './mocks'

const wait = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getStays() { await wait(); return stays }
export async function getStay(id: string) { await wait(); return stays.find((stay) => stay.id === id) ?? stays[0] }
export async function getAvailability(_id: string, _checkIn: string, _checkOut: string) { await wait(); return { available: true } }
export async function createReservation(payload: Record<string, unknown>) { await wait(650); return { ...payload, code: 'HPY-4829' } }
