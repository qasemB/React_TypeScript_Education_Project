export const getTaskCategoriesService = async ()=>{
    const respons = await fetch("http://localhost:3001/taskCategories")
    const res = await respons.json()
    return res
}