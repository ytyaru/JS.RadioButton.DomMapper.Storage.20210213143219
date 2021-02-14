import InputFromOptionElement from '../tag/InputFromOptionElement.js';
import InputFromValueAttribute from '../tag/InputFromValueAttribute.js';
import LabelFromOptionElement from '../tag/LabelFromOptionElement.js';
import LabelFromValueAttribute from '../tag/LabelFromValueAttribute.js';
import UniqueIdFromOptionElement from '../id/UniqueIdFromOptionElement.js';
/*
*/
export default class Class {
    /*
    static get(className){
//        return Function(`return (${className})`)();
//        return Function(`import ${className} from '../tag/${className}.js'; return (${className});`)();
//        return eval(`${className}`);
    }
    */
    static async get(className){
        /*
//        console.log(import(`../tag/${className}.js`), import(`../id/${className}.js`));
//        let module = await import(`../tag/${className}.js`).then(module=>module).catch(err=>console.error(err));
//        let module = await import(`../tag/${className}.js`);
        let module = await import(`../tag/${className}.js`).then(module=>module.default()).catch(err=>{});
        console.log(`../tag/${className}.js`, module);
        if (module) { return module; }
//        module = await import(`../id/${className}.js`).then(module=>module).catch(err=>console.error(err));
//        module = await import(`../id/${className}.js`);
        module = await import(`../id/${className}.js`).then(module=>module.default()).catch(err=>{});
        console.log(`../id/${className}.js`, module);
        if (module) { return module; }
        */
        for (let path of [`../tag/${className}.js`, `../id/${className}.js`]) {
            const module = await Class.#get(path);
            console.log(module);
            if (module) { return module; }
        }
        console.log('あかん');
    }
    static async #get(path) {
//        return await import(path).then(module=>module.default).catch(err=>{});
        return await import(path).catch(err=>{return undefined}).then(module=>module.default);
    }
}
