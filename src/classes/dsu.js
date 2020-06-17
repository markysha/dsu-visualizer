import _ from "lodash";

export default class DSU {
  constructor(size, settings = {}) {
    this.p = new Array(size).fill(0).map((_, i) => i);
    this.rk = new Array(size).fill(1);
    this.settings = settings;

    this._zip = {};
  }

  zip(v) {
    // console.log("zip ", v, this._zip[v]);
    if (this._zip[v] !== undefined) return this._zip[v];
    // console.log(this._zip);
    const sz = _.size(this._zip);
    this._zip[v] = sz;
    return sz;
  }

  _get(v) {
    // console.log(v, this.p[v]);
    if (this.p[v] === v) return v;
    const pv = this._get(this.p[v]);
    this.p[v] = pv;
    return this.p[v];
  }

  get(v) {
    return this._get(this.zip(v));
  }

  _unite(a, b) {
    // console.log("_unite ", a, b);
    a = this._get(a);
    b = this._get(b);
    // console.log("_unite1 ", a, b);

    if (a === b) return false;

    this.p[a] = b;
    
    return true;
  }

  unite(a, b) {
    // console.log("unite ", a, b);
    return this._unite(this.zip(a), this.zip(b));
  }
}