import { Map } from '../amap.map';
import { Bounds } from '../amap.bounds';
import { PolylineOptions } from '../../interface/overlays/polyline-options.interface';

export interface CPolyline {
  new (opts: PolylineOptions): Polyline;
}

export interface Polyline {
  setPath(path: number[][]): void;
  getPath(): number[][];
  setOptions(opt: PolylineOptions): void;
  getOptions(): PolylineOptions;
  getLength(): number;
  getBounds(): Bounds;
  hide(): void;
  show(): void;
  setMap(map: Map): void;
  setExtData(ext: any): void;
  getExtData(): any;
}
