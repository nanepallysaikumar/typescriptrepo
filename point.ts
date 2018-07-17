import {PointData} from './pointinterface';
export class Point {
    constructor(private x:number,private y:number) {
    }
    
    getPoint() {
        console.log("get the point coordinates",this.x,"space",this.y);
    }
    setPoint(point: PointData) {
        this.x = point.x;
        this.y = point.y;
    }
}
