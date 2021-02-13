export default class StorageFactory {
    static IDs = ['Once', 'Every'];
    static getIds() { return StorageFactory.IDs; }
    static get(id='Once') {
        const cls = Class.get(`${id}Storage`);
        return new cls();
    }
    static #getClass(id){ return Function(`return (${id}Storage)`)();}
}
