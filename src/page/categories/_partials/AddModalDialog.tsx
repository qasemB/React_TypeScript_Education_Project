import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const AddModalDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-white bg-sky-500 rounded-lg px-3 py-1">
        افزودن
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>افزودن دسته بندی جدید</DialogTitle>
          <DialogDescription className="py-5">
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  عنوان
                </label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="فقط حروف فارسی"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  توضیحات
                </label>
                <input
                  type="text"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center w-full"
              >
                ثبت
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddModalDialog;
