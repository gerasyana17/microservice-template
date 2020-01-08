const getClassName = (obj: object): string => {
    const { constructor } = Object.getPrototypeOf(obj);
    return constructor.toString();
};

export default getClassName;
