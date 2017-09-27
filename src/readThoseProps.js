import propertiesReader from 'properties-reader';

export default path => {
    const properties = propertiesReader(path);
    return properties.get('wurst.senf');
};
