import { Route, Routes } from "react-router";
import Dashboard from "../../page/dashboard/Dashboard";
import Categories from "../../page/categories/Categories";
import Tasks from "../../page/tasks/Tasks";

const Content = () => {
    return (
        <section id="content" className="fixed top-0 left-0 w-full h-screen md:pr-app_sidebar_w pt-app_header_h bg-gray-200 dark:bg-gray-600 overflow-y-auto">
            <div className="w-full p-4">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="/tasks" element={<Tasks/>}/>
                </Routes>
            </div>
        </section>
    );
};

export default Content;