const LV_MAP_RES = 'lv_map_json';

interface ILVData {
    map: any[][];           // 地图数据
    next: any[];            // 待发
    types: any[];           // 类型种类
    maxScore: number;       // 最高分
    cellScore: number;      // 底分
}

class DataMrg {
    protected static _instance: DataMrg;
    public static getIns (): DataMrg {
        let Class = this;
        if( !Class._instance )
            Class._instance = new DataMrg();
        return Class._instance;
    }
    
    private _user: any;             // 用户数据
    private _lvMap: ILVData[];           // 关卡数据
    
    // 加载关卡数据
    async loadLVMap ( res: string = LV_MAP_RES ) {
        this._lvMap = await RES.getResAsync( res );
    }
    
    getLvDt ( lv: number ): ILVData {
        if( this._lvMap[ lv ] )
            return this._lvMap[ lv ];
        return null;
    }
}