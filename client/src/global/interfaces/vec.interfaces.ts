export interface Vector {
  x: number;
}

export type VectorType = keyof Vector;

export interface Vector2 {
  x: number;
  y: number;
}

export type Vector2Type = keyof Vector2;

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export type Vector3Type = keyof Vector3;

export interface Vector4 {
  x: number;
  y: number;
  z: number;
  w: number;
}

export type Vector4Type = keyof Vector4;

export interface Vector5 {
  x: number;
  y: number;
  z: number;
  w: number;
  v: number;
}

export type Vector5Type = keyof Vector5;
