import Class from '../common/Class.js';
export default class StorageFactory {
    static IDs = ['Once', 'Every'];
    static getIds() { return StorageFactory.IDs; }
    static async get(id='Once') {
        const module = await import(`./${id}Storage.js`);
        return new module.default();
    }
    static #getClass(id){ return Function(`return (${id}Storage)`)();}
}
