
import { btoa, atob } from 'Base64'

export function encode(value) {
  return typeof btoa === undefined ? encodeURIComponent : btoa(value)
}

export function decode(value) {
  return typeof atob === undefined ? decodeURIComponent : atob(value)
}
