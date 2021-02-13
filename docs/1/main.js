import RadioButtonTag from './js/radiobutton/RadioButtonTag.js';
import DomMapperSelect from './js/dommapper/DomMapperSelect.js';
import StorageFactory from './js/storage/StorageFactory.js';
window.addEventListener('load', async(event) => {
    RadioButtonTag.parse();

    const select = new DomMapperSelect();
    document.body.insertBefore(await select.create('./tsv/map.tsv'), document.body.children[0]);
    console.log(select.Mapper, select.Element);

    StorageFacotry.get(); 
//    StorageFacotry.get('Every'); 
});
