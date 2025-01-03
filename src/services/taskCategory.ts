export const getTaskCategoriesService = async ()=>{
    const respons = await fetch("http://localhost:3001/taskCategories")
    if (respons.ok) {
        const res = await respons.json()
        return res
    }
    return null
}