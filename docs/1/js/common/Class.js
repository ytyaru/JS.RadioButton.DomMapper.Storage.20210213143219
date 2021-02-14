export default class Class {
    static #paths = ['../radiobutton/parser/tag/', '../radiobutton/parser/id/', '../storage/'];
    static async get(className) {
        for (let path of Class.#paths) {
            try {
                const module = await import(`${path}${className}.js`);
                if (module) { return module.default; }
            } catch (e) {}
        }
        return undefined;
    }
    /*
    static async get(className){
        const paths = Class.#paths.map(path=>`${path}${className}.js`);
        for (let path of paths) {
            const module = await Class.#get(path);
            console.log(module);
            if (module) { return module; }
        }
        console.log('あかん');
    }
    static async #get(path) {
        console.log(path);
        return await import(path)
                        .then(module=>module.default)
                        .catch(err=>{return undefined})
    }
    */
    /*
    static get(className){
        return import(`${Class.#paths[0]}${className}.js`)
                .then(module=>(module) ? module.default : import(`${Class.#paths[1]}${className}.js`).then(module=>module.default))
                .catch(err=>{import(`${Class.#paths[1]}${className}.js`).then(module=>module.default).catch(err=>{return undefined})})
    }
    static get(className){
        return import(`${Class.#paths[0]}${className}.js`)
                .then(module=>module.default)
                .catch(err=>{import(`${Class.#paths[1]}${className}.js`).then(module=>module.default).catch(err=>{return undefined})})
//                .catch(err=>{return undefined})
    }
    static get(className){
        const paths = Class.#paths.map(path=>`${path}${className}.js`);
        for (let path of paths) {
            const module = Class.#get(path);
            console.log(module);
            if (module) { return module; }
        }
        console.log('あかん');
    }

    static #get(path) {
        console.log(path);
        return import(path)
                .then(module=>module.default)
                .catch(err=>{return undefined})
    }

    */

}
