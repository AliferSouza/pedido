async function getInfo() {
    let url = 'data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error){
        console.log(error)
    }
}
export default getInfo;