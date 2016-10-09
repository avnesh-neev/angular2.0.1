import { Injectable } from "@angular/core";

interface EndPoint {
    baseUrl: string;
    requiresAuthentication: boolean;
}

interface ResourceLocator {
    [key: string]: EndPoint;
}

interface XResourceLocator {
    x: ResourceLocator;
}

interface YResourceLocator {
    y: ResourceLocator;
}

@Injectable()
export class APIConfigurations implements XResourceLocator, YResourceLocator {
    private _config;

    constructor() {
        this._config = require("./api-config.json");
    }

    public get x(): ResourceLocator {
        return this.clone(this._config.x);
    }

    public get y(): ResourceLocator {
        return this.clone(this._config.y);
    }

    private clone<T>(value: T): T {
        return JSON.parse(JSON.stringify(value));
    }
}
