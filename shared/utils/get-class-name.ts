const getClassName = (obj: any) => {
    const { constructor } = Object.getPrototypeOf(obj);
    return constructor.toString();
}

export default getClassName;